<template>
  <div id="home">
    <div class="main">
      <h1 v-bind:class="['animate', animValue[randomNum]]">
        <span>科</span><span>技</span><span>改</span><span>变</span><span>教</span><span>育</span><span>？</span><span>科</span><span>技</span><span>只</span><span>为</span><span>还</span><span>原</span><span>教</span><span>育</span><span>本</span><span>质</span>
      </h1>
      <h4>高木学习，用大数据为中小学师生实现个性化的教与学</h4>
      <div class="btns">
        <a class="pulse" href="">学生版下载</a>
        <a class="pulse" href="http://www.gaomuxuexi.com" target="_blank">教师网页版</a>
      </div>
    </div>
    <!-- <DownApp></DownApp> -->
  </div>
</template>

<script>

import DownApp from '../components/DownApp';

export default {
  data() {
    return {
      animValue: ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
      randomNum: Math.floor(Math.random().toFixed(1)*6)
    }
  },
  components: {
    DownApp
  },
  mounted () {
    
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

  #home {
    width: 100%;
    min-width: 1000px;
    height: 100%;
    min-height: 800px;
    position: relative;
    background: url(../img/homeBg.jpg) no-repeat center center;
    > .main {
      position: absolute;
      top: 0;
      bottom: 0;
      left:0;
      right:0;
      margin: auto;
      width: 1000px;
      height: 300px;
      z-index: 2;
      > h1 {
        font-size: 55px;
        color: #555;
        text-align: center;
        > span {
          display: inline-block;
        }
      };
      > h4 {
        font-size: 30px;
        color: #555;
        text-align: center;
        transform: translateY(50px);
        opacity: 0;
        @include animations(fadeUp 1s forwards);
      };
      > .btns {
        text-align: center;
        @include animations(fadeUp 1.5s forwards);
        > a {
          display: inline-block;
          width: 240px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          color: #555;
          border: 1px solid #555;
          margin-left: 20px;
          font-size: 24px;
          text-decoration: none;
        }
      }
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
  
  .animate span:nth-of-type(2) {
    @include animations-delay(.05s);
  }
  .animate span:nth-of-type(3) {
    @include animations-delay(.1s);
  }
  .animate span:nth-of-type(4) {
    @include animations-delay(.15s);
  }
  .animate span:nth-of-type(5) {
    @include animations-delay(.2s);
  }
  .animate span:nth-of-type(6) {
    @include animations-delay(.25s);
  }
  .animate span:nth-of-type(7) {
    @include animations-delay(.3s);
  }
  .animate span:nth-of-type(8) {
    @include animations-delay(.35s);
  }
  .animate span:nth-of-type(9) {
    @include animations-delay(.4s);
  }
  .animate span:nth-of-type(10) {
    @include animations-delay(.45s);
  }
  .animate span:nth-of-type(11) {
    @include animations-delay(.5s);
  }
  .animate span:nth-of-type(12) {
    @include animations-delay(.55s);
  }
  .animate span:nth-of-type(13) {
    @include animations-delay(.6s);
  }
  .animate span:nth-of-type(14) {
    @include animations-delay(.65s);
  }
  .animate span:nth-of-type(15) {
    @include animations-delay(.7s);
  }
  .animate span:nth-of-type(16) {
    @include animations-delay(.75s);
  }
  .animate span:nth-of-type(17) {
    @include animations-delay(.8s);
  }

  

  .two span {
    opacity: 0;
    @include transforms(translate(200px, -100px) scale(2));
    @include animations(ballDrop .3s forwards);
  }

  @keyframes ballDrop {
    60% {
      @include transforms(translate(0, 20px) rotate(-180deg) scale(.5));
    }
    100% {
      @include transforms(translate(0) rotate(0deg) scale(1));
      opacity: 1;
    }
  }

  .one span {
    opacity: 0;
    @include transforms(translate(-150px, -50px) rotate(-180deg) scale(3));
    @include animations(revolveScale .4s forwards);
  }

  @keyframes revolveScale {
    60% {
      @include transforms(translate(20px, 20px) rotate(30deg) scale(.3));
    }
    100% {
      @include transforms(translate(0) rotate(0) scale(1));
      opacity: 1;
    }
  }
  

  /* Animation Three */

  .three span {
    opacity: 0;
    @include transforms(translate(-300px, 0) scale(0));
    @include animations(sideSlide .5s forwards);
  }

  @keyframes sideSlide {
    60% {
      @include transforms(translate(20px, 0) scale(1));
      color: #b10e81;
    }
    80% {
      @include transforms(translate(20px, 0) scale(1));
      color: #b10e81;
    }
    99% {
      @include transforms(translate(0) scale(1.2));
      color: #00f0ff;
    }
    100% {
      @include transforms(translate(0) scale(1));
      opacity: 1;
    }
  }

  .four span {
    opacity: 0;
    @include transforms(translate(0, -100px) rotate(360deg) scale(0));
    @include animations(revolveDrop .3s forwards);
  }

  @keyframes revolveDrop {
    30% {
      @include transforms(translate(0, -50px) rotate(180deg) scale(1));
    }
    60% {
      @include transforms(translate(0, 20px) scale(.8) rotate(0deg));
    }
    100% {
      @include transforms(translate(0) scale(1) rotate(0deg));
      opacity: 1;
    }
  }
  
  .five span {
    opacity: 0;
    @include transforms(translate(0, -100px) rotate(360deg) scale(0));
    @include animations(dropVanish .5s forwards);
  }

  @keyframes dropVanish {
    30% {
      @include transforms(translate(0, -50px) rotate(180deg) scale(1));
    }
    50% {
      @include transforms(translate(0, 20px) scale(.8) rotate(0deg));
      opacity: 1;
    }
    80% {
      @include transforms(translate(-100px, -100px) scale(1.5) rotate(-180deg));
      opacity: 0;
    }
    100% {
      @include transforms(translate(0) scale(1) rotate(0deg));
      opacity: 1;
    }
  }

  .six span {
    opacity: 0;
    @include transforms(rotate(-180deg) translate(150px, 0));
    @include animations(twister .5s forwards);
  }

  @keyframes twister {
    10% {
      opacity: 1;
    }
    100% {
      @include transforms(rotate(0deg) translate(0));
      opacity: 1;
    }
  }

  .seven span {
    opacity: 0;
    @include transforms(translate(-150px, 0) scale(.3));
    @include animations(fontAnimate .8s forwards);
  }

  @keyframes fontAnimate {
    40% {
      @include transforms(translateX(50px) scale(.7));
      opacity: 1;
      color: #0074cd;
    }
    60% {
      color: #0f40ba;
    }
    80% {
      @include transforms(translate(0) scale(2));
      opacity: 0;
    }
    100% {
      @include transforms(translate(0) scale(1));
      opacity: 1;
    }
  }

  .pulse {
    --color: #555;
    --hover: #555;
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

  .btns > a {
    color: var(--color);
    @include transitions(.25);
  }
  .btns > a:hover, .btns > a:focus {
    border-color: var(--hover);
    color: #fff;
  }

</style>

 


