// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

// SCSS alias 用 importer
function scssAliasImporter() {
  const aliases = {
    "@styles/": fileURLToPath(new URL("./src/styles/", import.meta.url)),
  };

  return {
    /** @param {string} url */
    findFileUrl(url) {
      for (const [prefix, dir] of Object.entries(aliases)) {
        if (url.startsWith(prefix)) {
          const rel = url.slice(prefix.length);
          const abs = path.join(dir, rel);
          return pathToFileURL(abs);
        }
      }
      return null;
    },
  };
}

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          importers: [scssAliasImporter()],
        },
      },
    },
  },
  output: "static",
  trailingSlash: "always",
});
