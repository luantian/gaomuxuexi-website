<template>
  <div id="S_tel">
    <div class="main">
      <h2>操作指南</h2>
      <div class="content clearfix">
        <div id="navsWrap" v-bind:class="['guideNavFixed', 'guideNav']">
          <ul >
            <li v-for="(item, index) in navs" @click="navClick(index)" v-bind:_active="index == 0 ? 'active' : ''">
              <a v-bind:href="'#'+item.to">{{item.title}}</a>
            </li>
          </ul>
          <div class="indicator" v-bind:style="iTop"></div>
        </div>
        <div class="guideCon">
          <h4 class="guideTitle">{{title}}</h4>
          <div v-for="item in content">
            <h4 v-bind:id="item.to" class="guideSmallTitle">{{item.title}}</h4>
            <p v-for="item in item.data" v-if="typeof(item) == 'string' ? true : false" v-html="item"></p>
            <img v-else v-bind:src="imgUrl+item.imgName" v-bind:class="item.className" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
  import data from '../guideConfig';

  var onOff = true;
  var timer = null;

  export default {
    data() {
      return {
        navs: data.s_tel.navs,
        title: data.s_tel.title,
        content: data.s_tel.content,
        imgUrl: '/static/help/',
        iTop: {
          top: 5 + 'px'
        }
      }
    },
    mounted() {
      var aEs = this.getAllEle('.guideSmallTitle');
      var that = this;
      this.aTops = [];
      setTimeout(function() {
        for (var i = 0; i < aEs.length; i++) {
          // console.log(this.getTop(aEs[i]));
          that.aTops.push(that.getTop(aEs[i]));
        }
        // console.log(that.aTops);
      }, 1000);
      
      // this.aTops.push(this.getTop(aEs[1]));
      
      this.getEle('#routerViewWrap').addEventListener('scroll', this.onScroll);
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
        var aLi = this.getAllEle('#navsWrap li');

        for (var i = 0; i < aLi.length; i++) {
          aLi[i].setAttribute('_active', '');
        }

        aLi[index].setAttribute('_active', 'active');

        this.iTop = {
          top: index * 60 + 5 + 'px'
        }

      },
      scrollPosition() {
        var aLi = this.getAllEle('#navsWrap li');
        var scrTop = this.getEle('#routerViewWrap').scrollTop;

        var num = 0;
        for (var i = 0; i < this.aTops.length; i++) {
          if (scrTop - this.aTops[i] >= -500) {
            num = i;
            continue;
          }
        }
        // console.log(num);

        for (var i = 0; i < aLi.length; i++) {
          aLi[i].setAttribute('_active', '');
        }

        aLi[num].setAttribute('_active', 'active');

        this.iTop = {
          top: num * 60 + 5 + 'px'
        }
      },
      onScroll() {

        if (onOff) {
          onOff = false;
          clearTimeout(timer);
          var that = this;
          timer = setTimeout(function() {
            
            that.scrollPosition();

            onOff = true;
          }, 1000);
        }
        
      }
    }
  }

</script>

<style scoped lang="scss">
  
  #S_tel {
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
        > .guideNav {
          width: 130px;
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