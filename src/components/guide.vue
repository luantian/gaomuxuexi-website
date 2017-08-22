<template>
  <div id="guide">
    <div class="main">
      <h2>操作指南</h2>
      <div class="content clearfix">
        <div id="navsWrap" v-bind:class="['guideNavFixed', 'guideNav']">
          <ul >
            <li v-for="(item, index) in data[page].navs" @click="navClick(index)" v-bind:_active="index == 0 ? 'active' : ''">
              <a>{{item.title}}</a>
            </li>
          </ul>
          <div class="indicator" v-bind:style="iTop"></div>
        </div>
        <div class="guideCon">
          <h4 class="guideTitle">{{data[page].title}}</h4>
          <div v-for="item in data[page].content">
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
  
  import data from '../guideConfig';

  var onOff = true;

  export default {

    // canReuse: false,

    props: ['page'],

    data() {
      return {
        aTops: [],
        data: data,
        imgUrl: '/static/help/',
        iTop: {
          top: 5 + 'px'
        }
      }
    },
    // watch: {
    //   '$route' (to, from) {
        
    //   }
    // },
    mounted() {
      var aEs = this.getAllEle('.guideSmallTitle');
      var that = this;
      setTimeout(function() {
        for (var i = 0; i < aEs.length; i++) {
          // console.log(this.getTop(aEs[i]));
          that.aTops.push(that.getTop(aEs[i]));
        }
        // console.log('1: ', that.aTops);
      }, 400);
      
      // this.aTops.push(this.getTop(aEs[1]));      
      // this.getEle('#routerViewWrap').addEventListener('scroll', this.onScroll, false);
      $('#routerViewWrap').on('scroll', this.onScroll);
    },
    beforeDestroy() {
      // this.aTops = null;
      // this.getEle('#routerViewWrap').removeEventListener('scroll', this.onScroll, false);
      var routerViewWrap = $('#routerViewWrap');
      routerViewWrap.scrollTop(0);
      routerViewWrap.off('scroll', this.onScroll);
    },
    methods: {
      getTop(e){
        var offset = e.offsetTop;
        if(e.offsetParent != null) offset += this.getTop(e.offsetParent);
        return offset;
      },
      getAllEle(selector) {
        return document.querySelectorAll(selector);
      },
      getEle(selector) {
        return document.querySelector(selector);
      },
      navClick(index) {
        // alert(index);
        var aLi = $('#navsWrap li');
        var routerViewWrap = $('#routerViewWrap');

        for (var i = 0; i < aLi.length; i++) {
          aLi.attr('_active', '');
        }

        aLi.eq(index).attr('_active', 'active');

        routerViewWrap.animate({'scrollTop': this.aTops[index]}, 400);

        this.iTop = {
          top: index * 60 + 5 + 'px'
        }

      },
      scrollPosition() {
        var aLi = $('#navsWrap li');
        var scrTop = this.getEle('#routerViewWrap').scrollTop;

        var num = 0;
        // console.log(this.aTops);
        for (var i = 0; i < this.aTops.length; i++) {
          if (scrTop - this.aTops[i] >= -200) {
            num = i;
            continue;
          }
        }

        aLi.attr('_active', '');

        aLi.eq(num).attr('_active', 'active');
        // console.log(num);
        this.iTop = {
          top: num * 60 + 5 + 'px'
        }
      },
      onScroll() {
        if (onOff) {
          onOff = false;
          var that = this;
          setTimeout(function() {
            that.scrollPosition();

            onOff = true;
          }, 1000);

        } else {
          // console.log('滚动条不滚动');
        }
        
      }
    }
  }

</script>

<style scoped lang="scss">
  
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

        }
        .wechat_P {

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
          }
          > ul {
            margin: 0;
            padding: 0;
            list-style: none;
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
            font-size: 26px;
            color: #3498db;
            border-left: 6px solid #3498db;
            padding-left: 10px;
          }
          .guideSmallTitle {
            font: 20px/36px '微软雅黑';
            color: #555;
            margin: 0;
            padding: 0;
          }
          p {
            padding: 5px 0;
            margin: 0;
            color: #555;
            font: 14px/20px '微软雅黑';
          }
        }
      }
    }
  }

</style>