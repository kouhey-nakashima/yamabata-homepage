# 山畑自動車 ホームページ

山畑自動車のホームページ（リニューアル）用のリポジトリです。

- **公開URL（予定）**：`https://yamabata-motors.com`
- **基盤**：Cloudflare（EmDash）。CRMと同じCloudflareアカウント
- **状態**：EmDash版（`site/`）をローカルで作成・確認済み、Cloudflareへの公開は未実施（[公開手順](docs/deploy.md)）。デザイン確認用の試作（`prototype/`）は https://yamabata-homepage.pages.dev/ （検索除外。本番ではありません）

## フォルダ
- `site/`：本番用の EmDash サイト（Astro＋Cloudflare Workers・D1・R2）。ブログは管理画面 `/_emdash/admin` で書く
- `prototype/`：デザイン確認用の静的HTML（Cloudflare Pages）
- `assets/original/`：写真・ロゴの元データ
- `docs/`：決定事項・タスク・現行サイトの記録・公開手順

## 開発コマンド（`site/` で実行）
```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm build
```

## CRMとの関係

LINE連携の顧客管理（CRM）と、お客様向けの車検見積フォーム・予約フォームは、別のリポジトリ [`car-auto-crm`](https://github.com/kouhey-nakashima/car-auto-crm) にあります。

| | このリポジトリ（HP） | car-auto-crm |
|---|---|---|
| URL | `yamabata-motors.com` | 本番 `crm.yamabata-motors.com`（予定）／開発 `crm-dev.yamabata-motors.com` |
| 内容 | 店舗紹介・サービス・料金案内・アクセスなど公開情報 | 顧客・車両・LINEチャット・予約・見積（LIFF） |
| 個人情報 | **扱わない** | 扱う（スタッフのログイン後のみ） |

HPからCRMへは**リンクだけ**でつなぎます（LINE友だち追加、電話、見積フォームへの案内）。HPからCRMのデータを読み書きしません。

## 文書

- [作業ルール](AGENTS.md)
- [決定事項](docs/decisions.md)
- [タスク](docs/todo.md)
