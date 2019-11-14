const antiPhishing = require("./lib");
const resultList = antiPhishing.check(window.location.href);
if (resultList.filter(result.similarity === "SAME").length === 0) {
    resultList.forEach(result => {
        if (result.similarity === "SIMILAR") {
            alert(`このサイトは${result.title}の正規のサイトではない可能性があります。`);
        }
    });
}