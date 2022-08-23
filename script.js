const menuIcon = document.querySelector('.menu-open')
const mobileNav = document.querySelector('.mobile-nav-container')

menuIcon.addEventListener('click', (e) => {
	mobileNav.classList.toggle('show')
})
