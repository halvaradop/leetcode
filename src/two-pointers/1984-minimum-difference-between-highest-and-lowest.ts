/**
 * 1984. Minimum Difference Between Highest and Lowest of K Scores # Easy
 *
 * You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.
 *
 * Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.
 *
 * Return the minimum possible difference.
 *
 * @param {number[]} nums  - array of integers
 * @param {number} k - the length of the subarray
 * @returns {number} - the minimum difference between the highest and lowest number in any k-length subarray
 * @example
 * // Expected: 0
 * minimumDifference([90], 1)
 *
 * // Expected: 2
 * minimumDifference([9,4,1,7], 2)
 */
export const minimumDifference = (nums: number[], k: number): number => {
    nums.sort((x, y) => x - y)
    let minimum = Number.MAX_SAFE_INTEGER
    const n = nums.length
    for (let i = 0; i <= n - k; i++) {
        minimum = Math.min(minimum, nums[i + k - 1] - nums[i])
    }
    return minimum
}
