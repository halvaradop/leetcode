/**
 * 2570. Merge Two 2D Arrays by Summing Values # Easy
 *
 * You are given two 2D integer arrays nums1 and nums2.
 *
 * - nums1[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
 * - nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
 *
 * Each array contains unique ids and is sorted in ascending order by id.
 *
 * Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:
 * - Only ids that appear in at least one of the two arrays should be included in the resulting array.
 * - Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays, then assume its value in that array to be 0.
 *
 * Return the resulting array. The returned array must be sorted in ascending order by id.
 *
 * @link https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/
 * @param {number[][]} nums1 -
 * @param {number[][]} nums2 -
 * @returns {number[][]} - Merged 2D array with summed values
 * @example
 * // Expected: [[1,6],[2,3],[3,2],[4,6]]
 * mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]])
 *
 * // Expected: [[1,3],[2,4],[3,6],[4,3],[5,5]]
 * mergeArrays([[2,4],[3,6],[5,5]], [[1,3],[4,3]])
 */
export const mergeArrays = (nums1: number[][], nums2: number[][]): number[][] => {
    let idx2 = 0
    let idx1 = 0
    const merge = []
    const n = nums1.length
    const m = nums2.length
    while (idx1 < n && idx2 < m) {
        if (nums1[idx1][0] === nums2[idx2][0]) {
            merge.push([nums1[idx1][0], nums1[idx1][1] + nums2[idx2][1]])
            idx1++
            idx2++
        } else if (nums1[idx1][0] < nums2[idx2][0]) {
            merge.push([nums1[idx1][0], nums1[idx1][1]])
            idx1++
        } else {
            merge.push([nums2[idx2][0], nums2[idx2][1]])
            idx2++
        }
    }
    while (idx1 < n) {
        merge.push([nums1[idx1][0], nums1[idx1][1]])
        idx1++
    }
    while (idx2 < m) {
        merge.push([nums2[idx2][0], nums2[idx2][1]])
        idx2++
    }
    return merge
}
