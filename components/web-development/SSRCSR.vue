<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">“SSR, CSR, SPA에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p class="inner-blog-text-10">SSR(Server side Rendering)</p>
          <p class="inner-blog-text-30">서버쪽에서 렌더링 준비를 끝마친 상태로 클라이언트에 전달하는 방식입니다.</p>
          <p class="inner-blog-text-30">요청시마다 새로고침이 일어나며 서버에 새로운 페이지에 대한 요청을 하는 방식입니다.</p>
          <p class="inner-blog-text-30">장점</p>
          <li class="inner-blog-text-30"><code>첫 페이지 로딩시간</code>은 SSR은 일부의 JS와 HTML만 다운하므로 평균적으로 빠릅니다.</li>
          <li class="inner-blog-text-30"><code>SEO</code>에 유리합니다.</li>
          <p class="inner-blog-text-30">단점</p>
          <li class="inner-blog-text-30"><code>나머지 페이지 로딩시간</code>은 지속적으로 요청을 하므로 더 느립니다.</li>
          <li class="inner-blog-text-30">View 변경시 서버에 계속 요청을 해야하므로 서버에 부담이 큽니다.</li>
          <p class="inner-blog-text-10">CSR(Client side Rendering)</p>
          <p class="inner-blog-text-30">서버는 요청을 받으면 클라이언트에 HTML과 JS를 보내주고, 클라이언트는 그것을 받아 렌더링을 시작합니다.</p>
          <p class="inner-blog-text-30">장점</p>
          <li class="inner-blog-text-30"><code>나머지 페이지 로딩시간</code>은 첫 페이지 로딩할 때 나머지 부분을 구성하는 코드를 받아왔기 때문에 빠릅니다.</li>
          <li class="inner-blog-text-30">View 변경시 렌더링을 요청하지 않으므로 서버에 부담이 작습니다.</li>
          <p class="inner-blog-text-30">단점</p>
          <li class="inner-blog-text-30"><code>첫 페이지 로딩시간</code>은 CSR는 HTML, CSS와 모든 스크립트들을 한 번에 불러오므로, 평균적으로 느립니다.</li>
          <li class="inner-blog-text-30">구글에서는 JS를 해석하여 SEO를 진행하지만, 타 SEO들은 없는 곳도 있으므로 관련 부분에 보완이 필요합니다.</li>
          <p class="inner-blog-text-10">SSG(Static Site Generator)</p>
          <p class="inner-blog-text-30"><code>SSR</code>처럼 서버로부터 완성된 HTML을 받아오지만, HTML 파일의 생성이 서버에서 렌더링 시점이 아닌 시점이 빌드 타임 시점입니다.</p>
          <p class="inner-blog-text-30">Next.js의 권장 렌더링 방식 입니다.</p>
          <p class="inner-blog-text-30">장점</p>
          <li class="inner-blog-text-30"><code>SSR</code>보다 빠르며, SEO도 잘 적용되지만, 완전 동적으로 url HTML 페이지가 필요한 경우 대응이 힘듭니다.</li>
          <p class="inner-blog-text-30">단점</p>
          <li class="inner-blog-text-30">동적으로 url HTML 페이지가 필요한 경우 대응이 힘듭니다.</li>
          <p class="inner-blog-text-10">Universal Rendering</p>
          <p class="inner-blog-text-30">SSR을 통해 빠른 FCP를 구현한 다음 클라이언트에서 rehydration이라는 기술을 통해 다시 렌더링하는 방식입니다. 초기 로딩시에는 SSR처럼 작동하고 그 이후에는 CSR로 작동하는 방식입니다.</p>
          <p class="inner-blog-text-30">Next.js, Nuxt.js, angular universal 등이 이를 지원합니다</p>
          <p class="inner-blog-text-30">장점</p>
          <li class="inner-blog-text-30"><code>첫 페이지 로딩시간</code>때 SSR로 완성된 HTML을 내려주어 SEO와 초기 속도 문제를 해결합니다. 그 이후에는 SPA의 지원하여 렌더링 리소스 낭비를 줄입니다.</li>
          <p class="inner-blog-text-30">단점</p>
          <li class="inner-blog-text-30">기존 개발보다 코드가 어려워 난잡해져 버그가 발생될 수 있습니다.</li>
          <li class="inner-blog-text-30">페이지가 빨리 로드되어 상호작용이 가능할것 으로 예상되지만, 실제로 클라이언트에서 자바스크립트가 실행되고 이벤트 핸들러가 적용될 때까지 입력에 응답할 수 없어, 사용자 경험이 안좋아질 수 있습니다.</li>
          <p class="inner-blog-text-10">SPA(Single Page Application)</p>
          <p class="inner-blog-text-30">서버로부터 첫 페이지만 받아오고 이후에는 동적으로 페이지를 구성하는 웹 어플리케이션 입니다. 데이터 CRUD 시 페이지를 동적으로 구성하고, 페이지를 새로고침 하지 않고 다른 페이지로 넘어가지 않습니다.</p>
          <p class="inner-blog-text-30"><code>Vue.js나 React.js</code> 등에서 SPA를 채택하여 사용하고 있으며, SPA가 CSR의 방법인 첫 페이지만 받아오고 이후는 데이터를 CRUD만 하기때문에 사용할뿐 SPA가 CSR과 동일한 개념은 아닙니다.</p>
          <p class="inner-blog-text-10">MPA(Multi Page Application)</p>
          <p class="inner-blog-text-30">서버로부터 완전한 페이지를 받아오고 이후에 데이터를 수정, 조회할 때 다른 완전한 페이지로 이동한다. 이때, URl이 바뀔 수도 있습니다.</p>
          <p class="inner-blog-text-10">SEO(Search Engine Optimization)</p>
          <p class="inner-blog-text-30">검색엔진이 이해하기 쉽도록 사이트의 구조와 페이지를 개발해 검색 결과 상위에 노출될 수 있도록 하는 것 입니다.</p>
        </div>
    </div>
    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://velog.io/@vagabondms/%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%84%B0%EB%94%94-SSR%EA%B3%BC-CSR%EC%9D%98-%EC%B0%A8%EC%9D%B4#2-csr%EC%9D%98-%EC%A0%95%EC%9D%98%EC%99%80-%EC%84%A4%EB%AA%85">https://velog.io/@vagabondms/%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%84%B0%EB%94%94-SSR%EA%B3%BC-CSR%EC%9D%98-%EC%B0%A8%EC%9D%B4#2-csr%EC%9D%98-%EC%A0%95%EC%9D%98%EC%99%80-%EC%84%A4%EB%AA%85</a>
      <a href="https://velog.io/@hlna0308/SPA%EC%99%80-CSR%EC%9D%80-%EA%B0%99%EC%9D%84%EA%B9%8C">https://velog.io/@hlna0308/SPA%EC%99%80-CSR%EC%9D%80-%EA%B0%99%EC%9D%84%EA%B9%8C</a>
      <a href="https://ajdkfl6445.gitbook.io/study/web/csr-vs-ssr-vs-ssg#static-site-generator-ssg">https://ajdkfl6445.gitbook.io/study/web/csr-vs-ssr-vs-ssg#static-site-generator-ssg</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'SSRCSR',
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
