let nums = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6,];
console.log (nums);

let numSet = new Set(nums)
console.log (numSet);

let numSum = 0;
for (let i = 0; i < nums.length; i++) {
    numSum += nums [i];
}
console.log (numSum);

let numSetSum = 0;

for (const num of numSet) {
    numSetSum += num;
}
let numSetSum2 = numSetSum * 2;

console.log (numSetSum2) -numSum;
let singleNumber = numSetSum2 -numSum
console.log (`The single number is ${singleNumber}`)