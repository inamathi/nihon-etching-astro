/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly ASTRO_SITE?: string;
  readonly ASTRO_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
interface Window {
  __sectionHeadingIOInitialized?: boolean;
  __headerAutoHideInitialized?: boolean;
}
