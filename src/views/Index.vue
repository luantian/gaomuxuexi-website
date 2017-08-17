<template>
  <div id="index">
    <div class="NavBarWrap">
      <NavBar></NavBar>
    </div>
    <div class="routerViewWrap">
      <!-- <transition :name="transitionName">
        
      </transition> -->
      <router-view class="router"></router-view>
    </div>
  </div>
</template>

<script>

import NavBar from './../components/NavBar';

export default {
  name: 'index',
  data() {
    return {
      // transitionName: 'slide-right'  // 默认动态路由变化为slide-right
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //     if(to.path == '/') {
  //       this.transitionName = 'slide-right';
  //     } else {
  //       this.transitionName = 'slide-left';
  //     }
  //   }
  // },
  components: {
    NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

  // @mixin prefix($property, $value) {
  //   -webkit-#{$property}: $value;
  //   -moz-#{$property}: $value;
  //   -ms-#{$property}: $value;
  //   -o-#{$property}: $value;
  //   #{$property}: $value;
  // }

  // @mixin transforms($value) {
  //   @include prefix(transform, $value);
  // }

  #index {
    height: 100%;
    position: relative;
  }

  .NavBarWrap {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }  

  .routerViewWrap {
    height: 100%;
    overflow-y: auto;
    margin-left: 300px;
  }

  .router {
    position: absolute;
    width: 100%;
    transition: all .8s ease;
  }

  // .slide-left-enter,
  // .slide-right-leave-active {
  //   opacity: 0;
  //   @include transforms(translateX(300px));
  // }

  // .slide-left-leave-active,
  // .slide-right-enter {
  //   opacity: 0;
  //   @include transforms(translateX(-300px));
  // }

</style>

 


