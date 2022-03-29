

function startClassifaction(){
  navigator.mediaDevices.getUserMedia({audio:true});
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/A2xzUB0QW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);

    r=Math.floor(Math.random()* 255)+1;
  g=Math.floor(Math.random()* 255)+1;
    b=Math.floor(Math.random()* 255)+1;

    document.getElementById("result_label").innerHTML= "I Can Hear- "+ results[0].label;

    document.getElementById("result_label").style.color= "rgb("+r+","+g+","+b+")";

    document.getElementById("Confidence").innerHTML='Accuracy-'+ (results[0].confidence * 100).toFixed[2]+"%";

    document.getElementById("Confidence").style.color= "rgb("+r+","+g+","+b+")";


    img1=document.getElementById(A1);
    img2=document.getElementById(A2);
    img3=document.getElementById(A3);
    img4=document.getElementById(A4);

    if(results[0]=="clapping"){
img1.src="aliens-01.gif"
img2.src="aliens-02.png"
img3.src="aliens-03.png"
img4.src="aliens-04.png"
    }
    else if(results[0]=="Bell"){
  img1.src="aliens-01.png"
  img2.src="aliens-02.gif"
  img3.src="aliens-03.png"
  img4.src="aliens-04.png"
    }
    else if(results[0]=="Snap"){
      img1.src="aliens-01.png"
      img2.src="aliens-02.png"
      img3.src="aliens-03.gif"
      img4.src="aliens-04.png"
        }
        else if(results[0]=="clicking"){
          img1.src="aliens-01.png"
          img2.src="aliens-02.png"
          img3.src="aliens-03.png"
          img4.src="aliens-04.gif"
            }

    
  }

}

