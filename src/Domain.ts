import parseDomain from "parse-domain";
import { Similarity } from "./Similarity";
import levenshteinDistance from "./levenshteinDistance";
export default class Domain {
    private static a = 1;
    private fullDomain = "";
    private domain = "";
    private tld = "";

    constructor(url: string) {
        const temp = parseDomain(url);
        if (temp != null) {
            this.domain = temp.domain;
            this.tld = temp.tld;
        }
        this.fullDomain = `${this.domain}.${this.tld}`;
    }

    public similarlyWith(other: Domain): Similarity {
        if (this.fullDomain === other.fullDomain) {
            return Similarity.SAME;
        } else if (this.domain === other.domain) {
            return Similarity.SIMILAR;
        } else {
            const rate = 0.5;
            const len = Math.max(this.fullDomain.length, other.fullDomain.length);
            const distance = levenshteinDistance(this.domain, other.domain);
            return (distance < len * rate) ? Similarity.SIMILAR : Similarity.DIFFERENT;
        }
    }
}