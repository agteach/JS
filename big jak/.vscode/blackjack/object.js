// // // // // // // // let castle = {
// // // // // // // //     table: 2,
// // // // // // // //     pool: true,
// // // // // // // //     rentals:["kitchen", "Wifi", "pool", "free parking on premium" ]
// // // // // // // //  }
// // // // // // // //  console.log(castle.table)
// // // // // // // //  console.log(castle.rentals[2])
// // // // // // // let bio = {
// // // // // // //     name: "Aladdin",
// // // // // // //     age: 22,
// // // // // // //     country: "Ethiopia"  // Ensure the country value is a string by adding quotes
// // // // // // // };

// // // // // // // function logData() {
// // // // // // //     console.log(bio.name +" is " + bio.age + " years old and lives in  " + bio.country);  // This will log '22'
// // // // // // // }

// // // // // // // logData();  // Call the function to log bio.age
// // // // // // let age = 34
// // // // // // if (age<6) {
// // // // // //     console.log("free")
// // // // // // } else if(age<=17){
// // // // // //     console.log("child discount")
// // // // // // } else if(age<=26){
// // // // // //     console.log("student discount")
// // // // // // } else if(age<66){
// // // // // //     console.log("full price")
// // // // // // } else {
// // // // // //     console.log("senior citizen discount")
// // // // // // }


// // // // // let largeCountries = ["china", "india", "USA", "Indonesia", "pakistan"];

// // // // // largeCountries.pop()
// // // // // largeCountries.push("Ethiopia")
// // // // // largeCountries.shift()
// // // // // largeCountries.unshift("Nigeria")
// // // // // for (let i = 0; i < largeCountries.length; i++) {
// // // // //     console.log("- " + largeCountries[i]);  // Access each country by index
// // // // // }




// // //  let dayOfmonth = 31
// // //  let weekday = "friday"
// // //  if (dayOfmonth===13 && weekday==="friday"){
// // //      console.log(emoj)
// // //  }


// //   let dayOfmonth1= 13;
// //   let weekday1 = "friday";
// //   if (dayOfmonth1 === 13 || weekday1 === "friday") {
// //      console.log("🎉");
// //   }
 



// let hands = ["rock", "paper", "scissor"]


// function getHands() {
//     let randomIndex = Math.floor(Math.random()*3) 
//     return hands[randomIndex]
// }
// console.log(getHands())


let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let orangeShelf = document.getElementById("orange-el");
let appleShelf = document.getElementById("apple-el");

function sorting() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") { // No spaces around the apple emoji
            appleShelf.textContent += "🍎 "; // Add apple emoji with a space
        } else if (fruit[i] === "🍊") { // No spaces around the orange emoji
            orangeShelf.textContent += "🍊 "; // Add orange emoji with a space
        }
    }
}
sorting();
