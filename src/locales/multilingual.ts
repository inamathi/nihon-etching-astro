// src/locales/multilingual.ts

export const languages = ["ja", "en", "zh"] as const;
export type Lang = (typeof languages)[number];

/**
 * 翻訳辞書
 * 同じキーに ja / en を並べて管理する
 */
const messages = {
  common: {
    corpName: {
      ja: "日本エッチング株式会社",
      en: "Nihon Etching Co.,Ltd.",
    },
    address: {
      ja: "〒144-0044 東京都大田区本羽田 2-8-19",
      en: "2-8-19 Honhaneda, Ota-ku, Tokyo 144-0044, Japan",
    },
    phone: {
      ja: "Phone: 03-3744-5502／Fax: 03-3745-1898",
      en: "Phone: 03-3744-5502／Fax: 03-3745-1898",
    },
    labels: {
      location: {
        ja: "所在地",
        en: "Location",
      },
      companyName: {
        ja: "社名",
        en: "Company Name",
      },
      address: {
        ja: "住所",
        en: "Address",
      },
      phone: {
        ja: "電話",
        en: "Phone",
      },
      fax: {
        ja: "FAX",
        en: "Fax",
      },
      mobile: {
        ja: "携帯",
        en: "Mobile",
      },
      established: {
        ja: "設立",
        en: "Established",
      },
      employees: {
        ja: "従業員数",
        en: "Employees",
      },
      map: {
        ja: "地図",
        en: "Map",
      },
      contact: {
        ja: "連絡先",
        en: "Contact",
      },
      url: {
        ja: "URL",
        en: "Website",
      },
      facilities: {
        ja: "主要設備",
        en: "Facilities",
      },
    },
    groupName: {
      ne: {
        ja: "NEグループ",
        en: "NE Group",
      },
      neJapan: {
        ja: "国内（直営）",
        en: "Domestic Factory (Direct Operation)",
      },
      neAsia: {
        ja: "アジア諸国",
        en: "Overseas Network - Asia -",
      },
      neEastAsia: {
        ja: "中国・台湾",
        en: "Overseas Network - China/Taiwan -",
      },
      nwn: { ja: "NWNグループ", en: "NWN Group" },
      nwnJapan: {
        ja: "国内ネットワーク",
        en: "Domestic Network - CERTIFIED -",
      },
      nwnOverseas: {
        ja: "インド・タイ・北米",
        en: "Overseas Network - India/Thailand/North America -",
      },
      nwnEastAsia: {
        ja: "中国・韓国",
        en: "Overseas Network - East Asia -",
      },
      sec: { ja: "SECグループ", en: "SEC Group" },
      secEurope: {
        ja: "ヨーロッパ",
        en: "Overseas Network - Europe -",
      },
      secNorthAmerica: {
        ja: "北米",
        en: "Overseas Network - North America -",
      },
      secSouthAmerica: {
        ja: "南米",
        en: "Overseas Network - South America -",
      },
    },
    ui: {
      collapse: { ja: "閉じる", en: "Collapse" },
      expand: { ja: "開 く", en: "Expand" },
      details: { ja: "詳 細", en: "Details" },
    },
  },
  nav: {
    top: {
      ja: "トップ",
      en: "Top",
      zh: "Top",
    },
    company: {
      ja: "会社情報",
      en: "Company",
      zh: "Company",
    },
    company_overview_access: {
      ja: "会社概要／アクセス",
      en: "Overview / Access",
      zh: "Overview / Access",
    },
    company_philosophy_environment: {
      ja: "経営理念／環境理念",
      en: "Philosophy / Environmental Policy",
      zh: "Philosophy / Environmental Policy",
    },
    company_history: {
      ja: "沿革",
      en: "History",
      zh: "History",
    },
    technology: {
      ja: "技術情報",
      en: "Technology",
      zh: "Technology",
    },
    tech_5axis: {
      ja: "5軸レーザー彫刻",
      en: "5-Axis Laser Engraving",
      zh: "5-Axis Laser Engraving",
    },
    tech_shibo: {
      ja: "シボ加工",
      en: "Texture (Shibo)",
      zh: "Texture (Shibo)",
    },
    tech_peening: {
      ja: "ピーニング加工",
      en: "Peening",
      zh: "Peening",
    },
    group: {
      ja: "グループ",
      en: "Group",
      zh: "Group",
    },
    group_ne: {
      ja: "NEグループ（直営）",
      en: "NE Group (Direct)",
      zh: "NE Group (Direct)",
    },
    group_nwn: {
      ja: "NWNグループ",
      en: "NWN Group",
      zh: "NWN Group",
    },
    group_sec: {
      ja: "SECグループ",
      en: "SEC Group",
      zh: "SEC Group",
    },
    recruit: {
      ja: "採用情報",
      en: "Careers",
      zh: "Careers",
    },
    contact: {
      ja: "お問い合わせ",
      en: "Contact",
      zh: "Contact",
    },
    download: {
      ja: "ダウンロード",
      en: "Download",
      zh: "Download",
    },
  },
  /* top about */
  topAbout: {
    title: { ja: "COMPANY", en: "COMPANY" },
    subtitle: {
      ja: "株式会社日本エッチングについて",
      en: "About Nihon Etching Co., Ltd.",
    },

    p1: {
      ja: "株式会社日本エッチングは昭和46年の創業以来、プラスティックや金属をはじめとするあらゆる素材に「シボ加工」を施す専門企業として、国内外で高い評価を得続けています。",
      en: "Since 1971, Nihon Etching has specialized in surface texturing for a wide range of materials—including plastics and metals—earning trust and recognition in Japan and abroad.",
    },
    p2: {
      ja: "素材の表面にさまざまな模様を刻み込むシボ加工により、プラスティック、金属、ガラス、石といった素材が持っている表情を引き出し、その付加価値を高めます。",
      en: "Through precision texturing, we reveal the inherent character of materials—plastics, metals, glass, and stone—and enhance their perceived value.",
    },
    p3: {
      ja: "多くのメーカーにとって、シボ加工は金型製作の最終工程に過ぎず、単なる「表面処理」と見なされがちです。日本エッチングはこれに異議を唱え、シボ加工が製品の「顔」を決定づける重要なデザイン要素であるという価値観を提案します。",
      en: "Texturing is often treated as a final step—just a surface finish. We believe it is a core design element that defines a product’s identity, and we advocate that value to our partners.",
    },

    sectionTitle: {
      ja: "デザイン性と機能性の融合を提案",
      en: "Design + Function, Together",
    },

    cards: {
      c1: {
        ja: "デザイナーの意図を汲み取った最適なシボパターンを提案いたします。",
        en: "We propose optimal textures aligned with the designer’s intent.",
      },
      c2: {
        ja: "滑り止め、反射防止、拡散、汚れの目立ちにくさ、ウェルドや引けを隠すなど、機能的側面を深く理解し最適なシボを提案します。",
        en: "We design textures for function—grip, anti-glare, diffusion, stain resistance, and hiding weld lines or sink marks.",
      },
      c3: {
        ja: "日本エッチングはデータとテクノロジーを駆使し、未来を創造するイノベーターへと進化します。",
        en: "We evolve as innovators—leveraging data and technology to shape the future.",
      },
      c4: {
        ja: "自社の技術力や価値観を積極的に発信し、業界全体をリードしていきます。",
        en: "We proactively share our capabilities and values to lead the industry forward.",
      },
      c5: {
        ja: "シボを通じて製品に新たな価値を与える存在として、お客様に訴えます。",
        en: "We deliver new value through texture—so your products stand out.",
      },
    },

    tagline: { ja: "『限界突破』", en: "BEYOND LIMITS" },
  },
  /* domestic link */
  domesticLink: {
    company: {
      label: { ja: "会社情報", en: "Company" },
      href: "/company/",
    },
    technology: {
      label: { ja: "技術情報", en: "Technology" },
      href: "/technology/",
    },
    group: {
      label: { ja: "グループ", en: "Group" },
      href: "/group/",
    },
    recruit: {
      label: { ja: "採用情報", en: "Careers" },
      href: "/recruit/",
    },
    contact: {
      label: { ja: "お問い合わせ", en: "Contact" },
      href: "/contact/",
    },
    download: {
      label: {
        ja: "シボ加工予約シートダウンロード",
        en: "Download Embossing Reservation Sheet",
      },
      href: "/download/",
    },
  },

  /* top Gallery */
  topGallery: {
    technology: {
      title: { ja: "TECHNOLOGY", en: "TECHNOLOGY" },
      subtitle: { ja: "日本エッチングの技術", en: "Nihon Etching TECHNOLOGY" },
      items: {
        t01: {
          alt: { ja: "ホーニング no.12", en: "Honing no.12" },
          title: {
            ja: "ホーニング no.12",
            en: "Honing no.12",
          },
          desc: {
            ja: "シボ加工はあなたの身の回りの様々なプラスチック製品に施されています",
            en: "Textured finishes are found on countless plastic products all around us.",
          },
        },
        t02: {
          alt: { ja: "生活表現", en: "Expressions of Everyday Living" },
          title: { ja: "生活表現", en: "Expressions of Everyday Living" },
          desc: {
            ja: "あらゆる表面形状を再現するために、日本エッチングの表面処理技術が世界中で生かされています",
            en: "Nihon Etching’s surface treatment technologies are used worldwide to reproduce diverse surface textures.",
          },
        },
      },
    },
    products: {
      title: { ja: "PRODUCTS", en: "PRODUCTS" },
      subtitle: {
        ja: "こんなところで活躍しています",
        en: "At Work in Living Spaces",
      },
      items: {
        p01: {
          alt: { ja: "Product 01", en: "Product 01" },
          caption: { ja: "製品の説明01", en: "Product caption 01" },
        },
        p02: {
          alt: { ja: "Product 02", en: "Product 02" },
          caption: { ja: "製品の説明02", en: "Product caption 02" },
        },
      },
    },
  },

  /* Information */
  information: {
    title: { ja: "Information", en: "Information" },
    subtitle: {
      ja: "お知らせ",
      en: "Related News",
    },
    // itemは専用export内で指定。項目を配列化するため
  },
  /*================================================
  /*================================================
  Company */
  company: {
    overview_access: {
      eyebrow: { ja: "Company", en: "Company" },
      lead: {
        ja: "日本エッチングの企業情報と、本社へのアクセス方法をご紹介します",
        en: "An overview of Nihon Etching and access information for our headquarters.",
      },
      title: { ja: "会社概要／アクセス", en: "Company Profile & Access" },
      breadcrumb: { ja: "会社概要／アクセス", en: "Company Profile & Access" },
      section_overview: {
        title: {
          ja: "会社概要",
          en: "Company Profile",
        },
        items: {
          name: {
            label: { ja: "名　称", en: "Company Name" },
            value: {
              ja: "株式会社 日本エッチング",
              en: "Nihon Etching Co., Ltd.",
            },
          },
          address: {
            label: { ja: "本社所在地", en: "Head Office" },
            value: {
              ja: "〒144-0044 東京都大田区本羽田2丁目8番地19号",
              en: "2-8-19 Honhaneda, Ota-ku, Tokyo 144-0044, Japan",
            },
          },
          founded: {
            label: { ja: "創　立", en: "Founded" },
            value: {
              ja: "昭和46年6月10日",
              en: "June 10, 1971",
            },
          },
          established: {
            label: { ja: "設　立", en: "Established" },
            value: {
              ja: "昭和56年9月25日",
              en: "September 25, 1981",
            },
          },
          capital: {
            label: { ja: "資本金", en: "Capital" },
            value: {
              ja: "10,000,000円",
              en: "JPY 10,000,000",
            },
          },
          employees: {
            label: { ja: "従業員", en: "Employees" },
            value: {
              ja: "70名（国内）／350名（海外）",
              en: "70 (Japan) / 350 (Overseas)",
            },
          },
          officers: {
            label: { ja: "役　員", en: "Officers" },
            value: {
              ja: "代表取締役　大山 照明\n副社長　大山 義明",
              en: "President & CEO: Teruaki Oyama\nVice President: Yoshiaki Oyama",
            },
          },
          banks: {
            label: { ja: "取引銀行", en: "Main Banks" },
            value: {
              ja: "みずほ銀行 蒲田支店\n三菱UFJ銀行 蒲田支店",
              en: "Mizuho Bank, Kamata Branch\nMUFG Bank, Kamata Branch",
            },
          },
        },
      },
      section_access: {
        title: { ja: "アクセス", en: "Access" },
        // 表示用のカード/ブロック群
        locations: {
          hq1: {
            name: {
              ja: "株式会社 日本エッチング（本社・第１工場）",
              en: "Nihon Etching Co., Ltd. Head Office & 1st Factory",
            },
            address: {
              label: { ja: "住　所", en: "Address" },
              ja: "〒144-0044 東京都大田区本羽田 2-8-19",
              en: "2-8-19 Honhaneda, Oota-ku, Tokyo 144-0044 Japan",
            },
            phone: {
              label: { ja: "電　話", en: "Phone" },
              ja: "+81(0)-3744-5502",
              en: "+81(0)-3744-5502",
            },
            map: {
              lat: 35.548564,
              lng: 139.728269,
              zoom: 16,
              aria: {
                ja: "日本エッチング 本社・第１工場の地図",
                en: "Map: Nihon Etching Head Office & 1st Factory",
              },
            },
            notes: {
              car: {
                label: { ja: "お車でお越しのお客様", en: "By Car" },
                text: {
                  ja: "首都高速1号羽田線「羽田」出口より約20分。環八通りから国道131号、都道6号線（産業道路）",
                  en: 'Approx. 20 minutes from the "Haneda" exit on the Metropolitan Expressway Route 1 (Haneda Line). Access via Kanpachi-dori, National Route 131, and Tokyo Metropolitan Route 6 (Sangyo Road).',
                },
              },
              train: {
                label: { ja: "電車でお越しのお客様", en: "By Train" },
                text: {
                  ja: "京急空港線「糀谷」駅下車、徒歩約10分",
                  en: 'About a 10-minute walk from "Kojiya" Station on the Keikyu Airport Line.',
                },
              },
              taxi: {
                label: { ja: "お急ぎのお客様", en: "If You Are in a Hurry" },
                text: {
                  ja: "「蒲田（JR/東急）」駅、または「京急蒲田（京急）」駅よりタクシーをご利用ください",
                  en: 'Please take a taxi from "Kamata" Station (JR/Tokyu) or "Keikyu Kamata" Station (Keikyu).',
                },
              },
            },
          },

          tokyo2: {
            name: {
              ja: "株式会社 日本エッチング（第２工場）",
              en: "Tokyo 2nd Factory",
            },
            address: {
              label: { ja: "住　所", en: "Address" },
              ja: "〒144-0044 東京都大田区本羽田 2-11-11",
              en: "2-11-11 Honhaneda, Oota-ku, Tokyo 144-0044 Japan",
            },
            map: {
              lat: 35.5479,
              lng: 139.72861,
              zoom: 16,
              aria: {
                ja: "日本エッチング 本社・第２工場の地図",
                en: "Map: Nihon Etching Head Office & 2nd Factory",
              },
            },
          },

          tokyo3: {
            name: {
              ja: "株式会社 日本エッチング（第３工場）",
              en: "Tokyo 3rd Factory",
            },
            address: {
              label: { ja: "住　所", en: "Address" },
              ja: "〒144-0044 東京都大田区本羽田 2-2-10",
              en: "2-2-10 Honhaneda, Oota-ku, Tokyo 144-0044 Japan",
            },
            map: {
              lat: 35.54798,
              lng: 139.724531,
              zoom: 16,
              aria: {
                ja: "日本エッチング 第3工場の地図",
                en: "Map: Nihon Etching Tokyo 3rd Factory",
              },
            },
          },
        },
      },
    },
  },
  /*================================================
  /*================================================
  Technology */
  technology: {
    shibo: {
      page: {
        title: { ja: "シボ加工", en: "Shibo" },
        lead: {
          ja: "日本エッチングの高いテクスチャリング技術が、素材の表情を引き出し、機能性を向上させます",
          en: "Nihon Etching’s advanced texturing technology brings out the character of materials while enhancing their functionality.",
        },
      },
      intro: {
        ja: "金属（金型・平板・ロール）・プラスチック・ガラス・石など、あらゆる物が持っている素材の表情を引き出し、 高級感や付加価値を高めるために表面処理を施すことをシボ加工といいます。当社がシボ加工を施した素材は、パソコンやプリンターといったOA機器から、 自動車の内装パネル、携帯電話や家庭用ゲーム機等さまざまな製品に使用されています。化学薬品の作用によって金属物の表面を浸食除去する「エッチング」をはじめとするシボ加工。 素材の表面に梨地や砂目、岩目といった均一なパターンを刻むことにより、 製品の寿命を長く保ち、外観の美しさや高級感を演出します。",
        en: "Texturing refers to the surface treatment applied to bring out the inherent character of materials—such as metals (moulds, plates, rolls), plastics, glass, and stone—enhancing their premium feel and added value. Materials textured by our company are used in a wide range of products, from office automation equipment like PCs and printers to automotive interior panels, mobile phones, and home video game consoles. Texturing processes, including “etching” which removes metal surfaces through chemical action, create uniform patterns like satin, sand, or rock textures on material surfaces. This extends product longevity while enhancing aesthetic appeal and premium feel.",
      },
      photoEtching: {
        title: { ja: "フォトエッチング", en: "Photo Etching" },
        desc: {
          ja: "金属物質に化学薬品の作用によって腐食させ、様々な模様を刻み込む方法です。",
          en: "This method involves etching various patterns into metal substances by subjecting them to the action of chemical agents.",
        },
        gallery: {
          cap01: { ja: "幾何学模様-1", en: "Geometric Pattern 1" },
          cap02: { ja: "幾何学模様-2", en: "Geometric Pattern 2" },
          cap03: { ja: "幾何学模様-3", en: "Geometric Pattern 3" },
          cap04: { ja: "木目", en: "Wood Pattern" },
          cap05: { ja: "ヘアライン", en: "Hairline" },
          cap06: { ja: "クロスヘアライン", en: "Cross Hairline" },
        },
      },
      kawashibo: {
        title: { ja: "皮シボ", en: '"KAWASHIBO" Leather Pattern' },
        desc: {
          ja: "主に自動車の内装パネルなどに使われます。プラスティックに高級感を与え、引っ掻きキズなどをつきにくくします。",
          en: "It is mainly used for automotive interior panels, enhancing the premium appearance of plastic surfaces while making them more resistant to scratches and wear.",
        },
        gallery: {
          cap01: { ja: "皮シボ-1", en: "Leather Pattern 1" },
          cap02: { ja: "皮シボ-2", en: "Leather Pattern 2" },
          cap03: { ja: "皮シボ（岩目）", en: "Leather Pattern (Rock Texture)" },
        },
      },
      nashiji: {
        title: { ja: "梨地", en: "Grain Texture" },
        desc: {
          ja: "主に家電製品や音響機器など、私達の身の回りに数多く見ることができます。中程度の均一なパターンが得られ、サンドブラストの倍近い耐久性を持たせることが可能です。",
          en: "It is commonly found in a wide range of everyday products such as home appliances and audio equipment. This process produces a uniform, medium-grain pattern and can achieve nearly twice the durability of sandblasting.",
        },
        gallery: {
          cap01: { ja: "梨地（細目）", en: "Fine-grain texture" },
          cap02: { ja: "梨地（標準）", en: "Standard-grain texture" },
          cap03: { ja: "梨地（粗目）", en: "Coarse-grain texture" },
        },
      },
      honing: {
        title: { ja: "サンドブラスト", en: "Sand Blast" },
        desc: {
          ja: "対象物（金型等）の表面に砂やガラスビーズなどを吹きつけ、細かな模様をつけるサンドブラスト（ホーニング）処理です。",
          en: "Sandblasting (honing) is a surface treatment process in which sand or glass beads are blasted onto the surface of the target material, such as molds, to create fine and uniform textures.",
        },
        gallery: {
          cap01: { ja: "ホーニング no.4（細目）", en: "Honing no.4 (Fine)" },
          cap02: {
            ja: "ホーニング no.7（標準）",
            en: "Honing no.7 (Standard)",
          },
          cap03: {
            ja: "ホーニング no.12（粗目）",
            en: "Honing no.12 (Coarse)",
          },
        },
        additional: {
          ja: "Ｓはセミグロス（半光沢）Ｇはグロス（光沢）を表します ",
          en: "S indicates semi-gloss, G indicates gloss. ",
        },
      },
      graphic: {
        title: { ja: "グラフィックパターン", en: "Graphic Pattern" },
        desc: {
          ja: "弊社のシボ加工技術により、精密なパターンやグラフィックを表現することが可能です。",
          en: "Our texture processing technology enables the precise reproduction of detailed patterns and graphic designs.",
        },
        gallery: {
          cap01: {
            ja: "グラフィックパターン-1",
            en: "Graphic Pattern 1",
          },
          cap02: {
            ja: "グラフィックパターン-2",
            en: "Graphic Pattern 2",
          },
          cap03: {
            ja: "グラフィックパターン-3",
            en: "Graphic Pattern 3",
          },
          cap04: {
            ja: "グラフィックパターン-4",
            en: "Graphic Pattern 4",
          },
          cap05: {
            ja: "グラフィックパターン-5",
            en: "Graphic Pattern 5",
          },
          cap06: {
            ja: "グラフィックパターン-6",
            en: "Graphic Pattern 6",
          },
        },
        additional: {
          ja: "Ｓはセミグロス（半光沢）Ｇはグロス（光沢）を表します ",
          en: "S indicates semi-gloss, G indicates gloss. ",
        },
      },
    },
  },
  /*================================================
  /*================================================
  Group */
  group: {
    listpage: {
      title: { ja: "グループリスト", en: "Group list" },
      lead: {
        ja: "世界中に日本の技術を伝えるべく、海外進出や現地の工場との提携を精力的に進めています",
        en: "We are actively expanding overseas and partnering with local factories to bring Japanese technology to the world.",
      },
      section: {
        title: { ja: "グローバルネットワーク", en: "Global Network" },
        intro: {
          ja: [
            "世界中に拡がる日本の技術をカバーするべく、当社も工場の海外進出、現地既存会社との提携などを精力的に行っています。",
            "2004年10月 ニューテックス（大阪）、ワールドエッチング（名古屋）、日本エッチング（東京）の３社の出資により、香港にNEW WORLD NIHON ETCHINGを設立。ＮＷＮグループの確立によって、より強力な開発力と国内のみならずアジア全域をカバーするグローバルな技術の提携が可能となりました。",
            "また、ヨーロッパ・アメリカ・オセアニアをカバーするＳＥＣグループとの結びつきにより、文字通り全世界に技術の拠点をおいています。",
          ],
          en: [
            "To support the worldwide reach of Japanese technology, we actively expand overseas operations and form partnerships with local companies.",
            "In October 2004, NEW WORLD NIHON ETCHING was established in Hong Kong through a joint investment by Newtex (Osaka), World Etching (Nagoya), and Nihon Etching (Tokyo). The formation of the NWN Group strengthened our development capabilities and enabled global technical collaboration across Asia.",
            "In addition, our partnership with the SEC Group, covering Europe, North America, and Oceania, has allowed us to establish technical bases around the world.",
          ],
        },
      },
    },
    entities: [
      {
        id: "nihon-etching-tokyo-hq",
        groupKey: "ne",
        regionKey: "japan",
        slug: "tokyo-hq",

        companyName: {
          ja: "株式会社 日本エッチング（本社・第１工場）",
          en: "Nihon Etching Co., Ltd. Head Office & 1st Factory",
        },
        address: {
          ja: "〒144-0044 東京都大田区本羽田2-8-19",
          en: "2-8-19 Honhaneda, Ota-ku, Tokyo 144-0044, Japan",
        },
        phone: { ja: "03-3744-5502", en: "+81-3-3744-5502" },
        fax: { ja: "03-3745-1898", en: "+81-3-3745-1898" },
        mobile: "xxx",
        established: "1971",
        employees: "70",
        map: {
          lat: 35.5485341,
          lng: 139.728259,
          placeId: "…", // あれば
        },
        contact: "Yoshiaki Oyama",
        url: "http://www.nihon-etching.co.jp",
        facilities: [
          {
            ja: "最大吊下重量 7.5 t",
            en: "Main Hoist 7.5 t",
          },
        ],
      },
    ],
  },
  /* Footer */
  footer: {
    top: {
      title: { ja: "トップ", en: "Top" },
    },
    company: {
      title: { ja: "会社情報", en: "Company" },
      overview: { ja: "会社概要・アクセス", en: "Overview & Access" },
      philosophy: { ja: "理念・環境", en: "Philosophy & Environment" },
      history: { ja: "沿革", en: "History" },
    },

    technology: {
      title: { ja: "技術情報", en: "Technology" },
      axis5: { ja: "5軸レーザー", en: "5-Axis Laser" },
      shibo: { ja: "シボ加工", en: "Texturing" },
      peening: { ja: "ピーニング", en: "Peening" },
    },

    group: {
      title: { ja: "グループ", en: "Group" },
      ne: { ja: "NEグループ（直営工場）", en: "NE（Company-Owned Factory）" },
      ne01: { ja: "日本国内", en: "Japan" },
      ne02: { ja: "アジア諸国", en: "Asian Countries" },
      ne03: { ja: "中国・台湾", en: "China & Taiwan" },
      nwn: { ja: "NWNグループ", en: "NWN" },
      nwn01: { ja: "日本国内", en: "Japan" },
      nwn02: {
        ja: "インド・タイ・北米",
        en: "India, Thailand & North America",
      },
      nwn03: { ja: "中国・韓国", en: "China & Korea" },
      sec: { ja: "SECグループ", en: "SEC" },
      sec01: { ja: "ヨーロッパ", en: "Europe" },
      sec02: { ja: "アメリカ", en: "United States" },
      sec03: { ja: "ブラジル", en: "Brazil" },
    },

    service: {
      privacy: { ja: "プライバシーポリシー", en: "Privacy Policy" },
      recruit: { ja: "採用情報", en: "Careers" },
      contact: { ja: "お問い合わせ", en: "Contact" },
      download: { ja: "ダウンロード", en: "Downloads" },
    },

    copyright: {
      ja: "© Nihon Etching Co.,Ltd.",
      en: "© Nihon Etching Co.,Ltd.",
    },
  },
} as const;

/**
 * 翻訳取得関数
 */
/**
 * 翻訳取得関数（末端が { ja, en } 形式の messages を前提）
 */
export function t(lang: Lang, key: string): string {
  if (typeof key !== "string" || key.length === 0) return "";

  const parts = key.split(".");
  let cur: any = messages; // ここが重要：messages[lang] ではない

  for (const p of parts) {
    cur = cur?.[p];
    if (cur == null) return key;
  }

  // 末端が string のケースも許容（必要なら）
  if (typeof cur === "string") return cur;

  // 末端が { ja, en } のケース
  if (typeof cur === "object") {
    return cur[lang] ?? cur.en ?? cur.ja ?? key;
  }

  return key;
}

export function toLang(value: string | undefined): Lang {
  return (languages as readonly string[]).includes(value ?? "")
    ? (value as Lang)
    : "ja";
}

/* hrefなど文字列を返すgetter */
export function g(lang: Lang, key: string): string {
  // messages のルート名はあなたの実装に合わせてください（例: dict / messages など）
  const parts = key.split(".");
  let cur: any = messages; // ← 既存 t() が messages[lang] を起点にしているならこの形が最適

  for (const p of parts) {
    cur = cur?.[p];
    if (cur == null) return key;
  }

  // leaf が string（href 等）
  if (typeof cur === "string") return cur;

  // leaf が {ja,en}（＝従来の翻訳形式）なら、既存 t() を使う
  // ※ ここで再走査せずに済ませたいので、t() が使えるなら t() に寄せるのが安全
  return t(lang, key);
}

/* 構造を返すgetter */
export function getMessage<T = unknown>(key: string): T {
  const parts = key.split(".");
  let cur: any = messages;

  for (const p of parts) {
    cur = cur?.[p];
    if (cur == null) return undefined as T;
  }

  return cur as T;
}

/* ==================================================================================== */
// Information専用 export
// Information用
export type InformationItem = {
  ym: string; // "YYYY.MM"
  text: {
    ja: string;
    en: string;
  };
};

// 配列は t() で引きにくいので、専用で持つ（＝事故らない）
const INFORMATION_ITEMS: InformationItem[] = [
  {
    ym: "2025.11",
    text: {
      ja: "韓国のTEXONE社がSECグループに加盟",
      en: "Korean company TEXONE has joined the SEC Group.",
    },
  },
  {
    ym: "2025.01",
    text: {
      ja: "イタリアのML ENGRAVINGがSECグループに加盟",
      en: "Italian company ML ENGRAVING has joined the SEC Group.",
    },
  },
  {
    ym: "2024.11",
    text: {
      ja: "中国・NINGBO JINGCHAO MOULD ETCHING CO.,LTD（宁波精超模具蚀刻有限公司）と業務提携パートナーシップを結びました",
      en: "We have entered into a strategic business partnership with NINGBO JINGCHAO MOULD ETCHING CO., LTD. (China).",
    },
  },
  {
    ym: "2017.03",
    text: {
      ja: "中国・深せん工場を東莞へ移転",
      en: "The Shenzhen factory in China has been relocated to Dongguan.",
    },
  },
  {
    ym: "2016.06",
    text: {
      ja: "フィリピン工場操業開始",
      en: "The Philippines factory has commenced operations.",
    },
  },
  {
    ym: "2012.03",
    text: {
      ja: "本社工場に5軸レーザー彫刻機を導入",
      en: "A 5-axis laser engraving machine has been installed at our headquarters factory.",
    },
  },
  // ...上位から１０件
];

export function getInformationItems(limit = 10): InformationItem[] {
  return INFORMATION_ITEMS.slice(0, limit);
}

export function path(lang: Lang, key: string): string {
  return `/${lang}${g(lang, key)}`;
}

/* イントロ文用。段落を配列で展開するために作成 */
// export function getArray<T = string>(lang: Lang, key: string): T[] {
//   const parts = key.split(".");
//   let cur: any = messages;

//   for (const p of parts) {
//     cur = cur?.[p];
//     if (cur == null) return [];
//   }

//   const leaf = cur?.[lang];
//   return Array.isArray(leaf) ? (leaf as T[]) : [];
// }
export function getArray<T = string>(lang: Lang, key: string): T[] {
  const parts = key.split(".");
  let cur: any = messages;

  for (const p of parts) {
    cur = cur?.[p];
    if (cur == null) return [];
  }

  const leaf = cur?.[lang] ?? cur?.ja; // ← fallback 推奨
  return Array.isArray(leaf) ? (leaf as T[]) : [];
}

/* グループリスト用 */
export function getList<T = unknown>(key: string): T[] {
  const parts = key.split(".");
  let cur: any = messages;

  for (const p of parts) {
    cur = cur?.[p];
    if (cur == null) return [];
  }

  return Array.isArray(cur) ? (cur as T[]) : [];
}
