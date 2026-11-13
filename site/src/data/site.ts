/** 店舗情報とナビゲーション（ここを直すと全ページに反映） */
export const SHOP = {
	name: "株式会社山畑自動車",
	tel: "0997-52-2610",
	telHref: "tel:0997522610",
	fax: "0997-52-2612",
	zip: "〒894-0008",
	address: "鹿児島県奄美市名瀬浦上1303-1",
	hours: "9:00〜17:00",
	closed: "日曜日・月曜日",
	line: "https://lin.ee/91lyUYb",
	instagram: "https://www.instagram.com/yamabatamotors",
} as const;

export interface NavItem {
	href: string;
	label: string;
}

export const NAV: NavItem[] = [
	{ href: "/", label: "ホーム" },
	{ href: "/shaken", label: "車検" },
	{ href: "/repair", label: "修理・整備" },
	{ href: "/cases", label: "修理事例" },
	{ href: "/sales", label: "中古車販売" },
	{ href: "/insurance", label: "保険代理" },
	{ href: "/blog", label: "ブログ" },
	{ href: "/company", label: "会社概要" },
];

/**
 * LINE 誘導の文言。
 * 「30秒で概算見積り」は CRM 側の LINE 内見積フォーム（LIFF）が動いてから本番公開する。
 * それまでに公開する場合は ESTIMATE_LIVE を false にすると、見積りをうたわない文言になる。
 */
export const ESTIMATE_LIVE = true;

export const LINE_CTA = ESTIMATE_LIVE
	? {
			catch: "LINEで30秒、車検の概算見積り",
			lead: "友だち追加して、車の種類と年数を選ぶだけ。その場で車検費用の目安がわかります。",
			steps: ["LINEで友だち追加", "メニューの「概算見積り」をタップ", "車の情報を選ぶだけ（約30秒）"],
			button: "LINEで30秒見積り",
			short: "LINEで30秒見積り",
			note: "※表示されるのは概算です。正式な金額はお車を点検してからご案内します。",
		}
	: {
			catch: "LINEで、車検・修理のご相談",
			lead: "友だち追加して、メッセージを送るだけ。車検のご予約やお見積りのご相談を受け付けています。",
			steps: ["LINEで友だち追加", "ご相談内容を送信", "スタッフからお返事"],
			button: "LINEで相談する",
			short: "LINEで相談",
			note: "",
		};

/**
 * アクセス解析（Google アナリティクス 4）。測定IDを入れると有効になる（例："G-XXXXXXXXXX"）。
 * LINE ボタンのクリックは "line_click"（どの場所から押されたか付き）として記録する。
 */
export const GA4_ID = "";

/** 検索結果に出す店舗情報（構造化データ）。営業日は火〜土 */
export const LOCAL_BUSINESS = {
	"@context": "https://schema.org",
	"@type": "AutoRepair",
	name: SHOP.name,
	alternateName: "YAMABATA MOTORS",
	url: "https://yamabata-motors.com/",
	image: "https://yamabata-motors.com/img/og.jpg",
	logo: "https://yamabata-motors.com/img/logo.png",
	telephone: "+81-997-52-2610",
	faxNumber: "+81-997-52-2612",
	address: {
		"@type": "PostalAddress",
		postalCode: "894-0008",
		addressRegion: "鹿児島県",
		addressLocality: "奄美市",
		streetAddress: "名瀬浦上1303-1",
		addressCountry: "JP",
	},
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			opens: "09:00",
			closes: "17:00",
		},
	],
	areaServed: ["奄美市", "龍郷町", "瀬戸内町", "奄美大島"],
	sameAs: [SHOP.instagram, SHOP.line],
	foundingDate: "2020-10-07",
} as const;
