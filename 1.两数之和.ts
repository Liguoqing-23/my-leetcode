/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    /**
     * @Desc 1. 暴力法
     * @TC O(n^2)
     * @SC O(1)
     * @Sub 2023/06/17
     * @Cas 57/57 cases passed (140 ms)
     * @Run Your runtime beats 13.14 % of typescript submissions
     * @Mem Your memory usage beats 76.22 % of typescript submissions (42.8 MB)
     */

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
    // return [];
    
    /**
     * @Desc 2. 哈希表
     * @TC O(n)
     * @SC O(n)
     * @Sub 2023/06/17
     * @Cas 57/57 cases passed (64 ms)
     * @Run Your runtime beats 92.47 % of typescript submissions
     * @Mem Your memory usage beats 16.72 % of typescript submissions (44.8 MB)
     */
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const other = target - num;
        if (map.has(other)) {
            return [map.get(other), i];
        }
        map.set(num, i);
    }
    return [];
    
    /**
     * @Desc 3. 排序 + 双指针
     * @TC O(nlogn)
     * @SC O(n)
     * @Sub 2023/06/17
     * @Cas 57/57 cases passed (76 ms)
     * @Run Your runtime beats 55.45 % of typescript submissions
     * @Mem Your memory usage beats 61.27 % of typescript submissions (44.2 MB)
     */
    
    // const sortedNums = nums
    //     .map((num, index) => ({ num, index }))
    //     .sort((a, b) => a.num - b.num);
    // let left = 0;
    // let right = sortedNums.length - 1;
    // while (left < right) {
    //     const sum = sortedNums[left].num + sortedNums[right].num;
    //     if (sum === target) {
    //         return [sortedNums[left].index, sortedNums[right].index];
    //     } else if (sum < target) {
    //         left++;
    //     } else {
    //         right--;
    //     }
    // }
    // return [];
    
    /**
     * @Desc 4. 排序 + 二分查找
     * @TC O(nlogn)
     * @SC O(n)
     * @Sub 2023/06/17
     * @Cas 57/57 cases passed (72 ms)
     * @Run Your runtime beats 69.11 % of typescript submissions
     * @Mem Your memory usage beats 62 % of typescript submissions (44.2 MB)
     */
    
    // const sortedNums = nums
    //     .map((num, index) => ({ num, index }))
    //     .sort((a, b) => a.num - b.num);
    // for (let i = 0; i < sortedNums.length; i++) {
    //     const other = target - sortedNums[i].num;
    //     let left = i + 1;
    //     let right = sortedNums.length - 1;
    //     while (left <= right) {
    //         const mid = Math.floor((left + right) / 2);
    //         if (sortedNums[mid].num === other) {
    //             return [sortedNums[i].index, sortedNums[mid].index];
    //         } else if (sortedNums[mid].num < other) {
    //             left = mid + 1;
    //         } else {
    //             right = mid - 1;
    //         }
    //     }
    // }
    // return [];
}

// @lc code=end
