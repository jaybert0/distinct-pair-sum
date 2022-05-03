function distinctPairSum(arr, k) {
  // type your code here
  let newArr = []
  // let newArr2 = []
  // console.log(arr.slice(0,-1))
  const pairs = new Set()
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] + arr[i+1]) == k) {
      // newArr.shift([arr[i], arr[i+1]])
      newArr.push([arr[i], arr[i+1]])
      // console.log(newArr)
      // for (let j = 0; j < newArr.length; j++) {
      //   if (newArr[j][0] !== newArr[j+1][1] && newArr[j][1] !== newArr[j+1][0]) {
    // }
      // }
    }   
    console.log(... new Set(newArr))
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// Input: [0, 1, 1, 2, 0, 1, 1], 2
// Output: [[1, 1], [2, 0]]

// Input: [3, 4, 2, 1, 5, 2, 8, 2], 10
// Output: [[2, 8]]
// for loop. arr[i] + arr[i+1] = k => [arr[i], arr[i+1]]
// And a written explanation of your solution
