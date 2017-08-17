<template>
  <div id="down-app">
    <div id="content" class="clearfix">
      <dl>
        <dt>高木学习学生手机版</dt>
        <dd class="centerDD"><img src="./../img/down-app.png" alt=""></dd>
        <dd class="bottomDD">扫一扫下载手机版</dd>
      </dl>
      <dl>
        <dt>高木学习学生电脑版</dt>
        <dd class="centerDD downloadWrap"><i class="iconfont icon-download"></i></dd>
        <dd class="bottomDD">点击下载安装</dd>
      </dl>
      <div class="close"><i class="iconfont icon-cha"></i></div>
      <div class="bTitle">高木大数据学习平台</div>
    </div>
  </div>
</template>

<script>
  
</script>

<style lang="scss">
  
  #down-app {
    width: 100%;
    height: 100%;
    min-width: 1300px;
    min-height: 800px;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999999999999;
    #content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 775px;
      height: 425px;
      margin: auto;
      background: #fff;
      > dl {
        width: 50%;
        float: left;
        text-align: center;
        margin-top: 88px;
        > dt {
          text-align: center;
          color: #0074cd;
          font-weight: bold;
          padding-bottom: 25px;
        }
        > dd {
          margin: 0;
          padding: 0;
          text-align: center;
        }
        > dd.centerDD {
          width: 146px;
          height: 146px;
          line-height: 146px;
          margin: 0 auto;
          border: 1px solid #ccc;
          > i {
            font-size: 50px;
          }
        }
        > dd.downloadWrap {
          border: 3px solid #e3f0fa;
        }
        > dd.bottomDD{
          padding-top: 25px;
          color: #888;
        }
      };
      > .bTitle {
        position: absolute;
        bottom: 20px;
        right: 0;
        left: 0;
        text-align: center;
        color: #555;
      };
      > .close {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #555;
      }
    }
  }

</style>