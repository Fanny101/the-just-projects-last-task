
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.hamburger__links');
// const body = document.querySelector('body')

hamburger.addEventListener('click', function(){
	hamburger.classList.toggle('active')
	navMenu.classList.toggle('active')
	// body.style.backgroundColor = "white";
})
document.querySelectorAll('.hamburger__links__a').forEach(n => n.addEventListener('click', function(){
	hamburger.classList.remove('active');
	navMenu.classList.remove('active')
}))
// const scrollToTop = document.querySelector('.arrow_image');
// const nav = document.querySelector('#nav')
// scrollToTop.addEventListener('click',function (e) {
// 	scrollToTop.scrollTo = nav;
// } )

