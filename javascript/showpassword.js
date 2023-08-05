const show_pw_btn = document.querySelector('#show-passwd')
const show_pw_icon = show_pw_btn.querySelector('img')
const pw_input = document.querySelector('#password')

show_pw_btn.addEventListener('click', () => {
	pw_input.type = pw_input.type === 'password' 
		? 'text' 
		: 'password'

	show_pw_icon.src = show_pw_icon.src.includes('open') 
		? '/assets/eye_closed.svg' 
		: '/assets/eye_open.svg'
});

const show_pw_btns = document.querySelector('#show-passwds')
const show_pw_icons = show_pw_btns.querySelector('img')
const pw_inputs = document.querySelector('#passwords')

show_pw_btns.addEventListener('click', () => {
	pw_inputs.type = pw_inputs.type === 'password' 
		? 'text' 
		: 'password'

	show_pw_icons.src = show_pw_icons.src.includes('open') 
		? '/assets/eye_closed.svg' 
		: '/assets/eye_open.svg'
});