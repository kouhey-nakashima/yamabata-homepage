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
