<template>
  <!--          轮播图替代方案-->
  <!--        <div class="col-md-12" style="padding: 0 2px;margin-top: 60px">-->
  <!--          <a target="_blank" href="https://s.click.taobao.com/gaJ8Uvu">-->
  <!--            <img class="img-responsive" src="/static/img/aliyun-ads/1200-120.jpg" alt="">-->
  <!--          </a>-->
  <!--        </div>-->
  <!--          轮播图替代方案-->
  <!--轮播图begin-->
  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" class="active" v-if="(index===0)" v-for="(item,index) in bannerList">
      </li>
      <li data-target="#carousel-example-generic" v-if="(index!==0)" v-for="(item,index) in bannerList" style="margin-right: 4px">
      </li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active" v-if="(index===0)" v-for="(item,index) in bannerList">
        <a target="_blank">
          <img class="img-responsive center-block"
               :src="(item.image)"
               alt="1200x120" data-src="holder.js/1200x200" data-holder-rendered="false">
          <div class="carousel-caption">
            ...
          </div>
        </a>
      </div>
      <div class="item" v-if="(index!==0)" v-for="(item,index) in bannerList">
        <a target="_blank">
          <img class="img-responsive center-block"
               :src="(item.image)"
               alt="1200x120" data-src="holder.js/1200x200" data-holder-rendered="false">
          <div class="carousel-caption">
            ...
          </div>
        </a>
      </div>

      <!--      <div class="item">-->
      <!--        <a href="">-->
      <!--          <img class="img-responsive center-block"-->
      <!--               src="img/1200-120.jpg"-->
      <!--               alt="1200x120" data-src="holder.js/1200x200"-->
      <!--               data-holder-rendered="false">-->
      <!--          <div class="carousel-caption">-->
      <!--          </div>-->
      <!--        </a>-->
      <!--      </div>-->
    </div>
    <!-- Controls -->
    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <!--轮播图stop-->
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      bannerList: [],
      isAcive: true
    }
  },
  methods: {
    getBannerList() {
      this.$http
        .get('banner/list/')
        .then((response) => {
          let data = response.data;
          if (data.status === 0) {
            this.bannerList = data.data
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created() {
    this.getBannerList()
  }
}
</script>

<style scoped>

</style>
