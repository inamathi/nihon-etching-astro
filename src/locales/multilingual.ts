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
      ja: "株式会社 日本エッチング",
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
      neJapanShort: {
        ja: "国内",
        en: "Domestic",
      },
      neAsia: {
        ja: "アジア諸国",
        en: "Overseas Network - Asia -",
      },
      neAsiaShort: {
        ja: "アジア諸国",
        en: "Asia",
      },
      neEastAsia: {
        ja: "中国・台湾",
        en: "Overseas Network - China/Taiwan -",
      },
      neEastAsiaShort: {
        ja: "中国・台湾",
        en: "China/Taiwan",
      },
      nwn: { ja: "NWNグループ", en: "NWN Group" },
      nwnJapan: {
        ja: "国内ネットワーク",
        en: "Domestic Network - CERTIFIED -",
      },
      nwnJapanShort: {
        ja: "国内",
        en: "Domestic (CERTIFIED)",
      },
      nwnOverseas: {
        ja: "インド・タイ・北米",
        en: "Overseas Network - India/Thailand/North America -",
      },
      nwnOverseasShort: {
        ja: "インド・タイ・北米",
        en: "India/Thailand/North America",
      },
      nwnEastAsia: {
        ja: "中国・韓国",
        en: "Overseas Network - East Asia -",
      },
      nwnEastAsiaShort: {
        ja: "中国・韓国",
        en: "East Asia",
      },
      sec: { ja: "SECグループ", en: "SEC Group" },
      secEurope: {
        ja: "ヨーロッパ",
        en: "Overseas Network - Europe -",
      },
      secEuropeShort: {
        ja: "ヨーロッパ",
        en: "Europe",
      },
      secNorthAmerica: {
        ja: "北米",
        en: "Overseas Network - North America -",
      },
      secNorthAmericaShort: {
        ja: "北米",
        en: "North America",
      },
      secSouthAmerica: {
        ja: "南米",
        en: "Overseas Network - South America -",
      },
      secSouthAmericaShort: {
        ja: "南米",
        en: "South America",
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
    tech_laser: {
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
    privacypolicy: {
      ja: "プライバシーポリシー",
      en: "Privacy Policy",
      zh: "Privacy Policy",
    },
  },
  pageTitle: {
    top: { ja: "トップ", en: "Top" },
    company: {
      overview: { ja: "会社概要／アクセス", en: "Company Profile/Access" },
      philosophy: {
        ja: "理念・品質・環境方針",
        en: "Philosophy, Quality & Environmental Policy",
      },
      history: { ja: "沿革", en: "History" },
    },
    technology: {
      laser: { ja: "５軸レーザー彫刻機", en: "5-Axis Laser Engraving" },
      shibo: { ja: "シボ加工", en: "Texture(Shibo)" },
      peening: { ja: "ピーニング加工", en: "Peening" },
    },
    group: {
      top: { ja: "グループ一覧", en: "Group List" },
      ne: { ja: "NE（直営）グループ", en: "NE(Direct) Group" },
      nwn: { ja: "NWNグループ", en: "NWN Group" },
      sec: { ja: "SECグループ", en: "SEC Group" },
    },
    careers: { ja: "採用情報", en: "Careers" },
    contact: { ja: "お問い合わせ", en: "Contact" },
    thanks: { ja: "送信完了", en: "Submission Successful" },
    download: { ja: "ダウンロード", en: "Download" },
    privacypolicy: { ja: "プライバシーポリシー", en: "Privacy Policy" },
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
    laser: {
      label: {
        ja: "５軸レーザー彫刻",
        en: "5-axis Laser Engraving ",
      },
      href: "/technology/laser",
    },
    download: {
      label: {
        ja: "シボ加工予約シートダウンロード",
        en: "Download Embossing Reservation Sheet",
      },
      href: "/download/",
    },
  },
  /* zoom viewer */
  zoomViewer: {
    title: { ja: "レーザー加工サンプル", en: "LASER ETCHING SAMPLE" },
    subtitle: {
      ja: "Surface Texture Technology",
      en: "Surface Texture Technology",
    },
    items: {
      t01: {
        alt: { ja: "ランダムパターン", en: "Rumdom Pattern" },
        title: { ja: "ランダムパターン", en: "Rumdom Pattern" },
      },
      t02: {
        alt: { ja: "グリッドパターン", en: "Grid Pattern" },
        title: { ja: "グリッドパターン", en: "Grid Pattern" },
      },
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
        t03: {
          alt: {
            ja: "手作業による緻密な準備作業",
            en: "Meticulous manual preparation work",
          },
          title: {
            ja: "手作業による緻密な準備作業",
            en: "Meticulous manual preparation work",
          },
          desc: {
            ja: "職人たちによるひとつひとつの金型に対しての究極のマスキング作業。金型に命が吹き込まれる瞬間",
            en: "The ultimate masking work, meticulously applied by skilled craftsmen to each individual mold. It is the moment when life is breathed into the mold.",
          },
        },
        t04: {
          alt: {
            ja: "３Ｄスキャナー",
            en: "3D scanner",
          },
          title: {
            ja: "３Ｄスキャナー",
            en: "3D scanner",
          },
          desc: {
            ja: "分解能1ミクロンの高精細3Dスキャナ保有。ありとあらゆる素材をスキャン、データ化致します",
            en: "Equipped with a high-resolution 3D scanner with 1-micron accuracy, we can scan and digitize virtually any material.",
          },
        },
        t05: {
          alt: {
            ja: "金型",
            en: "Molds",
          },
          title: {
            ja: "金型",
            en: "Molds",
          },
          desc: {
            ja: "お客様からお預かりした金型を丹精込めて美しく仕上げます",
            en: "We carefully and beautifully finish each mold entrusted to us by our customers.",
          },
        },
        t06: {
          alt: {
            ja: "レーザー",
            en: "Laser",
          },
          title: {
            ja: "レーザー",
            en: "Laser",
          },
          desc: {
            ja: "国内でも希少なGFマシニングソリューションズ社製５軸レーザー加工機。中国、北米、ドイツ他拠点との連携作業も可能です",
            en: "A 5-axis laser processing machine by GF Machining Solutions, still relatively uncommon in Japan. We also work in coordination with facilities in China, North America, Germany, and other regions.",
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
        t01: {
          alt: {
            ja: "3Dプリンタで作成された樹脂製品",
            en: "The Product Baked by 3Dprinter",
          },
          title: {
            ja: "シボ技術は日々進化しています",
            en: "Surface texturing technology continues to evolve every day.",
          },
          desc: {
            ja: "進化を続けるシボの技術は、より身近なものになっています",
            en: "Evolving surface texturing technology is becoming increasingly accessible and familiar.",
          },
        },
        t02: {
          alt: {
            ja: "車のダッシュボードなど",
            en: "In applications such as automotive dashboards.",
          },
          title: {
            ja: "車のダッシュボードなど",
            en: "In applications such as automotive dashboards.",
          },
          desc: {
            ja: "シボの技術が実用性を高め、高級感を演出します",
            en: "Surface texturing enhances practicality while creating a refined, premium feel.",
          },
        },
        t03: {
          alt: {
            ja: "身近な通信機器のサプライなど",
            en: "Commonly seen in everyday communication devices.",
          },
          title: {
            ja: "身近な通信機器のサプライなど",
            en: "Commonly seen in everyday communication devices.",
          },
          desc: {
            ja: "キーボードや周辺デバイス、樹脂製品にはシボ技術が欠かせません",
            en: "Surface texturing is essential for keyboards, peripheral devices, and resin products.",
          },
        },
        t04: {
          alt: { ja: "生活用品", en: "Everyday products" },
          title: {
            ja: "生活用品",
            en: "Everyday products",
          },
          desc: {
            ja: "生活の一部に。シボの技術で生活をより快適に",
            en: "It has become an integral part of everyday life. Surface texturing makes life more comfortable.",
          },
        },
        t05: {
          alt: { ja: "工業製品", en: "Industrial products" },
          title: {
            ja: "工業製品",
            en: "Industrial products",
          },
          desc: {
            ja: "くらしに欠かせない、様々な樹脂製品。シボの技術が活かされています",
            en: "A wide range of resin products essential to everyday life also benefit from surface texturing technology.",
          },
        },
        t06: {
          alt: { ja: "スポーツ用品", en: "Sports Equipment" },
          title: {
            ja: "スポーツ用品",
            en: "Sports Equipment",
          },
          desc: {
            ja: "動きの瞬間に応える、高機能なスポーツ用品。シボの技術が、その性能をさらに高めます",
            en: "High-performance gear engineered for every moment of motion. Our texture technology takes performance to a new dimension.",
          },
        },
        t07: {
          alt: { ja: "家電製品", en: "Home appliances" },
          title: {
            ja: "家電製品",
            en: "Home appliances",
          },
          desc: {
            ja: "生活の一部に。シボの技術で生活をより快適に",
            en: "Part of everyday life. Making life more comfortable through surface texturing.",
          },
        },
        t08: {
          alt: { ja: "家庭用ゲーム機など", en: "Consumer electronics" },
          title: {
            ja: "家庭用ゲーム機など",
            en: "Consumer electronics",
          },
          desc: {
            ja: "ゲームコントローラーなどの操作性向上にも、シボ技術が活躍しています",
            en: "Surface texturing also plays a key role in improving the operability of game controllers.",
          },
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
              lat: 35.54677909693144,
              lng: 139.7303893632848,
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
              lat: 35.546460821214616,
              lng: 139.73358778296736,
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
              lat: 35.548555774025374,
              lng: 139.73083324149053,
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
    philosophy: {
      page: {
        title: {
          ja: "理念・品質・環境方針",
          en: "Philosophy, Quality & Environmental Policy",
        },
        lead: {
          ja: "理念・品質・環境への取り組み",
          en: "Our Philosophy, Quality and Environmental Commitment",
        },
      },

      body: {
        intro: {
          paragraphs: {
            ja: [
              "当社業務を通じて「かけがえのない地球環境」を保全し、次世代へ引き継ぐことを社会的使命と考えています。地域社会から地球規模に至るまで、広く環境に配慮した企業運営を心がけています。",
              "当社が所在する大田区は、京浜工業地帯の中心地でありながら東には東京湾、南には多摩川と水辺を伴う環境に恵まれた地域です。私達は産業の発展と共に環境保全を最重要事項と捉え、以下の基本方針を全社員が一致協力し推進してまいります。",
            ],
            en: [
              "Through our business activities, we regard the preservation of the irreplaceable global environment and its inheritance to future generations as our social mission. We strive to operate our business with environmental consideration on both local and global scales.",
              "We strive to operate our business with environmental consideration on both local and global scales. Located in Ota Ward, Tokyo—an area blessed with Tokyo Bay to the east and the Tama River to the south—we place environmental conservation as a top priority alongside industrial development.",
            ],
          },
        },
      },

      principles: {
        title: {
          ja: "経営理念",
          en: "Philosophy",
        },
        desc: {
          ja: "お客様からお預かりする貴重な金型を共有の財産と考え、<wbr class='u-br-pc' />金型の生産性向上や長寿命化にも重点をおいています。",
          en: "We regard the molds entrusted to us by our customers as shared assets and place importance on improving productivity and extending mold lifespan.",
        },
      },

      management: {
        title: {
          ja: "経営理念",
          en: "Philosophy",
        },
        items: {
          ja: [
            "すべての活動の原点を「お客様第一主義」と致します",
            "グローバルな技術・最新の技術を持ちつづける為に日々精進致します",
            "企業倫理を追求し、社会から信頼される企業でありつづけます",
            "社員一人一人がやりがいを持って働ける企業を目指します",
          ],
          en: [
            "Customer-first principle as the foundation of all activities",
            "Continuous pursuit of global and advanced technologies",
            "Commitment to corporate ethics and social trust",
            "Creating a workplace where employees find fulfillment and pride",
          ],
        },
      },

      quality: {
        title: {
          ja: "品質方針",
          en: "Quality Principles",
        },
        items: {
          ja: [
            "お客様満足度を<wbr class='u-br-pc' />常に意識すること",
            "品質マネジメントシステムの<wbr class='u-br-pc' />確立と継続的改善",
            "品質に関する法規制<wbr class='u-br-pc' />および要求事項の遵守",
            "品質目標の設定と、<wbr class='u-br-pc' />定期的な見直しの実施",
          ],
          en: [
            "Maintaining constant awareness of customer satisfaction",
            "Establishing and continuously improving the quality management system",
            "Ensuring compliance with quality-related laws, regulations, and requirements",
            "Setting quality objectives and conducting regular reviews",
          ],
        },
      },

      environment: {
        title: {
          ja: "環境理念",
          en: "Environmental Philosophy",
        },
        items: {
          ja: [
            "環境マネジメントシステムを<wbr class='u-br-pc' />整備・運用・改善すること",
            "環境負荷低減のための<wbr class='u-br-pc' />継続的な改善を実施",
            "環境関連法規を<wbr class='u-br-pc' />厳守すること",
            "資源循環型社会を<wbr class='u-br-pc' />目指すこと",
            "環境に対する意識を社員、<wbr class='u-br-pc' />関係各社と共有し、<wbr class='u-br-pc' />一般にも公開すること",
          ],
          en: [
            "Establishing, operating, and continuously improving the environmental management system",
            "Implementing continuous improvements to reduce environmental impact",
            "Strictly complying with environmental laws and regulations",
            "Aiming to build a resource-circulating society",
            "Sharing environmental awareness with employees and related companies, and disclosing it to the public",
          ],
        },
      },

      history: {
        title: {
          ja: "会社沿革",
          en: "History",
        },
        items: {
          ja: [
            "1971年 日本エッチング設立",
            "1987年 シンガポール工場設立",
            "1998年 中国深セン工場設立",
            "2003年 SECグループ加盟",
            "2016年 フィリピン工場操業開始",
          ],
          en: [
            "1971: Nihon Etching founded",
            "1987: Singapore plant established",
            "1998: Shenzhen plant established",
            "2003: Joined SEC Group",
            "2016: Philippine plant began operations",
          ],
        },
      },
    },
    history: {
      eyebrow: { ja: "Company", en: "Company" },
      lead: {
        ja: "日本エッチングの歩みをご紹介します",
        en: "A History of Nihon Etching",
      },
      title: { ja: "会社沿革", en: "History" },
      breadcrumb: { ja: "会社概要／アクセス", en: "Company Profile & Access" },

      items: [
        {
          date: { ja: "1971年 6月10日", en: "June 10, 1971" },
          text: {
            ja: "合名会社 日本エッチング設立",
            en: "Nihon Etching founded as a partnership company.",
          },
        },
        {
          date: { ja: "1981年 9月25日", en: "September 25, 1981" },
          text: {
            ja: "（名）日本エッチングを（名）日本ブラスト工業に改名、株式会社日本エッチング設立",
            en: "Renamed to Nihon Blast Kogyo; Nihon Etching incorporated.",
          },
        },
        {
          date: { ja: "1984年12月12日", en: "December 12, 1984" },
          text: {
            ja: "本社工場を東京都大田区本羽田2-8-19に移転",
            en: "Head office factory relocated to Honhaneda, Ota-ku, Tokyo.",
          },
        },
        {
          date: { ja: "1987年 6月", en: "June 1987" },
          text: {
            ja: "日本エッチング・シンガポール工場設立",
            en: "Nihon Etching Singapore factory established.",
          },
        },
        {
          date: { ja: "1990年12月", en: "December 1990" },
          text: {
            ja: "日本エッチング・台湾工場設立",
            en: "Nihon Etching Taiwan factory established.",
          },
        },
        {
          date: { ja: "1995年 7月14日", en: "July 14, 1995" },
          text: {
            ja: "日本エッチング・マレーシア工場設立",
            en: "Nihon Etching Malaysia factory established.",
          },
        },
        {
          date: { ja: "1998年 4月", en: "April 1998" },
          text: {
            ja: "日本エッチング・中国深セン工場設立",
            en: "Nihon Etching Shenzhen factory established.",
          },
        },
        {
          date: { ja: "2002年 5月", en: "May 2002" },
          text: {
            ja: "日本エッチング・中国昆山工場（上海）設立",
            en: "Nihon Etching Kunshan (Shanghai) factory established.",
          },
        },
        {
          date: { ja: "2002年12月", en: "December 2002" },
          text: {
            ja: "日本エッチング・マレーシア ジョホール工場設立",
            en: "Nihon Etching Johor (Malaysia) factory established.",
          },
        },
        {
          date: { ja: "2003年 6月", en: "June 2003" },
          text: {
            ja: "SECグループに正式加盟、提携工場14拠点に拡大",
            en: "Officially joined SEC Group; expanded to 14 partner factories.",
          },
        },
        {
          date: { ja: "2003年10月", en: "October 2003" },
          text: {
            ja: "日本エッチング・インドネシア工場設立",
            en: "Nihon Etching Indonesia factory established.",
          },
        },
        {
          date: { ja: "2004年10月", en: "October 2004" },
          text: {
            ja: "NEW WORLD NIHON ETCHING (H.K) CO., LTD 設立",
            en: "NEW WORLD NIHON ETCHING (H.K) CO., LTD established.",
          },
        },
        {
          date: { ja: "2007年 6月", en: "June 2007" },
          text: {
            ja: "ベトナム工場設立",
            en: "Vietnam factory established.",
          },
        },
        {
          date: { ja: "2012年 3月", en: "March 2012" },
          text: {
            ja: "中国・大連工場設立",
            en: "Dalian (China) factory established.",
          },
        },
        {
          date: { ja: "2016年 6月", en: "June 2016" },
          text: {
            ja: "フィリピン工場操業開始",
            en: "Philippines factory commenced operations.",
          },
        },
      ],
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
      body: {
        intro: {
          paragraphs: {
            ja: [
              "金属（金型・平板・ロール）・プラスチック・ガラス・石など、あらゆる物が持っている素材の表情を引き出し、 高級感や付加価値を高めるために表面処理を施すことをシボ加工といいます。",
              "当社がシボ加工を施した素材は、パソコンやプリンターといったOA機器から、 自動車の内装パネル、携帯電話や家庭用ゲーム機等さまざまな製品に使用されています。",
              "化学薬品の作用によって金属物の表面を浸食除去する「エッチング」をはじめとするシボ加工。 素材の表面に梨地や砂目、岩目といった均一なパターンを刻むことにより、 製品の寿命を長く保ち、外観の美しさや高級感を演出します。",
            ],
            en: [
              "Texturing refers to the surface treatment applied to bring out the inherent character of materials—such as metals (moulds, plates, rolls), plastics, glass, and stone—enhancing their premium feel and added value. ",
              "Materials textured by our company are used in a wide range of products, from office automation equipment like PCs and printers to automotive interior panels, mobile phones, and home video game consoles.",
              "Texturing processes, including “etching” which removes metal surfaces through chemical action, create uniform patterns like satin, sand, or rock textures on material surfaces. This extends product longevity while enhancing aesthetic appeal and premium feel.",
            ],
          },
        },
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
          cap07: {
            ja: "グラフィックパターン-7",
            en: "Graphic Pattern 7",
          },
          cap08: {
            ja: "グラフィックパターン-8",
            en: "Graphic Pattern 8",
          },
          cap09: {
            ja: "グラフィックパターン-9",
            en: "Graphic Pattern 9",
          },
          cap10: {
            ja: "グラフィックパターン-10",
            en: "Graphic Pattern 10",
          },
        },
        additional: {
          ja: "Ｓはセミグロス（半光沢）Ｇはグロス（光沢）を表します ",
          en: "S indicates semi-gloss, G indicates gloss. ",
        },
      },
    },
    laser: {
      page: {
        title: {
          ja: '５軸レーザー彫刻機 "GFマシニングソリューションズ GFMS LS2500"',
          en: "GF Machining Solutions GFMS-LS2500",
        },
        lead: {
          ja: "段取りから加工までの精度と再現性を、量産現場で扱いやすい形に落とし込みます。",
          en: "From setup to processing, we deliver repeatability and accuracy in a production-friendly workflow.",
        },
      },

      body: {
        intro: {
          paragraphs: {
            ja: [
              "昨今、CMF（カラーマテリアルフィニッシュ）の重要性から、F（フィニッシング）にも非常に注目が集まっており、プラスチック製品自体の製品価値/商品価値/デザイン価値をいかに高めるか、レーザーテクスチャリングでの新しい可能性について常に模索しております。",
              "シボ加工のデジタル化への移行は日々進んでおり、レーザーテクスチャリングは伝統的な加工方法における限界を打破する技術のひとつです。 ",
              "デザイン変更に対する難しさ、完成品質の誤差、新しいビジネス開拓のための機能的表面の施作という今日の挑戦にデジタルレーザーテクスチャリングの加工技術をご提案します。",
            ],
            en: [
              "Recently, due to the growing importance of CMF (Color Material Finish), significant attention has also been focused on the “F” (Finishing). We are constantly exploring new possibilities through laser texturing to enhance the product value, commercial value, and design value of plastic products themselves.",
              "The shift toward digital embossing is advancing daily, and laser texturing is one technology that breaks through the limitations of traditional processing methods.",
              "We propose digital laser texturing processing technology to address today's challenges: the difficulty of design changes, variations in finished quality, and the implementation of functional surfaces for new business development. ",
            ],
          },
        },
        imageTitle: {
          ja: "5軸レーザー彫刻機「GFMS-LS2500」",
          en: "5-axis laser engraving [GFMS-LS2500]",
        },
        description: {
          ja: [
            "5軸レーザー彫刻機は、レーザー技術と多方向（５軸）からの彫刻技術をすべてデジタル処理で行います。シボ加工、彫刻、マーキング、微細加工等を2D平面だけではなく、3D曲面へ効率的に再現することが可能となりました。",
            "このシステムにより、これまでのシボ加工の限界を打ち破り、金型デザインの可能性を驚異的に拡大することができます。",
          ],
          en: [
            "The 5-axis laser engraving machine performs all laser technology and multi-directional (5-axis) engraving techniques through digital processing.",
            "It can efficiently reproduce texturing, engraving, marking, and micro-machining not only on 2D planes but also on 3D curved surfaces.",
            "This system breaks through the limitations of conventional texturing and dramatically expands the possibilities of mold design.",
          ],
        },
        featuresTitle: {
          ja: "主な特徴",
          en: "Features",
        },
        features: {
          ja: [
            "様々な材質、複雑な形状に対応可能",
            "レーザー直彫りによる<wbr class='u-br-sp' />緻密で繊細な彫刻が可能",
            "高精度なテクスチャや<wbr class='u-br-sp' />画像までもが実現できる",
            "コンピュータ処理により<wbr class='u-br-pc' /><wbr class='u-br-sp' />最終グラフィックデザインの事前確認が可能",
          ],
          en: [
            "Compatible with a wide range of materials and complex geometries",
            "Enables highly detailed and delicate engraving through direct laser engraving",
            "Achieves high-precision textures and even intricate images",
            "Allows advance preview of the final graphic design through computer-based processing",
          ],
        },
        youtubeTitle: {
          ja: "5軸レーザー彫刻機 デモ動画",
          en: "5-Axis Laser Engraving Demo",
        },
        pdfTitle: {
          ja: "資料（PDF）",
          en: "Documents (PDF)",
        },
        galleryTitle: {
          ja: "ギャラリー",
          en: "Gallery",
        },
        gallery: {
          cap01: { ja: "レーザーパターン01", en: "Laser Pattern 01" },
          cap02: { ja: "レーザーパターン02", en: "Laser Pattern 02" },
          cap03: { ja: "レーザーパターン03", en: "Laser Pattern 03" },
          cap04: { ja: "レーザーパターン04", en: "Laser Pattern 04" },
          cap05: { ja: "レーザーパターン05", en: "Laser Pattern 05" },
          cap06: { ja: "レーザーパターン06", en: "Laser Pattern 06" },
          cap07: { ja: "レーザーパターン07", en: "Laser Pattern 07" },
          cap08: { ja: "レーザーパターン08", en: "Laser Pattern 08" },
          cap09: { ja: "レーザーパターン09", en: "Laser Pattern 09" },
          cap10: { ja: "レーザーパターン10", en: "Laser Pattern 10" },
        },
      },

      assets: {
        imageAlt: {
          ja: "5軸レーザー彫刻機の加工イメージ",
          en: "5-axis laser engraving process image",
        },
        pdfs: [
          {
            title: {
              ja: "laser_laser 技術資料",
              en: "5-axis laser technical document",
            },
            src: "/pdf/5axis_laser-2511.pdf",
          },
        ],
      },
    },
    peening: {
      page: {
        title: {
          ja: "ピーニング加工機",
          en: "IEPCO SHOT PEENING",
        },
        lead: {
          ja: "高い技術力を必要とされるピーニング処理。熟練の技術でお応えします",
          en: "Peening processing requires advanced technical expertise. We deliver with skilled craftsmanship.",
        },
      },
      body: {
        intro: {
          paragraphs: {
            ja: [
              "スイスのイエプコ（IEPCO）社のピーニング加工機は、 航空機ジェットエンジンのタービンブレード折損防止の研究に端を発して生み出された技術です。",
              "イエプコ表面処理はサンドブラスト技術とショットピーニング技術を組み合わせた低圧方式のマイクロブラスト処理で、 加熱も溶剤も一切使用せずに、 表面改質のために開発された粉体（エージェント）を吹き付けるだけで、加工変質層の除去や表面欠陥の閉塞を行い、 金属部品の性能向上、長寿命化に効果を上げることができます。",
              "お客様からお預かりする貴重な金型を共有の財産と考え、金型の生産性向上や長寿命化にも重点をおいており、最新技術・機器を導入し、より品質の高いものを提供します",
              "また、古い金型に新しく息を吹き込む努力も惜しみません。 経年劣化よる摩耗やひび割れ・酸化した金型も丁寧にメンテナンスします。",
            ],
            en: [
              "The peening machine developed by IEPCO of Switzerland originated from research aimed at preventing turbine blade fractures in aircraft jet engines.",
              "IEPCO Surface Treatment is a low-pressure microblasting process combining sandblasting and shot peening technologies. Without any heating or solvents, it simply sprays a specially developed powder agent for surface modification. This removes work-hardened layers and seals surface defects, effectively enhancing the performance and extending the service life of metal components.",
              "We consider the valuable molds entrusted to us by our customers as shared assets, placing emphasis on enhancing mold productivity and extending their lifespan. We introduce the latest technology and equipment to provide higher quality products.",
              "We also spare no effort in breathing new life into old molds. We meticulously maintain molds that have suffered wear, cracks, or oxidation due to aging.",
            ],
          },
        },
        imageTitle: {
          ja: "イエプコ社ピーニング加工機",
          en: "IEPCO SHOT PEENING",
        },
        featuresTitle: {
          ja: "主な特徴",
          en: "Features",
        },
        features: {
          ja: [
            "加熱や溶剤を使用しないので<wbr class='u-br-pc' /><wbr class='u-br-sp' />鋼材の劣化や腐食を引き起こさない",
            "汚れ具合や形状に応じて<wbr class='u-br-sp' />調整できるため<wbr class='u-br-pc' />極め細かい作業が可能",
            "射出成形金型には加工バリ、<wbr class='u-br-sp' />カエリの除去、<wbr class='u-br-pc' />滑り性の向上など、<wbr class='u-br-sp' />成形不良対策に効果絶大",
            "電子制御なため仕上加工の時間と<wbr class='u-br-sp' />費用を<wbr class='u-br-pc' />大きく軽減できる",
            "放電加工金型の加工変質層を<wbr class='u-br-sp' />簡単・確実に除去するため、<wbr class='u-br-pc' /><wbr class='u-br-sp' />離型不良を大幅に改善できる",
          ],
          en: [
            "Does not cause deterioration or corrosion of steel materials as it uses neither heat nor solvents",
            "Allows highly precise work by adjusting to the level of contamination and the shape of the workpiece",
            "Extremely effective for preventing molding defects in injection molds, such as removing burrs and flash and improving release properties",
            "Electronic control significantly reduces finishing time and costs",
            "Greatly improves release defects by easily and reliably removing the altered surface layer of EDM-processed molds",
          ],
        },
        link: {
          heading: {
            ja: "リンクリスト",
            en: "Link List",
          },
          buttons: [
            {
              label: {
                ja: "プラストロン株式会社<wbr class='u-br-sp' />（イエプコ表面処理装置 日本総代理店）",
                en: "PLASTRON CORPORATION<wbr class='u-br-sp' /> (IEPCO SHOT PEENING Japan General Agency)",
              },
            },
          ],
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
    ne: {
      lead: {
        ja: "世界中に日本の技術を伝えるべく、海外進出や現地の工場との提携を精力的に進めています",
        en: "We are expanding globally to bring Japanese technology to the world.",
      },
    },
    nwn: {
      lead: {
        ja: "ＮＷＮグループの確立によって、より強力な開発力と国内のみならずアジア全域をカバーするグローバルな技術の提携が可能となりました",
        en: "Through the NWN Group, we have strengthened our development capabilities across Asia.",
      },
    },
    sec: {
      lead: {
        ja: "ヨーロッパ・アメリカ・オセアニアをカバーするＳＥＣグループとの結びつきにより、文字通り全世界に技術の拠点をおいています",
        en: "Together with the SEC Group, we have established a truly global technological network.",
      },
    },
  },
  /*================================================
  /*================================================
  Recruit */
  recruit: {
    page: {
      title: { ja: "採用情報", en: "Recruit" },
      lead: {
        ja: "事業拡大につき、正社員を募集しています。",
        en: "We are hiring full-time employees to support our business growth.",
      },
      imageAlt: { ja: "採用情報", en: "Recruit" },
    },

    body: {
      intro: {
        paragraphs: {
          ja: [
            "事業拡大のため正社員を大募集しています。",
            "世界に拡がる技術革新の追従だけではなく、環境や人に対しての投資を重んじる経営方針で躍進を続けています。",
            "社員一人一人のやりがいと仕事に対する誇りを大事に、共に向上を目指す人材を広く募集しています。",
          ],
          en: [
            "We are hiring full-time employees as our business expands.",
            " We continue to grow not only by keeping up with global innovation, but also through a management policy that values investment in people and the environment.",
            " We welcome individuals who take pride in their work and strive to improve together.",
          ],
        },
      },

      guidelinesTitle: { ja: "募集要項", en: "Applicant Guidelines" },

      labels: {
        jobs: { ja: "募集職種", en: "Positions" },
        employment: { ja: "雇用形態", en: "Employment type" },
        description: { ja: "業務内容", en: "Job description" },
        qualification: { ja: "応募資格", en: "Qualifications" },
        location: { ja: "勤務地", en: "Location" },
        period: { ja: "募集期間", en: "Application period" },
      },

      values: {
        jobs: {
          ja: "営業職／エッチング技術者／開発技術／営業事務・総務事務",
          en: "Sales / Etching Technician / Development Engineer / Sales & General Affairs Administration",
        },
        employment: { ja: "正社員", en: "Full-time" },
        qualification: {
          ja: "短大/専門/高専/大学/大学院 卒業または卒業見込みの方（2021年3月～2023年3月卒または2024年3月卒業見込み）",
          en: "Applicants who have graduated or are expected to graduate from a junior college, vocational school, technical college, university, or graduate school (graduates from Mar 2021–Mar 2023, or expected to graduate in Mar 2024).",
        },
        location: { ja: "東京都大田区", en: "Ota-ku, Tokyo" },
        period: {
          ja: "随時募集中（ご不明点はメールにてお問い合わせください）",
          en: "Open applications (please contact us by email if you have any questions).",
        },
        mailLink: {
          ja: "採用係メールはこちら",
          en: "Contact recruitment team",
        },
      },

      roles: {
        sales: {
          title: { ja: "営業職", en: "Sales" },
          desc: {
            ja: "メーカー様との新規案件の打ち合わせ・既存のお客様への納品引き取り",
            en: "Meetings for new projects with manufacturers, and delivery/pickup for existing customers.",
          },
        },
        etching: {
          title: { ja: "エッチング技術者", en: "Etching Technician" },
          desc: {
            ja: "金型の表面にあらゆる手法を使い微細かつ繊細な模様を加工します",
            en: "Create fine and delicate patterns on mold surfaces using a wide range of processing techniques.",
          },
        },
        dev: {
          title: { ja: "開発技術", en: "Development Engineer" },
          desc: {
            ja: "画像ソフトを用いた新規パターン開発・３Ｄソフトを使った５軸レーザーエッチング加工",
            en: "Develop new patterns using image software and perform 5-axis laser etching using 3D software.",
          },
        },
        admin: {
          title: {
            ja: "営業事務・総務事務",
            en: "Sales & General Affairs Administration",
          },
          desc: {
            ja: "遠方のお客様の加工の手配・経理から人事を含めた事務業務",
            en: "Arrange processing for remote customers and handle administrative work including accounting and HR tasks.",
          },
        },
      },
    },
  },

  /*================================================
  /*================================================
  Contact */
  contact: {
    page: {
      title: { ja: "お問い合わせ", en: "Contact Form" },
      lead: {
        ja: "資料請求など、（株）日本エッチングへのお問い合わせはこちらから",
        en: "For inquiries such as requesting materials, please contact Nihon Etching Co., Ltd. here.",
      },
    },
    body: {
      intro: {
        paragraphs: {
          ja: [
            "日本エッチングへのお問い合わせは、下記フォームに必須事項を入力しご送信ください。弊社担当より折り返しご連絡差し上げます。",
            "なお、返信は通常３〜４営業日をいただいておりますが、内容によりさらなるお時間をいただくことがございます。あらかじめご了承ください。",
          ],
          en: [
            "For inquiries regarding Nihon Etching, please fill out the required fields in the form below and submit it. A representative from our company will contact you promptly.",
            "Please note that responses typically take 3-4 business days, though additional time may be required depending on the nature of your inquiry. We appreciate your understanding in advance.",
          ],
        },
      },
    },
    form: {
      company: { ja: "御社名", en: "Company" },
      department: { ja: "部署名", en: "Department" },
      name: { ja: "御氏名", en: "Name" },
      email: { ja: "email", en: "Email" },
      postal: { ja: "郵便番号（ハイフンなし）", en: "Postal Code (No Hyphen)" },
      postalPlaceholder: { ja: "例）1234567", en: "e.g. 1234567" },
      address: { ja: "住所", en: "Address" },
      tel: { ja: "電話", en: "Phone" },
      subject: { ja: "件名", en: "Subject" },

      category: { ja: "お問い合わせ内容（種別）", en: "Inquiry type" },
      cat: {
        material: { ja: "資料送付", en: "Request materials" },
        recruit: { ja: "求人情報", en: "Recruitment" },
        quote: { ja: "お見積り", en: "Request a quote" },
        other: { ja: "その他", en: "Other" },
      },

      message: { ja: "お問い合わせ内容（詳細）", en: "Message" },
      requiredNote: {
        ja: "アスタリスク（*）付きは必須項目です。",
        en: "Fields marked with an asterisk (*) are required.",
      },
      submit: { ja: "送信", en: "Send" },
    },
  },
  /*================================================
  /*================================================
  Thanks */
  thanks: {
    page: {
      title: {
        ja: "お問い合わせありがとうございました",
        en: "Thank You Your submission has been received.",
      },
      titleShort: {
        ja: "送信完了",
        en: "Submission Complete",
      },
      lead: {
        forHeader: {
          ja: "お問い合わせメールを送信いたしました",
          en: "Your inquiry has been sent successfully.",
        },
        p1: {
          ja: "お問い合わせメールを送信いたしました。弊社担当より、折り返しご連絡差し上げます。",
          en: "We have received your inquiry. Our team will get back to you shortly.",
        },
        p2: {
          ja: "なお、返信には通常３〜４営業日をいただいておりますが、内容によりさらなるお時間をいただくことがございます。あらかじめご了承ください。",
          en: "Thank you for your inquiry. Your message has been sent successfully. We will respond within 3–4 business days. Please note that depending on the nature of your inquiry, it may take longer. Thank you for your understanding.",
        },
      },
      backToContact: {
        ja: "お問い合わせフォームへ戻る",
        en: "Back to contact form",
      },
      backToHome: { ja: "トップへ戻る", en: "Back to home" },
    },
  },
  /*================================================
  /*================================================
  Download */
  download: {
    page: {
      title: {
        ja: "ダウンロード",
        en: "Download",
      },
      lead: {
        ja: "シボ加工予約シートや技術資料など、こちらからダウンロードいただけます",
        en: "Download texture sample sheets and reservation forms here.",
      },
    },
    downloadFiles: [
      {
        id: "dl01",
        title: {
          ja: "シボ加工予約シート",
          en: "Texture/Grain Processing Reservation Sheet",
        },
        fileUrl: "/pdf/texture-reservation-sheet.pdf",
      },
      {
        id: "dl02",
        title: {
          ja: "５軸レーザー彫刻レーザーシボ加工最新トレンド",
          en: "5-Axis Laser Texturing Trends",
        },
        fileUrl: "/pdf/5axis_laser-2511.pdf",
      },
      {
        id: "dl03",
        title: {
          ja: "N-TONE STEP TFC（技術資料）",
          en: "N-TONE STEP TFC（Technical Data ）",
        },
        fileUrl: "/pdf/technote-tfc-2508.pdf",
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
  /* Privacy Policy */
  privacyPolicy: {
    page: {
      title: {
        ja: "プライバシーポリシー",
        en: "Privacy Policy",
      },
      lead: {
        ja: "株式会社日本エッチングでは、お預かりしたお客様の個人情報の保護に努めております",
        en: "At Nihon Etching Co., Ltd., we are committed to protecting the personal information entrusted to us by our customers.",
      },
    },
    body: {
      intro: {
        ja: "株式会社日本エッチング（以降、弊社）はお客様の個人情報をお預かりすることになりますが、そのお預かりした個人情報の取扱いについて下記のように定め、保護に努めております。",
        en: 'Nihon Etching Co., Ltd. (hereinafter referred to as "the Company") may collect personal information from our customers. We have established the following policy regarding the handling of such personal information and are committed to its protection.',
      },
      paragraphs: [
        {
          id: "p01",
          index: { ja: "利用目的", en: "Purpose of Use" },
          body: {
            ja: "お客様からのお問い合わせに対する回答を行うために使用します。",
            en: "Personal information will be used solely to respond to inquiries from our customers.",
          },
        },
        {
          id: "p02",
          index: { ja: "第三者への提携", en: "Disclosure to Third Parties" },
          body: {
            ja: "お客様からのお問い合わせに対する回答を行うために使用します。",
            en: "Except as required by law, the Company will not disclose personal information to any third party without the prior consent of the individual concerned.",
          },
        },
        {
          id: "p03",
          index: {
            ja: "個人情報の取扱い業務の委託",
            en: "Outsourcing of Personal Information Handling",
          },
          body: {
            ja: "弊社は個人情報の取扱い業務の委託は行っておりません。",
            en: "The Company does not outsource any operations involving the handling of personal information.",
          },
        },
        {
          id: "p04",
          index: {
            ja: "個人情報提出の任意性",
            en: "Voluntary Submission of Personal Information",
          },
          body: {
            ja: "お客様が弊社に対して個人情報を提出することは任意です。ただし、個人情報を提出されない場合には、 弊社からの返信やサービスを実施ができない場合がありますので、あらかじめご了承ください。",
            en: "The submission of personal information to the Company is entirely voluntary. However, please note that failure to provide personal information may result in the Company being unable to respond to inquiries or provide certain services.",
          },
        },
        {
          id: "p05",
          index: {
            ja: "個人情報の開示請求について",
            en: "Requests for Disclosure of Personal Information",
          },
          body: {
            ja: "お客様には、貴殿の個人情報の利用目的の通知、開示、訂正、追加、削除および利用又は提携の拒否権を要求する権利があります。詳細につきましては下記の窓口までご連絡をお願いします。",
            en: "Customers have the right to request notification of the purpose of use, disclosure, correction, addition, deletion, and the right to opt out of the use or sharing of their personal information. For further details, please contact us at the information provided below.",
          },
        },
      ],
      contact: {
        index: {
          ja: "お問い合わせ先（お問い合わせ窓口）",
          en: "Inquiry Counter",
        },
        phone: { ja: "TEL 03-3744-5502", en: "+81-3-3744-5502" },
        fax: { ja: "FAX 03-3745-1898", en: "+81-3-3745-1898" },
      },
      charge: {
        index: { ja: "個人情報保護管理者", en: "Data Protection Officer" },
        value: { ja: "株式会社日本エッチング", en: "Nihon Etching Co.,Ltd." },
      },
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

/* 配列用export */
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
//
