// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import sitemap from "@astrojs/sitemap";

console.log("MODE =", process.env.NODE_ENV);
console.log("ASTRO_BASE =", process.env.ASTRO_BASE);

const isStaging = process.env.NODE_ENV === "staging";

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
  site: isStaging ? "https://xs313918.xsrv.jp" : "https://nihon-etching.co.jp",

  base: isStaging ? "/ne-staging/" : "/",

  integrations: [sitemap()],

  build: {
    assets: "_astro",
  },

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
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          importers: [scssAliasImporter()],
        },
      },
    },
    build: {
      sourcemap: true,
    },
  },
  output: "static",
  trailingSlash: "always",
});
