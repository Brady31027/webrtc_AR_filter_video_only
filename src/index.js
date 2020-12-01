let debugMsg = document.getElementById('debug_msg');
let videoElement = document.createElement("video");

function loadMedia() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            mandatory: {
                minWidth: 1280,
                maxWidth: 1920,
                minHeight: 720,
                maxHeight: 1080,
            }
        },
      }).then(stream => {
        debugMsg.innerText += "\nStarting local stream...\n";
        videoElement.srcObject = stream;
        videoElement.muted = true;
        videoElement.play();
      }).catch((err) => {
        debugMsg.innerText += "[Error] Can't start local stream\n";
        debugMsg.innerText += "[Error] "+err.name+ ": "+ err.message +"\n";
      });      
} 

try {
    loadMedia();
} catch(err){
    debugMsg.innerText += "\n [Error] Can't load media\n";
    debugMsg.innerText += "[Error] "+err.name+ ": "+ err.message +"\n";
}

document.body.appendChild(videoElement);