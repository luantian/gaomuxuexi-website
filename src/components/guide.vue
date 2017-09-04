<template>
    <div id="guide">
      <div class="main">
        <h2>操作指南</h2>
        <div class="content clearfix">
          <div id="navsWrap" v-bind:class="['guideNavFixed', 'guideNav']">
            <ul>
              <li v-for="(item, index) in guideData[page].navs" @click="navClick(index)" v-bind:_active="index == 0 ? 'active' : ''">
                  <a>{{item.title}}</a>
              </li>
            </ul>
            <div class="indicator" v-bind:style="iTop"></div>
          </div>
          
          <div class="guideCon">
            <h4 class="guideTitle">{{guideData[page].title}}</h4>
            <div v-for="item in guideData[page].content">
              <h4 class="guideSmallTitle">{{item.title}}</h4>
              <p v-for="it in item.data" v-if="typeof(it) == 'string' ? true : false" v-html="it"></p>
              <img v-else v-bind:src="imgUrl+it.imgName" v-bind:class="it.className" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  
  import guideData from '../guideConfig';

  var onOff = true;     //用于阻止滚动条多次执行
  var clickScroll = false;     //防止点击导航 执行滚动条滚动事件执行
  var aTops = [];       //用于保存各个h4到顶部的距离
  export default {
    props: ['page'],
    data() {
      return {
        guideData: guideData,
        imgUrl: '/static/help/',
        iTop: {
          top: 5 + 'px'
        }
      }
    },

    mounted() {
      var aEs = $('.guideSmallTitle');
      aTops = [];
      setTimeout(function() {
        aEs.map(function(i, item) {
          aTops.push(Math.floor($(item).offset().top));
        });
      }, 400);
      $('#routerViewWrap').on('scroll', this.onScroll);
    },
    beforeDestroy() {
      var routerViewWrap = $('#routerViewWrap');
      routerViewWrap.scrollTop(0);
      routerViewWrap.off('scroll', this.onScroll);
    },
    methods: {
      set_iTop(index) {
        this.iTop = {
          top: index * 60 + 5 + 'px'
        }
      },
      navClick(index) {
        clickScroll = true;
        var aLi = $('#navsWrap li');
        var routerViewWrap = $('#routerViewWrap');
        aLi.attr('_active', '');
        aLi.eq(index).attr('_active', 'active');
        routerViewWrap.animate({'scrollTop': aTops[index]}, 400);

        /****************** arrow指针滚动 位置设置 开始*********************/
        this.set_iTop(index);
        /****************** arrow指针滚动 位置设置 结束*********************/

        setTimeout(function() {
          clickScroll = false;
        }, 400);
      },
      scrollPosition() {
        if (clickScroll) return;
        var aLi = $('#navsWrap li');
        var scrTop = $('#routerViewWrap').scrollTop();
        var num = 0;        //保存当前点击的是导航里的第几个元素
        
        /****************** 找到当前 哪个标题需要滚动到页面顶端 开始*********************/
        for (var i = 0; i < aTops.length; i++) {
          if (scrTop - aTops[i] >= -200) {
            num = i;
            continue;
          }
        }
        /****************** 找到当前 哪个标题需要滚动到页面顶端 结束*********************/

        aLi.attr('_active', '');
        aLi.eq(num).attr('_active', 'active');

        /****************** arrow指针滚动 位置设置 开始*********************/
        this.set_iTop(num);
        /****************** arrow指针滚动 位置设置 结束*********************/
      },
      onScroll() {
        if (onOff) {
          onOff = false;
          var that = this;
          setTimeout(function() {
            that.scrollPosition();
            onOff = true;
          }, 500);
        } else {
          // 滚动条滚动的时候会多次执行此处的代码，里面不要写任何代码
        }
      }
    }
  }

</script>

<style scoped lang="scss">

  /*************************自动生成css3前缀 开始***************************/
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
  /**************************自动生成css3前缀 结束**************************/
  
  #guide {
    width: 100%;
    min-width: 1000px;
    height: 100%;
    min-height: 800px;
    position: relative;
    > .main {
      width: 1000px;
      margin: 0 auto;
      > h2 {
        text-align: center;
        padding-top: 40px;
        margin: 0;
        font-size: 40px;
        @include animations(fadeDown 1.5s forwards);
      }
      > .content {
        position: relative;
        img {
          margin: 10px 0;
        }
        .app_stu_1 {
          width: 250px;
          // height: 400px;
        }
        .app_stu_2 {
          width: 500px;
          // height: 400px;
        }
        .pc_stu_1 {

        }
        .pc_stu_2 {

        }
        .pc_T1 {

        }
        .wechat_T {
          width: 200px;
          margin-right: 10px;
        }
        .wechat_P {
          width: 200px;
          margin-right: 10px;
        }
        > .guideNav {
          width: 200px;
          position: absolute;
          top: 110px;
          > .indicator {
            width: 20px;
            height: 10px;
            position: absolute;
            top: 44px;
            left: 30px;
            background: url(../../static/arrow.png) no-repeat;
            background-size: 100% 100%;
            transition: .3s;
            @include animations(fadeLeft 1s forwards);
          }
          > ul {
            margin: 0;
            padding: 0;
            list-style: none;
            @include animations(fadeLeft 1s forwards);
            > li {
              height: 20px;
              margin-bottom: 40px;
              cursor: pointer;
              padding-left: 60px;
              > a {
                display: block;
                height: 100%;
                text-decoration: none;
                color: #555;
              }
            }
            > li[_active="active"] {
              > a {
                color: #0074cd;
              }
            }
          }
        }
        > .guideNavFixed {
          position: fixed;
          top: 100px;
        }
        > .guideCon {
          float: left;
          margin-left: 225px;
          width: 680px;
          > .guideTitle {
            width: 450px;
            height: 30px;
            font-size: 26px;
            color: #3498db;
            border-left: 6px solid #3498db;
            padding-left: 10px;
            overflow: hidden;
            position: relative;
            @include animations(fadeDown 1s forwards);
          }
          .guideSmallTitle {
            height: 36px;
            font: 20px/36px '微软雅黑';
            color: #555;
            margin: 0;
            padding: 0;
            overflow: hidden;
            opacity: 0;
            @include animations(scales 1s .5s forwards);
          }
          p {
            padding: 5px 0;
            margin: 0;
            color: #555;
            font: 14px/20px '微软雅黑';
            opacity: 0;
            @include animations(fadeUp 1s .8s forwards);
          }
          img {
            opacity: 0;
            @include animations(fadeIn 1s 1.5s forwards);
          }
        }
      }
    }
  }

  @keyframes fadeLeft {
    0% {
      @include transforms(translateX(-200px));
      opacity: 0;
    }
    100% {
      @include transforms(translateY(0));
      opacity: 1;
    }
  }

  @keyframes fadeDown {
    0% {
      @include transforms(translateY(-100px));
      opacity: 0;
    }
    100% {
      @include transforms(translateY(0));
      opacity: 1;
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

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes scales {
    0% {
      @include transforms(scale(0));
      opacity: 0;
    }
    100% {
      @include transforms(scale(1));
      opacity: 1;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>