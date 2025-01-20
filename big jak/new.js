// let cards = [7, 3, 9];

// for (let i = 0; i < cards.length; i++) {
//   console.log(cards[i]); // You can do whatever you need to with each card here
// }
let sentence = ["hello", "my", "name", "is", "Abdi"];
let greetingEl = document.getElementById("greeting-el");

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "; // Add a space after each word
}
