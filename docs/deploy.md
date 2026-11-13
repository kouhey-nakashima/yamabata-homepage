# 公開手順（EmDash on Cloudflare Workers）

> 2026-11-13作成。`site/` の EmDash サイトを Cloudflare に置く手順。**まだ実施していません**。

## 構成
- Worker 名：`yamabata-homepage`（`site/wrangler.jsonc`）
- D1：`yamabata-homepage`（記事・設定・管理ユーザー）。CRM の D1 とは別（D-001・D-003）
- R2：`yamabata-homepage-media`（ブログの画像）
- 毎分の cron（EmDash の予約投稿・お掃除）。Workers Paid プランで動く
- 固定ページ（車検など）は `site/src/pages/*.astro` にコードで持つ。ブログ記事だけを管理画面（`/_emdash/admin`）で書く

## 1. Cloudflare と GitHub をつなぐ（オーナー作業・初回のみ）
1. Cloudflare ダッシュボード →「Workers & Pages」→「アプリケーションを作成する」→ **Workers** タブ →「Git リポジトリをインポート」（`app-studio-nico` と同じ方法）。
2. リポジトリ `kouhey-nakashima/yamabata-homepage` を選ぶ。
3. 設定：
   - プロジェクト名：`yamabata-homepage`
   - ルートディレクトリ（パス）：`site`
   - ビルドコマンド：`pnpm install --frozen-lockfile && pnpm build`
   - デプロイコマンド：`npx wrangler deploy`
   - 本番ブランチ：当面 `claude/affectionate-rubin-nlxo58`（`main` を作ったら切り替える）
4. 保存してデプロイ。初回デプロイで D1 と R2 が自動で作られる（wrangler の自動作成）。作られない場合は「D1」「R2」の画面で上記の名前で作成し、Worker の「設定 → バインディング」で `DB`・`MEDIA` に割り当てる。

## 2. 管理者の初期設定（デプロイ直後にすぐ行う）
- `https://yamabata-homepage.<アカウントのサブドメイン>.workers.dev/_emdash/admin` を開き、セットアップを完了する。
- **最初にセットアップした人が管理者になる**ため、URL を他人に知らせる前に、オーナー自身がすぐ行う。
- セットアップで `site/seed/seed.json`（記事の型・カテゴリー・下書きの見本記事1件）が入る。

## 3. 動作確認
- 全ページ（`/`・`/shaken`・`/repair`・`/cases`・`/sales`・`/insurance`・`/company`・`/blog`）が表示されること
- 管理画面で記事を書いて公開 → `/blog` とトップの「お知らせ・ブログ」に出ること、画像が表示されること
- 見本記事「【サンプル】ブログ記事の見本」は下書きのまま。不要なら削除する

## 4. ドメインの切り替え（オーナー確認のうえで）
- `yamabata-motors.com` の DNS は Cloudflare 管理。現在はエックスサーバー向けのレコード（A 3件、メール用）がある。
- 切り替え前に、メール（MX など）のレコードを確認し、メールに影響しない手順を決める（`AGENTS.md`）。
- Worker の「設定 → ドメインとルート」で `yamabata-motors.com`（と `www`）を追加する。
- 公開後、`site/public/` に検索除外の設定は入れていない（確認用の `prototype/` だけ検索除外）。workers.dev の段階で検索に出したくない場合は相談。

## ローカル開発（開発担当）
```bash
cd site
pnpm install
pnpm dev        # http://localhost:4321 、管理画面は /_emdash/admin
pnpm typecheck
pnpm build
```
初回はセットアップが必要。ローカルだけなら `http://localhost:4321/_emdash/api/setup/dev-bypass?content=1` で省略できる（ローカルDBは `site/.wrangler/` に作られ、Git には入らない）。
