

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(str) {
    newStr=[]
    off=0
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== " "){
            newStr[off]= str[i];
            off++
        }
    }
    console.log(newStr.join(""))
}

removeBlanks("a b c d")


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function removeDigit(str){
    newStr=[]
    off=0
    for (let i = 0; i < str.length; i++) {
        if( !isNaN(str[i]) ){
            newStr[off]= str[i];
            off++
        }
    }
    console.log(Number.parseInt(newStr.join("")))
}

removeDigit("a1b2c3d4")


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function frontCap(str){
    newStr=[]
    off=0
    for (let i = 0; i < str.length; i++) {
        if(str[i] === " "){
            newStr[off] = str[i+1]
            off++
        }
    }
    console.log(newStr.join("").toUpperCase())
}

frontCap(" Thomas is dumb")


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

 function countSpaces(str){
    counter=0
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== " "){
            counter++
        }
    }
    console.log(`number of letters ${counter}`)
 }

 countSpaces("Hi Thomas, how are you")


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShort(arr, val){
    strHold=[]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length>=val){
            strHold.push(arr[i])
        }
    }
    console.log(strHold)
}

removeShort(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)













