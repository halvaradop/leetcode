/**
 * 455. Assign Cookies # Easy
 *
 * Assume you are an awesome parent and want to give your children some cookies. But, you should
 * give each child at most one cookie.
 *
 * Each child i has a greed factor g[i], which is the minimum size of a cookie that the child
 * will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the
 * cookie j to the child i, and the child i will be content. Your goal is to maximize the number
 * of your content children and output the maximum number.
 *
 * @link https://leetcode.com/problems/assign-cookies/
 * @param {number[]} greed - The greed factor of each child
 * @param {number[] } cookies - The size of each cookie
 * @returns {number} - The maximum number of content children
 * @example
 * // Expected: 1
 * findContentChildren([1, 2, 3], [1, 1])
 *
 * // Expected: 2
 * findContentChildren([1, 2], [1, 2, 3])
 */
export const findContentChildren = (greed: number[], cookies: number[]): number => {
    let idxGreed = 0
    let idxCookies = 0
    const n = greed.length
    const m = cookies.length
    let countContentChildren = 0
    greed.sort((x, y) => x - y)
    cookies.sort((x, y) => x - y)
    while (idxGreed < n && idxCookies < m) {
        if (cookies[idxCookies] >= greed[idxGreed]) {
            idxGreed++
            idxCookies++
            countContentChildren++
        } else {
            idxCookies++
        }
    }
    return countContentChildren
}
