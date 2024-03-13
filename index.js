const quotes = [
    {
        quote: "Today is your opportunity to build the tomorrow you want.",
        author: "Ken Poirot"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You define your own life. Don't let other people write your script.",
        author: "Oprah Winfrey"
    },
    {
        quote: "Someone once told me to never dream. I said NEVER SAY NEVER",
        author: "Justin Bieber"
    }
]

const backgrounds = [
    "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1501493870936-9c2e41625521?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")

window.onload = function(){
    randomQuote()
    changeBg()
}

function randomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]
    quoteEl.textContent = Object.values(randomQuote)[0]
    authorEl.textContent = "- " + Object.values(randomQuote)[1]
    // console.log("quote")
}

function changeBg()	{
    const randomIndex = Math.floor(Math.random() * backgrounds.length)
    const randomBg = backgrounds[randomIndex]
    document.body.style.backgroundImage = "url(" + randomBg + ")"
    // console.log("bg")
}

