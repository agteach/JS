let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


//localStorage.setItem("myLeads", "www.example.com")
console.log(localStorage.getItem("myLeads"))





inputBtn.addEventListener("click", function(){
   myLeads.push(inputEl.value)
   inputEl.value = "" // clear the input field
   renderleads()
})
function  renderleads(){
    let listItems = ""
    for (let i=0; i < myLeads.length; i++){
        let listItems = ""
        for (let i = 0; i < myLeads.length; i++) {
            listItems += `
            <li>
            <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
            </a>
            </li>
           
            `
        }
       
          ulEl.innerHTML = listItems
    } 
  
}
