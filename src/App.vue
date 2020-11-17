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
          <!-- Horizontal -->
          <ins class="adsbygoogle"
               style="display:block;margin-top: 5px"
               data-ad-client="ca-pub-6937898095875663"
               data-ad-slot="1168822884"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
        <div class="col-md-10" style="padding: 0 2px;margin-top: 5px;margin-bottom: 8px">
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
<!--<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>-->
<!--<script>-->
<!--(adsbygoogle = window.adsbygoogle || []).push({});-->
<!--</script>-->
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
