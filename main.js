window.onload = function(){
        document.body.classList.remove("container");

        const audio = new Audio('About You.mp3');
        audio.play();
    
    
};
    
        
/*const text = "A month has passed since fate brought us back together, since our hearts began speaking the same language once more. I never expected this, but here we are finding each other again, feeling the same way once did ,as if no time had ever passed. And all honesty, I wouldn't want it any other way. I wish i could be there to hold your hands, to look into your eyes, and to give you flowers the way you desrve but since i can't, I've made this digital flower for you, an imperfect yet sincere symbol of my love. Your beauty and kindness bloom like these flowers, bringing joy to everyone around you ";
let index = 0;
function typeWriter (){
        if (index < text.length) {
                document.getElementById('message').innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
        }
}
typeWriter();*/


const messages = [
        "A month has passed since fate brought us back together, since our hearts began speaking the same language once more. I never expected this, but here we are finding each other again, feeling the same way once did ,as if no time had ever passed. And all honesty, I wouldn't want it any other way. I wish i could be there to hold your hands, to look into your eyes, and to give you flowers the way you desrve but since i can't, I've made this digital flower for you, an imperfect yet sincere symbol of my love.",
        "I can't wait for the day I finally get to ask, Can i court you?",
        "I've been holding these feelings in for so long, but the moment we meet again, I want to pour my heart out to you every unsaid word, every silent longing, every beat of my heart that whispers your name. There's so much i want to tell you and i want you to feel",
        "So this flower represent the Three Gerberas it means I LOVE YOU, i want you to know that you are cherished, that every moment with you is a gift, and that my feelings for you are true and pure. You are someone i want to adore, to understand, and to love in the most genuine way. So when the time comes, when i finally ask, Can I love you the way you deserve? i hope your heart will hear the sincerity in mine",
        "Your beauty and kindness bloom like these flowers, bringing joy to everyone around you.",
];

let messageIndex = 0;
let charIndex = 0;
let message = document.getElementById("message");

function typeWriter() {
       
             if (charIndex < messages[messageIndex].length) {
                message.innerHTML += messages[messageIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 60);
             } else if (messageIndex < messages.length - 1) {
                messageIndex++;
                charIndex = 0;
                setTimeout(() => {
                       message.innerHTML = "";
                       typeWriter();
                }, 1000);
             }
        }

 typeWriter();
