/**
 * 680. Valid Palindrome II #Easy
 *
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 *
 * @param {string} str - Input string to check if it can be a palindrome by removing at most one character.
 * @returns {boolean} - Returns true if the string can be a palindrome after removing at most one character, otherwise false.
 * @example
 * // Expected: true
 * validPalindrome("abca")
 *
 * // Expected: false
 * validPalindrome("abc")
 */
export const validPalindrome = (str: string): boolean => {
    const n = str.length
    let left = 0
    let right = n - 1
    while (left < right) {
        if (str[left] !== str[right]) {
            return isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1)
        }
        left++
        right--
    }
    return true
}

const isPalindrome = (s: string, low: number, high: number): boolean => {
    let left = low
    let right = high
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
