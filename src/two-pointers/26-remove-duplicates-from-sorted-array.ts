/**
 * 26. Remove Duplicates from Sorted Array # E
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such
 * that each unique element appears only once. The relative order of the elements should be kept the
 * same. Then return the number of unique elements in nums.
 *
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums - The array of numbers sorted in non-decreasing order.
 * @returns {number} - The number of unique elements in the array.
 * @example
 * // Expected: 2
 * removeDuplicates([1, 1, 2])
 *
 * // Expected 5
 * removeDuplicates([0,0,1,1,1,2,2,3,3,4])
 */
export const removeDuplicates = (nums: number[]): number => {
    let index = 0
    const n = nums.length
    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[index]) {
            nums[index + 1] = nums[i]
            index++
        }
    }
    return index + 1
}
