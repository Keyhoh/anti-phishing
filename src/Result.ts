import { Similarity } from "./Similarity";

export default class Result {
    public readonly url: string;
    public readonly title: string;
    public readonly similarity: Similarity;

    constructor(url:string, title: string, similarity: Similarity) {
        this.url = url;
        this.title= title;
        this.similarity = similarity;
    }
}