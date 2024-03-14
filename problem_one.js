// PW2.01.01 Two Sum

function targetSum(nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
      }
    }
  }
  return result;
}

targetSum([2, 4, 11, 7, 15, 5], 9);
