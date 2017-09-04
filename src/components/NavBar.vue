<template>
  <div id="navbar">
    <!-- 导航栏logo -->
    <div class="logoWrap">
      <router-link to="/">
        <div class="logo" @click="noSelectSecondaryMenu">
          <img src="/static/logo.png">
        </div>
      </router-link>
    </div>
    
      <ul class="navBtn">
        <transition name="fade1">
          <li @click="noSelectSecondaryMenu" v-if="navLiShow">
            <router-link to="/">首页 HOME</router-link>
          </li>
        </transition>
        <transition name="fade2">
          <li @mouseenter="childrenRouteMouseEnter('P')" @mouseleave="childrenRouteMouseleave('P')" v-if="navLiShow">
            <a v-bind:class="['childrenRoute', isPchecked ? 'router-link-exact-active' : '']">产品 PRODUCT</a>
            <transition name="slide-fade">
              <ul v-if="isPShow">
                <li v-for="item in SecondaryMenuProductData" @click="selectSecondaryMenu('P')">
                  <router-link v-bind:to="{path: item.to}">{{item.title}}</router-link>
                </li>
              </ul>
            </transition>
          </li>
        </transition>
        <transition name="fade3">
          <li @mouseenter="childrenRouteMouseEnter('G')" @mouseleave="childrenRouteMouseleave('G')" v-if="navLiShow">
            <a v-bind:class="['childrenRoute', isGchecked ? 'router-link-exact-active' : '']">操作指南 Guide</a>
            <transition name="slide-fade">
              <ul v-if="isGShow">
                <li v-for="item in SecondaryMenuGuideData" @click="selectSecondaryMenu('G')">
                  <router-link v-bind:to="{path: item.to}">{{item.title}}</router-link>
                </li>
              </ul>
            </transition>
          </li>
        </transition>
        <transition name="fade4">
          <li @click="noSelectSecondaryMenu" v-if="navLiShow">
            <router-link to="/ConnectUs">联系我们 CONNECT</router-link>
          </li>
        </transition>
      </ul>
    
    <!-- 导航栏底部文案和公众号 -->
    <div class="navbar-footer">
      <p>关注高木学习公众号</p>
      <img src="/static/wx-code.png" alt="微信公众号二维码">
      <p>恒创鑫业科技（深圳）有限公司版权所有</p>
      <p>粤ICP备15101825</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navbar',
  data () {
    return {
      navLiShow: false,
      isPShow: false,
      isGShow: false,
      isPchecked: false,
      isGchecked: false,
      SecondaryMenuProductData: [
        {
          title: '学生端',
          to: '/ProductS'
        },
        {
          title: '教师端',
          to: '/ProductT'
        },
        {
          title: '家长端',
          to: '/ProductP'
        }
      ],
      SecondaryMenuGuideData: [
        {
          title: '学生手机端',
          to: '/Guide_S_tel'
        },
        {
          title: '学生电脑端',
          to: '/Guide_S_pc'
        },
        {
          title: '教师网页端',
          to: '/Guide_T_web'
        },
        {
          title: '教师微信端',
          to: '/Guide_T_weixin'
        },
        {
          title: '家长微信端',
          to: '/Guide_P_weixin'
        },
      ]
    }
  },
  mounted () {
    this.isFirstMenu();
    this.navLiShow = true;
  },
  methods: {
    //根据href判断一级菜单是否选中
    isFirstMenu() {
      var pathname = window.location.pathname;
      if (pathname.indexOf('Guide') > 0) {
        this.isGchecked = true;
      } else if(pathname.indexOf('Product') > 0) {
        this.isPchecked = true;
      }
    },

    childrenRouteMouseEnter(name) {//鼠标移入二级菜单
      switch(name) {
        case 'P':
          this.isPShow = true;
          break;
        case 'G':
          this.isGShow = true;
          break;
        default:;
      }
    },
    childrenRouteMouseleave(name) {//鼠标移入二级菜单
      switch(name) {
        case 'P':
          this.isPShow = false;
          break;
        case 'G':
          this.isGShow = false;
          break;
        default:;
      }
    },
    selectSecondaryMenu(name) {//选中二级菜单执行的函数
      switch(name) {
        case 'P':
          this.isPchecked = true;
          this.isGchecked = false;
          break;
        case 'G':
          this.isGchecked = true;
          this.isPchecked = false;
          break;
        default:;
      }
    },
    noSelectSecondaryMenu() {//选中非二级菜单执行的函数
      this.isPchecked = false;
      this.isGchecked = false;
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

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

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }


  $navbar-width: 300px;
  $navbar-min-height: 800px;
  $main-color: #0074cd;
  $nav-btn-height: 60px;
  
  #navbar {
    max-width: $navbar-width;
    width: 100%;
    height: 100%;
    min-height: $navbar-min-height;
    box-shadow: 1px 0 10px rgba(0, 0, 0, 0.3);
    position: relative;
    background: #fff;
    z-index: 10000000;
  }


  .logoWrap { 
    height: 1%;
    // overflow: hidden; 
    display: table; 
    border-spacing: 10px;
    position: relative;
    .logo {
      width: $navbar-width;
      height: 200px;
      text-align: center; 
      vertical-align: middle; 
      position: relative; 
      *float: left; 
      display: table-cell;
      *position: absolute; 
      top: 50%; 
      img {
        width: 180px;
        height: 67px;
        *position: relative; 
        top: -50%; 
        left: -50%; 
      }
    }
  }

  @mixin nav-btn-common {
    display: block;
    text-decoration: none;
    color: #898989;
  }

  @mixin nav-btn-active {
    background: $main-color;
    color: #fff;
  }
  
  .navBtn {
    > li {
      height: $nav-btn-height;
      line-height: $nav-btn-height;
      position: relative;
      > a {
        padding-left: 40px;
        @include nav-btn-common;
      }
      > a.router-link-exact-active {
        @include nav-btn-active;
      }
      > a.router-link-exact-active:hover {
        @include nav-btn-active;
      }
      > a:hover {
        color: $main-color;
      }

      > ul {
        position: absolute; 
        top: 0; 
        right: -220px; 
        width: 218px; 
        background: #fff;
        border: 1px solid #ccc;
        > li {
          > a {
            text-align: center;
            @include nav-btn-common;
          }
          > a.router-link-exact-active {
            @include nav-btn-active;
          }
          > a.router-link-exact-active:hover {
            @include nav-btn-active;
          }
          > a:hover {
            color: $main-color;
          }
        }
      }
    }
  }

  .navbar-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    font-size: 14px;
    color: #9a9a9a;
  }

  .slide-fade-enter-active {
    @include transitions(all .3s ease);
  }
  .slide-fade-leave-active {
    // transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    @include transitions(all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0));
  }
  .slide-fade-enter, .slide-fade-leave-to {
    @include transforms(translateX(-20px));
    opacity: 0;
  }

  
  $transX: 800px;
  .fade1-enter-active, .fade1-leave-active {
    @include transitions(.4s);
  }
  .fade1-enter, .fade1-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    @include transforms(translateY($transX));
  }

  .fade2-enter-active, .fade2-leave-active {
    @include transitions(.4s .08s);
  }
  .fade2-enter, .fade2-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    @include transforms(translateY($transX));
  }

  .fade3-enter-active, .fade3-leave-active {
    @include transitions(.4s .16s);
  }
  .fade3-enter, .fade3-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    @include transforms(translateY($transX));
  }

  .fade4-enter-active, .fade4-leave-active {
    @include transitions(.4s .24s);
  }
  .fade4-enter, .fade4-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    @include transforms(translateY($transX));
  }


</style>
