<?php require 'header.php'; ?>
<?php
  echo "Hello PHP <br /> ";
  $link = new mysqli('127.0.0.1', 'root', '704949848', '9000y');

  var_dump($link->client_info.'<br />');
  $link->query('select * from `9000y`.`9000y_news`');
  echo "主机：".$link->host_info.'<br />';
  echo "数据库服务器：".$link->server_info.'<br />';

  echo $link->sqlstate.'<br />';
  // '00000' means no error.

  echo $link->insert_id.'<br />';
  echo $link->autocommit();
  var_dump($link->field_count);
?>
<?php require 'footer.php'; ?>
