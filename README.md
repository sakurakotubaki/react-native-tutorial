## ReactNativeに入門する

環境構築のやり方はZennの記事に書いております。

[環境構築](https://zenn.dev/joo_hashi/articles/3188d17ab33a88)

[UIを作るドキュメントはこちら](https://reactnative.dev/docs/components-and-apis)

buildするコマンド

ios:
```bash
bun run ios
```

android:
```bash
bun run android
```

ローカルサーバーが起動しているときに、`r`キーを押すとホットリロードが使える。

## 学習するときのGitとGithubのルール
git-flow GithubFlowで開発をする。

- mainブランチで作業しない.
- developブランチを作成する.
- developブランチから、feature/{issues番号}ブランチを作成して作成する.
- featureブランチで作業が終わったら、developブランチにマージする.