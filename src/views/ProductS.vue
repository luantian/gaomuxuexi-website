<template>
  <div id="productS">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="page1">
          <div class="content">
            <h2>高木学生版</h2>
            <h4>孩子们唯一的相同是处处不同，即刻享受全新个性化学习</h4>
            <div class="btns">
              <a class="pulse" href="">现在下载</a>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page2">
          <div class="content">
            
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page3">
          <div class="content">
            <ul class="clearfix">
              <li><img src="../img/productS_3_1.png" alt=""></li>
              <li><img src="../img/productS_3_2.png" alt=""></li>
              <li><img src="../img/productS_3_3.png" alt=""></li>
            </ul>
            <div class="des">
              <h3>高效 EFFICIENCY</h3>
              <p>海量中考真题、优质学习资源全收录。</p>
              <p>大数据驱动精准打击薄弱知识点，彻底脱离低效乏味的题海战术。</p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="page4">
          <div class="content">
            <ul class="clearfix">
              <li><img src="../img/productS_4_4.png" alt=""></li>
              <li>
                <h2>兴趣 INTEREST</h2>
                <p>趣味交互激发学习主动性</p>
                <p>与全班同学同场竞技，共同进步。</p>
              </li>
            </ul>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
 
<script>

  export default {
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          direction: 'vertical',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: true,
          height: window.innerHeight > 800 ? window.innerHeight : 800
        }
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
  
  #productS {
    width: 100%;
    min-width: 1000px;
    height: 100%;
    min-height: 800px;
    position: relative;

    .page1 {
      width: 100%;
      height: 100%;
      min-height: 800px;
      position: relative;
      background: url(../img/productSBg.jpg) no-repeat center center;
      > .content {
        position: absolute;
        top: 0;
        bottom: 0;
        left:0;
        right:0;
        margin: auto;
        width: 1000px;
        height: 300px;
        > h2 {
          margin: 0;
          text-align: center;
          color: #fff;
          font-size: 60px;
          font-weight: 300;
        }
        > h4 {
          text-align: center;
          color: #fff;
          font-size: 36px;
          font-weight: 100;
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
        }
      }
    }
    .page2 {
      width: 100%;
      height: 100%;
      min-height: 800px;
      position: relative;
    }
    .page3 {
      width: 100%;
      height: 100%;
      min-height: 800px;
      position: relative;
      background: #e5f1fa;
      > .content {
        position: absolute;
        top: 0;
        bottom: 0;
        left:0;
        right:0;
        margin: auto;
        width: 1000px;
        height: 750px;
        > ul {
          margin: 0;
          list-style: none;
          > li {
            float: left;
            margin-left: 20px;
            > img {
              width: 284px;
              height: 508px;
            }
          }
        }

        > .des {
          position: absolute;
          bottom: 10px;
          right: 0;
          left: 0;
          text-align: center;
          > h3 {
            font-size: 30px;
            color: #333;
            font-weight: normal;
            margin: 20px;
          }
          > p {
            padding: 10px 0;
            margin: 0;
            color: #333;
          }
        }
      }
    }
    .page4 {
      width: 100%;
      height: 100%;
      min-height: 800px;
      position: relative;
      background: #fff;
      > .content {
        position: absolute;
        top: 0;
        bottom: 0;
        left:0;
        right:0;
        margin: auto;
        width: 1000px;
        height: 640px;
        > ul {
          list-style: none;
          padding: 0;
          margin: 0;
          > li {
            float: left;
          }
        }
      }
    }
  }
  
  .swiper-container, .swiper-slide {
    height:100%;
  }

  .pulse {
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
