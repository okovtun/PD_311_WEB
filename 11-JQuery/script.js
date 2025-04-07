// JavaScript source code
$(document).ready(
	function ()
	{
		$("#hide").click(
			function ()
			{
				//$("ul li:first-child").hide();
				$("ul li:parent").fadeOut("slow");
				//$("[type]").hide();
				$("div[style]").fadeOut("slow");
				//$(":button").hide();
				$("tr:even").css("background-color", "grey");
			}
		);
		$("#show").click
			(
			function ()
			{
				//$("ul li:first-child").show();
				$("ul li:parent").fadeIn(1000);
				$("div[style]").fadeIn(1000);
			}
			);

		$("#tumbler").click(
			function ()
			{
				$("ul li:parent").fadeToggle(1000);
				$("div[style]").fadeToggle(1000);
			}
		);
		$("#slide-up").click
		(
			function ()
			{
				//$(this).slideUp();
				$("#slide-down").slideToggle();
			}
		);

		//$("#slide-down").click
		//(
		//	function ()
		//	{
		//		$(this).slideUp();
		//	}
		//);

		$("#animate").hover
			(
			function ()
			{
				$(this).animate({ left:'250px', opacity: '.5', height: '100px', width: '100px' },3000);
			}
		);
		$('#animate').mouseleave
			(
			function ()
			{
				$(this).animate({ opacity: '1', height: '50px', width: '50px' },3000);
			}
		);
		$("#stop").click
		(
			function ()
			{
				$("#animate").stop();
			}
		);

		$("h2").click
			(
				function ()
				{
					$("h2+ul").toggle();
				}
		);
		$("table").click
			(
			function ()
			{
				$(this).hide();
			}
		)
		///////////////////////////////////////////////
		$('#input-data').click(
			function ()
			{
				$(this).text("Регистрация");
				$(this).html(`<em>${$(this).text()}</em>`)
			}
		);
		$('#show-hide').click
		(
			function ()
			{
				let text = $('#show-hide').text();
				$('#show-hide').text(text === 'Показать' ? 'Скрыть' : 'Показать');
				text === 'Показать' ? $('ul').show() : $('ul').hide();
			}
		);

		$('form').submit
			(
				function ()
				{
					//alert(`Привет ${$('input type:text').value()}, we are glad to CU`);
					alert('Данные отправлены на Сервер');
					alert(`Привет ${$(this).find('[type=text]').val()}, we are glad to CU, проветрите Ваш E-mail: ${$('[type=email]').val()}`);
					$(this).html(`<h4>Привет ${$('[type=text]').val()}, we are glad to CU</h4>`);
				}
		);
		/////////////////////////////////////////////////////////////////////
		//$('form').after('<div>После регистрации проверьте Вашу почту<div>');
		//$('form').remove();

		$('#enable-bs').click
			(
				function ()
				{
					let class_list = 'row m-3';
					let text = $(this).text();
					//alert(text);
					$(this).text(text === 'Включить Bootstrap' ? 'Выключить Bootstrap' : 'Включить Bootstrap')
					text === 'Включить Bootstrap' ? $('[type]').addClass(class_list) : $('[type]').removeClass(class_list);
				}
			);
		$('#switch-light').click
			(
				function ()
				{
					let text = $(this).text();
					//alert(text);
					if (text === 'Выключить свет')
					{
						$(this).text('Включить свет');
						$('form').css({ "color":"lightgrey","background-color":"#323232"});
					}
					else
					{
						$(this).text('Выключить свет');
						$('form').css({ "color": "black", "background-color": "white" });
					}
				}
			);
	}
);