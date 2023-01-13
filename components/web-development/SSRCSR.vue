<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">“SSR, CSR, SPA에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p> 렌더링이란 웹페이지 접속시 페이지를 화면에 그려주는 것입니다.<p>

SSR
Server side Rendering (서버사이드렌더링)
요청시마다 새로고침이 일어나며 서버에 새로운 페이지에 대한 요청을 하는 방식이다.
서버에서 사용자에게 보여줄 페이지를 모두 구성하여 페이지를 보여주는 방식
기술의 발전으로 웹에서 제공되는 정보량이 많아지고, 여러 문제점이 발견되면서 SPA가 등장하게 된다.


CRS & SPA(single page application)
SPA는 최초 한번 페이지 전체를 로딩한 후부터 데이터만 변경해서 사용할 수 있는 웹 애플리케이션을 의미한다.
이러한 방식을 클라이언트사이드 렌더링(CRS) 방식이라고 한다.
전통적인 SSR은 SPA에 비해 성능이 뒤떨어져있다.

버사이드 렌더링
초기 로딩속도가 빠르고
SEO에 유리하지만,
View 변경시 서버에 계속 요청을 해야하므로 서버에 부담이 크다.
클라이언트 렌더링
초기 로딩속도는 느리지만,
초기 로딩 후 서버에 다시 요청할 필요없이 클라이언트 내에서 작업이 이루어지므로 매우 빠르다.
but SEO에 대한 문제가 있다.
SPA란
첫 로딩시 전체 페이지를 로딩하고 필요한 데이터만 JSON형태로 받아와서 동적으로 렌더링하는 방식
첫 화면 로딩시에 모든 화면이 미리 준비되어 있어야하기 때문에 로딩 시간이 걸린다.
SSG
SSR vs CSR
초기 View 로딩 속도
SSR의 경우에는
- view를 서버에서 렌더링하여 가져오기 때문에 첫 로딩이 매우 짧다.
- 물론 JS 파일을 모두 다운로드하고 적용하기 전까지는 어떤 인터렉션에도 반응하지 않지만, 사용자 입장에서는 로딩 속도가 짧다고 느낄 수 있다.
반면 CSR의 경우에는
- 서버에서 View를 렌더하지 않고 HTML을 다운 받은 다음 JS 파일이나 각종 리소스를 다운 받을 후 브라우저에 렌더링하여 보여주기 때문에 SSR보다는 초기 View를 볼 수 있기까지 시간이 걸린다. 즉 로딩이 길어진다.
- but View가 보여진 시점에서 바로 인터렉션이 가능하다.
SEO 검색 엔진 최적화 차이점
seo = 검색 엔진 최적화
CSR방식으로 이루어진 사이트는 View를 생성하는데 자바스크립트가 필요하다. 그 전까지는 HTML의 내용은 비어있기 때문에 웹 크롤러들은 내용을 알 수 없다 => 제대로된 데이터를 수집할 수 없다.
but 구글에 경우 자바스크립트를 해석에서 크롤링해줌 그렇지만 전세계사람들이 구글만 쓰는 것이 아니기에 문제점으로 볼 수 있다.
만약 seo가 잘되지 않는다면 자신이 만든 웹어플리케이션의 내용이 검색엔진에 제대로 표시되지 않고, 그만큼 사용자의 유입이 줄어든다.


          <img class="w-100" src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/fetching_a_page.png" alt="http fetch image">
          <p>클라이언트와 서버들은 (데이터 스트림과 대조적으로) 개별적인 메시지 교환에 의해 통신합니다. 보통 브라우저인 클라이언트에 의해 전송되는 메시지를 요청(requests)이라고 부르며, 그에 대해 서버에서 응답으로 전송되는 메시지를 응답(responses)이라고 부릅니다.</p>
          <img class="w-100" src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http-layers.png" alt="http layer image">
        </div>
        <div class="desc mt--45 mb--50">
          <p>HTTP 메시지</p>
            <p class="inner-blog-text-10">request 는 다음과 같은 요소로 구성됩니다.</p>
            <p class="inner-blog-text-30">startline(Method, Path, Version of the protocol), HTTP Headers, Body(Post only)</p>
            <p class="inner-blog-text-30">Method(HTTP Method) : 보통 클라이언트가 수행하고자 하는 동작을 정의한 GET, POST 같은 동사나 OPTIONS나 HEAD 등이 있습니다. </p>
            <p class="inner-blog-text-30">Path : 가져오려는 리소스의 경로, 요소(프로토콜 (http://), 도메인 (en-US) (여기서는 developer.mozilla.org), 또는 TCP 포트 (en-US))들을 제거한 리소스의 URL입니다. 아래 예시에서는 '/'가 Path입니다. </p>
            <p class="inner-blog-text-30">Version of Protocol : HTTP 프로토콜의 버전. </p>
            <p class="inner-blog-text-30">HTTP Headers : 서버에 대한 추가 정보를 전달하는 선택적 헤더</p>
            <p class="inner-blog-text-30">Body : POST와 같은 몇 가지 메서드를 위한, 전송된 리소스를 포함하는 응답의 본문과 유사한 본문 </p>
            <img class="w-100" src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http_request.png" alt="http_request arch">
            <p class="inner-blog-text-10">response  는 다음과 같은 요소로 구성됩니다.</p>
            <p class="inner-blog-text-30">startline(Version of Protocol, Status code, Status message) HTTP Headers, Body </p>
            <p class="inner-blog-text-30">Version of Protocol : 보통 클라이언트가 수행하고자 하는 동작을 정의한 GET, POST 같은 동사나 OPTIONS나 HEAD 등이 있습니다. </p>
            <p class="inner-blog-text-30">Status code : 요청의 성공 여부와, 그 이유를 나타내는 <a href="https://developer.mozilla.org/ko/docs/Web/HTTP/Status">상태 코드</a>.</p>
            <p class="inner-blog-text-30">Status message : 상태 코드의 짧은 설명을 나타내는 상태 메시지. </p>
            <p class="inner-blog-text-30">HTTP Headers : request HTTP Headers와 비슷한, HTTP 헤더들</p>
            <p class="inner-blog-text-30">Body : 가져온 리소스가 포함되는 본문</p>
            <img class="w-100" src="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/http_response.png" alt="http_response arch">        
        </div>

        <div class="desc mt--45 mb--50">
          <p>HTTP 특징</p>
            <p class="inner-blog-text-10">Client-Server 구조</p>
            <p class="inner-blog-text-30">서비스 요청자인 클라이언트와 서비스 자원의 제공자인 서버 간에 작업을 분리하여 독립적으로 처리할 수 있도록 만든 구조입니다.</p>
            <p class="inner-blog-text-10">무상태성(Stateless)</p>
            <p class="inner-blog-text-30">서버가 클라이언트의 상태를 저장하지 않습니다.</p>
            <p class="inner-blog-text-30">장점 : 고객들의 정보를 불필요하게 저장하지 않으므로 확장성(scale up), 리소스 관리에 유리합니다.</p>
            <p class="inner-blog-text-30">단점 : 매번 필요에 따라 고객 정보를 추가적으로 보내야한다.</p>
            <p class="inner-blog-text-30">보완 : 쿠키, 세션 등을 통해 보완 => 특히 보안쪽은 Oauth, JWT 등을 통해 보완합니다.</p>
            <p class="inner-blog-text-10">비연결성(Connectionless)</p>
            <p class="inner-blog-text-30">클라이언트와 서버가 연결을 맺은후에 응답을 마치면 기존의 연결을 끊는 특성.</p>
            <p class="inner-blog-text-30">장점 : 완료된 고객을 내보냄으로 더 많은 연결 가능.</p>
            <p class="inner-blog-text-30">단점 : 서버에서는 클라이언트의 반복된 요청에도 매번 연결/해제의 과정을 수행해서 오버헤드가 발생할 수 있습니다.</p>
            <p class="inner-blog-text-30">보완 : 잦은 통신을 web socket을 사용하던지, 혹은 HTTP 2.0의 connection, keepAlive 등의 기능을 이용.</p>
            <p class="inner-blog-text-10">단순/확장 가능</p>
        </div>

        <div class="desc mt--45 mb--50">
          <p>HTTP Methods</p>
            <p class="inner-blog-text-10">HTTP는 request 메서드를 정의하여, 주어진 리소스에 수행하길 원하는 행동을 나타냅니다.</p>
            <p class="inner-blog-text-10">GET</p>
            <p class="inner-blog-text-30">GET 메서드는 특정 리소스의 표시를 요청합니다. GET을 사용하는 요청은 오직 데이터를 받기만 합니다.</p>
            <p class="inner-blog-text-10">HEAD</p>
            <p class="inner-blog-text-30">HEAD 메서드는 GET 메서드의 요청과 동일한 응답을 요구하지만, 응답 본문을 포함하지 않습니다.</p>
            <p class="inner-blog-text-10">POST</p>
            <p class="inner-blog-text-30">POST 메서드는 특정 리소스에 엔티티를 제출할 때 쓰입니다. 이는 종종 서버의 상태의 변화나 부작용을 일으킵니다.</p>
            <p class="inner-blog-text-10">PUT</p>
            <p class="inner-blog-text-30">PUT 메서드는 목적 리소스 모든 현재 표시를 요청 payload로 바꿉니다.</p>
            <p class="inner-blog-text-10">DELETE</p>
            <p class="inner-blog-text-30">DELETE 메서드는 특정 리소스를 삭제합니다.</p>
            <p class="inner-blog-text-10">CONNECT</p>
            <p class="inner-blog-text-30">CONNECT 메서드는 목적 리소스로 식별되는 서버로의 터널을 맺습니다.</p>
            <p class="inner-blog-text-10">OPTIONS</p>
            <p class="inner-blog-text-30">OPTIONS 메서드는 목적 리소스의 통신을 설정하는 데 쓰입니다.</p>
            <p class="inner-blog-text-10">TRACE</p>
            <p class="inner-blog-text-30">TRACE 메서드는 목적 리소스의 경로를 따라 메시지 loop-back 테스트를 합니다.</p>
            <p class="inner-blog-text-10">PATCH</p>
            <p class="inner-blog-text-30">PATCH 메서드는 리소스의 부분만을 수정하는 데 쓰입니다.</p>
            <p class="inner-blog-text-30">HTTP Methods 중 서비스 정책에 따라 금지(apache 등에서 설정)되는 경우도 존재합니다. 대표적으로 DELETE나 PUT은 보안상의 이유로 금지되는 경우가 있습니다.</p>
        </div>
    </div>
    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://developer.mozilla.org/ko/docs/Web/HTTP/Overview">https://developer.mozilla.org/ko/docs/Web/HTTP/Overview</a>
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
