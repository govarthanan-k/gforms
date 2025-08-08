import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

export default defineConfig({
  plugins: [
    storybookTest({
      configDir: "libs/form-widgets/.storybook",
    }),
  ],
  test: {
    coverage: {
      reporter: ["text", "html"],
      include: ["libs/form-widgets/src/lib/**/*.{ts,tsx}"],
      exclude: ["**/*.d.ts", "**/*.stories.*", "**/__tests__/**", "**/index.ts", "**/index.js", "dist/**", ".storybook/**"],
      reportsDirectory: "libs/form-widgets/coverage",
    },
    browser: {
      enabled: true,
      headless: true,
      provider: "playwright",
      instances: [
        {
          browser: "chromium",
        },
      ],
    },
    setupFiles: ["libs/form-widgets/.storybook/vitest.setup.ts"],
  },
  optimizeDeps: {
    include: ["markdown-to-jsx", "react/jsx-dev-runtime"],
  },
});
