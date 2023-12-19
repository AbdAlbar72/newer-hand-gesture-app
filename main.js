Webcam.set({
    width: 640,
    height: 480,
    image_format: 'jpeg',
    jpeg_quality: 90
});

Webcam.attach('#webcam-container');

function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById('capturedImageContainer').innerHTML = '<img src="'+data_uri+'"/>';
    });
}
function identifyImage() {
    document.getElementById('gestureName').innerText = 'Hand Gesture: Gesture 1'; 
    document.getElementById('gestureIcon').src = 'gesture1.png';
}
