let ar_image = new Image();

const width = 1280;
const height = 720;
let filterOption = "";
let buttonContainer = document.getElementById('button_container');

let grayscaleBtn = document.createElement('button');
let arStickerBtn = document.createElement('button');
let isArStickerOn = false;
let removeFilterBtn = document.createElement('button');
let videoElement = document.createElement("video");

function onGrayscaleClicked() {
    filterOption = 'grayscale';
    console.log("switch to grayscale");
}

function onArStickerClicked() {
    filterOption = 'ar_sticker';
    isArStickerOn = true;
    console.log("switch to ar sticker");
}

function onOriginalClicked() {
    filterOption = 'original';
    isArStickerOn = false;
    console.log("remove all filters");
}

grayscaleBtn.classList.add('btn');
grayscaleBtn.classList.add('btn-success');
grayscaleBtn.classList.add('custom_btn_length');
grayscaleBtn.innerText = "Grayscale";
grayscaleBtn.addEventListener( 'click', onGrayscaleClicked);
arStickerBtn.classList.add('btn');
arStickerBtn.classList.add('btn-info');
arStickerBtn.classList.add('custom_btn_length');
arStickerBtn.innerText = "AR Sticker";
arStickerBtn.addEventListener( 'click', onArStickerClicked);
removeFilterBtn.classList.add('btn');
removeFilterBtn.classList.add('btn-primary');
removeFilterBtn.classList.add('custom_btn_length');
removeFilterBtn.innerText = "Remove Filters";
removeFilterBtn.addEventListener( 'click', onOriginalClicked);

buttonContainer.appendChild(grayscaleBtn);
buttonContainer.appendChild(arStickerBtn);
buttonContainer.appendChild(removeFilterBtn);

Promise.all([
    ar_image.src = "img/duck2.png",
]).then(loadMedia)


function loadMedia() {
    //ar_image.crossOrigin="Anonymous";
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            mandatory: {
                minWidth: 1280,
                maxWidth: 1280,
                minHeight: 720,
                maxHeight: 720,
            }
        },
      }).then(stream => {
        
        videoElement.srcObject = stream;
        videoElement.muted = true;
        videoElement.play();
        //drawToCanvas();
      });
} 

document.body.appendChild(videoElement);