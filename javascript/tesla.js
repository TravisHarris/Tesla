
const menuBtn = document.getElementById("menu-btn");
const menuBefore = document.getElementById("menu-icon-before");
const menuAfter = document.getElementById("menu-icon-after");
const menu = document.getElementById("secondary-nav");
const navPage = document.getElementById("nav-page");
const orderNav = document.getElementById("order-nav-ul");
const headlineTop = document.getElementById("homepage-title-top");
const headlineBottom = document.getElementById("homepage-title-bottom");
const newsletter = document.getElementById("newsletter");
const footer = document.getElementById("main-footer");

function checkMenu() {
	if(menuBtn.checked){
		menu.style.transform = "translateX(0)";
		menuBefore.style.display = "none";
		menuAfter.style.display = "inline-block";
		orderNav.style.zIndex = "-10";
		headlineTop.style.zIndex = "-10";
		headlineBottom.style.zIndex = "-10";
		newsletter.style.zIndex = "-10";
		footer.style.zIndex = "-10";
		navPage.style.zIndex = "11";
	}
	else{
		menu.style.transform = "translateX(100%)";
		menuBefore.style.display = "inline-block";
		menuAfter.style.display = "none";
		orderNav.style.zIndex = "1";
		headlineTop.style.zIndex = "1";
		headlineBottom.style.zIndex = "1";
		newsletter.style.zIndex = "1";
		footer.style.zIndex = "1";
		navPage.style.zIndex = "-1";
	}
}

// hide the mobile menu when screen is larger than 1020px wide

window.onresize = checkWindowSize;
window.onload = checkWindowSize;

function checkWindowSize() {
    if(window.innerWidth > 1020) {
    	menuBtn.checked = false;
    }
    checkMenu();
};

menuBtn.addEventListener("click", () => {
	checkMenu();
});