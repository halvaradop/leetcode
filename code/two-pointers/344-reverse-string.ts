/**
 * 344. Reverse String # Easy
 *
 * Write a function that reverses a string. The input string is given as an array of characters.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * @param {string} str - The input string represented as an array of characters
 * @returns {void} - The function reverses the input string in-place
 * @example
 * // Expected: ["o", "l", "l", "e", "h"]
 * reverseString(["h", "e", "l", "l", "o"])
 *
 * // Expected: ["d", "l", "r", "o", "w"]
 * reverseString(["w", "o", "r", "l", "d"])
 */
export const reverseString = (str: string[]): void => {
    const n = str.length
    let left = 0
    let right = n - 1
    while (left < right) {
        const swap = str[left]
        str[left++] = str[right]
        str[right--] = swap
    }
}
