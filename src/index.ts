import Domain from "./Domain";
import { Similarity } from "./Similarity";

const Mizuho = new Domain("smbc.co.jp");
const Phishing = new Domain("smbcas.com");
const result = Mizuho.similarlyWith(Phishing);

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
