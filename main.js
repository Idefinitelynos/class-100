var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("homework").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

     console.log(event); 

    var Content = event.results[0][0].transcript;

    document.getElementById("homework").innerHTML = Content;
    console.log(Content);
        if (Content== "take my selfie") {
        speak()   
        }
}

function speak(){
    var synth = window.speechSynthesis
    speak_data = "taking your selfie in five seconds"
    var utterThis=new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)
    Webcam.attach(camera)
    setTimeout(function() {
        takepic()
        save()
    }, 5000);
}

Webcam.set({
    width: 300,
    height: 300,
    imageformat: "png",
    pngquality: 90

})
camera=document.getElementById(camera)

function takepic() {
    Webcam.snap( function(data_uri) {
        document.getElementById("result").innerHTML="<img id='picdis' src=" + data_uri + ">"
    })
}
function save() {
    link=document.getElementById("thread")
    img=document.getElementById("picdis").src
    link.href=img
    link.click()
}