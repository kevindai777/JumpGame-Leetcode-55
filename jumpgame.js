//Objective is to see if it is possible to jump from one end of an array to 
//the other. Each element in each index represents the number of jumps 
//possible from that index.

let nums = [2,3,1,1,4]


//O(n) solution that traverses the entire array and takes the optimal solution
//at each step

let start = 0
let end = nums.length - 1
let max = 0

while (start < nums.length) {
    //start + nums[start] represents the index that the pointer will end
    //up at if the current element in chosen
    max = Math.max(max, start + nums[start])
    
    //If we've reached the end or gone past it
    if (max >= end) {
        return true
    }
    
    //If the index we're at is less than the pointer
    // or if the jump element is '0'
    if (max <= start && nums[start] == 0) {
        return false
    }
    
    start++
}

return false


//O(n) solution where n is the length of the array
//A tad more intuitive approach starting from the back of the array

let end = nums.length - 1
    
//Starting from the back, check to see if it can be reached from a previous index
//If it can, then do the same check for the previous index
for (let i = nums.length - 1;  i >= 0; i--) {
    if (nums[i] + i >= end) {
        end = i
    }
}

//See if this iteration goes all the way until the front of the array
return end == 0
