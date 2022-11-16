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
    recognition.start();
}

// ON SPEECH RECOGNITION START
recognition.onstart = function() {

    recognition.onresult = function(event) {
    
        // GETTING THE RECOGNITION RESULT
        let result = event.results[event.resultIndex][0].transcript;
        result = result.toLowerCase();
        // SETTING THE RECOGNITION RESULT TO THE OUTPUT
        output.innerHTML = result;

        let audio = document.createElement('audio');
        
        // COMMANDS LIST
        if (result.includes("alex") && result === "") {
            assistent.innerHTML = "Diga doutor, diga! 💬💬💬";
            audio.src = "static/audio/diga.ogg";
            audio.play();
        } else if (result.includes("alex") && result.includes("horas")) {
            assistent.innerHTML = "Hora de fazer um arduino sem módulo 😬😬😬";
            audio.src = "static/audio/horas.ogg";
            audio.play();
        } else if (result.includes("alex") && result.includes("dia")) {
            assistent.innerHTML = "Bom dia doutor! 😎😎😎";
            audio.src = "static/audio/bom dia.ogg";
            audio.play();
        } else if (result.includes("alex") && result.includes("tarde")) {
            assistent.innerHTML = "Boa tarde mestre! 🔥🔥🔥";
            audio.src = "static/audio/boa tarde.ogg";
            console.log("Tarde")
            audio.play();
        } else if (result.includes("alex") && result.includes("dólar")) {
            console.log("Dolar")
            $.ajax({
                url: '/ajaxDolar',
                method: 'GET',
                data: {
                    keyword: 'dolar'
                },
                contentType: 'application/json',
                success: function(resposta){
                    console.log(resposta.valueDolar)
                    assistent.innerHTML = resposta.valueDolar+" 💵"
                    say(resposta.valueDolar)
                }
            })
            }else if (result.includes("alex") && result.includes("temperatura")) {
                console.log("Temperatura")
                $.ajax({
                    url: '/ajaxWeather',
                    method: 'GET',
                    data: {
                        keyword: 'temperatura'
                    },
                    contentType: 'application/json',
                    success: function(resposta){
                        console.log(resposta.valueTemp)
                        assistent.innerHTML = resposta.valueTemp+" 🌡️"
                        say(resposta.valueTemp)
                    }
                })
            }else if (result.includes("alex") && result.includes("pesquisa")) {
                $.ajax({
                    url: '/ajaxSearch',
                    method: 'GET',
                    data: {
                        pesquisa: result
                    },
                    contentType: 'application/json',
                    success: function(resposta){
                        assistent.innerHTML = resposta.valueText
                        say(resposta.valueText)
                        window.open(resposta.valueLink, '_blank')
                    }
                })
            }
        }
    }


// ON SPEECH RECOGNITION END
// recognition.onend = function() {
//     assistent.innerHTML = "Não estou mais te ouvindo...";
//     say("Não estou mais te ouvindo...");
// }

// ON SPEECH RECOGNITION ERROR
recognition.onerror = function(event) {
    assistent.innerHTML = "Ocorreu um erro: " + event.error;
    say("Ocorreu um erro: " + event.error);
}

// STARTING THE RECOGNITION
startBtn.addEventListener('click', start);