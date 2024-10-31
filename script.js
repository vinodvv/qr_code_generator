const inputText = document.getElementById('input-text');
const generateBtn = document.getElementById('generate-btn');
const qrCodeDiv = document.getElementById('qr-code');

generateBtn.addEventListener('click', () => {
  const text = inputText.value;

  if (text.trim() === '') {
    alert('Please enter text or URL');
    return;
  }

  // Clear any previous QR code
  qrCodeDiv.innerHTML = '';

  // Create a QR code using qrcodejs
  new QRCode(qrCodeDiv, {
    text: text,
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
});