<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">“서버 개발에서....”</h5>
        <div class="desc mt--45 mb--50">
          <p class="bk_pra wow move-up">Web 서버란 클라이언트(사용자)가 웹 브라우저에서 어떠한 페이지 요청을 하면 웹 서버에서 그 요청을 받아 정적 컨텐츠(html,css,js)를 제공..</p>
          <div>Web Server ex ) apache http, nginx</div>
        </div>
        <div class="desc mt--45 mb--50">
          <p class="bk_pra wow move-up">WAS(AP)서버는 웹 서버와 웹 컨테이너가 합쳐진 형태로서, 웹 서버 단독으로는 처리할 수 없는 DB 조회나 다양한 로직 처리가 필요한 동적 컨텐츠를 제공..</p>
          <div>Application Server ex ) apache tomcat,</div>
        </div>
        <div class="desc mt--45 mb--50">
          <p class="bk_pra wow move-up">그럼 순수 WAS로만 서비스 제공 해도 될까?.</p>
          <div>=> 순수 WAS로 제공하는 것은 가능하지만(JSP 구조)하나의 서버에서 유저에게 static, dynamic 서비스를 모두 제공하면 과부화가 오기 때문에, Web server, WAS Server를 분리하여 서비스를 제공하는 것를 권장한다.</div>
        </div>
    </div>
    <div class="thumbnail">
      <img class="w-100" src="/img/blog/big-img/standard-post-2.jpg" alt="Blog Image 01">
    </div>
  </div>
</template>

<script>
    export default {
        components: {
        },
        data () {
            return {
            }
        },

        mounted () {
        },
    };
</script>
