<template>
  <div>
    <div style="background-color: #f8f8f8;height: 43px;line-height: 43px;border: 1px solid #ddd;">
      <ul style="padding-left: 0;">
        <li style="float: left;list-style-type: none;margin: 0 16px;">
          <a style="color: #333;text-decoration:none;height: 50px;display: inline-block">
            <!--            <span class="glyphicon glyphicon-arrow-right" style="color: #fa3636;font-size: 18px"></span>-->
            <span class="glyphicon glyphicon-book" style="color: #fa3636;font-size: 18px"></span>
            Python入门推荐用书 [ 官方授权 ]
            <!--            <span class="glyphicon glyphicon-arrow-left" style="color: #fa3636;font-size: 18px"></span>-->
          </a>
        </li>
        <li style="float: right;list-style-type: none;margin: 0 16px;">
          <a style="color: #333;text-decoration:none;height: 50px;display: inline-block" target="_blank">
            更多>>
          </a>
        </li>
        <!--              <li style="float: left;list-style-type: none;margin: 0 16px;"><a-->
        <!--                style="color: #333;text-decoration: none;height: 50px;display: inline-block"-->
        <!--                href="?sort=click_num">最热门</a>-->
        <!--              </li>-->
        <!--              <li style="float: left;list-style-type: none;margin: 0 16px;"><a-->
        <!--                style="color: #333;text-decoration: none;height: 50px;display: inline-block"-->
        <!--                href="?sort=study_num">参与人数</a>-->
        <!--              </li>-->
        <li style="clear: both;list-style: none;"></li>
      </ul>
    </div>
    <div class="panel panel-default" style="margin-bottom: 0;border-radius: 0;">
      <div class="panel-body" style="padding: 8px">
        <div style="padding-left:2px;padding-right:2px" class="col-sm-6 col-md-3" v-for="(item,index) in bookList"
             :key="bookList.id">
          <div class="thumbnail">
            <a class="img-responsive" target="_blank" :href="(item.order_address)">
              <img data-src="holder.js/400x200" alt="200x150"
                   :src="(item.image)" data-holder-rendered="false">
            </a>
            <div class="caption" style="padding-bottom: 0;padding-top: 0">
              <h5 style="font-weight: bold"><a href=""
                                               style="text-decoration: none;color: #666;font-size: 12px;height: 16px;line-height: 16px"></a>
              </h5>
              <div style="font-size: 12px;color: #9f9f9f;margin-bottom: 5px">
                <button class="btn btn-block btn-sm" style="color: rgb(251, 131, 65);font-weight: bold">
                  月销{{ item.monthly_sale }}件
                </button>
              </div>
              <div style="font-size: 12px;color: #9f9f9f">
                <span style="float: left">现价：<span
                  style="color: #fb8341;font-weight: bold">{{ item.current_price }}元</span>
                </span>
                <span style="float: right" v-if="(item.current_face_price===0)">券后：<span
                  style="color: #fb8341;font-weight: bold">{{ item.current_price }}元</span>
                </span>
                <span style="float: right" v-else>券后：<span
                  style="color: #fb8341;font-weight: bold">{{ item.current_price - item.current_face_price }}元</span>
                </span>
                <div style="clear: both"></div>
              </div>
              <div style="font-size: 12px;color: #9f9f9f;">
                <a target="_blank" class="btn btn-success btn-sm"
                   style="float: left;margin-top: 5px" v-if="(item.current_face_price===0)">暂无优惠券</a>
                <a target="_blank" :href="(item.coupon_address)" class="btn btn-success btn-sm"
                   style="float: left;margin-top: 5px" v-else>{{ item.current_face_price }}元券领取</a>
                <a target="_blank" :href="(item.order_address)" class="btn btn-danger btn-sm"
                   style="float: right;margin-top: 5px">立即下单</a>
                <div style="clear: both"></div>
              </div>
              <div style="font-size: 12px;color: #999999">
                <span style="float: right;margin-top: 8px">{{ item.book_store }}</span>
                <div style="clear: both"></div>
              </div>
            </div>
          </div>
        </div>
        <!--        <div style="padding-left:2px;padding-right:2px" class="col-sm-6 col-md-3">-->
        <!--          <div class="thumbnail">-->
        <!--            <a class="img-responsive" target="_blank" href="https://s.click.taobao.com/sZz4Wvu">-->
        <!--              <img data-src="holder.js/400x200" alt="200x150"-->
        <!--                   src="" data-holder-rendered="false">-->
        <!--            </a>-->
        <!--            <div class="caption" style="padding-bottom: 0;padding-top: 0">-->
        <!--              <h5 style="font-weight: bold"><a href=""-->
        <!--                                               style="text-decoration: none;color: #666;font-size: 12px;height: 16px;line-height: 16px">Python编程从入门到精通</a>-->
        <!--              </h5>-->
        <!--              <div style="font-size: 12px;color: #9f9f9f;margin-bottom: 5px">-->
        <!--                <button class="btn btn-block btn-sm" style="color: rgb(251, 131, 65);font-weight: bold">月销8247件-->
        <!--                </button>-->
        <!--              </div>-->
        <!--              <div style="font-size: 12px;color: #9f9f9f">-->
        <!--                <span style="float: left">现价：<span style="color: #fb8341;font-weight: bold">29.80元</span></span>-->
        <!--                <span style="float: right">券后：<span style="color: #fb8341;font-weight: bold">29.80元</span></span>-->
        <!--                <div style="clear: both"></div>-->
        <!--              </div>-->
        <!--              <div style="font-size: 12px;color: #9f9f9f;">-->
        <!--                <a target="_blank" href="https://s.click.taobao.com/RxcuTvu" class="btn btn-success btn-sm"-->
        <!--                   style="float: left;margin-top: 5px">暂无优惠券</a>-->
        <!--                <a target="_blank" href="https://s.click.taobao.com/sZz4Wvu" class="btn btn-danger btn-sm"-->
        <!--                   style="float: right;margin-top: 5px">立即下单</a>-->
        <!--                <div style="clear: both"></div>-->
        <!--              </div>-->
        <!--              <div style="font-size: 12px;color: #999999">-->
        <!--                <span style="float: right;margin-top: 8px">瑞雅图书专营店</span>-->
        <!--                <div style="clear: both"></div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
      <!--分页begin-->
      <!--      <nav aria-label="Page navigation" class="text-center">-->
      <!--        <ul class="pagination" style="margin-bottom: 10px">-->
      <!--          <li>-->
      <!--            <a href="?page_num=1" aria-label="Previous">-->
      <!--              <span aria-hidden="true">首页</span>-->
      <!--            </a>-->
      <!--          </li>-->
      <!--          <li class="disabled">-->
      <!--            <a href="javascript:" aria-label="Previous">-->
      <!--              <span aria-hidden="true">上一页</span>-->
      <!--            </a>-->
      <!--          </li>-->
      <!--          <li class="active"><a href="?page_num=1&amp;sort=">1</a>-->
      <!--          </li>-->
      <!--          <li>-->
      <!--            <a href="">2</a>-->
      <!--          </li>-->
      <!--          <li>-->
      <!--            <a href="" aria-label="Next">-->
      <!--              <span aria-hidden="true">下一页</span>-->
      <!--            </a>-->
      <!--          </li>-->
      <!--          <li>-->
      <!--            <a href="" aria-label="Previous">-->
      <!--              <span aria-hidden="true">尾页</span>-->
      <!--            </a>-->
      <!--          </li>-->
      <!--        </ul>-->
      <!--      </nav>-->
      <el-pagination background layout="prev, pager, next" :total="total" :page-size="limit"
                     @current-change="changePage"></el-pagination>
      <!--分页stop-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Book",
  data() {
    return {
      bookList: [],
      total: 0,
      limit: 12,
      offset: 0,
    }
  },
  methods: {
    getBookList() {
      let vm = this;//vue实例
      this.$http.get(`book/list/?limit=${vm.limit}&offset=${vm.offset}`)
        .then((response) => {
          let data = response.data
          if (data.status === 0) {
            this.bookList = data.data
            this.total=data.total
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    changePage(page) {
      // alert(page)
      this.offset = (page - 1) * this.limit;
      this.getBookList();
    }
  },
  created() {
    this.getBookList()
  }
}
</script>

<style scoped>
.el-pagination.is-background{
  text-align: center;
  margin-bottom: 8px;
}
</style>
