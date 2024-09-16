import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};

const alias = [
  // {
  //   find: "@",
  //   replacement: pathResolve("src")
  // },
  {
    find: "@",
    replacement: pathResolve("src")
  },
  {
    find: "@components",
    replacement: pathResolve("src/components")
  },
  {
    find: "@hooks",
    replacement: pathResolve("src/hooks")
  },
  {
    find: "@i18next",
    replacement: pathResolve("src/i18next")
  },
  {
    find: "@pages",
    replacement: pathResolve("src/pages")
  },
  {
    find: "@templates",
    replacement: pathResolve("src/templates")
  },
  {
    find: "@redux",
    replacement: pathResolve("src/redux")
  },
  {
    find: "@routes",
    replacement: pathResolve("src/routes")
  },
  {
    find: "@store",
    replacement: pathResolve("src/store")
  },
  {
    find: "@themes",
    replacement: pathResolve("src/themes")
  },
  {
    find: "@utils",
    replacement: pathResolve("src/utils")
  },
  {
    find: "@layouts",
    replacement: pathResolve("src/layouts")
  },
  
];

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development|staging)'
  // eslint-disable-next-line no-undef
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    server: {
      port: 3030,
      watch: {
        usePolling: true
      }
    },
    preview: {
      cors: false,
      port: 3030
    },
    base: "./",
    root: process.cwd(),
    build: {
      outDir: "dist",
      assetsDir: "assets",
      emptyOutDir: true,
      sourcemap: false,
      chunkSizeWarningLimit: 4000,
      commonjsOptions: { transformMixedEsModules: true },
      rollupOptions: {
        input: {
          index: pathResolve("index.html")
        },
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    esbuild: {
      loader: "jsx"
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          ".js": "jsx"
        }
      }
    },
    resolve: {
      alias,
      extensions: [".js", ".mjs", ".ts", ".jsx", ".tsx", ".json"]
    }
  });
};
