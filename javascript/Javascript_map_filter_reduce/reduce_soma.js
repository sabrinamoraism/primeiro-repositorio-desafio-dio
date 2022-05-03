const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumNumbers(nums){
    return nums.reduce(callbackfn);
}

function callbackfn(prev, current) {
    console.log({prev});
    console.log({current});
    return prev + current;
}

console.log(sumNumbers(nums));