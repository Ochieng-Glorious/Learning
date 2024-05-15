//Flatten an array of arrays
// let arr = [[0,1], [2,3], [4,5]];

// const flattendArr = arr.reduce(
//    (previousValue, currentValue) => previousValue.concat(currentValue), [] 
// );
// console.log(flattendArr);

//Find the largest prime number in an Array 
// const arr = [4,5,7,8.9,11,12,17,97,47];

// function isPrime(number){
//     if(number % 2 == 0 || number < 2)return false;
//     for (let fact=3; fact <= Math.sqrt(number); fact +=2){
//         if (number % fact == 0) return false;
//     }
//     return true;
// }
// // console.log(arr.sort((a,b) => a -b).findLast(isPrime))
// //better way of finding the last prime number
// console.log(arr.sort((a, b) => a - b).reverse().find(isPrime));
// //better way of finding the first prime number 
// console.log(arr.sort((a, b) => a - b).find(isPrime));

//Remove duplicates from an array
// const arr = [2,3,5,3,6,8,9,2,11,5]
// const strArr = ['Mike', 'John', 'Nancy', 'Thomas', 'Nancy', 'Mike']
// //Working
// const resultArr = [...new Set(arr)]
// console.log(resultArr);

// const resultStrArr = [...new Set(strArr)];
// console.log(resultStrArr);

//find the last element of an array without using length propert.
const arr = ['white', 'red', 'black', 'yellow'];
//working
console.log (arr.at(-1))