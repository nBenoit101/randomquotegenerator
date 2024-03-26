function generateQuote(){
    const quotes = [
        {
            quote: "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
            author: "Michael Scott, Season 5, 'The Duel'"
        },
        {
            quote: "I talk a lot, so I’ve learned to tune myself out.",
            author: "Kelly Kapoor, Season 7, 'Counseling'"
        },
        {
            quote: "I’m not superstitious, but I am a little stitious.",
            author: "Michael Scott, Season 4, 'Fun Run'"
        }


    ];

    let index = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[index].quote + "&quot;";
    document.getElementById("author").innerHTML = quotes[index].author ;
}

window.onload = function (){
    generateQuote();

}

// document.getElementById('generate').addEventListener('click', generateQuote)();