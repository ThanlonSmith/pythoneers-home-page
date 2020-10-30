<template>
  <!--  <div class="breadcrumb">-->
  <div class="" style="margin: 62px 0 8px">
    <div style="position: relative;height: 30px;line-height:30px;overflow: hidden;">
      <ul class="ul" style="list-style: none;padding-left:5px ;margin: 0">
        <li v-for="(item,index) in noticeList" :key="noticeList.id"><span class="glyphicon glyphicon-volume-up"></span>
          <span style="color: rgb(255, 87, 34);font-weight: bold">通知：{{ item.content }}</span>
        </li>
      </ul>
    </div>
    <!--      <span style="color: #FF5722;font-weight: bold">-->
    <!--        <span v-for="(item,index) in noticeList"-->
    <!--              :key="noticeList.id">通知：{{ item.content }}</span>-->
    <!--      </span>-->
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      noticeList: []
    }
  },
  methods: {
    getNoticeList() {
      this.$http
        .get('notice/list/')
        .then((response) => {
          console.log(response);
          let data = response.data
          if (data.status === 0) {
            this.noticeList = data.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created() {
    this.getNoticeList();
  }
}
</script>
<style scoped>

</style>
