// JavaScript source code
//console.log(document.getElementsByTagName("div"));
//let dom = document.getElementById("dom");
let dom = document.querySelector("#dom");
console.log(dom);
if (dom)
{
	//dom.innerHTML = "<h2>InnerHTML</h2>";
	//dom.append('append()')
	//dom.prepend('prepend()')
	dom.before('before()');
	dom.after('after()');
	console.log(dom.outerHTML);
	//dom.outerHTML = "OuterHTML";
	console.log(dom.innerText);
	//dom.replaceWith(<h2>"Здесь был 'div'"</h2>);
	let counter = document.getElementById("number");
	//counter.id = "couter";
	console.log(counter.style.cssText);
	counter.style.cssText += "background-color:darkblue;color:white;";
	dom.replaceWith(counter);
}

		//append() - добавляет значение после содержимого элемента;
		//prepend()- добавляет значение перед содержимым элемента;
		//before() - добавляет значение перед открывающим дескриптором;
		//after()  - добавляет значение после закрывающего дескриптора;
		//replaceWith()