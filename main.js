/* https://teachablemachine.withgoogle.com/models/7mpUiZsL3/ */
Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90,
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTMl = '<img id="image_captured" src = "'+data_uri+'"/>';
    });
};

console.log("ml5 Version: ",ml5.version);
classifier = ml5.imageClassifier(' https://teachablemachine.withgoogle.com/models/7mpUiZsL3/model.jason',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded Successfully!")
};