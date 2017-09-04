<template>
  <div id="productT">
    <!-- <swiper :options="swiperOption">
      <swiper-slide> -->
        <div class="page1">
          <div class="content">
            <h2>高木家长版</h2>
            <h4>相信高木，你的力所能及将对孩子学习起到至关重要的作用</h4>
            <div class="btns">
              <a class="pulse" @click="showWeChatDialog">微信关注</a>
            </div>
          </div>
        </div>
      <!-- </swiper-slide>
      <swiper-slide> -->
        <div class="page2">
          <div class="content">
            <dl>
              <dt>学情追踪</dt>
              <dd>时刻追踪孩子学情，全面了解波动原因</dd>
            </dl>
            <img src="/static/productP_2.png" alt="">
          </div>
        </div>
     <!--  </swiper-slide>
      <swiper-slide> -->
        <div class="page4">
          <div class="content clearfix">
            <dl>
              <dt>监督</dt>
              <dd>监督孩子完成错题归因，订正，导出等任务</dd>
              <dd>培养孩子良好学习习惯，成绩提升看得见</dd>
            </dl>
            <div class="product4_imgWrap">
              <img src="/static/productP_3.png" alt="">
            </div>
          </div>
        </div>
      <!-- </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper> -->
    <WeChat ref="wechat"></WeChat>
  </div>
</template>
 
<script>

  import WeChat from '../components/WeChat';

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

    components: {
      WeChat
    },

    methods: {
      showWeChatDialog() {
        this.$refs.wechat.show();        //调用DownApp的子组件方法
      }
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
      background: url(/static/productPBg.jpg) no-repeat center center;
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
      @include page;
      > .content {
        @include content;
        text-align: center;
        dl {
          text-align: center;
          margin-top: 80px;
          margin-bottom: 100px;
          > dt {
            font-size: 30px;
            color: #333;
            margin-bottom: 10px;
          }
          > dd {
            margin: 0;
            padding: 0;
            font-size: 24px;
            color: #333;
          }
        }
      }
    }
    .page4 {
      @include page;
      background: #e5f1fa;
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
