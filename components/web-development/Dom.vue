<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">Dom에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>Dom 개념.</p>
          <p>HTTP request는 기본적으로 Cross-Site HTTP Requests가 가능. 이는 img, script 등에서 타 도메인 리소스(이미지, 스크립트 등)를 참조 할 수 있습니다.</p>
          <img class="w-100" src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png" alt="cors_principle image">
          <p>아래는 naver 사이트의 html의 img에서 www.naver.com이 아닌 타 url을 접근 하여 이미지를 가져오고 있습니다.</p>          
          <img class="w-100" src="/img/web-development/naver-cors.png" alt="naver cors-example image">
          <p>그러나, 보안상의 이유로 브라우저에서는 script 로 둘러쌓인 내부에서 작성된 cross-origin HTTP를 제한하고 있습니다. 예를 들어 XMLHttpRequest나 Fatch API는 same-origin Policy를 따르기 때문에 올바른 CORS header를 포함하지 않는 한 다른 origin에 request를 할 수 없습니다. 때문에 서버 개발자는 CORS을 이해하고 스펙을 따라 HTTP request에 응답을 해야합니다.</p>
          <img class="w-100" src="/img/web-development/cors-example.png" alt="cors-example image">
        </div>
        <div class="desc mt--45 mb--50">
          <p>HTMl JS Dom 관계</p>
        </div>

        <div class="desc mt--45 mb--50">
          <p>가상 Dom 이란</p>
        </div>
    </div>
    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://developer.mozilla.org/ko/docs/Glossary/DOM">https://developer.mozilla.org/ko/docs/Glossary/DOM</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HttpCors",
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
