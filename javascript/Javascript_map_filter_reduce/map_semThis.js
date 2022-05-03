function mapSemThis(arr) {
    return arr.map(function(item){
        return item*2;
    });
}

const nums = [10, 20, 30, 40, 50];

console.log(mapSemThis(nums));