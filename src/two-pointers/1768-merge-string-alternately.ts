/**
 * 1768. Merge Strings Alternately # Easy
 *
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating
 * order, starting with word1. If a string is longer than the other, append the additional letters
 * onto the end of the merged string.
 *
 * Return the merged string.
 *
 * @link https://leetcode.com/problems/merge-strings-alternately/
 * @param {string} word1 - The first input string whose characters will be merged alternately.
 * @param {string} word2 - The second input string whose characters will be merged alternately.
 * @returns {string} - The merged string formed by alternating characters from word1 and word2.
 * @example
 * // Expected: "apbqcr"
 * mergeAlternately("abc", "pqr")
 *
 * // Expected: "apbqrs"
 * mergeAlternately("ab", "pqrs")
 *
 * // Expected: "apbqcd"
 * mergeAlternately("abcd", "pq")
 */
export const mergeAlternately = (word1: string, word2: string): string => {
    let idx1 = 0
    let idx2 = 0
    let merge = ""
    const n = word1.length
    const m = word2.length
    while (idx1 < n || idx2 < m) {
        if (idx1 < n) {
            merge += word1[idx1++]
        }
        if (idx2 < m) {
            merge += word2[idx2++]
        }
    }
    return merge
}
