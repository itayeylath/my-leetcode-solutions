/* 
Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: 
n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
 2 is the missing number in the range since it does not appear in nums.
*/

const missingNumber = function (nums) {
    let arrLength = nums.length;
    // Formula to calculate sum of 'n' natural numbers:
    // sum of n = n(n+1)/2
    let idealSum = (arrLength) * (arrLength + 1) / 2;
    let realSum = 0;

    for (let i = 0; i < arrLength; i++) {
        realSum += nums[i];
    }

    let missingNum = idealSum - realSum;
    return missingNum;
};
