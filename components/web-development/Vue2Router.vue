<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">Vue router 기초 개념에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>Vue에서 라우팅은 vue-router를 사용합니다. 페이지 이동할 때 url 변경되면, 변경된 요소의 영역에 컴포넌트를 갱신합니다</p>
          <p>갱신한 경우 DOM을 새로 갱신하는게 아닌 변경되는 요소영역만 갱신합니다.(header, footer와 같은 부분들은 갱신하지 않음)</p>

        </div>
        <div class="desc mt--45 mb--50">
          <p>router 기초</p>
          <p class="inner-blog-text-10">router-link</p>
          <p class="inner-blog-text-30">a href를 사용하는 대신 router-link를 통해 링크 이동을 합니다. 이를 사용하면, 페이지를 리로딩 하지 않고, 변경 요소만 갱신합니다.</p>
          <p class="inner-blog-text-10">router-view</p>
          <p class="inner-blog-text-30">현 url에 맞는 페이지를 display합니다.</p>
          <p class="inner-blog-text-30">vue에서 히스토리를 지원해주려면, 기본적으론 라우터에 히스토리 모드로 넣어주면 됩니다.
            <pre>
&lt;div id="app"&gt;
  &lt;h1>Hello App!&lt;/h1&gt;
  &lt;p&gt;
    &lt;!-- use the router-link component for navigation. --&gt;
    &lt;!-- specify the link by passing the `to` prop. --&gt;
    &lt;!-- `&lt;router-link&gt;` will render an `&lt;a>` tag with the correct `href` attribute --&gt;
    &lt;router-link to="/"&gt;Go to Home&lt;/router-link&gt;
    &lt;router-link to="/about"&gt;Go to About&lt;/router-link&gt;
  &lt;/p&gt;
  &lt;!-- route outlet --&gt;
  &lt;!-- component matched by the route will render here --&gt;
  &lt;router-view&gt;&lt;/router-view&gt;
&lt;/div&gt;

&lt;template&gt;</pre>
          <p class="inner-blog-text-10">js에서의 vue-router</p>
          <p class="inner-blog-text-30">router 등록, lifecycle에서 router 값 관리, router 현 값 get/set</p>
          <p class="inner-blog-text-30">
            <pre>
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
// 컴포넌트 등록.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]
// VueRouter에서 컴포넌트 등록값 선언 및 설정.
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})
const app = Vue.createApp({})
// Vue에 VueRouter값 등록.
app.use(router)
app.mount('#app')
            </pre>
          </p>
          <p class="inner-blog-text-10">네비게이션 가드</p>
          <p class="inner-blog-text-30">네비게이션 가드는 특정 페이지 접근 시 페이지의 접근을 막는 기능 입니다. 주로 유저의 권한을 통해 페이지 이동의 허가/불가를 제어합니다.</p>
          <p class="inner-blog-text-30">전역 가드 : app 전역에서 동작.</p>
          <p class="inner-blog-text-30">라우터 가드 : 특정 url 전역에서 동작.</p>
          <p class="inner-blog-text-30">컴포넌트 가드 : 라우터 컴포넌트 안에서 동작.</p>
          <p class="inner-blog-text-30">
            <pre>router/index.js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
            </pre>
          </p>
          <p class="inner-blog-text-30">to: 이동할 대상 Route 입니다. </p>
          <p class="inner-blog-text-30">from: 이전 페이지 Route 입니다. </p>
          <p class="inner-blog-text-30">next(): ()에 빈 매개면 네비게이션이 승락됩니다. false면 이전 페이지, 내부에 router 등록된 path name을 넣어주면 넣어준 곳으로 네비게이션을 시작합니다.</p>
          <p class="inner-blog-text-30">to: 이전 페이지 Route 입니다. </p>
          <p class="inner-blog-text-30">전역 가드에서는 router.beforeEach와 router.beforeResolve를 사용하는데,  beforeResolve는  모든 in-component 가드와 비동기 라우터 컴포넌트가 종료 된 후, 네비게이션이 승인되기 바로 전에 호출됩니다.</p>
          <p class="inner-blog-text-30">그래서 보통은 router.beforeEach에 유저를 API통신을 통해 권한의 적절성을 확인하고, beforeResolve에선 리다이렉트와 같은 것을 확인합니다.</p>
          <p class="inner-blog-text-30">vue에서 히스토리를 지원해주려면, 기본적으론 라우터에 히스토리 모드로 넣어주면 됩니다.
            <pre>router/index.js
const router = new VueRouter({
	routes,
	mode: "history",
            </pre>
          </p>
          <p class="inner-blog-text-30">상용 환경인 웹 서버에서는 vue 소스 설정만이 아닌 웹 서버에 추가적으로 수정이 필요합니다.
            <pre>Apache
&lt;IfModule mod_negotiation.c&gt;
  Options -MultiViews
&lt;/IfModule&gt;

&lt;IfModule mod_rewrite.c&gt;
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
&lt;/IfModule&gt;
nginx
location / {
  try_files $uri $uri/ /index.html;
}
&lt;template&gt;</pre>
          </p>

        </div>
    </div>


    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://kr.vuejs.org/v2/guide/">https://kr.vuejs.org/v2/guide/</a>
      <a href="https://router.vuejs.org/guide/">https://router.vuejs.org/guide/</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Vue2Router',
        components: {
        },
        data () {
            return {
            }
        },

        mounted () {
        },
        methods: {
        },
    };
</script>
