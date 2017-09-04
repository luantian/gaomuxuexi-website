<template>
  <transition name="fade">
    <div id="down-app" v-if="isShow">
      <div id="content">
        <dl>
          <dt>高木学习学生手机版</dt>
          <dd class="centerDD"><img src="/static/wechat.jpg" alt=""></dd>
          <dd class="bottomDD">扫一扫下载手机版</dd>
        </dl>
        <div class="close" @click="close"><i class="iconfont icon-cha"></i></div>
        <div class="bTitle">高木大数据学习平台</div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
    },

    methods: {
      close() {
        this.isShow = false;
      },
      show() {
        this.isShow = true;
      }
    }

  }
</script>

<style scoped lang="scss">
  
  #down-app {
    width: 100%;
    height: 100%;
    min-width: 1300px;
    min-height: 800px;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999999999999;
    #content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 775px;
      height: 425px;
      margin: auto;
      background: #fff;
      > dl {
        width: 100%;
        text-align: center;
        margin-top: 88px;
        text-align: center;
        > dt {
          text-align: center;
          color: #0074cd;
          font-weight: bold;
          padding-bottom: 25px;
        }
        > dd {
          margin: 0;
          padding: 0;
          text-align: center;
        }
        > dd.centerDD {
          width: 146px;
          height: 146px;
          line-height: 146px;
          margin: 0 auto;
          border: 1px solid #ccc;
          > img {
            width: 143px;
            height: 143px;
          }
        }
        > dd.downloadWrap {
          border: 3px solid #e3f0fa;
          cursor: pointer;
          > a {
            display: block;
            color: #888;
            > i {
              color: #888;
              font-size: 50px;
            }
          }
        }
        > dd.bottomDD{
          padding-top: 25px;
          color: #888;
        }
      };
      > .bTitle {
        position: absolute;
        bottom: 20px;
        right: 0;
        left: 0;
        text-align: center;
        color: #555;
      };
      > .close {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #555;
        cursor: pointer;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: .2s ease-in;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0;
    transform: scale(2);
  }

</style>