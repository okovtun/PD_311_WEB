// JavaScript source code
var i = 0;
function increment()
{
	i++;
	//document.writeln(i);
	let number = document.getElementById("number");
	number.innerHTML = `<h2>${i}</h2>`;
}
function show_text()
{
	let text = document.getElementById("text");
	let display_text = document.getElementById("display_text");
	//<debugger>
	display_text.innerHTML = text.value;
	//alert();
}
function set_init_path()
{
	let file = document.getElementById("file");
	file.value = window.location.pathname;
	alert("set_init_path()");
}
function set_image()
{
	let image = document.getElementById("image");
	let path = document.getElementById("file");
	//let path = window.location.pathname;
	//this.value = path;
	let path_splitted = path.value.split('\\');
	//console.log(path_splitted);
	let file = path_splitted[path_splitted.length - 1];
	//alert(file);
	image.src = file;
}