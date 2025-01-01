/**
 * 14. Longest Common Prefix
Easy

Topics
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/


function longestCommonPrefix(strs: string[]): string {
    let longest_common_prefix = 0;

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] === strs[j][i]) {
                longest_common_prefix += (1 / strs.length);
            } else {
                return longest_common_prefix < 1 ? "" : strs[0].slice(0, longest_common_prefix);
            }
        }
    }

    return strs[0].slice(0, longest_common_prefix);
};