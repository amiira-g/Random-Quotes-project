var quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "In the middle of every difficulty lies opportunity. – Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
];

var remaining = quotes.length;

function generateQuote() {
  if (remaining === 0) {
    alert("All quotes have been shown! Starting over.");
    remaining = quotes.length;
  }

  var randomIndex = Math.floor(Math.random() * remaining);

  document.getElementById("quote").textContent = quotes[randomIndex];

  var temp = quotes[randomIndex];
  quotes[randomIndex] = quotes[remaining - 1];
  quotes[remaining - 1] = temp;

  remaining--;
}
