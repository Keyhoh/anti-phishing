# anti-phishing

メガバンク3社のドメインと引数で渡されたドメインを比較します。
レーベンシュタイン距離でドメインの距離を測り、近いと判断した場合は "WARNING" を出力します。
ドメインが一致した場合は "SAME"、別物と判断した場合は "DIFFERENT" を出力します。

## build

`npm run build`

## execute

```js
const antiPhishing = require("anti-phishing");

console.log(antiPhishing.check("https://smbc.com"));
```