const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtraPares(nums){
    return nums.filter(function callback(item){
        return item % 2 === 0;
    }
    );
}

console.log(filtraPares(nums));