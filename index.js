// INSTANCIATING THE SPEECH RECOGNITION

const recognition = new webkitSpeechRecognition();
recognition.lang = "pt-BR";
recognition.continuous = true;
recognition.interimResults = false;

// CREATING SPEECH SYNTHESIS FUNCTION

function say(text) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.lang = "pt-BR";
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
}

// CREATING SLEEP FUNCTION

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// DOM ELEMENTS

const startBtn = document.querySelector('#start');
const output = document.querySelector('#output');
const assistent = document.querySelector('#assistent');

// ON START BUTTON CLICK
function start() {

    assistent.innerHTML = "Estou te ouvindo...";
    say("Estou te ouvindo...");
    // STARTING THE RECOGNITION
    sleep(1200).then(() => {
        recognition.start();
    });
}

// ON SPEECH RECOGNITION START
recognition.onstart = function() {

    recognition.onresult = function(event) {
    
        // GETTING THE RECOGNITION RESULT
        let result = event.results[event.resultIndex][0].transcript;
        result = result.toLowerCase();
        // SETTING THE RECOGNITION RESULT TO THE OUTPUT
        output.innerHTML = result;

        let callAssistent = []
        let audio = document.createElement('audio');

        for (let i = 0; i < "alex".length; i++) {
            callAssistent.push(result[i]);
            console.log(callAssistent);
        }

        // STRING TRATAMENT
        callAssistent = callAssistent.join("");
        result = result.replace(callAssistent, "");
        

        // COMMANDS LIST
        if (callAssistent === "alex" && result === "") {
            assistent.innerHTML = "Diga doutor, diga! 💬💬💬";
            audio.src = "audio/diga.ogg";
            audio.play();
            sleep(5500).then(() => {
                recognition.stop();
            });
        } else if (callAssistent === "alex" && result.includes("horas")) {
            assistent.innerHTML = "Hora de fazer um arduino sem módulo 😬😬😬";
            audio.src = "audio/horas.ogg";
            audio.play();
            sleep(5500).then(() => {
                recognition.stop();
            });
        } else if (callAssistent === "alex" && result.includes("dia")) {
            assistent.innerHTML = "Bom dia doutor! 😎😎😎";
            audio.src = "audio/bom dia.ogg";
            audio.play();
            sleep(5500).then(() => {
                recognition.stop();
            });
        } else if (callAssistent === "alex" && result.includes("tarde")) {
            assistent.innerHTML = "Boa tarde mestre! 🔥🔥🔥";
            audio.src = "audio/boa tarde.ogg";
            audio.play();
            sleep(5500).then(() => {
                recognition.stop();
            });
        } else if (callAssistent === "alex" && result.includes("dólar")) {
            
        }
    }
}

// ON SPEECH RECOGNITION END
recognition.onend = function() {
    assistent.innerHTML = "Não estou mais te ouvindo...";
    say("Não estou mais te ouvindo...");
}

// ON SPEECH RECOGNITION ERROR
recognition.onerror = function(event) {
    assistent.innerHTML = "Ocorreu um erro: " + event.error;
    say("Ocorreu um erro: " + event.error);
}

// STARTING THE RECOGNITION
startBtn.addEventListener('click', start);