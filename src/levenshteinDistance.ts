export default function levenshteinDistance(a: string, b: string): number {
    // Create empty edit distance matrix.
    // ex) a = Arcana, b = Brian
    // |\|    | A  | r  | c  | a  | n  | a  |
    // | |null|null|null|null|null|null|null|
    // |B|null|null|null|null|null|null|null|
    // |r|null|null|null|null|null|null|null|
    // |i|null|null|null|null|null|null|null|
    // |a|null|null|null|null|null|null|null|
    // |n|null|null|null|null|null|null|null|
    const distanceMatrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

    // Fill the first row of the matrix.
    // |\|    | A  | r  | c  | a  | n  | a  |
    // | | 0  | 1  | 2  | 3  | 4  | 5  | 6  |
    // |B|null|null|null|null|null|null|null|
    // |r|null|null|null|null|null|null|null|
    // |i|null|null|null|null|null|null|null|
    // |a|null|null|null|null|null|null|null|
    // |n|null|null|null|null|null|null|null|
    for (let i = 0; i <= a.length; i++) {
        distanceMatrix[0][i] = i;
    }

    // Fill the first column of the matrix.
    // |\|    | A  | r  | c  | a  | n  | a  |
    // | | 0  | 1  | 2  | 3  | 4  | 5  | 6  |
    // |B| 1  |null|null|null|null|null|null|
    // |r| 2  |null|null|null|null|null|null|
    // |i| 3  |null|null|null|null|null|null|
    // |a| 4  |null|null|null|null|null|null|
    // |n| 5  |null|null|null|null|null|null|
    for (let j = 0; j <= b.length; j++) {
        distanceMatrix[j][0] = j;
    }

    // Sequentially fill others.
    // |\|    | A  | r  | c  | a  | n  | a  |
    // | | 0  | 1  | 2  | 3  | 4  | 5  | 6  |
    // |B| 1  | 1  | 2  | 3  | 4  | 5  | 6  |
    // |r| 2  | 2  | 1  | 2  | 3  | 4  | 5  |
    // |i| 3  | 3  | 2  | 2  | 3  | 4  | 5  |
    // |a| 4  | 3  | 3  | 3  | 2  | 3  | 4  |
    // |n| 5  | 4  | 4  | 4  | 3  | 2  | 3  |
    for (let j = 1; j <= b.length; j++) {
        for (let i = 1; i <= a.length; i++) {
            const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
            distanceMatrix[j][i] = Math.min(
                distanceMatrix[j][i - 1] + 1,
                distanceMatrix[j - 1][i] + 1,
                distanceMatrix[j - 1][i - 1] + indicator,
            )
        }
    }

    return distanceMatrix[b.length][a.length];
}
