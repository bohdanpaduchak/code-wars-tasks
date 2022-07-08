
// Return Negative          https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// function makeNegative(num) {
//     if (num>0){
//       return -num;
//     }else return num;
//   }



// Grasshopper - Messi goals function       https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return laLigaGoals+copaDelReyGoals+championsLeagueGoals;
//   }



//   Grasshopper - Terminal game move function      https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
// function move (position, roll) {
//     return roll*2+position;
//   }



//   Grasshopper - Personalized Message     https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
// function greet (name, owner) {
//     if(name===owner){
//       return 'Hello boss'
//     }else{
//       return 'Hello guest'
//     }
//   }



//   Keep Hydrated!         https://www.codewars.com/kata/keep-hydrated-1/train/javascript
// function litres(time) {
//     return Math.floor(time/2 );
//   }



// Opposites Attract        https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// function lovefunc(flower1, flower2){
//     if((flower1+flower2)%2===0){
//       return false
//     }else{
//       return true
//     }
//   }

// function lovefunc(flower1, flower2){
// return flower1 %2 !== flower2 % 2;
//   }

// function lovefunc(flower1, flower2){
// return (flower1 +flower2) % 2===1;
//   }



// Function 3 - multiplying two numbers     https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
// function multiply(numberOne, numberTwo){
//   return numberOne * numberTwo;
// }

// let multiply = (numberOne, numberTwo) => numberOne * numberTwo;



// Century From Year       https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
// function getCentury(year){
//     console.log(Math.ceil(year/100));
// }
// getCentury(1901)
// getCentury(1705)
// getCentury(1601)
// getCentury(2000)



// Twice as old            https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     if (sonYearsOld * 2 > dadYearsOld) {
//         return sonYearsOld * 2 - dadYearsOld;
//     }else if(sonYearsOld * 2 === dadYearsOld){
//       return 0;
//     } else {return dadYearsOld - sonYearsOld * 2}
// }



// Third Angle of a Triangle       https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
// function otherAngle(angleOne, AngelTwo) {
//     return 180-(angleOne+AngelTwo);
//   }



// Volume of a Cuboid              https://www.codewars.com/kata/58261acb22be6e2ed800003a/train/javascript
// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//       return length * width * height;
//     }
//   }



// Beginner Series #4 Cockroach        https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
// function cockroachSpeed(s) {
//     let santumetrPerSec = 100000/3600;
//     return Math.floor(s*santumetrPerSec)
//   }



// Get Nth Even Number             https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
// function nthEven(n){
//     if (n===0 || n===1){
//       return 0
//     }return n*2-2
//    }


// What's the real floor?              https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
// function getRealFloor(n) {
//     if (n<0){
//       return n;
//     }else if(n===0){
//       return 0;
//     }else if(n<13){
//       return n-1
//     }return n-2
//     }


// Is n divisible by x and y?              https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
// function isDivisible(n, x, y) {
//     return n%x===0 &&n%y===0;
//   }



// Find the smallest integer in the array      https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args);
//     }
//   }


// You Can't Code Under Pressure #1                https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
// function doubleInteger(i) {
//     return i*2;
//   }


// Beginner Series #2 Clock                https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
// function past(h, m, s) {
//     return (h * 3600 + m * 60 + s) * 1000;
// }



// Geometry Basics: Circle Circumference in 2D     https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
// function circleCircumference(circle) {
//     return Math.PI*2*circle.radius;
//     }



// Fun with ES6 Classes #2 - Animals and Inheritance       https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

// class Shark extends Animal {
//     constructor(name, age, status) {
//       super(name, age, 0, "shark", status);
//     }
//   }

//   class Cat extends Animal {
//   constructor(name, age, status, species, legs) {
//       super(name, age, 4, "cat", status);
//     }
//     introduce(){
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`+"  Meow meow!";
//     }
//   }

//   class Dog extends Animal {
//   constructor(name, age, status, master) {
//       super(name, age, 4, "dog", status);
//     this.master=master;
//     }
//   greetMaster(){
//     return `Hello ${this.master}`;
//   }
//   }

// Training JS #12: loop statement --for..in and for..of       https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
// function giveMeFive(obj) {
//     let arrMoreFiveLetters = [];
//     for (let moreFive in obj) {
//         if (moreFive.length === 5) {
//             arrMoreFiveLetters.push(moreFive);
//         }
//         if(obj[moreFive].length === 5){
//           arrMoreFiveLetters.push(obj[moreFive]);
//         }
//     }
//     console.log(arrMoreFiveLetters)
//     return arrMoreFiveLetters;
// }




// Understanding closures - the basics                 https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript
// function buildFun(n){

// 	const res = []

// 	for (let i = 0; i< n; i++){
// 		res.push(function(){
// 			return i
// 		})
// 	}
// 	return res
// }


// Find the first non-consecutive number               https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
// function firstNonConsecutive(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] - arr[i - 1] !== 1) { return arr[i] }
//     }
//         return null;
// }

// Convert a string to an array            https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
// function stringToArray(string) {
//     return string.split(" ");
// }


// DNA to RNA Conversion                   https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// function DNAtoRNA(dna) {
//     return dna.replace(/T/g, 'U');
// }

// function DNAtoRNA(dna) {
//     return dna.split('T').join('U');
// }



// Find Maximum and Minimum Values of a List               https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// let min = function(list){
//     return Math.min(...list);
// }
// let max = function(list){
//     return Math.max(...list);
// }


// Smallest value of an array                          https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// function min(arr, toReturn) {
//     if (toReturn === 'value') {
//         return Math.min(...arr)
//     } else if (toReturn === 'index') {
//         return arr.indexOf(Math.min(...arr))
//     }
// }



// Beginner - Lost Without a Map                   https://www.codewars.com/kata/beginner-lost-without-a-map
// let arr=[1, 2, 3];
// let arrDoubled=[];
// arr.map(function (numeros) {
//     arrDoubled.push(numeros * 2);
// })
// console.log(arrDoubled)

// function maps(x){
//     return x.map(n => n * 2);
//   }



// A wolf in sheep's clothing                      https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
// function warnTheSheep(queue) {
//     let all = queue.reverse();
//     let index = all.indexOf("wolf");
//     if (all[0] === "wolf") {
//         return "Pls go away and stop eating my sheep"
//     }return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
// }
// warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]);

// function warnTheSheep(queue) {
//     const position = queue.reverse().indexOf('wolf');
//     return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
//   }


// Gravity Flip                                    https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript
// const flip = function (d, a) {
//     if (d === 'R') {
//         a.sort(function (a, b) {

//             return a - b;
//         })
//         return a;
//     }else if(d ==='L')(a.sort(function (a, b) {

//     return b - a;
// }))
// return a;
// }


// Check same case                       https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript          
// function sameCase(a, b){
//     if(a.toUpperCase()===a && /^[a-zA-Z]/.test(a) && /^[a-zA-Z]/.test(b)){
//       if(b.toUpperCase()===b && /^[a-zA-Z]/.test(b)){
//         return 1
//       }return 0
//     }else if(a.toLowerCase()===a  && /^[a-zA-Z]/.test(a) && /^[a-zA-Z]/.test(b)){
//        if(b.toLowerCase()===b && /^[a-zA-Z]/.test(b)){
//         return 1
//       }return 0
//     }else{
//       return -1;
//     }
//   }

// Sum of two lowest positive integers     https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// function sumTwoSmallestNumbers(numbers) {
//     let arrNumb = numbers;
//     let minArr = Math.min(...arrNumb);
//     let firstMinNum = arrNumb.splice(arrNumb.indexOf(minArr), 1)
//     let minArr2 = Math.min(...arrNumb);
//     return minArr + minArr2
// }

// function sumTwoSmallestNumbers(numbers){  
//     numbers = numbers.sort(function(a, b){return a - b; });
//     return numbers[0] + numbers[1];
//   };


// Coefficients of the Quadratic Equation              https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/javascript
// function quadratic(x1, x2) {
//     let arr = [1]
//     function secondNumber(x1, x2) {
//         if (x1 > 0) {
//             x1 = -x1;
//         }else if (x1 < 0 && x1!==0) {
//             x1=Math.abs(x1)
//         }
//         if (x2 > 0) {
//             x2 = -x2;
//         }else if (x2 < 0 && x2!==0) {
//             x2=Math.abs(x2)
//         }
//         arr.push(x1 + x2)
//     }
//     secondNumber(x1, x2)
//     arr.push(x1 * x2);
//     return arr
// }

// function quadratic(x1, x2){
//     return [1, -(x2 + x1), (x1 * x2)]
//  }


// Quarter of the year         https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

// const quarterOf = (month) => {
//     if(month <= 3){
//       return 1;
//     }else if(month <= 6){
//       return 2;
//     }else if( month <= 9){
//       return 3;
//     }else if(month <= 12){
//       return 4;
//     }
//   }

// const quarterOf = m => Math.ceil(m/3);





// Total amount of points        https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
// function points(games) {
//   let count = 0;
//   for (game in games) {
//     let numbers = games[game].split('');
//     if (numbers[0] === numbers[2]) {
//       count += 1;
//     } else if (numbers[0] > numbers[2]) {
//       count += 3;
//     } else if (numbers[0] < numbers[2]) {
//       count += 0;
//     }
//   }
//   return count
// }

// const points=games=>games.reduce((output,current)=>{
//   return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// },0)


// Pillars         https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
// function pillars(numPill, dist, width) {
//   if(numPill>1){
//     return (numPill-2)*width + (numPill-1)*dist*100;
//   }return 0;
//  }

//  function pillars(num_pill, dist, width) {
//   // your code here
//   return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
// }




















// function elevator(left, right, call){
//     if( call===right){
//         console.log("right")
//       return "right"
//     }else if(call===left){
//         console.log("left")
//         return "left"
//     }else if(call> left && right>left){
//         console.log("right")
//       return "right"
//     }
//     console.log("left")
//     return "left"
//   }
//   elevator(0,1,0);
//   left
// elevator(0,1,1)
// right
// elevator(0,1,2)
// right
// elevator(0,0,0)
// , 'right'
// elevator(0,2,1)
// , 'right'






// function sumOfDifferences(arr) {
//   let middleNum=arr[0]+arr[1]+arr[2]-Math.min(...arr)-Math.max(...arr);
//   if(arr.length>2){
//     console.log(Math.max(...arr)-middleNum+middleNum-Math.min(...arr));
//     return Math.max(...arr)-middleNum+middleNum-Math.min(...arr);
//   }else if(arr.length===2){
//     console.log(Math.max(...arr)-Math.min(...arr))+(Math.min(...arr)-Math.max(...arr));
//     return (Math.max(...arr)-Math.min(...arr))+(Math.min(...arr)-Math.max(...arr));
//   }return 0;
// }
// // sumOfDifferences([1, 2, 10])
// // 9
// sumOfDifferences([8, 1])
// // 2