import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    postcss: () => {
      return {
        postcssOptions: {
          plugins: ["@tailwindcss/postcss"]
        }
      }
    }
  }
});
