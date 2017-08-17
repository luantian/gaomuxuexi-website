<template>
  <div id="connectUs">
    <div class="main">
      <h2>联系我们 CONNECT</h2>
      <dl v-for="item in infos" class="clearfix">
        <dt><i v-bind:class="['iconfont', item.icon]"></i></dt>
        <dd>{{item.title}}</dd>
      </dl>
      <baidu-map class="bm-view" :center="markPoint" :zoom="20">
        <bm-traffic :predictDate="{weekday: 7, hour: 12}"></bm-traffic>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-marker :position="markPoint" :dragging="true" @click="infoWindowOpen" animation="BMAP_ANIMATION_BOUNCE">
          <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen">
            <h3>恒创鑫业科技(深圳)有限公司</h3>
            <p>期待与您会面</p>
          </bm-info-window>
          <bm-label content="恒创鑫业科技(深圳)有限公司" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -60, height: 30}"/>
        </bm-marker>
      </baidu-map>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      show: false,
      markPoint: {lng: 113.946761, lat: 22.547476},


      infos: [
        {
          title: '邮编：518000',
          icon: 'icon-you'
        },
        {
          title: '邮箱：hcxy@gaomuxuexi.com',
          icon: 'icon-youjian'
        },
        {
          title: '客服电话：18312342982 / 15107316133',
          icon: 'icon-zuoji'
        },
        {
          title: '客服QQ：289445695',
          icon: 'icon-qq'
        },
        {
          title: '地址：深圳市南山区科文路8号中钢科技园M6栋2楼M室',
          icon: 'icon-dizhi'
        }
      ]
    }
  },

  mounted () {
    
  },

  methods: {
    infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    }
  }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">

  #connectUs {
    width: 100%;
    min-width: 1000px;
    height: 100%;
    min-height: 800px;
    position: relative;
    > .main {
      width: 1000px;
      margin: 0 auto;
      > h2 {
        margin: 0;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 40px;
      }
      > dl {
        height: 50px;
        line-height: 50px;
        > dt {
          float: left;
          > i {
            font-size: 25px;
            color: #888;
          }
        }
        > dd {
          float: left;
          font-size: 18px;
          color: #555;
        }
      }
    }
  }

  .bm-view {
    width: 1000px;
    height: 450px;
    margin: 100px 0;
  }
 
</style>

 


