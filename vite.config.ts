import { defineConfig, UserConfig } from 'vite';
import type { InlineConfig, CoverageReporter } from 'vitest';
import isCi from 'is-ci';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

type ViteConfig = UserConfig & { test: InlineConfig };
const testReporters = ['default'];
const coverageReporters: CoverageReporter[] = ['text'];
if (!isCi) {
  // testReporters.push('cobertura');
  coverageReporters.push('html');
} else {
  testReporters.push('junit');
  coverageReporters.push('cobertura');
}

const vitestConfig: ViteConfig = {
  plugins: [tsconfigPaths(), react()],
  server: {
    port: 3020,
    host: '0.0.0.0',
    https: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    isolate: true,
    cache: {
      dir: '.cache/.vitest',
    },
    deps: {
      fallbackCJS: true,
    },
    dir: 'src',
    reporters: testReporters,
    coverage: {
      // excludeNodeModules: true,
      provider: 'c8',
      src: ['src/tests'],
      include: ['**/*.ts', '**/*.tsx'],
      exclude: [
        '**/__mocks__/**.*',
        '**/*.d.ts',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.mdx',
        '**/*.stories.tsx',
        'testUtils/**.*',
      ],
      all: true,
      reportsDirectory: './reports/coverage/unit',
      reporter: coverageReporters,
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

if (process.env.DEV_CI || process.env.DEV_CI === '1') {
  vitestConfig.server.https = false;
  vitestConfig.plugins.pop();
  vitestConfig.test.watch = false;
}

// https://vitejs.dev/config/
export default defineConfig(vitestConfig);
