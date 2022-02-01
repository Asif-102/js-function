var sentence = ' hello     everyone.     hello      developers. ';
    // space er age space thaka jabe na
function wordCount(sentenceCollection)
{
    var count = 0;
    
    for(var i = 0; i < sentenceCollection.length; i++)
    {
        // console.log(sentenceCollection[i]);
        if(sentenceCollection[i] == " " && sentenceCollection[i-1] != " ")
        {
            count = count + 1
            // count = 0 + 1 = 1
             // count = 1+1 = 2
        }
    }
    count++

    return count;
}

var firstCount = wordCount(sentence)
console.log(firstCount);