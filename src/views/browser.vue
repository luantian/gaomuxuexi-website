<template>
  <div>
    <h3>高木温馨提示：<span>您的浏览器需要更新才能访问哦^_^</span></h3>
    <h5>推荐使用<span>Chrome</span>、<span>QQ</span>浏览器访问~</h5>
    <p style="padding-top:20px;">提示：目前微软已经全面放弃低版本IE浏览器，为了您的财产安全，请更新浏览器</p>
    <p style="padding-top:20px;">以下资源均来自百度</p>
    
    <ul class="clearfix">
      <li><a href="https://www.baidu.com/link?url=7CSokzACBSyiA1eaUI4jR7pyjmXvf24Y5_NCnbI1O24nhTsuyygGBrbx9UXgNJ834sMSdSmEJ4sP-mza1y99MHtxNqCLeOXErYvmoEBBcmW&wd=&eqid=997cf2e100007f14000000065684f8b9"><img src="/static/browser/qq.png" alt="下载QQ浏览器"></a></li>
      <li><a href="http://w.x.baidu.com/alading/anquan_soft_down_ub/14744"><img src="/static/browser/chrome.png" alt="下载chrome浏览器"></a></li>
    </ul>

    <p>请一定要更新您的浏览器哦^_^</p>
  </div>
</template>

<script>

  export default {
    data() {
      return {

      }
    },
    methods: {
      
    }
  }

</script>
<style scoped lang="scss">
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-size:24px;
    text-align: center;
    padding-top:100px;
  }

  h3 span {
    color:#cf920f;
  }

  h5 {
    text-align: center;
    font-size:20px;
    padding-top:20px;
  }
  h5 span {
    color:#cf920f;
  }

  ul {
    width:500px;
    margin:80px auto;
  }
  ul li {
    margin-left:70px;
    float: left;
  }
  p {
    text-align: center;
  }
</style>