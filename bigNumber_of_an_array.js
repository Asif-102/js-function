var numbers = [34, 21, 45, 54, 88, 55, 23, 60];

function bigNumber(numArray)
{
    numArray.sort(function(a, b){return b - a});
    console.log(numArray);
    
    return numArray[0];
}


var findLarge = bigNumber(numbers);

console.log(findLarge);