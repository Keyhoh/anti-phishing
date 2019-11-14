# anti-phishing

メガバンク3社のドメインと開かれたサイトのドメインを比較します。
レーベンシュタイン距離でドメインの距離を測り、近いと判断した場合は警告を出します。

## build

`npm run build`

## execute

[chrome拡張機能](chrome://extensions/)でデベロッパーモードを有効にし、拡張機能（${workDir}/extension）を読み込んでください。