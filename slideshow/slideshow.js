let pictureArr = ["chiefs_logo.png", "jayhawk_logo.png", "royals_logo.png", "skc_logo.png", "chelsea_logo.png"]

index = 0;

function moveRight () {
	if(index < 4){
		index = index + 1
		document.getElementById("1").src = ''
		document.getElementById("1").src = "pictures/" + pictureArr[index]
	}
	else if(index == 4){
		index = 0;
		document.getElementById("1").src = ''
		document.getElementById("1").src = "pictures/" + pictureArr[index]
	}
}

function moveLeft () {
	if(index > 0){
		index = index - 1
		document.getElementById("1").src = ''
		document.getElementById("1").src = "pictures/" + pictureArr[index]
	}
	else if(index == 0){
		index = 4;
		document.getElementById("1").src = ''
		document.getElementById("1").src = "pictures/" + pictureArr[index]
	}

}

