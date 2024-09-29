let qrText = document.querySelector(".qrText");
let qrImg = document.querySelector(".qrImg");
let qrBox = document.querySelector(".qrBox");

function GenerateQr(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}