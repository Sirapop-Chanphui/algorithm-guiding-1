const moveZeroes1 = function (nums) {
  let countZero = 0;
  let newArray = [];
  let pushZero = 0;
  for (let num of nums) {
    num === 0 ? countZero++ : newArray.push(num)
  }
  while (pushZero !== countZero) {
    newArray.push(0);
    pushZero++;
  }
  return newArray
};

// two pointer
const moveZeroes2 = function(nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }

  return nums;
};


const result1 = moveZeroes1([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes1([0]);
console.log(result2); // [0]
