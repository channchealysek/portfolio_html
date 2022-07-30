const navMenu = $("#main-nav");
const navOpen = $("#nav-open");
const navClose = $("#nav-close");

navOpen.on("click", () => {
	navMenu.addClass("show-menu");
});

navClose.on("click", () => {
	navMenu.removeClass("show-menu");
});

// REMOVE MENU ON CLICK FOR MOBILE =========================
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
	const navMenu = $("#main-nav");

	navMenu.removeClass("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

// ACTIVE SECTION LINK ============================
const sections = document.querySelectorAll("section[id");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((section) => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 50;
		sectionId = section.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				$(".main-nav a[href*=" + sectionId + "]").addClass("active-link");
		} else {
			document
				$(".main-nav a[href*=" + sectionId + "]").removeClass("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

// CHANGE THE BACKGROUND ON SCROLL =========================
function changeHeaderColor() {
	const nav = $("#header");

	if (this.scrollY >= 200) nav.addClass("scroll-header");
	else nav.removeClass("scroll-header");
}
window.addEventListener("scroll", changeHeaderColor);