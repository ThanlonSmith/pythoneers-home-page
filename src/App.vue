<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="padding-left: 2px;padding-right: 2px">
          <!--Notice-->
          <Notice/>
          <!--Notice-->
          <!--Banner组件-->
          <Banner/>
          <!--Banner组件-->
          <!-- Vertical -->
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-6937898095875663"
               data-ad-slot="2927491642"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
        <div class="col-md-10" style="padding: 0 2px;margin-top: 5px">
          <!--Book组件-->
          <Book/>
          <!--Book组件-->
        </div>
        <div class="col-md-2" style="padding: 0 2px;margin-top: 5px;">
          <!--Sponsor组件-->
          <Sponsor/>
          <!--Sponsor组件-->
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Notice from './components/Notice'
import Book from './components/Book'
import Sponsor from './components/Sponsor'
import Footer from './components/Footer'

export default {
  name: 'app',
  data() {
    return {
      msg: ''
    }
  },
  components: {
    Banner,
    Notice,
    Book,
    Sponsor,
    Footer,
  }
}
</script>

<style>

</style>
