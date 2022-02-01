// hello = olleh


function reverseString(sentence)
{

    // console.log(sentence);
    // console.log(sentence.length);
    var revWord = "";
    for(var i = sentence.length - 1; i >= 0; i--)
    {
        revWord = revWord + sentence[i];
        //           "" + "!" = "!"
            //         "!"+"d" ="!d"  
    }

    // console.log(revWord);
    return revWord;

}

var x =reverseString("Hello World!")
console.log(x);