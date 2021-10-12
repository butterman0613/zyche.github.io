const btn = document.getElementById("switcher-button");

// Yuanyuan: Great job! I also want to try this on my personal page :)
function switchProfilePic() {
	const pic = document.getElementById("profilepic");
	if(pic.alt === "Profile Photo") {
		pic.src = "./images/profilepic2.jpg";
		pic.alt = "Profile Photo 2";
	}
	else {
		pic.alt = "Profile Photo";
		pic.src = "./images/profilepic.jpg";
	}
}

btn.addEventListener("click", switchProfilePic);
