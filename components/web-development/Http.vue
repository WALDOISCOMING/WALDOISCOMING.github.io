<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">“HTTP에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>HTTP는 HTML 문서와 같은 리소스들을 가져올 수 있도록 해주는 프로토콜입니다. HTTP는 웹에서 이루어지는 모든 데이터 교환의 기초이며, 클라이언트-서버 프로토콜이기도 합니다. 클라이언트-서버 프로토콜이란 (보통 웹브라우저인) 수신자 측에 의해 요청이 초기화되는 프로토콜을 의미합니다. 하나의 완전한 문서는 텍스트, 레이아웃 설명, 이미지, 비디오, 스크립트 등 불러온(fetched) 하위 문서들로 재구성됩니다.</p>
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

        <div class="desc mt--45 mb--50">
          <p>HTTP 1.1과 2.0</p>
            <img class="w-100" src="/img/web-development/http-diff.png" alt="http_diff">
            <p class="inner-blog-text-10">HTTP는 request 메서드를 정의하여, 주어진 리소스에 수행하길 원하는 행동을 나타냅니다.</p>
            <table class="table">
              <thead>
                <tr>
                  <th class="pricing-header">
                    <span class="heading-h4">HTTP 1.1</span>
                  </th>
                  <th class="pricing-header">
                    <span class="heading-h4">HTTP 2.0</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>Persistent Connection(Connection 지속 시간 설정)</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>Connection	HTTP 메시지 전송 방식의 변화</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>Pipelining</span></li>
                      <li><span>클라이언트에서는 요청을 응답에 상관없이 보내고 Server에서는 응답을 요청이 들어온 순서대로 보내줍니다.</span></li>
                      <li><span>클라이언트에서는 응답의 순서가 잘못되거 중간에 빠졌다면 누락이 발생한 요청을 다시 보내게 됩니다.</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>요청과 응답의 다중화(멀티플렉스 스트림)</span></li>
                      <li><span>multiplex streaming(하나의 tcp연결안에 여러 스트림이 존재 가능(스트림은 양방향 데이터 흐름))</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>HTTP의 HOL(Head of Line Blocking)</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>리소스간 우선순위 설정</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                      <li><span>Header 중복	Server Push</span></li>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>Server Push</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>Header 압축</span></li>
                      <li><span>중복헤더의 제거(헤더를 압축하고 중복된거는 이전 스트림에서 가져와 사용)</span></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td class="price-list">
                    <ul>
                    </ul>
                  </td>
                  <td class="price-list">
                    <ul>
                      <li><span>TCP의 HOL(Head of Line Blocking)</span></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://developer.mozilla.org/ko/docs/Web/HTTP/Overview">https://developer.mozilla.org/ko/docs/Web/HTTP/Overview</a>
      <a href="https://dkrnfls.tistory.com/289#HTTP%-F---%EA%B-%BC%--HTTP%-F---%EC%-D%--%--%EC%B-%A-%EC%-D%B-%EB%-A%--%-F">https://dkrnfls.tistory.com/289#HTTP%-F---%EA%B-%BC%--HTTP%-F---%EC%-D%--%--%EC%B-%A-%EC%-D%B-%EB%-A%--%-F</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Http',
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
