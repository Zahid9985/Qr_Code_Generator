function generateQr() {
  const input = document.getElementById("input").value;  //qrText
  const qr = document.getElementById("qr");     //qrBox
  qr.innerHTML = ""; // clear previous QR

  if (!input.trim()) {
    alert("Please enter a URL or text.");
    return;
  }

  QRCode.toCanvas(input, { width: 200 }, function (error, canvas)
 {
    if (error) {console.error(error);
        return;
    }
    qr.appendChild(canvas);
  });
}
function downloadQR() {
  const canvas = document.querySelector("canvas");
   if (!canvas) {
    alert("Please generate a QR code first.");
    return;
  }
  const link = document.createElement("a");
  link.download = "qr-code.png";
  link.href = canvas.toDataURL();
  link.click();
}