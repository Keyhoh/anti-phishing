# anti-phishing

三大メガバンクのドメインと引数で渡されたドメインを比較します。
レーベンシュタイン距離でドメインの距離を測り、近いと判断した場合は "warning!" と出力します。
ドメインが一致した場合は "same!"、別物と判断した場合は "different!" と出力します。

## build

`npm run build`

## execution

`node ./dist/index.js https://target.com`