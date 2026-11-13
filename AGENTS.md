# 開発エージェント指示

このリポジトリは山畑自動車の**公開ホームページ**（`yamabata-motors.com`）です。CRM（[`car-auto-crm`](https://github.com/kouhey-nakashima/car-auto-crm)）とは別アプリ・別リポジトリです（[D-001](docs/decisions.md)）。

## 作業開始時
1. `README.md`、`docs/decisions.md`、`docs/todo.md` を確認する。
2. 未決定事項を推測で実装しない（ページ構成、料金の掲載、店舗情報、デザイン、EmDashの構成など）。
3. 完了時に `docs/todo.md` を更新する。決定や設計変更は `docs/decisions.md` に記録する。
4. 「実装済み」「公開済み」「未確認」「未実装」を区別して書く。

## CRMとの境界（必ず守る）
- **顧客の個人情報を扱わない**。お問い合わせ・予約・見積の入力はHPで受けず、LINE・電話・CRM側のフォームへ案内する。
- HPのデータベースにCRMのデータを置かない。CRMのD1・API・秘密値をHPから使わない。
- CRMへのつなぎ方はリンクのみ（LINE友だち追加URL、電話番号、`crm.yamabata-motors.com` の見積フォームなど）。
- 料金を掲載する場合、CRMの料金表とずれないよう、掲載する金額と更新方法をオーナーに確認する。車検の法定費用は条件で変わるため、断定した金額を載せない。

## ドメイン・DNS
- `yamabata-motors.com` のDNSはCloudflareで管理している。`crm-dev`（CRM開発用）と将来の `crm`（CRM本番）のレコードを変更・削除しない。
- メールのレコード（MXなど）と、既存サイト向けのレコードを確認せずに変更しない。公開の切り替えはオーナー確認のうえで行う。

## その他
- 日本語。スマホでの閲覧を主に想定し、タブレット・PCにも対応する。
- 秘密値（APIトークンなど）はコード・ログ・文書に書かない。
- 存在しないコマンドを実行済みと報告しない。開発コマンドは `site/` で `pnpm dev`・`pnpm typecheck`・`pnpm build`。

## EmDash（`site/`）
- EmDash の作法は `site/AGENTS.md` と `site/.agents/skills/` を読む。
- 固定ページは `site/src/pages/*.astro`、共通部品は `site/src/layouts/Site.astro`・`site/src/components/`、店舗情報とメニューは `site/src/data/site.ts`、見た目は `site/src/styles/site.css`。
- ブログ記事は管理画面で書くもの。テスト記事を本番に入れない。`seed/seed.json` の見本記事は下書き（draft）のままにする。
- 試作（`prototype/`）を直したら `site/` にも反映する（公開後は `site/` だけを直す）。
