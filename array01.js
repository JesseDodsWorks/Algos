// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

// function pushFront(arr, val) {
//     newArr=[]
//     newArr[0] = val
//     for(i = 1; i <= arr.length; i++) {
//         newArr[i] = arr[i-1]
//     }
//     return newArr
// }

// console.log(pushFront([5,7,2,3],8))


// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

// function popFront(arr) {
//     val = arr[0]
//     newArr = []
//     for(i = 1;i <= arr.length-1; i++) {
//         newArr[i-1] = arr[i]
//     }
//     output = [newArr,val]
//     return output
// }

// popFront([0,5,10,15])
// console.log(output[0],output[1])

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(arr, pos, val) {
    let num = 0
    newArr = []
    for(let i = 0; i <= arr.length-1; i++) {
        console.log("interation ", i)

        if(i == pos) {
            console.log("made it in statement")
            num++
            newArr[i] = val
            console.log("made it in out of statement")
        }

        newArr[i + num] = arr[i]
        console.log(newArr)
    }

    return newArr
}

console.log(insertAt([5,7,2,3], 1, 8))

























