<?php
// File Name: proxy.php

$api_key = '37ea46d2c5d1c2067361d548737b299a';


$API_ENDPOINT = 'https://api.forecast.io/forecast/';
$url = $API_ENDPOINT . $api_key . '/';

if(!isset($_GET['url'])) die();
$url = $url . $_GET['url'];
$url = file_get_contents($url);

print_r($url);
