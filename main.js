function startClassification()
{

    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/ilJNm-3M3/model,json', modelReady);
    
}
function modelReady(){

classifier.classify(gotResults);
}
function gotResults(error, results){

if(error){
console.error(error);
}
else {

console.log(results);
random_number_r = Math.floor(Math.random() * 255) +1 ;
random_number_g = Math.floor(Math.random() * 255) +1 ;
random_number_b = Math.floor(Math.random() * 255) +1 ;

document.getElementById("Sound").innerHTML = 'I can hear - '+ results[0].label;
document.getElementById("Accuracy").innerHTML = 'I am sure  - '+ (results[0].confidence*100).toFixed(2)+"%";
document.getElementById("Sound").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")"
document.getElementById("Accuracy").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")"

img1 =document.getElementById('1');
img2 =document.getElementById('2');
img3 =document.getElementById('3');
img4 =document.getElementById('4');

if(results[0].label == "Background Noise "){
    img.src='alien-01.gif';
    img.src='alien-02.png';
    img.src='alien-03.png';
    img.src='alien-04.png';
}
else if(results[0].label == "long jokes"){

    img.src='alien-01.png';
    img.src='alien-02.gif';
    img.src='alien-03.png';
    img.src='alien-04.png';
}
else if(results[0].label == "RUI theme"){

    img.src='alien-01.png';
    img.src='alien-02.png';
    img.src='alien-03.gif';
    img.src='alien-04.png';
}
else{
    img.src='alien-01.png';
    img.src='alien-02.png';
    img.src='alien-03.png';
    img.src='alien-04.gif';
}

}
}