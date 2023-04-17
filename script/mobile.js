document.getElementById("mobile-navigation").onclick = () =>{
	let navig = document.getElementsByClassName("navbar")
	let mobile = document.getElementById("mobile-navigation")
	if(navig[0].style.display === "flex"){
		navig[0].style.display = "none"
		mobile.style.background = "url('../images/mobile-menu.png')"
	}
	else{
		navig[0].style.display = "flex"
		document.getElementById("nav-div").style.display = "block"
		mobile.style.background = "url('../images/mobile-close.png')"

	}
	
}