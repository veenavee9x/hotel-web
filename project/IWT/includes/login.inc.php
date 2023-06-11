<?php
    if(isset($_POST['submit']))
    {
        $email =$_POST["mail"];
        $pwd = $_POST["lock-closed"];

        require_once 'dbh.inc.php';
        require_once 'functions.inc.php';

        //$emptyInputes = emptyInputsSignup

        if(emptyInputs($email, $pwd) !== false)
        {
            exit();
        }

        Loginuser($email, $pwd);

        else
        {

        }
    }

    else
    {
        header('Location:../login.html ');
    }
?>