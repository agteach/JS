const container = document.getElementById("container")
console.log(container)

container.innerHTML= "<button onclick = 'buy()'>BUY!</button>"
function buy() {
container.innerHTML += "<p>thank you for buying!</p>"
}