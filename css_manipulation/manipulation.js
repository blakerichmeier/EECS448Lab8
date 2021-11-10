function changeBorderColor() {
        var myColor1 = document.getElementById("2");

        if(myColor1.value == "red" || myColor1.value == "green" || myColor1.value == "blue"){
        console.log(myColor1)
        var someTag = document.getElementById("1"); 
        //Change the style attribute 
        someTag.style.borderColor = myColor1.value;
        }
};

function changeBorderWidth() {
    var myColor2 = document.getElementById("3");

    if(myColor2.value >= 0 && myColor2.value <= 10){
        console.log(myColor2)
        var someTag1 = document.getElementById("1");
        //Change the style attribute 
        someTag1.style.borderWidth = myColor2.value;
    }
};

function changeBackgroundColor() {
    var myColor3 = document.getElementById("4");

    if(myColor3.value == "red" || myColor3.value == "green" || myColor3.value == "blue"){
    console.log(myColor3)
    var someTag2 = document.getElementById("1"); 
    //Change the style attribute 
    someTag2.style.backgroundColor = myColor3.value;
    }
};