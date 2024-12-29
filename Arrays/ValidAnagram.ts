/**
Valid Anagram
Solved 
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.
 */
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;

    const s_map = new Map();
    const t_map = new Map();

    for (let i = 0; i < s.length; i++) {
        s_map.set(s[i], (s_map.get(s[i]) || 0) + 1);
        t_map.set(t[i], (t_map.get(t[i]) || 0) + 1);
    }

    for (const [key, value] of s_map) {
        if (value !== t_map.get(key))
            return false;
    }

    return true;
}
