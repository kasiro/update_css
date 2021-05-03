$(document).ready(() => {
	var getProfileAvatar = () => {
		var found_link = $('[data-testid="SideNav_AccountSwitcher_Button"] img').attr('src');
		// console.log(found_link);
		if (found_link == null){
			console.log('Аватарка внизу не найдена');
			return;
		}
		// var img_link = found_link.replace('_normal', '_200x200');
		var code = `:root {\n\t--my-profile-link: url(${found_link});\n}`;
        var styletag = document.createElement('style');
        styletag.setAttribute('id', 'MyLink');
        styletag.innerHTML = code;
        if (document.querySelector('#MyLink') == null){
        	$('head').append(styletag);
        	console.log('Аватарка добавлена');
        }
	};
	setTimeout(() => {
		getProfileAvatar();
	}, 1000);
});