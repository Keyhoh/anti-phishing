import parseDomain from "parse-domain";
import { Similarity } from "./Similarity";
import levenshteinDistance from "./levenshteinDistance";
export default class Domain {
    private domain = "";
    private tld = "";

    constructor(url: string) {
        const temp = parseDomain(url);
        if (temp != null) {
            this.domain = temp.domain;
            this.tld = temp.tld;
        }
    }

    public similarlyWith(other: Domain): Similarity {
        if (this.domain === other.domain && this.tld === other.tld) {
            return Similarity.SAME;
        } else if (this.domain === other.domain) {
            return Similarity.SIMILAR;
        } else {
            const rate = 0.5;
            const len = Math.max(this.domain.length, other.domain.length);
            const distance = levenshteinDistance(this.domain, other.domain);
            return (distance < len * rate) ? Similarity.SIMILAR : Similarity.DIFFERENT;
        }
    }
}