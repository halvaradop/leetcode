/**
 * 
 * @param nums 
 * @param k 
 * @returns 
 */
const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
    const n = nums.length
    const map = new Map<number, number>()
    for(let i = 0; i < n; i++) {
        if(map.has(nums[i]) && (i - map.get(nums[i]) <= k)) {
            return true
        }
        map.set(nums[i], i)
    }  
    return false
};