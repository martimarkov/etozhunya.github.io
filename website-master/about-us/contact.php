<?php

// configure
$from = '<IWantADemo@getfetch.ca>';
//IWantADemo@getfetch.ca
$sendTo = '<IWantADemo@getfetch.ca>';
$subject = 'New message from online form';
$fields = array('name' => 'Name', 'email' => 'Email', 'tel' => 'Tel', 'company' => 'Company', 'message' => 'Message'); 
$okMessage = 'Thank you.';
$errorMessage = 'Sorry, there is some mistake.';

// let's do the sending

try
{
    $emailText = "You have new message from online form form\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}
