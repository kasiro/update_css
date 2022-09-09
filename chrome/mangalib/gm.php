<?php

require '/home/kasiro/Документы/projects/testphp/user_modules/phpQuery.php';
require '/home/kasiro/Документы/projects/testphp/user_modules/Request.php';
require '/home/kasiro/Документы/projects/testphp/user_modules/str.php';

$link = 'https://mangalib.me';
$json = file_get_contents('list.json');
$json = json_decode($json, true);
$jsonBefore = $json;
foreach ($json as &$el) {
	if (array_key_exists('text', $el)) {
		if ($el['text'] == 'Пользователи:' || $el['text'] == '(Мешочки с мангой :D):') {
			foreach ($el['els'] as &$user) {
				phpQuery::newDocument(Request::get($link.$user['href']));
				$user['name'] = explode(PHP_EOL, pq('.profile-user__username > span')->text())[0];
			}
		}
	}
}
if ($jsonBefore != $json) {
	file_put_contents('list.json', json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
}

$js = file_get_contents('menu.pjs');
$mcss = file_get_contents('menu.css');
// * minify css
$minicss = preg_replace('/\n\t|\n/m', '', $mcss);
$js = str::sprintf2($js, [
	'css' => $minicss,
	'json' => file_get_contents('list.json')
]);
file_put_contents('menu.js', $js);