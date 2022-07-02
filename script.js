
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





























// function firstNonConsecutive(arr) {
//     //   if(arr)
//     // let firstElem = arr[0];
//     let start = arr[0];


//     for (let i = arr[0]; i < arr.length; i++) {
//         start += 1;
//         console.log(arr[arr.length - 1]);
//         console.log(start);
//         if (start === arr[arr.length - 1]) {
//             console.log('iii');
//             return 'iii';
//         }
//         else if (arr[i] !== start) {
//             console.log(arr[i])
//             return arr[i]
//         }
//         // if(if arr[i]=)
//         // console.log(arr[i])
//     }
// }

// // firstNonConsecutive([1,2,3,4,6,7,8])
// // 6
// firstNonConsecutive([5, 6, 7, 8, 9, 10, 11, 12, 13])
    // null