<?php require 'header.php'; ?>
<section>
  <div class="container-center">
    <div class="title-center">
      <div class="panel-title">
        <h1>关于我们<br><small>专注于互联网服务提供、Web应用开发、解决方案策划等</small></h1>
      </div>
      <div class="panel-body">
      </div>
      <a class="hvr-fade" id="btn-play">了解公司</a>
    </div>
  </div>
</section>
<!-- 分割站 Start-->
<!-- 公司新闻 -->
<section>
  <div class="container-center">
    <div class="title-center">
      <h2>公司新闻<br><small>产品开发、策划与运营、影视传播</small><br></h2>
    </div>
  </div>
  <div class="container">
  </div>
  <div class="container-center">
    <div class="title-center">
      <div class="panel-body">
        <div ui-view="newslist"></div>
        <a class="hvr-fade" ui-sref="about.newslist">查看更多</a>
      </div>
    </div>
  </div>
</section>
<!-- 分割站 End-->
<!-- 招聘信息 -->
<section id="Content-contact">
  <div class="container-center">
    <div class="title-center">
      <h2>招贤纳士<br><small>我们需要什么样的人才，产品开发、策划与运营、影视传播</small></h2>
    </div>
  </div>
  <div class="container">

  </div>
</section>
<?php require 'footer.php'; ?>
