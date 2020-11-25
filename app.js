const speechRecognition = window.webkitSpeechRecognition /*Chrome*/ || window.SpeechRecognition;

function startListening(){
    const recog = new speechRecognition();
    recog.start();
    recog.onstart = console.log("Started Listening...");

    recog.onresult = function(data){
        handleResults(data);
    }
}

function handleResults(data){
    let text = data.results[0][0].transcript;
    text = text.toLowerCase();
    
    if (text.includes('bike game')){
        console.log("Opening bikegame...");
        window.open('http://www.bikegame.ga')
    }
    else if (text.includes('my info')){
        console.log("Opening your info...");
        window.open('https://nirupamreddy2006.github.io/nirupamwebsite.com/')
    }
    else if (text.includes('my login page')){
        console.log("Opening your login page...");
        window.open('https://nirupamreddy2006.github.io/login.web/')
    }
    else if (text.includes('my channel')){
        console.log("Opening your channel...");
        window.open('https://www.youtube.com/channel/UC_bPMxJGocyTx-2HB2884ww?view_as=subscriber')
    }
    else if (text.includes('youtube')){
        console.log("Opening youtube...");
        window.open('https://www.youtube.com')
    }
    else if (text.includes('google')){
        console.log("Opening google...");
        window.open('https://google.com')
    }
    else if (text.includes('my login web')){
        console.log("Opening your login web...");
        window.open('https://nirupamreddy2006.github.io/login.github.io/')
    }
    else if (text.includes('weather')){
        console.log("Opening weather forecast...");
        window.open('https://in.search.yahoo.com/yhs/search?hspart=omr&hsimp=yhs-001&type=87fjnhltxzm001020&param1=y6bdVFVIsvuYsgEClQfz8NEPSp4FWG51g5cOG5gIsG7Nq19voUwKsV7EssJB1tokQ%2FZ8xJDKd5XE%2FaXWZbUMsg%2FcCh6bflgJLLX%2B3DW4MBzVIUYarJvb%2BB9csUVH3ODu7xKaqlzwYWRLrpEak6aAcWyjNw5e86mDhWM%2F5tZKUFEFb13YCC4VxFLT%2F88wm3f72XreJWhNR28T4OD%2BTdW%2Fs4L%2FS1327mNkisQstB7PMdzB7aKV%2FJw4Vn9v4dj%2FgXRVuQiyZJlpFzjD20h4OkymjL6mY8amYzbW0dNfVVwwnp8PR7vOe8oGZIuyiaEhBJlFXc3Uj6Zi7k9MvBo2JiwArjXqzfMJwizxtrs1XkNFnhVCTyjsD7pSqQYhck9CaqH1y9RYOSMBLaluGxT0HOMbMQ%3D%3D&p=weather+forecast+in+hyderabad')
    }
    else if (text.includes('site')){
        console.log("Opening google site...");
        window.open('https://sites.google.com/view/nirupamsite/home')
    } else {
        console.log(`I can't perform task : ${text}`)
    }
}

window.addEventListener('DOMContentLoaded', startListening());
