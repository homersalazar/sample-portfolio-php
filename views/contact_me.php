<?php
    require_once("../partials/connection.php");
    if(!empty($_POST)){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subj = $_POST['subj'];
        $comment = $_POST['comment'];
        $sql = "INSERT INTO contact_me (c_name, e_mail, sub, proj_detail)
        VALUES ('$name' ,'$email', '$subj', '$comment')";
        $result = mysqli_query($conn, $sql);
    }
?>