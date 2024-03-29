$(document).ready(() => {
	var CSS = '.container.container_offset {width: 75%!important;max-width: 75%!important;}.page__wrapper {width: calc(100% - 540px)!important;}.mainmenu ul li a {padding: 7px;}.mainmenu ul {padding-left: 14px!important;}.mainmenu ul span {font-weight: bold!important;}.mainmenu {display: flex!important;float: left!important;margin-right: 20px!important;width: 220px!important;}.reverse {float: right!important;margin-left: 40px!important;}.mainmenu ul {list-style-type: none!important;}.mainmenu li a {position: relative;display: block;padding: 11px 20px;color: var(--text-primary);font-weight: 500;font-size: 14px;line-height: 1;white-space: nowrap;transition: color .2s ease;transition: 0.2s;cursor: pointer;text-decoration: none!important;}.mainmenu li a:hover {transition: 0.2s!important;color: var(--text-link)!important;margin-left: 5px!important;}';
	
var Crev = '.container.container_offset {\r\n\twidth: 75%!important;\r\n\tmax-width: 75%!important;\r\n}\r\n.page__wrapper {\r\n\twidth: calc(100% - 510px)!important;\r\n}\r\n.reverse {\r\n\tfloat: right!important;\r\n\tmargin-left: 20px!important;\r\n}';
	
var Cmenu = '.context-menu {\r\n  display: none;\r\n  position: absolute;\r\n  z-index: 10;\r\n}\r\n \r\n.context-menu--active {\r\n  display: block;\r\n}';
	
	var list = [
    {
        "type": "span",
        "icon": "fa-list-ul",
        "text": "Каталог:",
        "els": [
            {
                "type": "a",
                "icon": "fa-book",
                "name": "Манги",
                "href": "/manga-list?types[]=1"
            },
            {
                "type": "a",
                "icon": "fa-book",
                "name": "Манхвы",
                "href": "/manga-list?types[]=5"
            },
            {
                "type": "a",
                "icon": "fa-book",
                "name": "Маньхуа",
                "href": "/manga-list?types[]=6"
            },
            {
                "type": "a",
                "icon": "fa-book",
                "name": "OEL-манги",
                "href": "/manga-list?types[]=4"
            },
            {
                "type": "a",
                "icon": "fa-book",
                "name": "Руманга",
                "href": "/manga-list?types[]=8"
            },
            {
                "type": "a",
                "icon": "fa-book",
                "name": "Комикс западный",
                "href": "/manga-list?types[]=9"
            },
            {
                "type": "a",
                "icon": "fa-scribd",
                "name": "Синглов",
                "href": "/manga-list?format[]=5"
            },
            {
                "type": "sep"
            },
            {
                "type": "a",
                "icon": "fa-align-justify",
                "name": "Весь",
                "href": "/manga-list"
            },
            {
                "type": "a",
                "icon": "fa-random",
                "name": "Случайный тайтл",
                "href": "/random"
            }
        ]
    },
    {
        "type": "sep"
    },
    {
        "type": "span",
        "icon": "fa-users",
        "text": "Пользователи:",
        "els": [
            {
                "type": "a",
                "icon": "fa-user",
                "name": "kasiro",
                "href": "/user/482753"
            },
            {
                "type": "a",
                "icon": "fa-user",
                "name": "алло  утиха? утихни",
                "href": "/user/29078"
            },
            {
                "type": "a",
                "icon": "fa-user",
                "name": "viktor",
                "href": "/user/1"
            }
        ]
    },
    {
        "type": "span",
        "icon": "fa-briefcase",
        "text": "(Мешочки с мангой :D):",
        "els": [
            {
                "type": "a",
                "icon": "fa-user",
                "name": "Живущий в мангалибе(хаос)",
                "href": "/user/778577"
            },
            {
                "type": "a",
                "icon": "fa-user",
                "name": "Kazuto Kirigaya",
                "href": "/user/22098"
            },
            {
                "type": "a",
                "icon": "fa-user",
                "name": "Aidar",
                "href": "/user/1608"
            },
            {
                "type": "a",
                "icon": "fa-user",
                "name": "✨david✨",
                "href": "/user/35846"
            },
            {
                "type": "a",
                "icon": "fa-user",
                "name": "leha-kuznecov",
                "href": "/user/2419"
            },
            {
                "type": "a",
                "icon": "fa-user",
                "name": "syrgot",
                "href": "/user/1437"
            },
            {
                "type": "a",
                "icon": "fa-user",
                "name": "SGoblin",
                "href": "/user/510"
            },
            {
                "type": "a",
                "icon": "fa-user",
                "name": "SGoblin",
                "href": "/user/510"
            }
        ]
    }
];
	
	// var nav = $('<nav class="context-menu">');
	// $(nav).append('<ul class="context-menu__items">');
	// var navlist = [
	// 	{
	// 		'href': '#',
	// 		'icon': 'fa-eye',
	// 		'text': 'View Task'
	// 	},
	// 	{
	// 		'href': '#',
	// 		'icon': 'fa-edit',
	// 		'text': 'Edit Task'
	// 	},
	// 	{
	// 		'href': '#',
	// 		'icon': 'fa-times',
	// 		'text': 'Delete Task'
	// 	}
	// ];
	// $.each(navlist, (key, el) => {
	// 	if (typeof el.icon !== 'undefined'){
	// 		$(nav).find('ul').append(`<li class="context-menu__item"><a href="${el.href}" class="context-menu__link"><i class="fa ${el.icon}"></i> ${el.text}</a></li>`);
	// 	}
	// });
	
	/*
		<nav class="context-menu">
		  <ul class="context-menu__items">
		    <li class="context-menu__item">
		      <a href="#" class="context-menu__link">
		        <i class="fa fa-eye"></i> View Task
		      </a>
		    </li>
		    <li class="context-menu__item">
		      <a href="#" class="context-menu__link">
		        <i class="fa fa-edit"></i> Edit Task
		      </a>
		    </li>
		    <li class="context-menu__item">
		      <a href="#" class="context-menu__link">
		        <i class="fa fa-times"></i> Delete Task
		      </a>
		    </li>
		  </ul>
		</nav>
	*/
	function mainswith(sw){
		var el = sw;
		switch (el['text']) {
				case 'Каталог:':
					$.each(el['els'], (indx, child) => {
						if (child['type'] == 'sep') {
							$(menu).find('ul').append('<div class="menu__divider">');
						} else {
							$(menu).find('ul').append('<li class="mainmenu_item">');
						}
					});
					break;
					
				default:
					$.each(el['els'], (indx, child) => {
						if (child['type'] == 'sep') {
							$(menu).find('ul').append('<div class="menu__divider">');
						} else {
							$(menu).find('ul').append('<li class="mainmenu_item_editable">');
						}
					});
					break;
			}
	}
	var menu = $('<div>', {
		'class': 'mainmenu aside__panel section paper'
	}).append('<ul>');
	$.each(list, (index, el) => {
		if (el['type'] == 'sep') {
			$(menu).find('ul').append('<div class="menu__divider">');
		} else if(el['type'] == 'span' && typeof el['icon'] !== 'undefined') {
			$(menu).find(`ul`).append(`<span><i class="fa ${el['icon']}" aria-hidden="true"></i> ${el['text']}</span>`);
			mainswith(el);
		} else if (el['type'] == 'span' && typeof el['icon'] == 'undefined' || el['icon'] == '') {
			$(menu).find(`ul`).append(`<span>${el['text']}</span>`);
			mainswith(el);
		}
	});
	// for (let i = 1; i <= Object.keys(list).length; i++){
	// 	if (list[i-1]['type'] == 'sep') {
	// 		$(menu).find('ul').append('<div class="menu__divider">');
	// 	} else if(list[i-1]['type'] == 'span'  && typeof list[i-1]['icon'] !== 'undefined') {
	// 		$(menu).find(`ul`).append(`<span><i class="fa ${list[i-1]['icon']}" aria-hidden="true"></i> ${list[i-1]['text']}</span>`);
	// 	} else if(list[i-1]['type'] == 'span') {
	// 		$(menu).find(`ul`).append(`<span>${list[i-1]['text']}</span>`);
	// 	} else if(list[i-1]['type'] == 'a') {
			
	// 	} else {
	// 		$(menu).find('ul').append('<li class"mainmenu_item">');
	// 	}
	// }
	var i = 0;
	$.each(list, (key, el) => {
		if (el['type'] != 'sep'){
			if (el['type'] == 'span') {
				$.each(el['els'], (ind, listel) => {
					if (listel['type'] != 'sep') {
						$(menu).find(`ul > li:eq(${i})`).html(`
							<a href="${listel.href}"><i class="fa ${listel.icon}" aria-hidden="true"></i> ${listel.name}</a>
						`);
						i++;
					}
				});
			}
		}
	});
	function numform(Num){
		var Num = Num.toString();
		var fornum = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2}).format(Num);
		var arr = fornum.split(',')
		var str = arr.join(', ');
		return str;
	}
	function addStyles(selclass, styles){
		$('head').append(`<style class="${selclass}" type="text/css" data-source="main css">`);
		$(`.${selclass}`).html(styles);
	}
	switch (document.location.href) {
		case 'https://mangalib.me':
		case 'https://mangalib.me/':
		case 'https://mangalib.me/?section=all-updates':
			$.each($('.home-sidebar > div:eq(4) a'), (ind, el) => {
				var text = $(el).find('.manga-list-item__subtitle:eq(1)').text();
				var str = numform(text);
				$(el).find('.manga-list-item__subtitle:eq(1)').html(`${str} <i class="fa fa-eye"></i>`);
			});
			var mode = 'menu';
			switch (mode){
				case 'menu':
					addStyles('mainstyles', CSS);
					$('.container.container_offset').prepend(menu);
					break;
					
				case 'rev':
					addStyles('mainstyles', Crev);
					$('.container.container_offset > .page__wrapper.page__wrapper_left').addClass('reverse');
					break;
			}
			break;
	}
});