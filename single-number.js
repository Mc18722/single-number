const buildSumOfArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const buildSumOfSet = (set) => {
  let sum = 0;

  for (const num of set) {
    sum += num;
  }
  return sum;
};

const singleNumber = (nums) => {
  let numSum = buildSumOfArray(nums);
  let numSet = new Set(nums);
  
  let numSetSum = buildSumOfSet(numSet);
  let numSetSum2 = numSetSum * 2;

  let singleNumber = numSetSum2 - numSum;
  return singleNumber;
};

let numsArray = [
  [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6],
  [1, 3, 2, 2, 3, 4, 4, 5, 11, 5, 6, 6],
  [1, 1, 2, 2, 3, 3, 4, 5, 5, 4, 6],
  [1, 1, 2, 2, 3, 4, 3, 5, 5, 6, 6],
];

numsArray.forEach((nums) => {
  console.log(`The single number is ${singleNumber(nums)}`);
});
