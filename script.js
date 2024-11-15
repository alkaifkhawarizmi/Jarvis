let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let gif = document.getElementById("voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.pitch = 1
    text_speak.rate = 1
    text_speak.volume = 1
    window.speechSynthesis.speak(text_speak)
}

function greeting(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
           speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
           speak("Good Afternoon Sir")
    }
    else{
        speak("Good Night Sir")
    }
}

window.addEventListener('load',()=>{
    greeting()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new speechRecognition()

recognition.onresult = ((event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    console.log(event)
    takeCommand(transcript.toLowerCase())
})

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display = "none"
    gif.style.display = "block"
})

function takeCommand(msg){
    btn.style.display = "flex"
    gif.style.display = "none"
  if(msg.includes("hello")||msg.includes("hey")||msg.includes("how are you")||msg.includes("tum kaise ho")||msg.includes("hi")){
      speak("Hello Sir , What can i help you")
  }
  else if(msg.includes("who are you?")||msg.includes("who are you")||msg.includes("tum kon ho")||msg.includes("tell me about you")){
    speak("I am bobby your virtual assistant developed by alkef sir")
  }
  else if(msg.includes("open youtube")){
    speak("opening youtube")
    window.open("https://www.youtube.com/","_blank")
  }
  else if(msg.includes("open instagram")||msg.includes("open insta")){
    speak("opening instagram")
    window.open("https://www.instagram.com/","_blank")
  }
  else if(msg.includes("open google")||msg.includes("open chrome")||msg.includes("open browser")){
    speak("opening browser")
    window.open("https://www.google.com/","_blank")
  }
  else if(msg.includes("open chatgpt")){
    speak("opening chatgpt")
    window.open("https://www.chatgpt.com/","_blank")
  }
  else if(msg.includes("open whatsapp")){
    speak("opening whatsapp")
    window.open("https://web.whatsapp.com/","_blank")
  }
  else if(msg.includes("open calculator")){
    speak("opening calculator")
    window.open("calculator://")
  }
  else if(msg.includes("time")){
    let tm = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(tm)
  }
  else if(msg.includes("date")){
    let dt = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(dt)
  }
  else{
    speak(`searching about ${msg.replace("bobby","")}`)
    window.open(`https://www.google.com/search?q=${msg.replace("bobby","")}`)
  }

}

