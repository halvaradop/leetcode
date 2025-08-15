/**
 * 2108. Find First Palindromic String in the Array # Easy
 *
 * Given an array of strings words, return the first palindromic string in the array.
 * If there is no such string, return an empty string "".
 *
 * A string is palindromic if it reads the same forward and backward.
 *
 * @link https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 * @param {string[]} words - An array of strings
 * @returns {string} - The first palindromic string in the array, or an empty string if none exists
 * @example
 * // Expected: "ada"
 * firstPalindrome(["abc","car","ada","racecar","cool"])
 *
 * // Expected: "racecar"
 * firstPalindrome(["notapalindrome","racecar"])
 *
 * // Expected: ""
 * firstPalindrome(["def","ghi"])
 */
export const firstPalindrome = (words: string[]): string => {
    const n = words.length
    for (let i = 0; i < n; i++) {
        if (isPalindrome(words[i])) {
            return words[i]
        }
    }
    return ""
}

const isPalindrome = (word: string): boolean => {
    const n = word.length
    let left = 0
    let right = n - 1
    while (left < right) {
        if (word[left] !== word[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
