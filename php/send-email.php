<?php
    echo '<html><body bgcolor="#131313"></body></html>';
    
    /* Reading input data. */
    $userName = $_POST['userName'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $header = "From: $userName <$email>";
    
    $myEmail = "marcinrainka@gmail.com";
    
    $sendEmail = mail($myEmail, $subject, $message, $header);
    
    /* Sending email. */
    if ($sendEmail) {
        echo '<script type="text/javascript">
                  alert("Your message has been sent successfully.");
              </script>';
    }
    else {
        echo '<script type="text/javascript">
                  alert("An error occurred while sending a message.");
              </script>';
    }
    
    echo '<script type="text/javascript">
              window.location = "../contact.html";
          </script>';
?>
