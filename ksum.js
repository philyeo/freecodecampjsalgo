// Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.

// [34,23,1,24,75,35,54,8] 
// K = 60

// [34,23,1,24,75,35,54,8] 
// K = 60

// Javascript program for the above approach
 
// Function to find max sum less than k
function maxSum(arr, k)
{
     
    // Sort the array
    arr.sort((a,b)=>a-b);
    var n = arr.length, l = 0, r = n - 1, ans = 0;
 
    // While l is less than r
    while (l < r) {
        if (arr[l] + arr[r] < k) {
            ans = Math.max(ans, arr[l] + arr[r]);
            l++;
        }
        else {
            r--;
        }
    }
 
    return ans;
}


var A = [20, 10, 30, 100, 110];
var k = 85
console.log(maxSum(A, k));