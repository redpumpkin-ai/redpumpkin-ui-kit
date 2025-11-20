import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
      exclude: [resolve(__dirname, "vite.config.ts")],
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  build: {
    // 💡 This is the key that enables Library Mode
    lib: {
      // The entry point for your library. This should export all components.
      entry: resolve(__dirname, "lib/main.ts"),
      name: "RedpumpkinUIKit",
      // We recommend 'es' (ES Module) and 'umd' (Universal Module Definition)
      formats: ["es", "umd"],
      // The name of the output file (e.g., 'your-ui-kit.es.js', 'your-ui-kit.umd.js')
      fileName: (format) => `redpumpkin-ui-kit.${format}.js`,
    },
    // Make sure to externalize React and any dependencies you don't want bundled
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", /^@radix-ui\//],
      output: {
        // Provide global variables for externalized modules in UMD build
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
