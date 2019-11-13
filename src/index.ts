import Domain from "./Domain";
import { Similarity } from "./Similarity";

import { whiteList } from "./whiteList";

const target = new Domain(process.argv[2].toString());

for (let url of whiteList.urls) {
    const result = new Domain(url).similarlyWith(target);
    switch (result) {
        case Similarity.SAME:
            console.log("Same!");
            break;
        case Similarity.SIMILAR:
            console.log("Warning!");
            break;
        case Similarity.DIFFERENT:
            console.log("Different!");
        default:
            break;
    }
}