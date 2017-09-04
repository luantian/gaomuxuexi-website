<template>
  <div id="productT">
    <!-- <swiper :options="swiperOption">
      <swiper-slide> -->
        <div class="page1">
          <div class="content">
            <h2>高木教师版</h2>
            <h4>用数据助你读懂学生，精准教学</h4>
            <div class="btns">
              <a class="pulse" href="http://www.gaomuxuexi.com/tclient" target="_blank">网页登录</a>
            </div>
          </div>
        </div>
      <!-- </swiper-slide>
      <swiper-slide> -->
        <div class="page2">
          <div class="content">
            <dl>
              <dt>高木助你更专业</dt>
              <dd>深入挖掘学生学习行为数据，智能分析学生知识点掌握度</dd>
              <dd>班级强弱项一览无余，据此及时调整教学策略</dd>
              <dd>学生知识盲点、弱点一目了然，教学更有针对性</dd>
            </dl>
          </div>
        </div>
     <!--  </swiper-slide>
      <swiper-slide> -->
        <div class="page3">
          <div class="content">
            <dl>
              <dt>高木助你更高效</dt>
              <dd>客观题自动批改、主观题拍照批改</dd>
              <dd>还有海量资源辅助备好每一课</dd>
            </dl>
            <img src="/static/productT_3.png" alt="">
          </div>
        </div>
      <!-- </swiper-slide>
      <swiper-slide> -->
        <div class="page4">
          <div class="content clearfix">
            <dl>
              <dt>高木助你更轻松</dt>
              <dd>课堂反馈及时送达，学生状态了然于胸</dd>
              <dd>趣味互动激励学生，自主学习不再是少数人的专利</dd>
            </dl>
            <div class="product4_imgWrap">
              <img src="/static/productT_4.png" alt="">
            </div>
          </div>
        </div>
      <!-- </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
  </div>
</template>
 
<script>

  export default {
    data() {
      return {
        // swiperOption: {
        //   pagination: '.swiper-pagination',
        //   direction: 'vertical',
        //   slidesPerView: 1,
        //   paginationClickable: true,
        //   spaceBetween: 30,
        //   mousewheelControl: true,
        //   height: window.innerHeight > 800 ? window.innerHeight : 800
        // }
      }
    },
    methods: {
      
    }
  }

</script>

<style scoped lang="scss">

  @mixin prefix($property, $value) {
    -webkit-#{$property}: $value;
    -moz-#{$property}: $value;
    -ms-#{$property}: $value;
    -o-#{$property}: $value;
    #{$property}: $value;
  }

  @mixin transforms($value) {
    @include prefix(transform, $value);
  }

  @mixin animations($value) {
    @include prefix(animation, $value);
  }

  @mixin animations-delay($value) {
    @include prefix(animation-delay, $value);
  }

  @mixin transitions($value) {
    @include prefix(transition, $value);
  }

  @mixin page {
    width: 100%;
    height: 100%;
    min-height: 800px;
    position: relative;
  }

  @mixin content {
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    right:0;
    margin: auto;
    width: 1000px;
  }
  
  #productT {
    width: 100%;
    min-width: 1000px;
    height: 100%;
    min-height: 800px;
    position: relative;

    .page1 {
      @include page;
      background: url(/static/productTBg.jpg) no-repeat center center;
      > .content {
        @include content;
        height: 300px;
        > h2 {
          margin: 0;
          text-align: center;
          color: #fff;
          font-size: 60px;
          font-weight: 300;
          @include animations(fadeUp 1s forwards);
        }
        > h4 {
          text-align: center;
          color: #fff;
          font-size: 36px;
          font-weight: 100;
          @include animations(fadeUp 1.5s forwards);
        }
        > .btns {
          text-align: center;
          > a {
            display: inline-block;
            width: 350px;
            height: 60px;
            line-height: 60px;
            border: 1px solid #ccc;
            color: #fff;
            text-decoration: none;
            font-size: 24px;
          }
          @include animations(fadeUp 1.8s forwards);
        }
      }
    }
    .page2 {
      background: url(/static/productT_2_bg.png) no-repeat center center;
      @include page;
      > .content {
        @include content;

        // background: red;
        dl {
          position: absolute;
          top: 300px;
          left: 0;
          color: #333333;

          > dt {
            font-size: 30px;
            color: #333;
            margin-bottom: 20px;
          }
          > dd {
            margin: 0;
            padding: 0;
            font-size: 20px;
            margin-top: 10px;
          }

        }
        
      }
    }
    .page3 {
      @include page;
      background: #e5f1fa;
      > .content {
        @include content;
        height: 750px;
        dl {
          color: #333333;
          text-align: center;
          padding-top: 50px;
          padding-bottom: 90px;
          > dt {
            font-size: 30px;
            color: #333;
            margin-bottom: 20px;
          }
          > dd {
            margin: 0;
            padding: 0;
            font-size: 20px;
            margin-top: 10px;
          }
        }
        img {
          width: 1050px;
        }
      }
    }
    .page4 {
      @include page;
      background: #fff;
      > .content {
        @include content;
        height: 640px;
        dl {
          color: #333333;
          padding-top: 200px;
          float: left;
          > dt {
            font-size: 30px;
            color: #333;
            margin-bottom: 20px;
          }
          > dd {
            margin: 0;
            padding: 0;
            font-size: 20px;
            margin-top: 10px;
          }
        }
        .product4_imgWrap {
          float: right;
          > img {
            width: 440px;
          }
        }
      }
    }
  }
  
  .swiper-container, .swiper-slide {
    height:100%;
  }

  .pulse {
    cursor: pointer;
    --color: #fff;
    --hover: #fff;
  }
  .pulse:hover,
  .pulse:focus {
    @include animations(pulse 1s);
    box-shadow: 0 0 10px 10px rgba(255, 255, 255, 0);
  }

  @-webkit-keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--hover);
    }
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--hover);
    }
  }

  @keyframes fadeUp {
    0% {
      @include transforms(translateY(100px));
      opacity: 0;
    }
    100% {
      @include transforms(translateY(0));
      opacity: 1;
    }
  }

  .btns > a {
    color: var(--color);
    @include transitions(.25s);
  }
  .btns > a:hover, .btns > a:focus {
    border-color: var(--hover);
    color: #fff;
  }

</style>
