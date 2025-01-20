// // let count = 0
// // let countEl = document.getElementById("count-el")
// // console.log(countEl)
// // function increment(){
// //     count = count+1
// //     countEl.innerText=count
// //    // console.log(count)
// // }
// // function save(){
// //   console.log(count)
// // }
// // //save()
// let name="Abdi"
// let greeting="Hi, my name is "
// let myGreeting=greeting+name
// console.log(myGreeting)
let saveEL = document.getElementById("save-el")
console.log(saveEL)
let countEl = document.getElementById("count-el")
console.log(countEl)
let count=0

function increment(){
   count+=1
   countEl.textContent=count
}
function save(){
    let saveAS =count+"-"
    saveEL.textContent+=saveAS
    count = 0
    countEl.textContent = count

}