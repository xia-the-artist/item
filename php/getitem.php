<?php
    include('./conn.php');

    $id = $_REQUEST['id'];
    //    echo $id;
    $sql = "select * from shopping where id='$id'";

    $res = $mysqli->query($sql);

    $row = $res->fetch_assoc();

    $json = json_encode($row);

    echo $json;

    $mysqli->close();
?>


