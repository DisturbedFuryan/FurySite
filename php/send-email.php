<?php
    /* Reading input data. */
    $userName = "$userName";
    $email = "$email";
    $subject = "$subject";
    $message = "$message";
    
    $header = "From: $userName <$email>";
    
    $myEmail = "marcinrainka@gmail.com";
    
    $sendEmail = mail($myEmail, $subject, $message, $header);
    
    /* Sending email. */
    if ($sendEmail) {
        print "Your message has been sent successfully.";
    }
    else {
        print "An error occurred while sending a message.";
    }
?>
