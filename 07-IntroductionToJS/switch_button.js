// JavaScript source code
function switch_button()
{
	let switch_btn = document.getElementById("switch");
	let image = switch_btn.src.split('/').at(-1);
	//if(switch_btn.img==='sun.')
	console.log(switch_btn.src.split('/').at(-1));
	//if (switch_btn.src.split('/').at(-1) === 'sun.png') switch_btn.src = 'img/moon.png';
	//else switch_btn.src = 'img/sun.png';
	//switch_btn.src = switch_btn.src.split('/').at(-1) == 'sun.png' ? 'img/moon.png' : 'img/sun.png';

	switch_btn.src = `img/${image == 'sun.png' ? 'moon.png' : 'sun.png'}`;

	document.body.style.backgroundColor = image === 'moon.png' ? '#323232' : 'white';
	document.body.style.color = image === 'sun.png' ? '#323232' : 'white';
	document.body.style.transition = `background-color 3s, color 3s`;
	console.log(switch_btn.src);
}