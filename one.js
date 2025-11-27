 var quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The harder the battle, the sweeter the victory. – Les Brown",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Perseverance is not a long race; it is many short races one after the other. – Walter Elliot",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Courage is not the absence of fear, but the triumph over it. – Nelson Mandela",
    "Action is the foundational key to all success. – Pablo Picasso",
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "Courage is not the absence of fear, but the triumph over it. – Nelson Mandela",
    "Don't be afraid to give up the good to go for the great. – John D. Rockefeller",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Life begins at the end of your comfort zone. – Neale Donald Walsch",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Perseverance is not a long race; it is many short races one after the other. – Walter Elliot",
    "Action is the foundational key to all success. – Pablo Picasso",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "The difference between who you are and who you want to be is what you do. – Unknown",
    "Success is the ability to go from one failure to another with no loss of enthusiasm. – Winston Churchill",
    "Bloom where you are planted. – Unknown",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Dream big. Start small. Act now. – Robin Sharma",
    "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
    "Don’t count the days. Make the days count. – Muhammad Ali",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "The mind is everything. What you think you become. – Buddha",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "The only way to do great work is to love what you do. – Steve Jobs"
];


    var quoteBox = document.getElementById("quoteBox");
    var button = document.getElementById("btn");

    function getRandomColor() {
        var hue = Math.floor(Math.random() * 360);
        return "linear-gradient(120deg, hsl(" + hue + ", 70%, 85%), hsl(" + ((hue + 50) % 360) + ", 70%, 75%))";
    }

    function changeQuote() {
        quoteBox.style.opacity = 0;
        quoteBox.style.transform = "scale(0.95)";
        setTimeout(function() {
            var index = Math.floor(Math.random() * quotes.length);
            quoteBox.innerText = quotes[index];
            document.body.style.background = getRandomColor();
            quoteBox.style.opacity = 1;
            quoteBox.style.transform = "scale(1)";
        }, 400);
    }

    button.addEventListener("click", changeQuote);