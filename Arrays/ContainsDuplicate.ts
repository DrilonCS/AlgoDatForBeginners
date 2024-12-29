/**
Contains Duplicate
Solved 
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

Recommended Time & Space Complexity
You should aim for a solution with O(n) time and O(n) space, where n is the size of the input array.
*/
class Solution {
    hasDuplicate(nums: number[]): boolean {
        let list: number[] = [];
        for (let i = 0; i < nums.length; i++) {
            if (!list.includes(nums[i])) {
                list.push(nums[i]);
            } else {
                return true;
            }
        }
        return false;
    }
}