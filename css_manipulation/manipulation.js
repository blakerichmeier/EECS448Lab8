function changeBorderColor() {
        var myColor1Red = document.getElementById("2");
	var myColor1Green = document.getElementById("3");
	var myColor1Blue = document.getElementById("4");

        //if(myColor1.value == "red" || myColor1.value == "green" || myColor1.value == "blue"){
        //console.log(myColor1)
        var someTag = document.getElementById("1"); 
        //Change the style attribute 
        someTag.style.borderColor = myColor1Red.value + myColor1Green.value + myColor1Blue.value;
	console.log(someTag)
        //}
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
    var myColor3Red = document.getElementById("6");
	var myColor3Green = document.getElementById("7");
	var myColor3Blue = document.getElementById("8");
    //if(myColor3.value == "red" || myColor3.value == "green" || myColor3.value == "blue"){
    var someTag2 = document.getElementById("1"); 
    //Change the style attribute 
    someTag2.style.backgroundColor = myColor3Red.value + myColor3Green.value + myColor3Blue.value;
    //}
};
