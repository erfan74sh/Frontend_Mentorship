const heartIcons = document.querySelectorAll(".heart-icon");
heartIcons.forEach((icon) => {
	icon.addEventListener("click", () => {
		icon.classList.toggle("liked");
	});
});
