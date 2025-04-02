// JavaScript source code
//let xmlResponse = null;
function loadFile()
{
	let request = new XMLHttpRequest();	//Constructor
	request.onreadystatechange = function ()
	{
		//onreadystatechange
		/*
		readyState - содердит состояние запроса
			0 - not initialized;
			1 - server connection established;
			2 - request received;
			3 - processing request;
			4 - response is ready;
		*/
		//if (this.readyState == 4 && this.status == 200)
		if (this.readyState == 4 && this.statusText == "OK")
		{
			/*
			this.status - содержит статус запроса в числовом виде:
				200: OK;
				403: Forbidden;
				404: No found;
				//https://datatracker.ietf.org/doc/html/rfc1945#section-6.1.1
			*/
			/*
			this.statusText - содержит статус запроса в виде строки("OK", "Forbidden", "Not found")
			 */
			document.getElementById("response").innerHTML = this.responseText;	//Содержит ответ от Сервера в виде строки
			//console.log(xmlResponse = this.responseXML);
			//xmlResponse = this.responseXML;
			formatXML(this.responseXML);
		}
	};
	request.open("GET", "DataBase.xml", true);//Открывает соединение с Сервером
	//		open(method, URL, async, usr, passwd)
	//			method: "GET", "POST";
	//			
	request.send();
	/*
		abort();			закрывает текущее соединение
		getResponseHeader();	получаем заголовок ответа
		getAllResponseHeaders();
		setRequestHeader();
	 */

	//Properties

}

//console.log(xmlResponse);

function formatXML(file)
{
	console.log(file);
	let group = file.getElementsByTagName("group");
	console.log(group);
	console.log(group[0].childNodes[0].nodeValue);
	console.log("\n-------------------------\n");
	let elements = file.documentElement.childNodes;
	for (let i = 0; i < elements.length; i++)
	{
		console.log(elements[i].childNodes);
	}
}