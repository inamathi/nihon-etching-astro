// ============================================================
//  技術Q&A データ
//  配置: src/locales/faq/tech-faq.ts
//  方針:
//   - 1問=1オブジェクト。ja / en を同じオブジェクト内に並べる（編集時の往復回避）
//   - 解決は qa[lang] ?? qa.en ?? qa.ja（既存 multilingual の node[lang] と同じ思想）
//   - 回答は構造化ブロック（表/定義/二分岐/リスト等）。文字列1本には収めない
//   - en は未訳のうちは省略可 → ja にフォールバック
//   - terms は用語ラベル（言語非依存キー）。後日 /knowledge/glossary/ へのリンクに使う
//  ※ フル版 Q1〜Q68（A〜H）。en は全問訳済み（先方校正待ち）
// ============================================================

export type FaqBlock =
  | { type: "p"; text: string }
  | { type: "note"; text: string }
  | { type: "cases"; items: { label: string; text: string }[] }
  | { type: "defs"; items: { dt: string; dd: string }[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "list"; ordered?: boolean; items: string[] };

export type FaqContent = { q: string; a: FaqBlock[] };

export type FaqItem = {
  id: string; // "q36"（アンカーIDにそのまま使う）
  cat: string; // "d"（カテゴリID）
  terms?: string[]; // 用語索引由来のラベル
  ja: FaqContent;
  en?: FaqContent;
};

export type FaqCategory = {
  id: string; // "a"
  mark: string; // "A"（見出しバッジ）
  label: { ja: string; en?: string };
};

// ── カテゴリ（表示順） ─────────────────────────────
export const faqCategories: FaqCategory[] = [
  { id: "a", mark: "A", label: { ja: "基本", en: "Basics" } },
  {
    id: "b",
    mark: "B",
    label: { ja: "抜き勾配とシボ深さ", en: "Draft Angle and Shibo Depth" },
  },
  { id: "c", mark: "C", label: { ja: "加工工法", en: "Processing Methods" } },
  {
    id: "d",
    mark: "D",
    label: {
      ja: "シボの種類と柄の指定",
      en: "Shibo Types and Pattern Specification",
    },
  },
  {
    id: "e",
    mark: "E",
    label: {
      ja: "型材・補修・金型管理",
      en: "Mold Materials, Repair and Maintenance",
    },
  },
  {
    id: "f",
    mark: "F",
    label: { ja: "樹脂と材料", en: "Resins and Materials" },
  },
  {
    id: "g",
    mark: "G",
    label: { ja: "不具合・トラブル", en: "Defects and Troubleshooting" },
  },
  {
    id: "h",
    mark: "H",
    label: {
      ja: "依頼前の準備と当社の対応",
      en: "Preparing Your Request and Our Services",
    },
  },
];

// ── 設問 ─────────────────────────────────────────
export const faqItems: FaqItem[] = [
  // ============ A. 基本のこと ============
  {
    id: "q1",
    cat: "a",
    ja: {
      q: "そもそも「シボ」とは何ですか？",
      a: [
        {
          type: "p",
          text: "生地の『絞り』から派生した言葉で、織物の織り方・織り地・生地、手触りや感触・質感、そして金属表面をエッチングやサンドブラストによって加飾する工法、という複数の意味を持ちます。実務では最後の意味で使い、家電・自動車・雑貨品などあらゆるプラスチック製品に用いられている表面加工を指します。",
        },
      ],
    },
    en: {
      q: "What is shibo?",
      a: [
        {
          type: "p",
          text: "The word comes from shibori, a Japanese term for fabric, and has several meanings: the weave or texture of a fabric, a tactile feel or quality, and a method of decorating metal surfaces by etching or sandblasting. In industry it is used in the last sense, referring to the surface finish found on plastic products of every kind, from home appliances and automotive parts to everyday goods.",
        },
      ],
    },
  },
  {
    id: "q2",
    cat: "a",
    ja: {
      q: "英語では何と言いますか？",
      a: [
        {
          type: "p",
          text: "TEXTURE（テクスチャー）、GRAINING（グレイニング）、ENGRAVING（エングレービング）と呼ばれます。海外拠点とのやり取りで最も広く通じるのはTEXTUREで、GRAININGは皮シボのような柄物を指す場面、ENGRAVINGは彫り込み・彫刻のニュアンスを含む場面で使われます。",
        },
      ],
    },
    en: {
      q: "What is shibo called in English?",
      a: [
        {
          type: "p",
          text: "It is called TEXTURE, GRAINING, or ENGRAVING. TEXTURE is the most widely understood term when working with overseas sites; GRAINING is used for patterned textures such as leather grain, and ENGRAVING when the nuance of carving into the surface is intended.",
        },
      ],
    },
  },
  {
    id: "q3",
    cat: "a",
    ja: {
      q: "シボは成形品に直接加工するのですか？",
      a: [
        {
          type: "p",
          text: "いいえ。原則として金型の『キャビ面（キャビティ面）』に加工し、成形時に樹脂へ写し取ります。この写し取られることを『転写』と呼び、圧力や温度が不足すると転写不良・転写ムラとなります。",
        },
      ],
    },
    en: {
      q: "Is shibo applied directly to the molded part?",
      a: [
        {
          type: "p",
          text: "No. As a rule, it is applied to the cavity surface of the mold and reproduced in the resin during molding. This reproduction is called transfer; insufficient pressure or temperature results in poor or uneven transfer.",
        },
      ],
    },
  },
  {
    id: "q4",
    cat: "a",
    ja: {
      q: "シボを付けると、どんなメリットがありますか。",
      a: [
        { type: "p", text: "主に次の4点です。" },
        {
          type: "list",
          items: [
            "様々な装飾パターンの形成が可能",
            "ウエルド・ヒケなどの成形による外観不良を見えにくくする",
            "塗装に比べ、材着（材料着色）で低コストを実現",
            "密着部分の減少による異音防止",
          ],
        },
        {
          type: "p",
          text: "このほか、滑り止め・グリップ、防眩、指紋や皮脂の目立ちにくさ、防キズ性、エアー抜き、洗浄性といった機能面、そして彫刻加工・ロゴマーク・品質表示・リレキマークにも活用されます。",
        },
      ],
    },
    en: {
      q: "What are the benefits of shibo?",
      a: [
        { type: "p", text: "There are four main benefits:" },
        {
          type: "list",
          items: [
            "A wide variety of decorative patterns can be created",
            "Molding defects such as weld lines and sink marks become less visible",
            "Lower cost than painting, by using molded-in color",
            "Reduced contact area helps prevent squeaks and rattles",
          ],
        },
        {
          type: "p",
          text: "Shibo also serves functional purposes such as slip resistance and grip, anti-glare, making fingerprints and skin oils less noticeable, scratch resistance, air venting, and ease of cleaning. It is also used for engraving, logos, quality labels, and traceability marks.",
        },
      ],
    },
  },
  {
    id: "q5",
    cat: "a",
    ja: {
      q: "「グロス」とは何のことですか。",
      a: [
        {
          type: "p",
          text: "表面の光沢度のことで、「ツヤ」とも呼びます。専用のグロス測定機で数値管理します。シボの深さ・粗さ・仕上げ処理によって変化し、ヒケやウエルドといった外観不良の見え方を大きく左右します。",
        },
        {
          type: "p",
          text: "当社では、S＝セミグロス（半ツヤ）、G＝グロス（ツヤあり）と分けて管理しております。但し、一部のシボについてはS・Gの表記がないものもございます。",
        },
      ],
    },
    en: {
      q: "What is gloss?",
      a: [
        {
          type: "p",
          text: "Gloss is the degree of surface sheen, measured and controlled numerically with a dedicated gloss meter. It varies with the depth and roughness of the shibo and with finishing treatments, and it strongly affects how visible appearance defects such as sink marks and weld lines are.",
        },
        {
          type: "p",
          text: "We classify finishes as S (semi-gloss) and G (gloss). Note that some shibo patterns do not carry an S/G designation.",
        },
      ],
    },
  },
  {
    id: "q6",
    cat: "a",
    ja: {
      q: "「意匠面」とは。",
      a: [
        {
          type: "p",
          text: "製品として人の目に触れる面のことです。シボが施される対象面を指します。",
        },
      ],
    },
    en: {
      q: "What is a cosmetic surface?",
      a: [
        {
          type: "p",
          text: "The surface of a product that people see, sometimes called the design surface. It is the surface to which shibo is applied.",
        },
      ],
    },
  },
  {
    id: "q7",
    cat: "a",
    ja: {
      q: "なぜ設計の初期に決める必要があるのですか。",
      a: [
        {
          type: "p",
          text: "シボは金型側の加工であるため、1本の金型に施したシボが、その型から出るすべての製品の表面品質を決めてしまうからです。彫り込んだシボは除去できず、浅くする方向の修正にも限界があり、勾配不足のまま量産に入れば離型のたびに製品側面を擦り続けることになります。量産直前の工程でありながら、失敗のコストが最も大きい工程です。",
        },
      ],
    },
    en: {
      q: "Why does shibo need to be decided early in the design process?",
      a: [
        {
          type: "p",
          text: "Because shibo is applied to the mold, the texture on a single mold determines the surface quality of every part produced from it. Etched shibo cannot be removed, there are limits to how much it can be made shallower, and if mass production starts with insufficient draft, the side walls of the part will be scraped every time it is ejected. Although it is the last step before mass production, it is the step where mistakes are most costly.",
        },
      ],
    },
  },

  // ============ B. 抜き勾配とシボ深さのこと ============
  {
    id: "q8",
    cat: "b",
    ja: {
      q: "抜き勾配の基準を教えてください。",
      a: [
        { type: "p", text: "当社は『1度 ＝ 8μm』を推奨値としております。" },
        {
          type: "note",
          text: "設計勾配（°）＝ 基本勾配（1〜1.5°）＋ シボ深さ（μm）÷ 8",
        },
        {
          type: "p",
          text: "平滑面であっても樹脂の収縮・粘着で1〜1.5度は必要であり、シボの分はそこへ追加で積み上げます。深さ40μmの皮シボであれば、1.5度＋5度＝6.5度が設計値です。",
        },
      ],
    },
    en: {
      q: "What draft angle do you recommend?",
      a: [
        {
          type: "p",
          text: "We recommend 1° of draft for every 8 μm of shibo depth.",
        },
        {
          type: "note",
          text: "Design draft (°) = base draft (1–1.5°) + shibo depth (μm) ÷ 8",
        },
        {
          type: "p",
          text: "Even a smooth surface needs 1–1.5° because of resin shrinkage and adhesion, and the draft for the shibo is added on top of that. For a leather-grain texture 40 μm deep, the design value is 1.5° + 5° = 6.5°.",
        },
      ],
    },
  },
  {
    id: "q9",
    cat: "b",
    ja: {
      q: "深さと勾配の早見表はありますか。",
      a: [
        {
          type: "table",
          head: [
            "抜き勾配",
            "許容シボ深さ（8μm/度）",
            "参考：10μm/度",
            "該当するシボの目安",
          ],
          rows: [
            ["1°", "8μm", "10μm", "細目梨地、微細ヘアライン"],
            ["2°", "16μm", "20μm", "標準梨地、浅い幾何学模様"],
            ["3°", "24μm", "30μm", "標準梨地、浅い皮シボ"],
            ["4°", "32μm", "40μm", "粗目梨地、浅い皮シボ"],
            ["5°", "40μm", "50μm", "粗目梨地、標準皮シボ"],
            ["6°", "48μm", "60μm", "標準皮シボ、岩目"],
            ["8°", "64μm", "80μm", "深目皮シボ、レーザー加飾"],
            ["10°", "80μm", "100μm", "複合皮シボ、レーザー加飾"],
          ],
        },
      ],
    },
    en: {
      q: "Is there a quick reference table for depth and draft?",
      a: [
        {
          type: "table",
          head: [
            "Draft angle",
            "Allowable shibo depth (8 μm/°)",
            "Reference: 10 μm/°",
            "Typical shibo",
          ],
          rows: [
            ["1°", "8μm", "10μm", "Fine matte, fine hairline"],
            [
              "2°",
              "16μm",
              "20μm",
              "Standard matte, shallow geometric patterns",
            ],
            ["3°", "24μm", "30μm", "Standard matte, shallow leather grain"],
            ["4°", "32μm", "40μm", "Coarse matte, shallow leather grain"],
            ["5°", "40μm", "50μm", "Coarse matte, standard leather grain"],
            ["6°", "48μm", "60μm", "Standard leather grain, rock grain"],
            ["8°", "64μm", "80μm", "Deep leather grain, laser decoration"],
            [
              "10°",
              "80μm",
              "100μm",
              "Composite leather grain, laser decoration",
            ],
          ],
        },
      ],
    },
  },
  {
    id: "q10",
    cat: "b",
    ja: {
      q: "一般に言われる「シボ深さ10μに対して1度」ではないのですか。",
      a: [
        {
          type: "p",
          text: "その値は好条件下でようやく成立する限界値に近い設定であり、離型時に側面を擦ってシボが伸びる・白化する・テカるという事故がこの水準で現実に発生します。当社が1度あたり8μmに絞っているのは、その2割分を安全代として先に引いておく考え方です。深シボや軟質材では特に妥当と考えております。",
        },
      ],
    },
    en: {
      q: "Isn't the common rule 1° per 10 μm of shibo depth?",
      a: [
        {
          type: "p",
          text: "That figure is close to the limit and holds only under favorable conditions. At that level, real problems do occur: the side walls are scraped during ejection, causing the shibo to stretch, whiten, or turn glossy. We set our rule at 8 μm per degree to build in a 20% safety margin from the start, and we consider this especially appropriate for deep textures and soft materials.",
        },
      ],
    },
  },
  {
    id: "q11",
    cat: "b",
    ja: {
      q: "その目安は、どんな場合でも通用しますか。",
      a: [
        {
          type: "p",
          text: "いいえ。抜き勾配は金型構造・製品形状・樹脂（材料）・成形条件の影響を受けますので、実際には条件ごとの検討が必要です。",
        },
      ],
    },
    en: {
      q: "Does this guideline apply in every case?",
      a: [
        {
          type: "p",
          text: "No. Draft is affected by mold structure, part geometry, resin (material), and molding conditions, so each case needs to be reviewed individually.",
        },
      ],
    },
  },
  {
    id: "q12",
    cat: "b",
    ja: {
      q: "同じ角度の面なら、どこも同じシボ深さでよいですか。",
      a: [
        {
          type: "p",
          text: "いいえ。樹脂の収縮方向によって上限が倍近く変わります。",
        },
        {
          type: "table",
          head: ["面の種類", "10度の面での許容深さ", "実質の換算"],
          rows: [
            ["収縮によって離れていく面", "80μm", "8μm/度"],
            ["収縮によって抱きつく面", "40μm", "4μm/度"],
          ],
        },
        {
          type: "p",
          text: "抱きつく面は、より浅いシボを前提に考えてください。深物・箱物の側壁はコアを締め付けやすく、この影響を最も強く受けます。",
        },
      ],
    },
    en: {
      q: "Can surfaces with the same angle all have the same shibo depth?",
      a: [
        {
          type: "p",
          text: "No. Depending on the direction of resin shrinkage, the upper limit can differ by nearly a factor of two.",
        },
        {
          type: "table",
          head: [
            "Surface type",
            "Allowable depth on a 10° surface",
            "Effective ratio",
          ],
          rows: [
            ["Surfaces the part shrinks away from", "80μm", "8μm/°"],
            ["Surfaces the part shrinks onto", "40μm", "4μm/°"],
          ],
        },
        {
          type: "p",
          text: "Plan for shallower shibo on surfaces the part shrinks onto. The side walls of deep or box-shaped parts tend to grip the core and are the most strongly affected.",
        },
      ],
    },
  },
  {
    id: "q13",
    cat: "b",
    ja: {
      q: "割増が必要になるのはどんなときですか。",
      a: [
        {
          type: "list",
          items: [
            "PC・PC/ABS・GF入り … 1.2倍前後",
            "アンダーカット気味のパターン",
            "立ち壁50mm超 … さらに ＋0.5〜1度",
          ],
        },
      ],
    },
    en: {
      q: "When is additional draft needed?",
      a: [
        {
          type: "list",
          items: [
            "PC, PC/ABS, and glass-filled (GF) resins: about 1.2×",
            "Patterns that tend toward undercuts",
            "Walls taller than 50 mm: a further 0.5–1°",
          ],
        },
      ],
    },
  },
  {
    id: "q14",
    cat: "b",
    ja: {
      q: "形状上どうしても勾配が取れません。打つ手はありますか。",
      a: [
        {
          type: "p",
          text: "5軸レーザー彫刻で谷底や側壁の断面形状そのものを制御して離型させる、面ごとにシボ深さを変える、スライドや傾斜コアで抜き方向を変える、といった方法がございます。",
        },
      ],
    },
    en: {
      q: "The part geometry doesn't allow enough draft. What can be done?",
      a: [
        {
          type: "p",
          text: "Options include using 5-axis laser engraving to control the cross-sectional profile of the valleys and side walls so that the part releases, varying the shibo depth by surface, and changing the ejection direction with slides or angled lifters.",
        },
      ],
    },
  },
  {
    id: "q15",
    cat: "b",
    ja: {
      q: "抜き勾配0度でシボを入れられますか。",
      a: [
        {
          type: "p",
          text: "0.5度以下および0度は原則として不可です。POM・PPのような高収縮材では、収縮によって成形品がシボ面から離れるため、0度でもカジリ等なく離型した実例はございます。ただし離型できることと狙った意匠が出ることは別問題で、この条件では転写不良・艶ムラが生じることがあります。",
        },
      ],
    },
    en: {
      q: "Can shibo be applied with zero draft?",
      a: [
        {
          type: "p",
          text: "As a rule, drafts of 0.5° or less, including 0°, are not possible. With high-shrinkage materials such as POM and PP, the part shrinks away from the textured surface, and there have been cases of clean release at 0° without scuffing. However, releasing the part and achieving the intended appearance are separate issues; under these conditions, poor transfer and uneven gloss can occur.",
        },
      ],
    },
  },
  {
    id: "q16",
    cat: "b",
    ja: {
      q: "R部でシボの範囲（見切り）はどこで切ればよいですか。",
      a: [
        {
          type: "p",
          text: "Rエンドよりやや下が望ましいです。Rエンドでマスキングするとアンダーカットとなり、カジリが発生します。",
        },
      ],
    },
    en: {
      q: "Where should the shibo boundary be placed on a radius?",
      a: [
        {
          type: "p",
          text: "Slightly below the end of the radius is preferable. Masking right at the end of the radius creates an undercut, which causes scuffing.",
        },
      ],
    },
  },
  {
    id: "q17",
    cat: "b",
    terms: ["見切り", "カジリ"],
    ja: {
      q: "図面に「R尻まで」と指示していますが、問題ありますか。",
      a: [
        {
          type: "p",
          text: "この指示は多いのですが、Rの終端に段差が発生し、カジリ・バリのトラブルになることがあります。回避のため見切り点を45度方向にとることがありますので、図面上で明確かつ安全な指示があることが好ましいです。",
        },
      ],
    },
    en: {
      q: "Our drawings specify texture “up to the end of the radius.” Is that a problem?",
      a: [
        {
          type: "p",
          text: "This instruction is common, but it can create a step at the end of the radius, leading to scuffing and flash. To avoid this, the boundary is sometimes placed in the 45° direction, so a clear and safe instruction on the drawing is preferable.",
        },
      ],
    },
  },
  {
    id: "q18",
    cat: "b",
    ja: {
      q: "「徐変（じょへん）」とは。",
      a: [
        {
          type: "p",
          text: "R稜線などでシボ深さを段階的に浅くしていく手法です。抜け勾配2度の箇所では、35μ→30μ→25μ→20μ→15μ→10μと徐々にマスキングを行います。極端な深さで急にマスキングするとマスキングラインが目立つため、できるだけ徐々に行うことが望ましいです。",
        },
      ],
    },
    en: {
      q: "What is gradation (johen)?",
      a: [
        {
          type: "p",
          text: "A technique for reducing shibo depth in stages, for example along a radius edge. On a surface with 2° of draft, masking is applied step by step: 35 → 30 → 25 → 20 → 15 → 10 μm. Masking abruptly at an extreme depth makes the masking line conspicuous, so the transition should be as gradual as possible.",
        },
      ],
    },
  },
  {
    id: "q19",
    cat: "b",
    terms: ["アンダーカット", "マスキング", "彫刻のくずれ"],
    ja: {
      q: "彫刻部分で注意することはありますか。",
      a: [
        { type: "p", text: "彫刻の向きによってリスクが異なります。" },
        {
          type: "cases",
          items: [
            {
              label: "金型が凹彫刻の場合（製品では凸）",
              text: "腐食によって根元の角がダレることで、特に深いシボの場合は彫刻形状がくずれる可能性があります。",
            },
            {
              label: "金型が凸彫刻の場合（製品では凹）",
              text: "根元がアンダーカットになる危険があり、マスキングの難易度が高くエッチング時間も長くなるため、マスキング剥離による彫刻破損の危険があります。",
            },
          ],
        },
      ],
    },
    en: {
      q: "Are there points to watch for in engraved areas?",
      a: [
        {
          type: "p",
          text: "The risks differ depending on the direction of the engraving.",
        },
        {
          type: "cases",
          items: [
            {
              label: "Recessed engraving in the mold (raised on the part)",
              text: "Etching can round off the corners at the base, and with deep shibo in particular, the engraved shape may lose its definition.",
            },
            {
              label: "Raised engraving in the mold (recessed on the part)",
              text: "The base risks becoming an undercut. Masking is more difficult and etching takes longer, so there is a risk of the masking peeling and damaging the engraving.",
            },
          ],
        },
      ],
    },
  },

  // ============ C. 加工工法のこと ============
  {
    id: "q20",
    cat: "c",
    ja: {
      q: "シボの加工工法にはどんな種類がありますか。",
      a: [
        {
          type: "p",
          text: "基本となるのは次の3つで、いずれも金型のキャビ面に対してパターンを形成します。",
        },
        {
          type: "table",
          head: ["工法", "内容"],
          rows: [
            ["エッチング工法", "薬品で金型を溶かしてパターンを形成する"],
            [
              "サンドブラスト工法",
              "ブラスト（砂）やガラスビーズを吹き付けてパターンを形成する",
            ],
            ["レーザー工法", "レーザー光で金型を焼き削ってパターンを形成する"],
          ],
        },
        {
          type: "p",
          text: "これらに加えて、マスクリムーブ工法とハイブリッドエッチングという応用工法がございます。",
        },
      ],
    },
    en: {
      q: "What processing methods are used for shibo?",
      a: [
        {
          type: "p",
          text: "There are three basic methods, all of which form a pattern on the cavity surface of the mold.",
        },
        {
          type: "table",
          head: ["Method", "Description"],
          rows: [
            [
              "Etching",
              "Dissolves the mold surface with chemicals to form the pattern",
            ],
            [
              "Sandblasting",
              "Blasts sand or glass beads onto the surface to form the pattern",
            ],
            [
              "Laser",
              "Ablates the mold surface with a laser beam to form the pattern",
            ],
          ],
        },
        {
          type: "p",
          text: "In addition, there are two advanced methods: the Mask Remove method and Hybrid Etching.",
        },
      ],
    },
  },
  {
    id: "q21",
    cat: "c",
    ja: {
      q: "エッチングはどういう原理で模様ができるのですか。",
      a: [
        {
          type: "p",
          text: "耐酸性膜でマスキングをし、エッチング液に浸して腐食させ（深さは時間でコントロール）、マスキング以外の鋼材面が凹となり、膜を除去して所定の形状を得る、という4ステップです。",
        },
      ],
    },
    en: {
      q: "How does etching create a pattern?",
      a: [
        {
          type: "p",
          text: "It works in four steps: the surface is masked with an acid-resistant film; the mold is immersed in etching solution and corroded (depth is controlled by time); the steel surface not covered by the mask becomes recessed; and the film is removed to leave the intended shape.",
        },
      ],
    },
  },
  {
    id: "q22",
    cat: "c",
    ja: {
      q: "「マスキング」「耐酸性膜」とは。",
      a: [
        {
          type: "defs",
          items: [
            {
              dt: "マスキング",
              dd: "加工したくない部分をテープや塗料などで覆う工程。求められる性能は工法によって異なる（サンドブラスト用は耐圧、エッチング用は耐水・耐圧）",
            },
            {
              dt: "耐酸性膜",
              dd: "エッチングの際に腐食させたくない部分を保護する膜。この膜がない部分だけが腐食して凹になる",
            },
          ],
        },
      ],
    },
    en: {
      q: "What are “masking” and “acid-resistant film”?",
      a: [
        {
          type: "defs",
          items: [
            {
              dt: "Masking",
              dd: "The process of covering areas that should not be processed with tape, coating, or similar. The required properties depend on the method: pressure resistance for sandblasting, and water and pressure resistance for etching.",
            },
            {
              dt: "Acid-resistant film",
              dd: "A film that protects areas that should not be corroded during etching. Only the areas without this film are corroded and become recessed.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "q23",
    cat: "c",
    ja: {
      q: "「パターン転写」とは。",
      a: [
        {
          type: "p",
          text: "模様（版）を金型表面に写し取る工程です。塗料の噴霧やフィルムによって行います。フィルムを金型形状に合わせて切る工程が『フィルムカット』、フィルムの継ぎ目でパターンが不連続にならないよう手作業で直す工程が『つなぎ目修正』です。",
        },
      ],
    },
    en: {
      q: "What is pattern transfer?",
      a: [
        {
          type: "p",
          text: "The process of reproducing the pattern (master) on the mold surface, done by spraying paint or by applying film. Cutting the film to fit the mold shape is called film cutting, and correcting the joints by hand so that the pattern stays continuous across film seams is called seam correction.",
        },
      ],
    },
  },
  {
    id: "q24",
    cat: "c",
    ja: {
      q: "エッチングの梨地シボは、どんな流れで加工されますか。",
      a: [
        {
          type: "list",
          ordered: true,
          items: [
            "金型入荷・脱脂洗浄",
            "エッチング前表面処理",
            "マスキング",
            "検査",
            "パターン転写",
            "エッチング",
            "検査（目標深さ未達ならパターン転写へ戻る）",
            "ブラスト・ビーズ処理",
            "深さ・粗さ検査",
          ],
        },
        {
          type: "p",
          text: "目標の深さ・粗さになるまでパターン転写とエッチングを繰り返します。深さ検査は硬質ゴム状粘土で反転させ、ルーペで目視確認します。なお金型が入荷してから最初に行うのは脱脂洗浄で、油分や汚れを除去してからマスキング工程に入ります。",
        },
      ],
    },
    en: {
      q: "What is the process flow for an etched matte shibo?",
      a: [
        {
          type: "list",
          ordered: true,
          items: [
            "Mold receipt, degreasing and cleaning",
            "Surface treatment before etching",
            "Masking",
            "Inspection",
            "Pattern transfer",
            "Etching",
            "Inspection (return to pattern transfer if the target depth has not been reached)",
            "Blasting and bead treatment",
            "Depth and roughness inspection",
          ],
        },
        {
          type: "p",
          text: "Pattern transfer and etching are repeated until the target depth and roughness are achieved. Depth is inspected by taking a reverse impression with a hard, rubber-like putty and checking it visually with a loupe. The first step after a mold arrives is degreasing and cleaning, which removes oil and dirt before masking begins.",
        },
      ],
    },
  },
  {
    id: "q25",
    cat: "c",
    ja: {
      q: "マスクリムーブ工法は、従来の多段シボと何が違うのですか。",
      a: [
        {
          type: "p",
          text: "マスキングを人の手で作るか、データから作るかが違います。腐食を重ねて深さを積み上げるという加工の考え方そのものは多段シボと同じです。",
        },
        {
          type: "table",
          head: ["", "従来の多段シボ", "マスクリムーブ工法"],
          rows: [
            [
              "マスキングの作り方",
              "フィルムを人の手で貼り込む『手貼り』",
              "金型データとシボのテクスチャデータをもとに、レーザーでレジストを除去する",
            ],
            ["依存するもの", "職人の技能と経験", "元データの精度"],
          ],
        },
      ],
    },
    en: {
      q: "How does the Mask Remove method differ from conventional multi-stage shibo?",
      a: [
        {
          type: "p",
          text: "The difference is whether the masking is made by hand or from data. The underlying approach of building up depth through repeated etching is the same as in conventional multi-stage shibo.",
        },
        {
          type: "table",
          head: ["", "Conventional multi-stage shibo", "Mask Remove method"],
          rows: [
            [
              "How masking is made",
              "Film applied by hand",
              "Resist removed by laser, based on mold data and shibo texture data",
            ],
            [
              "Depends on",
              "Craftsman skill and experience",
              "Accuracy of the source data",
            ],
          ],
        },
      ],
    },
  },
  {
    id: "q26",
    cat: "c",
    ja: {
      q: "マスクリムーブ工法にすると、何が良くなりますか。",
      a: [
        {
          type: "p",
          text: "工数が大幅に削減されること、そして金型間の仕上がりが揃うことの2点です。多段シボで最も手間のかかるフィルム貼りの工数が減り、段数が多いほど、また曲面や複雑形状が多い金型ほど効果が大きくなります。",
        },
        {
          type: "p",
          text: "また同じデータを使うため、複数の同じ金型でも同じ仕上がりになります。手貼りでは型ごと・作業者ごとにわずかな差が生じますが、データ由来であればその差が出ません。",
        },
      ],
    },
    en: {
      q: "What are the benefits of the Mask Remove method?",
      a: [
        {
          type: "p",
          text: "There are two: a significant reduction in labor, and consistent results across molds. It cuts the hours spent applying film, the most labor-intensive part of multi-stage shibo, and the effect grows with the number of stages and with the amount of curved or complex geometry on the mold.",
        },
        {
          type: "p",
          text: "And because the same data is used, multiple identical molds come out with the same finish. Hand-applied film produces slight differences between molds and between workers, but data-driven masking does not.",
        },
      ],
    },
  },
  {
    id: "q27",
    cat: "c",
    ja: {
      q: "ハイブリッドエッチングは、レーザー工法単独と何が違いますか。",
      a: [
        {
          type: "p",
          text: "レーザー加工に別の処理を組み合わせて仕上げる点です。レーザー単独では加工痕が残りやすく質感の作り込みに限界がありますが、後工程を重ねることで表面の表情と光沢を整えられます。",
        },
        {
          type: "p",
          text: "組み合わせる相手はエッチングだけではなく、粒子を吹き付けるイエプコピーニングで仕上げる選択肢もございます。また、切削加工＋レーザー、レーザー＋マイクロエッチングといった組み合わせもございます。",
        },
      ],
    },
    en: {
      q: "How does Hybrid Etching differ from laser processing alone?",
      a: [
        {
          type: "p",
          text: "It combines laser processing with another treatment to finish the surface. Laser processing alone tends to leave tool marks and has limits in refining texture, but adding subsequent processes allows the surface character and gloss to be adjusted.",
        },
        {
          type: "p",
          text: "Etching is not the only option for the second process: IEPCO peening, which blasts particles onto the surface, is another finishing choice. Combinations such as machining + laser and laser + micro-etching are also available.",
        },
      ],
    },
  },
  {
    id: "q28",
    cat: "c",
    ja: {
      q: "エッチングとレーザー、どちらを選べばよいですか。",
      a: [
        {
          type: "p",
          text: "断面形状を制御できるかどうかが決定的な差です。勾配が取れない部位では、レーザーで断面形状を制御して離型させられます。",
        },
        {
          type: "table",
          head: ["比較項目", "フォトエッチング", "5軸レーザー彫刻"],
          rows: [
            ["原理", "薬品による等方的な腐食", "データに基づく直接彫刻"],
            [
              "断面形状",
              "選べない（等方腐食のため）",
              "谷底や側壁角度を設計できる",
            ],
            [
              "再現性",
              "マスターと職人技に依存",
              "データで再現。国内外の拠点で同一のシボを出せる",
            ],
            [
              "表現力",
              "梨地・皮シボ・幾何学に強い",
              "深彫り・大胆な立体加飾・機能性パターン",
            ],
            [
              "素材の再現",
              "パターン原紙ベース",
              "3Dスキャン（分解能1μm）で布・木・石を再現",
            ],
            ["補修性", "再シボで継ぎ目が出やすい", "データから再加工が可能"],
            ["コスト・納期", "比較的短い", "深彫り・大面積は加工時間が支配的"],
          ],
        },
        {
          type: "p",
          text: "なお当社はレーザー万能主義ではありません。化学エッチングの利点（広範囲を短時間で均一に加工できる、コスト面で有利な場合がある）も熟知したうえで使い分けております。",
        },
      ],
    },
    en: {
      q: "Should I choose etching or laser?",
      a: [
        {
          type: "p",
          text: "The decisive difference is whether the cross-sectional profile can be controlled. Where draft cannot be secured, laser can control the profile so that the part releases.",
        },
        {
          type: "table",
          head: ["Item", "Photo etching", "5-axis laser engraving"],
          rows: [
            [
              "Principle",
              "Isotropic corrosion by chemicals",
              "Direct engraving based on data",
            ],
            [
              "Cross-sectional profile",
              "Cannot be chosen (isotropic corrosion)",
              "Valley bottoms and side-wall angles can be designed",
            ],
            [
              "Reproducibility",
              "Depends on the master and craftsmanship",
              "Reproduced from data; identical shibo at sites in Japan and abroad",
            ],
            [
              "Expressive range",
              "Strong in matte, leather grain, and geometric patterns",
              "Deep engraving, bold 3D decoration, functional patterns",
            ],
            [
              "Reproducing materials",
              "Based on pattern originals",
              "Reproduces fabric, wood, and stone via 3D scanning (1 μm resolution)",
            ],
            [
              "Repairability",
              "Re-texturing tends to leave visible seams",
              "Can be reprocessed from data",
            ],
            [
              "Cost and lead time",
              "Relatively short",
              "Processing time dominates for deep engraving and large areas",
            ],
          ],
        },
        {
          type: "p",
          text: "We do not treat laser as the answer to everything. We choose between methods with a thorough understanding of the advantages of chemical etching: it can process large areas uniformly in a short time, and it can be more cost-effective.",
        },
      ],
    },
  },
  {
    id: "q29",
    cat: "c",
    terms: ["ガラスビーズ", "サンドブラスト工法", "目詰まり"],
    ja: {
      q: "砂（サンドブラスト）とガラスビーズは何が違うのですか。",
      a: [
        {
          type: "p",
          text: "粒子の形状が違い、それが光沢・傷付き性・目詰まりに影響します。",
        },
        {
          type: "table",
          head: ["項目", "砂（アルミナ）", "ガラスビーズ"],
          rows: [
            ["断面形状", "先端が尖っている", "先端が丸まっている"],
            [
              "光の反射",
              "乱反射する（低グロス化に有効）",
              "反射しやすい（グロスが上がる）",
            ],
            ["傷付き性", "不利", "有利"],
            ["ガス・ヤニの目詰まり", "しやすい", "しにくい"],
          ],
        },
      ],
    },
    en: {
      q: "What is the difference between sand (sandblasting) and glass beads?",
      a: [
        {
          type: "p",
          text: "The particle shape differs, and this affects gloss, scratch resistance, and clogging.",
        },
        {
          type: "table",
          head: ["Item", "Sand (alumina)", "Glass beads"],
          rows: [
            ["Particle profile", "Sharp edges", "Rounded"],
            [
              "Light reflection",
              "Diffuse (effective for lowering gloss)",
              "Reflective (raises gloss)",
            ],
            ["Scratch resistance", "Less favorable", "More favorable"],
            ["Clogging by gas and deposits", "More prone", "Less prone"],
          ],
        },
      ],
    },
  },
  {
    id: "q30",
    cat: "c",
    terms: ["ガラスビーズ", "グロス"],
    ja: {
      q: "ガラスビーズ処理をすると、シボはどう変わりますか。",
      a: [
        {
          type: "p",
          text: "凹凸がつぶれて丸みを帯び、シボが浅く表面がなめらかになります。光が反射しやすくなるためツヤが出ます（グロス値が高くなる）。この処理で削られる深さは5ミクロン以下です。",
        },
        {
          type: "p",
          text: "サンドブラスト加工のみの場合は、シボが深く表面がデコボコになり、ツヤが消えます。",
        },
      ],
    },
    en: {
      q: "How does glass bead treatment change the shibo?",
      a: [
        {
          type: "p",
          text: "The peaks are flattened and rounded, making the shibo shallower and the surface smoother. Because the surface reflects light more readily, gloss increases (higher gloss value). The depth removed by this treatment is 5 μm or less.",
        },
        {
          type: "p",
          text: "With sandblasting alone, the shibo is deep, the surface is rough, and the finish is matte.",
        },
      ],
    },
  },

  // ============ D. シボの種類と柄の指定 ============
  {
    id: "q31",
    cat: "d",
    ja: {
      q: "代表的なシボの種類を教えてください。",
      a: [
        {
          type: "table",
          head: ["種類", "特徴と主な用途"],
          rows: [
            [
              "梨地シボ",
              "細かい砂目状の最も基本的なシボ。家電製品全般に多く使用",
            ],
            [
              "幾何学シボ",
              "規則的なものから不規則なものまで多種多様。自動車のインパネ、トリム、家電部品など",
            ],
            [
              "皮シボ（単シボ）",
              "1回の工程でできる革目調。自動車のシート部品など",
            ],
            [
              "皮シボ（複合シボ）",
              "2回以上の工程を重ねた革目調。自動車のインストルメントパネル、ドア部品など",
            ],
            ["ヘアラインシボ", "髪の毛のような細い線状のシボ"],
            ["鏡面シボ", "ドット等と鏡面を組み合わせたシボ"],
            [
              "マイクロドット加工",
              "微細なドットを追加する加工。キズを目立たなくする対策に用いる",
            ],
            ["線シボ", "ガス抜きを目的とした線状のシボ。ウェルド対策に用いる"],
            [
              "ウラシボ",
              "アンダーカット部などに追加するシボ。離型バランスの調整に用いる",
            ],
          ],
        },
      ],
    },
    en: {
      q: "What are the main types of shibo?",
      a: [
        {
          type: "table",
          head: ["Type", "Characteristics and typical uses"],
          rows: [
            [
              "Matte shibo",
              "The most basic shibo, a fine sand-like texture. Widely used across home appliances",
            ],
            [
              "Geometric shibo",
              "A wide variety, from regular to irregular patterns. Automotive instrument panels, trim, appliance parts, etc.",
            ],
            [
              "Leather grain (single-pass)",
              "A leather-like texture made in a single process. Automotive seat components, etc.",
            ],
            [
              "Leather grain (composite)",
              "A leather-like texture built up over two or more processes. Automotive instrument panels, door components, etc.",
            ],
            [
              "Hairline shibo",
              "A texture of fine lines resembling strands of hair",
            ],
            [
              "Mirror-combination shibo",
              "Shibo that combines dots or similar elements with a mirror finish",
            ],
            [
              "Micro-dot processing",
              "Adds fine dots to the surface. Used to make scratches less noticeable",
            ],
            [
              "Line shibo",
              "A linear shibo for gas venting. Used to counter weld lines",
            ],
            [
              "Ura-shibo",
              "Shibo added to areas such as undercuts. Used to balance mold release",
            ],
          ],
        },
      ],
    },
  },
  {
    id: "q32",
    cat: "d",
    ja: {
      q: "「単シボ」と「複合シボ」の違いは。",
      a: [
        {
          type: "p",
          text: "工程の回数です。1回の工程でできるものが単シボ、2回以上の工程を重ねてできるものが複合シボです。",
        },
      ],
    },
    en: {
      q: "What is the difference between single-pass and composite shibo?",
      a: [
        {
          type: "p",
          text: "The number of processes. Single-pass shibo is made in one process; composite shibo is built up over two or more.",
        },
      ],
    },
  },
  {
    id: "q33",
    cat: "d",
    ja: {
      q: "複合シボは、どうやって深みのある模様を作るのですか。",
      a: [
        {
          type: "p",
          text: "パターン転写とエッチングを段階的に繰り返します。一段目で最初のパターンを転写・腐食し（例：40μ）、二段目では新しいパターンで新たな穴ができると同時に、一段目でできた穴がそのまま深くなり、角が腐食でやや丸くなります。三段目でさらに深く、角はさらに丸くなり、最後にパターン無しで全体をエッチングすれば頂点の角も丸まって目標形状がほぼ再現できます。",
        },
        {
          type: "p",
          text: "この多段の工程をデジタル化したものがマスクリムーブ工法です。",
        },
      ],
    },
    en: {
      q: "How does composite shibo create a pattern with depth?",
      a: [
        {
          type: "p",
          text: "Pattern transfer and etching are repeated in stages. In the first stage, an initial pattern is transferred and etched (e.g. 40 μm). In the second stage, a new pattern creates new recesses, while the recesses from the first stage become deeper and their corners are slightly rounded by the etching. The third stage deepens them further and rounds the corners more. A final overall etch without a pattern then rounds the corners at the peaks, closely reproducing the target shape.",
        },
        {
          type: "p",
          text: "The Mask Remove method is a digitized version of this multi-stage process.",
        },
      ],
    },
  },
  {
    id: "q34",
    cat: "d",
    ja: {
      q: "柄はどういう順番で選定すればよいですか。",
      a: [
        {
          type: "p",
          text: "制約の強い順に絞り、意匠は最後に決めてください。意匠から入ると、後で勾配に弾かれてやり直しになります。",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "抜き勾配 … 深さ上限の足切り。金型設計の初期に確定させる",
            "樹脂と転写率 … PPは浅く出る／GFは繊維が浮いて潰れる／軟質は艶が下がる",
            "要求機能 … 防眩はランダム、グリップは山が平坦、洗浄性は浅く丸い谷",
            "光沢度 … 深さと艶は独立変数。60度グロス値で数値管理する",
            "色との相互作用 … 黒は深く粗く見え、淡色は浅く見える。艶が高いほど深く見え、低いほど浅く見える。中間色で決める",
            "部品形状・型構成 … シボ合わせ、R部の深浅、PL・ピン跡・ゲート跡との相性",
            "後工程との両立 … 印刷・箔押し・溶着・シール面はシボを抜く（マスキング）",
            "補修性とコスト … 型修理を想定するなら補修しやすい梨地系。深彫りは時間が支配的",
            "承認プロセス … シボ板・量産条件トライ・限度見本・マスター管理番号の記録",
          ],
        },
      ],
    },
    en: {
      q: "In what order should a pattern be selected?",
      a: [
        {
          type: "p",
          text: "Narrow down from the strongest constraints first, and decide the design last. If you start from the design, it will later be ruled out by the draft and you will have to start over.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Draft angle: sets the depth ceiling. Finalize it early in mold design",
            "Resin and transfer rate: PP transfers shallower; with GF, fibers rise to the surface and flatten the texture; soft materials lower gloss",
            "Required function: random patterns for anti-glare, flat peaks for grip, shallow rounded valleys for cleanability",
            "Gloss: depth and gloss are independent variables. Control gloss numerically with the 60° gloss value",
            "Interaction with color: black looks deeper and coarser, light colors look shallower; higher gloss looks deeper, lower gloss looks shallower. Decide using a mid-tone color",
            "Part geometry and mold layout: texture matching between parts, depth variation on radii, and compatibility with the parting line, pin marks, and gate marks",
            "Compatibility with secondary processes: leave shibo off (mask) surfaces for printing, hot stamping, welding, and sealing",
            "Repairability and cost: if mold repairs are expected, choose matte-type textures that are easy to repair. For deep engraving, processing time dominates",
            "Approval process: record the texture plaque, mass-production condition trials, limit samples, and master control number",
          ],
        },
      ],
    },
  },
  {
    id: "q35",
    cat: "d",
    terms: ["専用シボ番号"],
    ja: {
      q: "柄はどう指定すればよいですか。",
      a: [
        {
          type: "p",
          text: "メーカー名＋番号＋深さで特定してください。見本帳は各社が独自の柄番号を持っており、同じ番号名でもメーカーが違えば別物です。パターン番号だけの図面指示は、数年後の追加生産で必ず揉めます。",
        },
        {
          type: "p",
          text: "シボ加工先を統一したうえで専用シボ番号を運用いただくと、型間・拠点間のばらつきを抑えられます。",
        },
      ],
    },
    en: {
      q: "How should a pattern be specified?",
      a: [
        {
          type: "p",
          text: "Specify it by maker name + pattern number + depth. Each maker's sample book has its own pattern numbers, and the same number from a different maker is a different pattern. A drawing that gives only a pattern number will inevitably lead to disputes when additional production is needed years later.",
        },
        {
          type: "p",
          text: "Standardizing on a single texturing supplier and using a dedicated shibo number helps reduce variation between molds and between sites.",
        },
      ],
    },
  },
  {
    id: "q36",
    cat: "d",
    ja: {
      q: "VDI 3400で指定してもよいですか。",
      a: [
        {
          type: "p",
          text: "VDI 3400は放電面の『粗さ』の等級（0〜45）であり、シボの『柄』の規格ではありません。換算式は Ra(μm) ＝ 10^(N/20) ÷ 10 です。米国のSPI（A-1〜D-3）との公式な換算もなく、近似対応にとどまります。意匠柄の指定にはお使いいただけません。",
        },
        {
          type: "p",
          text: "なお、VDI規格の一部については、相当番号として当社オリジナルの番手でも管理しております。",
        },
      ],
    },
    en: {
      q: "Can we specify shibo using VDI 3400?",
      a: [
        {
          type: "p",
          text: "VDI 3400 is a grading of surface roughness for EDM surfaces (0–45), not a standard for shibo patterns. The conversion formula is Ra (μm) = 10^(N/20) ÷ 10. There is also no official conversion to the US SPI standard (A-1 to D-3), only an approximate correspondence. It cannot be used to specify decorative patterns.",
        },
        {
          type: "p",
          text: "That said, for part of the VDI scale, we also manage equivalent grades under our own numbering.",
        },
      ],
    },
  },
  {
    id: "q37",
    cat: "d",
    ja: {
      q: "見本帳で決めれば、そのまま製品も同じ見え方になりますか。",
      a: [
        {
          type: "p",
          text: "なりません。同じ柄でも樹脂・色（特に黒や濃色）によって見え方は大きく変わり、転写状態も樹脂温度・金型温度・保圧・保圧時間で変化します。最終判断は必ず現物で行い、実材料・実色でのシボ板（プラーク）確認を標準としてください。",
        },
        {
          type: "note",
          text: "当社で発行しているサンプルは、黒色がABS、透明がPCとなっております。",
        },
      ],
    },
    en: {
      q: "If we choose from a sample book, will the product look the same?",
      a: [
        {
          type: "p",
          text: "No. The same pattern can look very different depending on the resin and color (especially black and dark colors), and transfer also varies with resin temperature, mold temperature, holding pressure, and holding time. Always make the final decision on actual parts, and make it standard practice to check a texture plaque in the actual material and color.",
        },
        {
          type: "note",
          text: "Our black samples are molded in ABS, and our clear samples in PC.",
        },
      ],
    },
  },
  {
    id: "q38",
    cat: "d",
    terms: ["グロス", "ツヤむら", "ヒケ"],
    ja: {
      q: "シボの品質はどうやって管理していますか。",
      a: [
        {
          type: "p",
          text: "ツヤ（グロス）測定機器と、深さ・粗さ測定機器の2種類で数値管理しております。",
        },
        {
          type: "p",
          text: "なおツヤむら・ヒケ・ウェルド・傷付きという4つの不具合は、いずれも見え方が光沢に左右されるため、『ツヤ調整』が共通して有効な対策になります。",
        },
      ],
    },
    en: {
      q: "How do you control shibo quality?",
      a: [
        {
          type: "p",
          text: "We control it numerically with two types of instruments: gloss meters and depth/roughness measuring instruments.",
        },
        {
          type: "p",
          text: "The visibility of four defects—uneven gloss, sink marks, weld lines, and scratches—depends on gloss, so gloss adjustment is an effective countermeasure common to all of them.",
        },
      ],
    },
  },

  // ============ E. 型材・補修・金型管理 ============
  {
    id: "q39",
    cat: "e",
    ja: {
      q: "型材によってシボの出方は変わりますか。",
      a: [
        {
          type: "p",
          text: "変わります。エッチングは腐食のされ方で仕上がりが決まるため、鋼種の組織均一性が支配的です。",
        },
        {
          type: "table",
          head: ["材種", "代表鋼種", "エッチング適性のポイント"],
          rows: [
            [
              "プリハードン鋼",
              "NAK80 / NAK55 / PX5",
              "シボ用途の主力。NAK80は組織が均一で鏡面性も高い",
            ],
            ["炭素鋼", "S55C / S50C", "偏析・脱炭層があると腐食ムラが出やすい"],
            [
              "熱間工具鋼",
              "SKD61",
              "硬度が高く腐食速度が遅い。均一性は熱処理依存",
            ],
            [
              "ステンレス系",
              "STAVAX / HPM38 / S-STAR / S136",
              "耐食性が高い＝腐食しにくく、条件が別物",
            ],
            [
              "アルミ",
              "A5052 / A7075",
              "試作・ブロー型。腐食が速く柄が崩れやすい",
            ],
          ],
        },
      ],
    },
    en: {
      q: "Does the mold steel affect how shibo turns out?",
      a: [
        {
          type: "p",
          text: "Yes. Because the result of etching depends on how the steel corrodes, the uniformity of the steel's microstructure is the dominant factor.",
        },
        {
          type: "table",
          head: ["Material type", "Typical grades", "Key points for etching"],
          rows: [
            [
              "Pre-hardened steel",
              "NAK80 / NAK55 / PX5",
              "The mainstay for shibo. NAK80 has a uniform structure and polishes to a high mirror finish",
            ],
            [
              "Carbon steel",
              "S55C / S50C",
              "Segregation or decarburized layers tend to cause uneven etching",
            ],
            [
              "Hot-work tool steel",
              "SKD61",
              "High hardness means slow corrosion. Uniformity depends on heat treatment",
            ],
            [
              "Stainless steels",
              "STAVAX / HPM38 / S-STAR / S136",
              "High corrosion resistance means they etch slowly and need entirely different conditions",
            ],
            [
              "Aluminum",
              "A5052 / A7075",
              "Used for prototype and blow molds. Etches quickly, and patterns tend to break down",
            ],
          ],
        },
      ],
    },
  },
  {
    id: "q40",
    cat: "e",
    ja: {
      q: "硬度は関係しますか。",
      a: [
        {
          type: "p",
          text: "硬度が高いほど腐食は遅く、同じ薬液・時間では浅くなります。硬度指定と柄指定はセットでご確認ください。",
        },
      ],
    },
    en: {
      q: "Does hardness matter?",
      a: [
        {
          type: "p",
          text: "The harder the steel, the slower it corrodes, so the same solution and time produce a shallower result. Please confirm the hardness specification and the pattern specification together.",
        },
      ],
    },
  },
  {
    id: "q41",
    cat: "e",
    terms: ["共材"],
    ja: {
      q: "溶接した金型にシボを加工したら、ムラが出ました。なぜですか。",
      a: [
        {
          type: "p",
          text: "母材と溶接部の組成が違うため、エッチングの進み方が変わってシボムラ・ツヤムラになります。やむなく溶接を行う場合は、母材と同じ材質＝『共材』を用いることが望ましく、補修後のシボ入れは事前申告を必須とさせてください。",
        },
      ],
    },
    en: {
      q: "We applied shibo to a welded mold and the result was uneven. Why?",
      a: [
        {
          type: "p",
          text: "The base metal and the weld differ in composition, so etching progresses differently and causes uneven texture and gloss. If welding is unavoidable, it is best to use the same material as the base metal (matching material), and we ask that you always notify us in advance when shibo is to be applied after a repair.",
        },
      ],
    },
  },
  {
    id: "q42",
    cat: "e",
    ja: {
      q: "「偏析（鋼材目）」とは。",
      a: [
        {
          type: "p",
          text: "鋼材の成分が不均一なために、加工面のほぼ全域に鋼材の流れ方向の模様が出てしまう現象です。金型材質の統一化、それが困難な場合はいずれの材質かの情報開示をお願いしております。",
        },
      ],
    },
    en: {
      q: "What is segregation (steel flow lines)?",
      a: [
        {
          type: "p",
          text: "A phenomenon in which uneven composition of the steel causes a pattern following the steel's flow direction to appear across almost the entire processed surface. We ask that mold materials be standardized or, where that is difficult, that you tell us which material is used.",
        },
      ],
    },
  },
  {
    id: "q43",
    cat: "e",
    ja: {
      q: "入れ子で分割されている意匠面はどうなりますか。",
      a: [
        {
          type: "p",
          text: "入れ子の合わせ部では柄が切れます。意匠面の分割線はデザイン側と事前に調整してください。シームレスを要求される場合はレーザー加工をご提案いたします。",
        },
      ],
    },
    en: {
      q: "What happens when a cosmetic surface is split across inserts?",
      a: [
        {
          type: "p",
          text: "The pattern is interrupted at the joints between inserts. Please coordinate the split lines on the cosmetic surface with the design side in advance. Where a seamless finish is required, we propose laser processing.",
        },
      ],
    },
  },
  {
    id: "q44",
    cat: "e",
    terms: ["梨地シボ", "幾何学シボ", "鏡面シボ", "共材"],
    ja: {
      q: "シボの種類によって、金型の管理方法は変わりますか。",
      a: [
        { type: "p", text: "変わります。" },
        {
          type: "table",
          head: ["種類", "管理・補修の考え方"],
          rows: [
            [
              "梨地シボ・皮シボ",
              "錆や型傷はたいてい問題なく補修できる。やむなく溶接する場合は共材が望ましい",
            ],
            [
              "幾何学シボ・ヘアラインシボ",
              "うすい錆はサンドブラストで除去できるが、錆の侵攻や当て傷は全面磨き直して再加工となる",
            ],
            [
              "鏡面シボ（ドット等）",
              "シボが深い場合は鏡面部の磨きが可能。磨けない場合は全面磨き直して再加工。錆・当て傷、鏡面を拭き取る行為は摺り傷の原因となり補修ができない",
            ],
          ],
        },
        {
          type: "note",
          text: "鏡面シボは特に、成形時・成形後の金型メンテナンス、湿気の除去、防錆剤での管理を十分に行ってください。",
        },
      ],
    },
    en: {
      q: "Does mold maintenance differ by shibo type?",
      a: [
        { type: "p", text: "Yes." },
        {
          type: "table",
          head: ["Type", "Maintenance and repair approach"],
          rows: [
            [
              "Matte and leather grain",
              "Rust and mold damage can usually be repaired without problems. If welding is unavoidable, matching material is preferable",
            ],
            [
              "Geometric and hairline shibo",
              "Light rust can be removed by sandblasting, but advanced rust or impact damage requires re-polishing the entire surface and reprocessing",
            ],
            [
              "Mirror-combination shibo (dots, etc.)",
              "If the shibo is deep, the mirror areas can be polished; if not, the entire surface must be re-polished and reprocessed. Rust, impact damage, and wiping the mirror areas cause scratches that cannot be repaired",
            ],
          ],
        },
        {
          type: "note",
          text: "Mirror-combination shibo in particular requires thorough mold maintenance during and after molding, moisture removal, and protection with rust inhibitors.",
        },
      ],
    },
  },
  {
    id: "q45",
    cat: "e",
    terms: ["幾何学シボ", "ヘアラインシボ", "予備型（予備入子）"],
    ja: {
      q: "量産中にキズが付いた場合、部分的に直せますか。",
      a: [
        {
          type: "p",
          text: "シボの種類によります。ほとんどのシボは修理可能ですが、ヘアラインシボ・幾何学シボは部分修理が困難です。",
        },
        {
          type: "list",
          items: [
            "緻密なパターンのため、パターンのつなぎ目修正ができない",
            "数μmの深さのバラつきにより、見た目に違和感が発生する可能性が大きい",
          ],
        },
        {
          type: "p",
          text: "修理にはリードタイムが必要となり、生産ラインが止まるリスクがありますので、ヘアラインシボを採用される場合は有事に備えて『予備型（予備入子）』を準備しておくのが一般的です。",
        },
      ],
    },
    en: {
      q: "If the mold is scratched during mass production, can it be partially repaired?",
      a: [
        {
          type: "p",
          text: "It depends on the shibo type. Most shibo can be repaired, but partial repair of hairline and geometric shibo is difficult.",
        },
        {
          type: "list",
          items: [
            "The patterns are so precise that the joints cannot be corrected",
            "Depth variations of just a few micrometers are likely to look out of place",
          ],
        },
        {
          type: "p",
          text: "Repairs require lead time and risk stopping the production line, so when hairline shibo is used, it is common practice to prepare a spare mold (spare insert) in case of emergencies.",
        },
      ],
    },
  },
  {
    id: "q46",
    cat: "e",
    terms: ["目詰まり"],
    ja: {
      q: "「目詰まり」とは。",
      a: [
        {
          type: "p",
          text: "ガスやヤニによってシボの凹部が詰まることです。尖った砂（アルミナ）で加工した面ほど詰まりやすくなります。",
        },
      ],
    },
    en: {
      q: "What is clogging?",
      a: [
        {
          type: "p",
          text: "Clogging is when the recesses of the shibo become filled with gas deposits or residue. Surfaces processed with sharp sand (alumina) clog more easily.",
        },
      ],
    },
  },
  {
    id: "q47",
    cat: "e",
    ja: {
      q: "めっきや窒化とシボは、どちらを先に行いますか。",
      a: [
        { type: "p", text: "シボが先です。" },
        {
          type: "defs",
          items: [
            {
              dt: "硬質クロムめっき／無電解ニッケル",
              dd: "耐摩耗・防錆に有効ですが、膜厚の分だけ柄が浅くなり角が丸まります。細かい柄ほど影響が致命的ですので、膜厚の指定が必要です。",
            },
            {
              dt: "PVD（TiN・CrN等）",
              dd: "膜が薄く柄への影響は小さく、離型性・耐摩耗に効きます。",
            },
            {
              dt: "窒化",
              dd: "硬化層ができるため、窒化後のエッチングは実質的に不可能です。（一部ラジカル窒化やソフトプラズマ窒化は窒化後の加工実績あり）",
            },
          ],
        },
      ],
    },
    en: {
      q: "Which comes first: shibo, or plating and nitriding?",
      a: [
        { type: "p", text: "Shibo comes first." },
        {
          type: "defs",
          items: [
            {
              dt: "Hard chrome plating / electroless nickel",
              dd: "Effective for wear and rust resistance, but the pattern becomes shallower and its corners rounder by the thickness of the coating. The finer the pattern, the more critical the effect, so the coating thickness must be specified.",
            },
            {
              dt: "PVD (TiN, CrN, etc.)",
              dd: "The coating is thin, so its effect on the pattern is small, and it improves mold release and wear resistance.",
            },
            {
              dt: "Nitriding",
              dd: "Because it forms a hardened layer, etching after nitriding is practically impossible (although we have experience processing molds after some radical nitriding and soft plasma nitriding treatments).",
            },
          ],
        },
      ],
    },
  },

  // ============ F. 樹脂と材料のこと ============
  {
    id: "q48",
    cat: "f",
    ja: {
      q: "勾配対応表の基準になっている材料は何ですか。",
      a: [
        {
          type: "p",
          text: "ABSです。非晶性で転写性が良好なため基準材としており、他の材料はこれを起点に補正して考えます。",
        },
      ],
    },
    en: {
      q: "Which material is the draft table based on?",
      a: [
        {
          type: "p",
          text: "ABS. Because it is amorphous and transfers well, we use it as the reference material, and other materials are considered as corrections from this baseline.",
        },
      ],
    },
  },
  {
    id: "q49",
    cat: "f",
    ja: {
      q: "収縮率が大きい材料ほど、かじりやすいのですか。",
      a: [
        {
          type: "p",
          text: "いいえ。かじりやすさは3つの独立した軸で決まり、収縮率はそのうちの1軸にすぎません。POM・PPは収縮率が最大クラスでありながら低摩擦・自己潤滑性のためかじりリスクは低く、逆にPC・PMMAは収縮率が最小クラスでありながら金型密着性が高いためかじりリスクは高くなります。",
        },
        {
          type: "table",
          head: ["軸", "何を決めるか", "リスクが高い材料", "有効な対策"],
          rows: [
            [
              "収縮率",
              "離型時にコアを締め付ける力の大きさ",
              "POM・PP・PBT・PA66",
              "勾配量の設定",
            ],
            [
              "密着性・摩擦",
              "抜く際の面圧・摩擦抵抗",
              "PC・PMMA",
              "コーティング・離型剤",
            ],
            [
              "流動性（溶融粘度）",
              "シボ谷底まで樹脂が入り込むか",
              "PA6・PA66・PBT・レニー",
              "シボ形状の見直し",
            ],
          ],
        },
      ],
    },
    en: {
      q: "Do materials with higher shrinkage scuff more easily?",
      a: [
        {
          type: "p",
          text: "No. Susceptibility to scuffing is determined by three independent factors, and shrinkage is only one of them. POM and PP have among the highest shrinkage, but their low friction and self-lubricating properties keep the risk of scuffing low. Conversely, PC and PMMA have among the lowest shrinkage, but their strong adhesion to the mold makes the risk high.",
        },
        {
          type: "table",
          head: [
            "Factor",
            "What it determines",
            "High-risk materials",
            "Effective countermeasures",
          ],
          rows: [
            [
              "Shrinkage",
              "How strongly the part grips the core during ejection",
              "POM, PP, PBT, PA66",
              "Setting the draft",
            ],
            [
              "Adhesion and friction",
              "Surface pressure and frictional resistance during ejection",
              "PC, PMMA",
              "Coatings, release agents",
            ],
            [
              "Flowability (melt viscosity)",
              "Whether resin penetrates to the bottom of the shibo valleys",
              "PA6, PA66, PBT, Reny",
              "Revising the shibo profile",
            ],
          ],
        },
      ],
    },
  },
  {
    id: "q50",
    cat: "f",
    ja: {
      q: "材料別のリスクを一覧で知りたいのですが。",
      a: [
        {
          type: "table",
          head: [
            "材料（分類）",
            "収縮率",
            "溶融粘度",
            "密着・摩擦",
            "かじりリスク",
            "主メカニズムと優先対策",
          ],
          rows: [
            [
              "レニー（結晶）",
              "0.2–0.6%",
              "超低粘度",
              "中",
              "最高",
              "アンカー型／シボ深さを最小限に・谷底R付与",
            ],
            [
              "PA66（結晶）",
              "0.8–1.5%",
              "極めて低い",
              "中",
              "高",
              "アンカー型／シボ浅め＋保圧低減",
            ],
            [
              "PA6（結晶）",
              "0.6–1.4%",
              "極めて低い",
              "中",
              "高",
              "アンカー型／シボ形状見直し＋収縮分の勾配",
            ],
            [
              "PBT（結晶）",
              "1.5–2.0%",
              "低い",
              "中",
              "高",
              "アンカー型／シボ深さ低減＋GF配向確認",
            ],
            [
              "PC（非晶）",
              "0.5–0.7%",
              "最も高い",
              "非常に高い",
              "高",
              "密着摩擦型／勾配最大化＋DLC＋離型剤",
            ],
            [
              "PMMA（非晶）",
              "0.2–0.6%",
              "やや高い",
              "高い",
              "高",
              "密着摩擦型／勾配大きめ＋表面処理",
            ],
            [
              "PC/ABS（非晶）",
              "0.45–0.7%",
              "高い",
              "中〜高",
              "中",
              "密着摩擦型／ABSよりやや大きめの勾配",
            ],
            [
              "ABS（非晶）",
              "0.4–0.7%",
              "やや高い",
              "中",
              "中",
              "標準（基準材）",
            ],
            [
              "PS（非晶）",
              "0.4–0.7%",
              "中",
              "中",
              "中",
              "複合／突き出し力の分散を優先",
            ],
            [
              "PP（結晶）",
              "1.0–2.5%",
              "中",
              "低い（良好）",
              "低",
              "低リスク／収縮量に応じた勾配のみ",
            ],
            [
              "POM（結晶）",
              "1.8–2.5%",
              "中〜やや低",
              "最も低い",
              "低",
              "低リスク／収縮分の勾配確保のみ",
            ],
          ],
        },
        {
          type: "note",
          text: "数値は標準グレードの一般的な目安です。実際の設計は使用グレードのデータシートで検証してください。",
        },
      ],
    },
    en: {
      q: "Is there an overview of risks by material?",
      a: [
        {
          type: "table",
          head: [
            "Material (type)",
            "Shrinkage",
            "Melt viscosity",
            "Adhesion/friction",
            "Scuffing risk",
            "Main mechanism and priority countermeasures",
          ],
          rows: [
            [
              "Reny (crystalline)",
              "0.2–0.6%",
              "Ultra-low",
              "Medium",
              "Highest",
              "Anchoring / minimize shibo depth; add a radius at valley bottoms",
            ],
            [
              "PA66 (crystalline)",
              "0.8–1.5%",
              "Very low",
              "Medium",
              "High",
              "Anchoring / shallower shibo + lower holding pressure",
            ],
            [
              "PA6 (crystalline)",
              "0.6–1.4%",
              "Very low",
              "Medium",
              "High",
              "Anchoring / revise shibo profile + draft for shrinkage",
            ],
            [
              "PBT (crystalline)",
              "1.5–2.0%",
              "Low",
              "Medium",
              "High",
              "Anchoring / reduce shibo depth + check GF orientation",
            ],
            [
              "PC (amorphous)",
              "0.5–0.7%",
              "Highest",
              "Very high",
              "High",
              "Adhesion/friction / maximize draft + DLC + release agent",
            ],
            [
              "PMMA (amorphous)",
              "0.2–0.6%",
              "Fairly high",
              "High",
              "High",
              "Adhesion/friction / generous draft + surface treatment",
            ],
            [
              "PC/ABS (amorphous)",
              "0.45–0.7%",
              "High",
              "Medium–high",
              "Medium",
              "Adhesion/friction / slightly more draft than ABS",
            ],
            [
              "ABS (amorphous)",
              "0.4–0.7%",
              "Fairly high",
              "Medium",
              "Medium",
              "Standard (reference material)",
            ],
            [
              "PS (amorphous)",
              "0.4–0.7%",
              "Medium",
              "Medium",
              "Medium",
              "Combined / prioritize distributing the ejection force",
            ],
            [
              "PP (crystalline)",
              "1.0–2.5%",
              "Medium",
              "Low (good)",
              "Low",
              "Low risk / draft according to shrinkage only",
            ],
            [
              "POM (crystalline)",
              "1.8–2.5%",
              "Medium to somewhat low",
              "Lowest",
              "Low",
              "Low risk / just secure draft for shrinkage",
            ],
          ],
        },
        {
          type: "note",
          text: "Values are general guidelines for standard grades. Verify actual designs against the data sheet for the grade you use.",
        },
      ],
    },
  },
  {
    id: "q51",
    cat: "f",
    ja: {
      q: "樹脂によって柄の見え方はどう変わりますか。",
      a: [
        {
          type: "defs",
          items: [
            {
              dt: "PP",
              dd: "転写は浅く出ます。深い柄では白化しやすくなります。",
            },
            {
              dt: "POM",
              dd: "離型性は良好ですが、意匠面では転写不良・艶ムラが出やすい側の材料です。",
            },
            {
              dt: "ABS",
              dd: "転写性良好。塗装・めっきの下地としても使われます。",
            },
            {
              dt: "PC",
              dd: "転写に高い金型温度が要り、粘度が高いため細かい柄がつぶれやすくなります。",
            },
            {
              dt: "PA（ナイロン）",
              dd: "離型性は良いものの吸湿で寸法が変動します。",
            },
            {
              dt: "軟質材（TPO・TPE・TPU）",
              dd: "離型時に弾性変形して抜けるため基本則が当てはまらず、艶が下がりやすくなります。必ず現物トライで確認してください。",
            },
          ],
        },
      ],
    },
    en: {
      q: "How does the resin change the appearance of a pattern?",
      a: [
        {
          type: "defs",
          items: [
            {
              dt: "PP",
              dd: "Transfers shallower. Deep patterns tend to whiten.",
            },
            {
              dt: "POM",
              dd: "Releases well, but on cosmetic surfaces it is prone to poor transfer and uneven gloss.",
            },
            {
              dt: "ABS",
              dd: "Transfers well. Also used as a substrate for painting and plating.",
            },
            {
              dt: "PC",
              dd: "Requires a high mold temperature for transfer, and its high viscosity tends to flatten fine patterns.",
            },
            {
              dt: "PA (nylon)",
              dd: "Releases well, but its dimensions change with moisture absorption.",
            },
            {
              dt: "Soft materials (TPO, TPE, TPU)",
              dd: "They deform elastically to release from the mold, so the basic rules do not apply, and gloss tends to drop. Always confirm with actual trials.",
            },
          ],
        },
      ],
    },
  },
  {
    id: "q52",
    cat: "f",
    ja: {
      q: "GF入りの材料で注意することはありますか。",
      a: [
        {
          type: "p",
          text: "ガラス繊維が表面に浮くとシボの質感が崩れ、深い柄ほど顕著になります。かじりが起きた場合は繊維端の噛み込み跡が出ます。勾配は1.2倍前後で見ておいてください。",
        },
      ],
    },
    en: {
      q: "Are there precautions for glass-filled (GF) materials?",
      a: [
        {
          type: "p",
          text: "When glass fibers rise to the surface, the shibo texture breaks down, and the deeper the pattern, the more pronounced this becomes. If scuffing occurs, the fiber ends leave gouge marks. Allow for about 1.2× the draft.",
        },
      ],
    },
  },

  // ============ G. 不具合・トラブルのこと ============
  {
    id: "q53",
    cat: "g",
    terms: ["マイクロドット加工", "白化"],
    ja: {
      q: "成形品に出る問題点と対策を一覧で知りたいのですが。",
      a: [
        {
          type: "table",
          head: ["問題点", "主な要因", "主な対策"],
          rows: [
            [
              "カジリ・白化",
              "離型バランス不良／抜き勾配不足／樹脂の収縮",
              "設変による抜き勾配の変更／リブ・アンダーカット（ウラシボ）の追加／シボ深さの調整／パターンの丸み付け",
            ],
            [
              "ツヤムラ",
              "ガス抜き不足／成形品の肉厚／成形時の転写ムラ",
              "ガス抜き実施／肉厚調整／成形時の圧力UP／部分的なツヤ調整",
            ],
            [
              "ヒケ",
              "肉厚の不適／成形圧力不足",
              "シボパターンや深さの調整／ツヤ調整",
            ],
            [
              "ウェルド",
              "金型構造／ガス抜き不足",
              "ガス抜き用の線シボ加工の実施",
            ],
            [
              "傷付き",
              "低グロスによるキズの目立ち",
              "細かい梨地の追加やマイクロドット加工／パターンの丸み付け",
            ],
            [
              "成形品間の不整合",
              "成形条件の違い（温度）／ゲート位置",
              "ツヤ調整",
            ],
            [
              "腐食ムラ（金型側）",
              "溶接補修部／脱脂不足／材料偏析",
              "補修部の事前申告／共材の使用／洗浄工程の徹底",
            ],
          ],
        },
      ],
    },
    en: {
      q: "Is there an overview of problems on molded parts and their countermeasures?",
      a: [
        {
          type: "table",
          head: ["Problem", "Main causes", "Main countermeasures"],
          rows: [
            [
              "Scuffing, whitening",
              "Poor release balance / insufficient draft / resin shrinkage",
              "Changing the draft through a design change / adding ribs or undercuts (ura-shibo) / adjusting shibo depth / rounding the pattern",
            ],
            [
              "Uneven gloss",
              "Insufficient venting / part wall thickness / uneven transfer during molding",
              "Adding venting / adjusting wall thickness / raising molding pressure / local gloss adjustment",
            ],
            [
              "Sink marks",
              "Inappropriate wall thickness / insufficient molding pressure",
              "Adjusting the shibo pattern and depth / gloss adjustment",
            ],
            [
              "Weld lines",
              "Mold structure / insufficient venting",
              "Adding line shibo for venting",
            ],
            [
              "Scratches",
              "Scratches stand out on low-gloss surfaces",
              "Adding fine matte texture or micro-dot processing / rounding the pattern",
            ],
            [
              "Mismatch between parts",
              "Differences in molding conditions (temperature) / gate location",
              "Gloss adjustment",
            ],
            [
              "Uneven etching (mold side)",
              "Weld-repaired areas / insufficient degreasing / material segregation",
              "Advance notice of repaired areas / use of matching material / thorough cleaning",
            ],
          ],
        },
      ],
    },
  },
  {
    id: "q54",
    cat: "g",
    ja: {
      q: "不具合の原因はどう切り分ければよいですか。",
      a: [
        {
          type: "p",
          text: "要因は『金型構造・製品設計・成形条件・成形材料・シボ深さ』の5つに整理されます。同じカジリでも、どこに原因があるかで対策が変わるため、まずこの切り分けから始めます。",
        },
      ],
    },
    en: {
      q: "How should we isolate the cause of a defect?",
      a: [
        {
          type: "p",
          text: "Causes can be organized into five areas: mold structure, product design, molding conditions, molding material, and shibo depth. Even for the same scuffing, the countermeasure depends on where the cause lies, so start by isolating which of these is responsible.",
        },
      ],
    },
  },
  {
    id: "q55",
    cat: "g",
    terms: ["カジリ", "白化", "ヒケ", "アンダーカット"],
    ja: {
      q: "よく出る症状の定義を教えてください。",
      a: [
        {
          type: "defs",
          items: [
            {
              dt: "カジリ",
              dd: "型開き時に成形品がシボに引っかかり、表面が擦れて傷つく現象。抜き勾配不足やアンダーカットが主因",
            },
            {
              dt: "白化",
              dd: "引っかかりや応力によって樹脂表面が白く変色する現象。薄肉部分で発生しやすい",
            },
            {
              dt: "ヒケ",
              dd: "肉厚の変化等によって成形品表面に凹凸が発生する現象。リブやボス部の裏側に出やすい",
            },
            {
              dt: "ウエルドライン",
              dd: "樹脂の流れがぶつかった箇所に線状に現れる跡。ガス抜き用の線シボ加工が対策",
            },
            {
              dt: "ツヤむら",
              dd: "光沢が部分的に不均一になる現象。高転写部と一般部の差として現れる",
            },
            {
              dt: "アンダーカット",
              dd: "型開き方向に対して引っかかりとなる形状。カジリ・バリの原因",
            },
          ],
        },
      ],
    },
    en: {
      q: "Can you define the common symptoms?",
      a: [
        {
          type: "defs",
          items: [
            {
              dt: "Scuffing",
              dd: "Damage that occurs when the part catches on the shibo as the mold opens and its surface is scraped. Mainly caused by insufficient draft or undercuts",
            },
            {
              dt: "Whitening",
              dd: "White discoloration of the resin surface caused by catching or stress. Tends to occur in thin-walled areas",
            },
            {
              dt: "Sink marks",
              dd: "Surface unevenness on the part caused by changes in wall thickness and similar factors. Tends to appear on the reverse side of ribs and bosses",
            },
            {
              dt: "Weld lines",
              dd: "Line-shaped marks where resin flow fronts meet. Countered with line shibo for venting",
            },
            {
              dt: "Uneven gloss",
              dd: "Gloss that is locally non-uniform. Appears as a difference between high-transfer areas and the rest of the surface",
            },
            {
              dt: "Undercut",
              dd: "A shape that catches in the mold-opening direction. Causes scuffing and flash",
            },
          ],
        },
      ],
    },
  },
  {
    id: "q56",
    cat: "g",
    ja: {
      q: "条件を振るとき、どこから調整すべきですか。",
      a: [
        {
          type: "p",
          text: "まず外観寸法・機能寸法が基準内に入ること（反り・ヒケ・収縮率）、その上で寸法を維持したまま離型性を確保すること、意匠であるシボ深さ・光沢の微調整は最後です。",
        },
      ],
    },
    en: {
      q: "When adjusting molding conditions, where should we start?",
      a: [
        {
          type: "p",
          text: "First, get the appearance and functional dimensions within specification (warpage, sink marks, shrinkage). Next, secure mold release while maintaining those dimensions. Fine-tuning the design elements, shibo depth and gloss, comes last.",
        },
      ],
    },
  },
  {
    id: "q57",
    cat: "g",
    ja: {
      q: "かじり対策は、どの材料でも同じですか。",
      a: [
        {
          type: "p",
          text: "いいえ。かじりには2つのメカニズムがあり、対策が正反対に近くなります。材料名だけで対策を決めず、まずどちらかを判別してください。",
        },
        {
          type: "table",
          head: ["", "A. 密着・摩擦型", "B. 転写アンカー型"],
          rows: [
            [
              "該当材料",
              "PC／PMMA／PC/ABS（PC比率高）",
              "PA6／PA66／PBT／レニー／GF強化材",
            ],
            [
              "原因",
              "金型表面への密着性・摩擦が高く、抜き出し時にシボ壁面を擦る",
              "低粘度で谷底まで完全充填され機械的に噛み込む。高剛性で変形して逃げられない",
            ],
            [
              "症状",
              "面全体が擦れた光沢筋・白化。シボ形状自体は保たれる",
              "シボ山の頂点が削れる・欠ける。GF材では繊維端の噛み込み跡",
            ],
            [
              "有効な対策",
              "抜き勾配の拡大／DLC等の表面処理／離型剤／型開き初期の低速化",
              "シボ形状側の見直しが本質／深さ低減／谷底R付与／保圧・型温の低減",
            ],
            [
              "効きにくい対策",
              "シボ深さ低減は効くが本質ではない。まず摩擦低減",
              "勾配拡大・コーティングのみでは効果が薄い（機械的係合のため）",
            ],
          ],
        },
      ],
    },
    en: {
      q: "Are scuffing countermeasures the same for every material?",
      a: [
        {
          type: "p",
          text: "No. Scuffing has two mechanisms, and their countermeasures are nearly opposite. Do not decide on a countermeasure from the material name alone; first determine which mechanism is at work.",
        },
        {
          type: "table",
          head: ["", "A. Adhesion/friction", "B. Transfer anchoring"],
          rows: [
            [
              "Materials",
              "PC / PMMA / PC/ABS (high PC ratio)",
              "PA6 / PA66 / PBT / Reny / GF-reinforced materials",
            ],
            [
              "Cause",
              "High adhesion and friction against the mold surface scrape the shibo walls during ejection",
              "Low viscosity fills the valleys completely and locks in mechanically; high rigidity prevents the part from deforming to escape",
            ],
            [
              "Symptoms",
              "Glossy scrape streaks and whitening across the surface; the shibo shape itself is preserved",
              "Peaks of the shibo are worn down or chipped; GF materials show gouge marks from fiber ends",
            ],
            [
              "Effective countermeasures",
              "Increase draft / surface treatments such as DLC / release agents / slow down the initial mold opening",
              "Revising the shibo profile is the fundamental fix / reduce depth / add a radius at valley bottoms / lower holding pressure and mold temperature",
            ],
            [
              "Less effective countermeasures",
              "Reducing shibo depth helps but is not the root fix; reduce friction first",
              "Increasing draft or coating alone has little effect (because the interlocking is mechanical)",
            ],
          ],
        },
      ],
    },
  },
  {
    id: "q58",
    cat: "g",
    ja: {
      q: "なぜ低粘度の材料はかじるのですか。",
      a: [
        {
          type: "p",
          text: "微細な谷やアンダーカット部の隅々まで樹脂が入り込んで機械的に噛み込むこと、結晶化が速く谷に入った樹脂がその形状のまま固化すること、レニーやGF強化材は高剛性で変形してアンダーカットを乗り越える余地がないことの3点です。",
        },
        {
          type: "p",
          text: "PL隙間に入りやすい材料はシボ谷にも入りやすく、バリとは共通の因子を持ちます。",
        },
      ],
    },
    en: {
      q: "Why do low-viscosity materials scuff?",
      a: [
        {
          type: "p",
          text: "For three reasons: the resin penetrates every corner of fine valleys and undercuts and locks in mechanically; fast crystallization means resin that enters the valleys solidifies in that shape; and Reny and GF-reinforced materials are so rigid that they cannot deform to ride over undercuts.",
        },
        {
          type: "p",
          text: "Materials that easily enter gaps at the parting line also easily enter shibo valleys, so scuffing shares common factors with flash.",
        },
      ],
    },
  },
  {
    id: "q59",
    cat: "g",
    ja: {
      q: "成形条件側では何を見ればよいですか。",
      a: [
        {
          type: "table",
          head: ["条件", "良くない状態", "何が起きるか", "対策"],
          rows: [
            [
              "冷却時間",
              "不足",
              "十分収縮する前に離型し、シボのアンダーカットに食いついたまま抜ける",
              "冷却時間を延長／理論値（肉厚の2乗比例）と照合",
            ],
            [
              "金型温度",
              "高すぎ",
              "樹脂の固化・収縮が不十分なまま突き出される",
              "型温を下げて固化促進／キャビ・コア温度差を是正",
            ],
            [
              "保圧・射出圧",
              "高すぎ",
              "樹脂がシボ谷部まで強く押し込まれ、食いつきが増大する",
              "必要最小限まで圧を低減／保圧切替点の見直し",
            ],
            [
              "突き出し速度",
              "速すぎ・不均一",
              "応力が一部に集中し、擦れ傷状のかじりが発生する",
              "多段突き出し／エアエジェクタ併用で力を分散",
            ],
            [
              "型開き速度",
              "初期が急",
              "真空吸着・急な引き剥がしでシボ面を擦る",
              "型開き初期を低速化／エアブロー導入",
            ],
          ],
        },
      ],
    },
    en: {
      q: "What should we check on the molding-condition side?",
      a: [
        {
          type: "table",
          head: [
            "Condition",
            "Problem state",
            "What happens",
            "Countermeasure",
          ],
          rows: [
            [
              "Cooling time",
              "Too short",
              "The part is ejected before it has shrunk enough and comes out still gripping the undercuts in the shibo",
              "Extend cooling time / compare with the theoretical value (proportional to the square of wall thickness)",
            ],
            [
              "Mold temperature",
              "Too high",
              "The part is ejected before the resin has fully solidified and shrunk",
              "Lower the mold temperature to promote solidification / correct the temperature difference between cavity and core",
            ],
            [
              "Holding/injection pressure",
              "Too high",
              "Resin is forced deep into the shibo valleys, increasing grip",
              "Reduce pressure to the necessary minimum / review the switchover point",
            ],
            [
              "Ejection speed",
              "Too fast or uneven",
              "Stress concentrates in one area, causing scrape-like scuffing",
              "Multi-stage ejection / add air ejectors to distribute the force",
            ],
            [
              "Mold-opening speed",
              "Too fast at the start",
              "Vacuum adhesion and sudden separation scrape the shibo surface",
              "Slow down the initial opening / introduce air blow",
            ],
          ],
        },
      ],
    },
  },
  {
    id: "q60",
    cat: "g",
    ja: {
      q: "柄が浅くしか出ません。どうすればよいですか。",
      a: [
        {
          type: "p",
          text: "転写不良には、キャビ表面温度を上げるのが最も効きます。保圧・保圧時間の増加と材料の予備乾燥も併せてご検討ください。",
        },
        {
          type: "note",
          text: "高収縮材で勾配が小さい（0度に近い）場合は、離型に問題がなくても転写不良・艶ムラが出ることがあります。カジリという分かりやすい症状が出ないため気づきにくい不具合です。",
        },
      ],
    },
    en: {
      q: "The pattern only transfers shallowly. What can we do?",
      a: [
        {
          type: "p",
          text: "For poor transfer, raising the cavity surface temperature is the most effective measure. Also consider increasing holding pressure and holding time, and pre-drying the material.",
        },
        {
          type: "note",
          text: "With high-shrinkage materials and small draft (close to 0°), poor transfer and uneven gloss can occur even when release is not a problem. Because there is no obvious symptom such as scuffing, this defect is easy to overlook.",
        },
      ],
    },
  },
  {
    id: "q61",
    cat: "g",
    ja: {
      q: "キャビ取られとかじりが同時に出ます。",
      a: [
        {
          type: "p",
          text: "離型バランスを疑ってください。製品は可動側（コア）に抱きつかせて突き出すのが原則ですが、シボは固定側（キャビ）に彫刻されることが多く、キャビ側の離型抵抗がコア側の保持力を上回った瞬間に両者が同時発生します。シボ面積が大きいほどキャビ側の抵抗は増えますので、コア側の梨地処理で保持力を補強する手法もございます。",
        },
        {
          type: "p",
          text: "また、製品が収縮しながら逃げる方向とシボの抜き方向が一致しないと、シボ壁面に対して斜め方向のせん断力が働き、擦り傷状のかじりになります。確認すべきは次の5項目です。",
        },
        {
          type: "list",
          items: [
            "キャビ／コアの離型抵抗バランス",
            "突き出し力の偏り（片当たり）",
            "深物側壁の締め付け方向",
            "型開き速度の多段設定",
            "スライド動作のタイミング",
          ],
        },
      ],
    },
    en: {
      q: "We get cavity sticking and scuffing at the same time.",
      a: [
        {
          type: "p",
          text: "Suspect the release balance. In principle, the part should grip the moving side (core) and be ejected from there, but shibo is often engraved on the fixed side (cavity). Both problems occur the moment the release resistance on the cavity side exceeds the holding force on the core side. The larger the shibo area, the greater the cavity-side resistance, so one approach is to reinforce the holding force with a matte treatment on the core side.",
        },
        {
          type: "p",
          text: "Also, if the direction in which the part moves away as it shrinks does not match the release direction of the shibo, shear force acts diagonally on the shibo walls and causes scrape-like scuffing. Check the following five items:",
        },
        {
          type: "list",
          items: [
            "Release resistance balance between cavity and core",
            "Uneven ejection force (one-sided contact)",
            "Gripping direction on deep side walls",
            "Multi-stage mold-opening speed settings",
            "Timing of slide movements",
          ],
        },
      ],
    },
  },
  {
    id: "q62",
    cat: "g",
    ja: {
      q: "同じ金型・同じシボなのに、かじりが出たり出なかったりします。",
      a: [
        {
          type: "p",
          text: "ゲート系寸法と成形機の差をご確認ください。ゲート径が大きすぎるとシール遅延で保圧が長く効き、樹脂がシボ谷へ過充填されます。小さすぎると高せん断で局所発熱し、表面軟化・転写過多となります。",
        },
        {
          type: "p",
          text: "型締め力が過大だと型の弾性変形でシボ面クリアランスが変化してガス抜きも阻害され、不足するとバリとPL段差がシボ際の引っかかりを生みます。型移設・号機変更では、型開き速度・応答性・温調精度の機械差で挙動が変わりますので、移設前後の条件表を必ず照合してください。",
        },
      ],
    },
    en: {
      q: "Scuffing comes and goes on the same mold with the same shibo.",
      a: [
        {
          type: "p",
          text: "Check the gate dimensions and differences between molding machines. If the gate is too large, delayed gate sealing keeps holding pressure active longer and overpacks resin into the shibo valleys. If it is too small, high shear causes local heating, softening the surface and causing excessive transfer.",
        },
        {
          type: "p",
          text: "Excessive clamping force elastically deforms the mold, changing the clearance at the shibo surface and hindering venting; insufficient clamping force produces flash and parting-line steps that catch at the shibo edges. When a mold is moved or run on a different machine, its behavior changes with machine differences in mold-opening speed, responsiveness, and temperature control accuracy, so always compare the condition sheets from before and after the change.",
        },
      ],
    },
  },
  {
    id: "q63",
    cat: "g",
    ja: {
      q: "発生箇所から原因を逆引きできますか。",
      a: [
        {
          type: "p",
          text: "できます。不良の分布・発生タイミングは最短の切り分け手段です。",
        },
        {
          type: "table",
          head: ["発生パターン", "優先的に疑う要因", "最初に確認すべきデータ"],
          rows: [
            [
              "製品全面に均一発生",
              "シボ仕様そのもの（深さ・勾配の全体設計）",
              "シボ深さ実測・推奨勾配との比較",
            ],
            [
              "厚肉部・リブ裏に集中",
              "肉厚差による冷却ムラ・収縮タイミング差",
              "肉厚マップとの重ね合わせ／冷却時間",
            ],
            [
              "ゲート近傍に集中",
              "保圧過多・ゲート径過大",
              "保圧設定／ゲートシール時間",
            ],
            [
              "片側だけ擦り傷状",
              "突き出しの片当たり・逃げ方向の不一致",
              "エジェクタ配置図と製品重心の照合",
            ],
            [
              "キャビ取られと同時発生",
              "離型バランス（キャビ／コアの保持力差）",
              "両型のシボ面積・面粗度の比較",
            ],
            [
              "シボ山の頂点が削れる",
              "低粘度材によるアンカー効果",
              "材料のMFR・剛性データ確認",
            ],
            [
              "型移設・号機変更後から",
              "成形機のトン数・機種特性差",
              "移設前後の成形条件表の差分",
            ],
            [
              "材料ロット変更時期と一致",
              "樹脂グレード・添加剤・再生材比率の変更",
              "グレード名とMFRの照合",
            ],
          ],
        },
      ],
    },
    en: {
      q: "Can we trace the cause from where defects occur?",
      a: [
        {
          type: "p",
          text: "Yes. The distribution and timing of defects are the quickest way to isolate the cause.",
        },
        {
          type: "table",
          head: [
            "Occurrence pattern",
            "Factors to suspect first",
            "Data to check first",
          ],
          rows: [
            [
              "Uniform across the entire part",
              "The shibo specification itself (overall depth and draft design)",
              "Measured shibo depth compared with the recommended draft",
            ],
            [
              "Concentrated on thick sections or behind ribs",
              "Uneven cooling and shrinkage timing due to wall thickness differences",
              "Overlay with a wall-thickness map / cooling time",
            ],
            [
              "Concentrated near the gate",
              "Excessive holding pressure, oversized gate",
              "Holding pressure settings / gate seal time",
            ],
            [
              "Scrape marks on one side only",
              "One-sided ejection contact, mismatched release direction",
              "Compare the ejector layout with the part's center of gravity",
            ],
            [
              "Together with cavity sticking",
              "Release balance (difference in holding force between cavity and core)",
              "Compare shibo area and surface roughness on both halves",
            ],
            [
              "Peaks of the shibo worn down",
              "Anchoring effect of low-viscosity materials",
              "Check the material's MFR and rigidity data",
            ],
            [
              "Since the mold was moved or the machine changed",
              "Differences in machine tonnage and model characteristics",
              "Differences between the condition sheets before and after",
            ],
            [
              "Coincides with a change in material lot",
              "Changes in resin grade, additives, or regrind ratio",
              "Compare grade names and MFR",
            ],
          ],
        },
      ],
    },
  },

  // ============ H. 依頼前の準備と当社の対応 ============
  {
    id: "q64",
    cat: "h",
    ja: {
      q: "見積・引合いの際、何を伝えればよいですか。",
      a: [
        {
          type: "list",
          items: [
            "柄の指定（メーカー名＋番号＋深さ、または見本現物）",
            "施工面積・面の形状（平面／曲面／深物）",
            "型材の鋼種・硬度・熱処理状態",
            "補修・溶接の有無（共材かどうかを含む）",
            "成形樹脂・色・GFの有無",
            "現状の抜き勾配（→ 深さ÷8 で検算）",
            "製品肉厚と立ち壁高さ",
            "抱きつく面／離れる面の区別",
            "分割線・入れ子の位置、柄の切れ方の許容",
            "R部の見切り位置の指示（Rエンドよりやや下）",
            "後処理（めっき・PVD・窒化）の有無と順序",
            "立会いの要否、シボ板の要否",
            "納期・型のサイズ／重量（搬入可否）",
          ],
        },
      ],
    },
    en: {
      q: "What information should we provide when requesting a quote?",
      a: [
        {
          type: "list",
          items: [
            "Pattern specification (maker name + number + depth, or a physical sample)",
            "Area to be textured and surface geometry (flat / curved / deep)",
            "Mold steel grade, hardness, and heat treatment condition",
            "Any repairs or welding (including whether matching material was used)",
            "Molding resin, color, and whether it is glass-filled",
            "Current draft (check with depth ÷ 8)",
            "Part wall thickness and side-wall height",
            "Which surfaces the part shrinks onto and which it shrinks away from",
            "Locations of split lines and inserts, and acceptable pattern breaks",
            "Instructions for the boundary position on radii (slightly below the end of the radius)",
            "Any post-treatment (plating, PVD, nitriding) and its order",
            "Whether you wish to attend inspections, and whether texture plaques are needed",
            "Delivery date and mold size/weight (to confirm we can receive it)",
          ],
        },
      ],
    },
  },
  {
    id: "q65",
    cat: "h",
    ja: {
      q: "事前打合せでは、具体的に何を決めるのですか。",
      a: [
        {
          type: "list",
          ordered: true,
          items: [
            "図面・モデルから成形品にマーキングし、詳細なシボ範囲を確定する",
            "各抜き勾配に対し、最適なシボ番号・深さを話し合いで決定する",
            "隣接部品とのシボ深さ整合を確認する",
            "金型仕上げ状況を確認する",
            "成形樹脂を開示いただく",
          ],
        },
      ],
    },
    en: {
      q: "What exactly is decided in the preliminary meeting?",
      a: [
        {
          type: "list",
          ordered: true,
          items: [
            "Mark up the molded part from drawings and models to finalize the detailed shibo area",
            "Agree on the optimal shibo number and depth for each draft angle",
            "Check that shibo depth is consistent with adjacent parts",
            "Check the finishing status of the mold",
            "Confirm the molding resin, as disclosed by you",
          ],
        },
      ],
    },
  },
  {
    id: "q66",
    cat: "h",
    terms: ["専用シボ番号"],
    ja: {
      q: "トラブルを減らすために、事前にできることは。",
      a: [
        {
          type: "list",
          items: [
            "新しいシボ導入に向けての事前相談（特に幾何柄系は形状制約があります）",
            "金型材質の統一化。統一が困難な場合は、いずれの材質かの情報開示",
            "シボ加工先の統一化と専用シボ番号の運用",
            "事前全体打合せの実施",
            "トラブル発生時の修正打合せの実施（最適な修正方法の話し合い）",
          ],
        },
      ],
    },
    en: {
      q: "What can be done in advance to reduce problems?",
      a: [
        {
          type: "list",
          items: [
            "Consult with us before introducing a new shibo (geometric patterns in particular have shape constraints)",
            "Standardize mold materials or, if that is difficult, tell us which material is used",
            "Standardize on a single texturing supplier and use dedicated shibo numbers",
            "Hold an overall preliminary meeting",
            "Hold a correction meeting when problems occur, to agree on the best fix",
          ],
        },
      ],
    },
  },
  {
    id: "q67",
    cat: "h",
    ja: {
      q: "御社側ではどんな予防策を取っていますか。",
      a: [
        { type: "p", text: "以下を仕組みとして運用しております。" },
        {
          type: "list",
          items: [
            "抜き勾配確認シートを必須提出物とする",
            "シボ深さに対応する推奨勾配を事前に合意する",
            "仕様書へ前提条件（貴社指定の金型形状・成形条件を前提とする旨）を明記する",
            "量産型の加工前にサンプル型で転写性・離型性を検証する",
          ],
        },
      ],
    },
    en: {
      q: "What preventive measures do you take?",
      a: [
        { type: "p", text: "We operate the following as standard procedure:" },
        {
          type: "list",
          items: [
            "A draft confirmation sheet is a required submission",
            "The recommended draft for the shibo depth is agreed in advance",
            "Specifications explicitly state their preconditions (that they assume the mold geometry and molding conditions you specify)",
            "Transfer and release are verified on a sample mold before the production mold is processed",
          ],
        },
      ],
    },
  },
  {
    id: "q68",
    cat: "h",
    terms: ["現地現調"],
    ja: {
      q: "海外で製作された金型にも対応できますか。",
      a: [
        {
          type: "p",
          text: "対応しております。海外拠点で現地調達・現地対応される金型（現地現調）についても、日本と同等の品質・納期でシボ加工を行う体制を組んでおります。",
        },
      ],
    },
    en: {
      q: "Can you handle molds made overseas?",
      a: [
        {
          type: "p",
          text: "Yes. For molds procured and supported locally at overseas sites (local-for-local), we have a system in place to provide shibo processing with the same quality and lead times as in Japan.",
        },
      ],
    },
  },
];

// ── FAQPage スキーマの text 用にブロックを素のテキストへ平坦化 ──
export function faqBlocksToText(blocks: FaqBlock[]): string {
  const parts: string[] = [];
  for (const b of blocks) {
    if (b.type === "p" || b.type === "note") parts.push(b.text);
    else if (b.type === "cases")
      parts.push(b.items.map((i) => `${i.label}：${i.text}`).join(" "));
    else if (b.type === "defs")
      parts.push(b.items.map((i) => `${i.dt}…${i.dd}`).join(" "));
    else if (b.type === "list") parts.push(b.items.join(" "));
    else if (b.type === "table")
      parts.push(
        [b.head.join("／"), ...b.rows.map((r) => r.join("："))].join(" "),
      );
  }
  return parts.join(" ");
}
