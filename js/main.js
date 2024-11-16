var quotes = [
    { content: "“To die will be an awfully big adventure.”", author: "- J.M. Barrie, Peter Pan -" },
    { content: "“Never tell the truth to people who are not worthy of it.”", author: "- Mark Twain -" },
    { content: "“So many books, so little time.”", author: "- Frank Zappa -" },
    { content: "“It takes courage to grow up and become who you really are.”", author: "- E.E. Cummings -" },
    { content: "“A day without laughter is a day wasted.”", author: "- Nicolas Chamfort -" },
    { content: "“A room without books is like a body without a soul.”", author: "- Marcus Tullius Cicero -" },
    { content: "“Be yourself; everyone else is already taken.”", author: "- Oscar Wilde -" }
];


//use Fisher–Yates shuffle method to randomize the quotes array

var currentQuoteIndex = 0;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var x = Math.floor(Math.random() * (i + 1));
        [array[i], array[x]] = [array[x], array[i]];
    }
}

shuffleArray(quotes);

function GetQuote() {
  
    document.getElementById("quote").innerHTML = quotes[currentQuoteIndex].content;
    document.getElementById("author").innerHTML = quotes[currentQuoteIndex].author;
    console.log(currentQuoteIndex)
    
    currentQuoteIndex++;
    
    if (currentQuoteIndex >= quotes.length) {
        currentQuoteIndex = 0;
        shuffleArray(quotes);
    }
}
