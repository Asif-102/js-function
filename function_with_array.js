var numbers = [243, 432,545, 323,54];
                //0  1  2    3   4
//              1, 2,   3,  4, 5
// last itemIndex = array.length - 1

// console.log(numbers.length);

// console.log(numbers[numbers.length - 1])
// numbers.length = 5

// numbers[0]



function printAllarrayNumbers(numbersArray)
{
    // console.log(numbersArray.length);
    var evenArray = [];

    for(var index = 0; index < numbersArray.length; index++)
    {
        // console.log(numbersArray[index], index)
        //index = 0, 1 , 2
        if(numbersArray[index] % 2 == 0)
        {
            // console.log(numbersArray[index]);
            evenArray.push(numbersArray[index])
        }
    }

    return evenArray;
    //ekta number string ekta array ekta object
}

var newEven = printAllarrayNumbers(numbers)
console.log(newEven);

var even = printAllarrayNumbers([234,545,323,5454,23,45,23,124,1343])
console.log(even);
