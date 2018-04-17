<?php


// echo json_encode(['data' => "RESPONSE"]);
if (!empty($_FILES)) {
    foreach ($_FILES as $file) {
        $data = array_map('str_getcsv', file($file['tmp_name']));
    }

}
if (!empty($_POST)) {
    // var_dump($_POST);
    foreach ($_POST as $key => $ps) {
        $data[] =[$key=> $ps];
    } 
    
}


    echo json_encode($data);
