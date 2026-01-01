import type { Lang } from "@/locales/multilingual";

export const heroText: Record<Lang, Record<string, string>> = {
  ja: {
    "hero.s1": "ETCHING BEYOND LIMITS",
    "hero.s2": "限界突破",
    "hero.s3": "質感向上＋機能性",
    "hero.s4": "CMF+Fで<br>未来をデザインする",
    "hero.s5": "触れるデザイン<br>感じるテクスチャ",
    "hero.s6": "世界にひとつの質感を<br>あなたの製品に",
    "hero.s7": "「生活表現」",
  },
  en: {
    "hero.s1": "ETCHING BEYOND LIMITS",
    "hero.s2": "Break Beyond Limits",
    "hero.s3": "Texture + Function",
    "hero.s4": "Designed with<br>CMF+F",
    "hero.s5": "Touch the design<br>Feel the texture",
    "hero.s6": "A unique texture<br>for your product",
    "hero.s7": "Expressions of Everyday Living",
  },
};

export function tHero(lang: Lang, key: string): string {
  return heroText[lang]?.[key] ?? heroText.en?.[key] ?? key;
}
