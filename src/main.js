const antiPhishing = require("../lib");
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        const resultList = antiPhishing.check(tab.url);
        if (resultList.filter(result => result.similarity === "SAME").length === 0) {
            resultList.forEach(result => {
                if (result.similarity === "SIMILAR") {
                    alert(`このサイトは${result.title}の正規のサイトではない可能性があります。`);
                }
            });
        }
    }
})