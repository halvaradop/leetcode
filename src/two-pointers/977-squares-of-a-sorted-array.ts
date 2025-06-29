/**
 * 977. Squares of a Sorted Array # Easy
 *
 * Given an integer array nums sorted in non-decreasing order, return an array of the
 * squares of each number sorted in non-decreasing order.
 *
 * @link {https://leetcode.com/problems/squares-of-a-sorted-array/}
 * @param {number[]} nums - A sorted array of integers
 * @returns {number[]} - A sorted array of integers where each integer is squared
 * @example
 * // Expected: [0,1,9,16,100]
 * sortedSquares([-4,-1,0,3,10])
 *
 * // Expected: [4,9,9,49,121]
 * sortedSquares([-7,-3,2,3,11])
 */
export const sortedSquares = (nums: number[]): number[] => {
    const n = nums.length
    let left = 0
    let right = n - 1
    let index = n - 1
    const sorted = Array.from<number>({ length: n }).fill(0)
    for (let i = 0; i < n; i++) {
        const leftValue = nums[left] * nums[left]
        const rightValue = nums[right] * nums[right]
        if (rightValue > leftValue) {
            sorted[index] = rightValue
            right--
        } else {
            sorted[index] = leftValue
            left++
        }
        index--
    }
    return sorted
}
