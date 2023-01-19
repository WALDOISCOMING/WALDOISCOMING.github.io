<template>
  <div class="content basic-dark2-line-1px pb--50 mb--35">
    <div class="inner">
      <h5 class="heading heading-h5 line-height-1-95 wow move-up">“HTTP Cors에 대하여 알아보도록 합시다.”</h5>
        <div class="desc mt--45 mb--50">
          <p>Cross Origin Resource Sharing로, 서로 다른 origin(출처) 간 HTTP reqeust가 가능하도록 해주는 표준입니다.</p>
          <p>HTTP request는 기본적으로 Cross-Site HTTP Requests가 가능. 이는 img, script 등에서 타 도메인 리소스(이미지, 스크립트 등)를 참조 할 수 있습니다.</p>
          <img class="w-100" src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cors_principle.png" alt="cors_principle image">
          <p>아래는 naver 사이트의 html의 img에서 www.naver.com이 아닌 타 url을 접근 하여 이미지를 가져오고 있습니다.</p>
          <img class="w-100" src="/img/web-development/naver-cors.png" alt="naver cors-example image">
          <p>그러나, 보안상의 이유로 브라우저에서는 script 로 둘러쌓인 내부에서 작성된 cross-origin HTTP를 제한하고 있습니다. 예를 들어 XMLHttpRequest나 Fatch API는 same-origin Policy를 따르기 때문에 올바른 CORS header를 포함하지 않는 한 다른 origin에 request를 할 수 없습니다. 때문에 서버 개발자는 CORS을 이해하고 스펙을 따라 HTTP request에 응답을 해야합니다.</p>
          <img class="w-100" src="/img/web-development/cors-example.png" alt="cors-example image">
        </div>
        <div class="desc mt--45 mb--50">
          <p>HTTP CORS 요청의 종류</p>
          <p>CORS 리소스 공유 표준은 웹 브라우저에서 해당 정보를 읽는 것이 허용된 출처를 서버에서 설명할 수 있는 새로운 HTTP 헤더를 추가함으로써 동작합니다. </p>
          <p class="inner-blog-text-10">단순_요청 simple_requests</p>
          <p class="inner-blog-text-30">simple requests는 다음 조건을 모두 충족하는 요청입니다</p>
          <p class="inner-blog-text-50">HTTP Methods : GET , HEAD, POST</p>
          <p class="inner-blog-text-50">유저 에이전트가 자동으로 설정 한 헤더 (예를들어, Connection, User-Agent (en-US), Fetch 명세에서 “forbidden header name”으로 정의한 헤더)외에, 수동으로 설정할 수 있는 헤더는 오직 Fetch 명세에서 “CORS-safelisted request-header”로 정의한 헤더 뿐입니다.</p>
          <p class="inner-blog-text-50">Accept, Accept-Language, Content-Language, Content-Type (아래의 추가 요구 사항에 유의하세요.)</p>
          <p class="inner-blog-text-50">Content-Type 헤더는 application/x-www-form-urlencoded, multipart/form-data,text/plain 만 허용됩니다.</p>
          <p class="inner-blog-text-50">예를들어, https://foo.example 의 웹 컨텐츠가 https://bar.other 도메인의 컨텐츠를 호출하길 원합니다. foo.example에 배포된 자바스크립트에는 아래와 같은 코드가 사용될 수 있습니다.</p>
          <pre class="inner-blog-text-50">
            const xhr = new XMLHttpRequest();
            const url = 'https://bar.other/resources/public-data/';
            xhr.open('GET', url);
            xhr.onreadystatechange = someHandler;
            xhr.send();
          </pre>
          <p class="inner-blog-text-50">클라이언트와 서버간에 간단한 통신을 하고, CORS 헤더를 사용하여 권한을 처리합니다.</p>
          <p class="inner-blog-text-50">이 경우 브라우저가 서버로 전송하는 내용을 살펴보고, 서버의 응답을 확인합니다.</p>
          <pre class="inner-blog-text-50">
            GET /resources/public-data/ HTTP/1.1
            Host: bar.other
            User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
            Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
            Accept-Language: en-us,en;q=0.5
            Accept-Encoding: gzip,deflate
            Connection: keep-alive
            Origin: https://foo.example
          </pre>
          <p class="inner-blog-text-50">요청 헤더의 Origin을 보면, https://foo.example로부터 요청이 왔다는 것을 알 수 있습니다.</p>
          <pre class="inner-blog-text-50">
            HTTP/1.1 200 OK
            Date: Mon, 01 Dec 2008 00:23:53 GMT
            Server: Apache/2
            Access-Control-Allow-Origin: *
            Keep-Alive: timeout=2, max=100
            Connection: Keep-Alive
            Transfer-Encoding: chunked
            Content-Type: application/xml

            […XML Data…]
          </pre>
          <p class="inner-blog-text-50">서버는 이에 대한 응답으로 Access-Control-Allow-Origin 헤더를 다시 전송합니다. 가장 간단한 접근 제어 프로토콜은 Origin 헤더와 Access-Control-Allow-Origin 을 사용하는 것입니다. 이 경우 서버는 Access-Control-Allow-Origin: *, 으로 응답해야 하며, 이는 모든 도메인에서 접근할 수 있음을 의미합니다. https://bar.other 의 리소스 소유자가 오직 https://foo.example 의 요청만 리소스에 대한 접근을 허용하려는 경우 다음을 전송합니다.</p>
          <pre class="inner-blog-text-50">
            Access-Control-Allow-Origin: https://foo.example
          </pre>
          <p class="inner-blog-text-50">이제 https://foo.example 이외의 도메인은 cross-site 방식으로 리소스에 접근할 수 없습니다. 리소스에 대한 접근을 허용하려면, Access-Control-Allow-Origin 헤더에는 요청의 Origin 헤더에서 전송된 값이 포함되어야 합니다.</pre>
          <p class="inner-blog-text-30">프리플라이트 요청 preflighted_requests</p>
          <p class="inner-blog-text-50">"preflighted" request는 위에서 논의한 “simple requests” 와는 달리, 먼저 OPTIONS 메서드를 통해 다른 도메인의 리소스로 HTTP 요청을 보내 실제 요청이 전송하기에 안전한지 확인합니다. cross-origin 요청은 유저 데이터에 영향을 줄 수 있기 때문에 이와같이 미리 전송(preflighted)합니다. 다음은 preflighted 할 요청의 예제입니다.</p>
          <pre class="inner-blog-text-50">
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://bar.other/resources/post-here/');
            xhr.setRequestHeader('Ping-Other', 'pingpong');
            xhr.setRequestHeader('Content-Type', 'application/xml');
            xhr.onreadystatechange = handler;
            xhr.send('<div>Arun</div>');
          </pre>
          <p class="inner-blog-text-50">위의 예제는 POST 요청과 함께 함께 보낼 XML body를 만듭니다. 또한 비표준 HTTP Ping-Other 요청 헤더가 설정됩니다. 이러한 헤더는 HTTP/1.1의 일부가 아니지만 일반적으로 웹 응용 프로그램에 유용합니다. Content-Type 이 application/xml이고, 사용자 정의 헤더가 설정되었기 때문에 이 요청은 preflighted 처리됩니다.</p>
          <img class="w-100" src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/preflight_correct.png" alt="preflight_correct image">
          <p class="inner-blog-text-50">클라이언트와 서버간의 완전한 통신을 살펴보겠습니다. 첫 번째 통신은 preflight request/response입니다.</p>
          <pre class="inner-blog-text-50">
            OPTIONS /resources/post-here/ HTTP/1.1
            Host: bar.other
            User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
            Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
            Accept-Language: en-us,en;q=0.5
            Accept-Encoding: gzip,deflate
            Connection: keep-alive
            Origin: http://foo.example
            Access-Control-Request-Method: POST
            Access-Control-Request-Headers: X-PINGOTHER, Content-Type

            HTTP/1.1 204 No Content
            Date: Mon, 01 Dec 2008 01:15:39 GMT
            Server: Apache/2
            Access-Control-Allow-Origin: https://foo.example
            Access-Control-Allow-Methods: POST, GET, OPTIONS
            Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
            Access-Control-Max-Age: 86400
            Vary: Accept-Encoding, Origin
            Keep-Alive: timeout=2, max=100
            Connection: Keep-Alive
          </pre>
          <p class="inner-blog-text-50">preflight request가 완료되면 실제 요청을 전송합니다.</p>
          <pre class="inner-blog-text-50">
            POST /resources/post-here/ HTTP/1.1
            Host: bar.other
            User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
            Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
            Accept-Language: en-us,en;q=0.5
            Accept-Encoding: gzip,deflate
            Connection: keep-alive
            X-PINGOTHER: pingpong
            Content-Type: text/xml; charset=UTF-8
            Referer: https://foo.example/examples/preflightInvocation.html
            Content-Length: 55
            Origin: https://foo.example
            Pragma: no-cache
            Cache-Control: no-cache

            <div>Arun</div>

            HTTP/1.1 200 OK
            Date: Mon, 01 Dec 2008 01:15:40 GMT
            Server: Apache/2
            Access-Control-Allow-Origin: https://foo.example
            Vary: Accept-Encoding, Origin
            Content-Encoding: gzip
            Content-Length: 235
            Keep-Alive: timeout=2, max=99
            Connection: Keep-Alive
            Content-Type: text/plain

            [Some GZIP'd payload]
          </pre>
          <p class="inner-blog-text-50">첫 번째 예제의 1 - 10 행은 OPTIONS 메서드를 사용한 preflight request를 나타냅니다. 브라우저는 위의 자바스크립트 코드 스니펫이 사용중인 요청 파라미터를 기반으로 전송해야 합니다. 그렇게 해야 서버가 실제 요청 파라미터로 요청을 보낼 수 있는지 여부에 응답할 수 있습니다. OPTIONS는 서버에서 추가 정보를 판별하는데 사용하는 HTTP/1.1 메서드입니다. 또한 safe 메서드이기 때문에, 리소스를 변경하는데 사용할 수 없습니다. OPTIONS 요청과 함께 두 개의 다른 요청 헤더가 전송됩니다. (10, 11행)</p>
          <pre class="inner-blog-text-50">
            Access-Control-Request-Method: POST
            Access-Control-Request-Headers: X-PINGOTHER, Content-Type
          </pre>
          <p class="inner-blog-text-50">Access-Control-Request-Method 헤더는 preflight request의 일부로, 실제 요청을 전송할 때 POST 메서드로 전송된다는 것을 알려줍니다. Access-Control-Request-Headers 헤더는 실제 요청을 전송 할 때 X-PINGOTHER 와 Content-Type 사용자 정의 헤더와 함께 전송된다는 것을 서버에 알려줍니다. 이제 서버는 이러한 상황에서 요청을 수락할지 결정할 수 있습니다.</p>
          <p class="inner-blog-text-50">위의 13 - 22 행은 서버가 요청 메서드와 (POST) 요청 헤더를 (X-PINGOTHER) 받을 수 있음을 나타내는 응답입니다. 특히 16 - 19행을 살펴보겠습니다.</p>
          <pre class="inner-blog-text-50">
            Access-Control-Allow-Origin: http://foo.example
            Access-Control-Allow-Methods: POST, GET, OPTIONS
            Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
            Access-Control-Max-Age: 86400
          </pre>
          <p class="inner-blog-text-50">서버는 Access-Control-Allow-Methods 로 응답하고 POST 와 GET 이 리소스를 쿼리하는데 유용한 메서드라고 가르쳐줍니다. 이 헤더는 Allow 응답 헤더와 유사하지만, 접근 제어 컨텍스트 내에서 엄격하게 사용됩니다.</p>
          <p class="inner-blog-text-50">또한 Access-Control-Allow-Headers 의 값을 "X-PINGOTHER, Content-Type" 으로 전송하여 실제 요청에 헤더를 사용할 수 있음을 확인합니다. Access-Control-Allow-Methods와 마찬가지로 Access-Control-Allow-Headers 는 쉼표로 구분된 허용 가능한 헤더 목록입니다.</p>
          <p class="inner-blog-text-50">마지막으로Access-Control-Max-Age (en-US)는 다른 preflight request를 보내지 않고, preflight request에 대한 응답을 캐시할 수 있는 시간(초)을 제공합니다. 위의 코드는 86400 초(24시간) 입니다. 각 브라우저의 최대 캐싱 시간 (en-US)은 Access-Control-Max-Age 가 클수록 우선순위가 높습니다.</p>
          <p class="inner-blog-text-30">Preflighted requests 와 리다이렉트</p>
          <p class="inner-blog-text-50">모든 브라우저가 preflighted request 후 리다이렉트를 지원하지는 않습니다. preflighted request 후 리다이렉트가 발생하면 일부 브라우저는 다음과 같은 오류 메시지를 띄웁니다.</p>
          <p class="inner-blog-text-50"><code>요청이 'https://example.com/foo'로 리다이렉트 되었으며, preflight가 필요한 cross-origin 요청은 허용되지 않습니다.</code></p>
          <p class="inner-blog-text-50"><code>요청에 preflight가 필요합니다. preflight는 cross-origin 리다이렉트를 허용하지 않습니다.</code></p>
          <p class="inner-blog-text-50">CORS 프로토콜은 본래 그 동작(리다이렉트)이 필요했지만, 이후 더 이상 필요하지 않도록 변경되었습니다. 그러나 모든 브라우저가 변경 사항을 구현하지는 않았기 때문에, 본래의 필요한 동작은 여전히 나타납니다.</p>
          <p class="inner-blog-text-50">요청에 preflight가 필요합니다. preflight는 cross-origin 리다이렉트를 허용하지 않습니다.</p>
          <p class="inner-blog-text-50">CORS 프로토콜은 본래 그 동작(리다이렉트)이 필요했지만, 이후 더 이상 필요하지 않도록 변경되었습니다. 그러나 모든 브라우저가 변경 사항을 구현하지는 않았기 때문에, 본래의 필요한 동작은 여전히 나타납니다.</p>
          <p class="inner-blog-text-50">브라우저가 명세를 따라잡을 때 까지 다음 중 하나 혹은 둘 다를 수행하여 이 제한을 해결할 수 있습니다.</p>
          <p class="inner-blog-text-50">1. preflight 리다이렉트를 방지하기 위해 서버측 동작을 변경</p>
          <p class="inner-blog-text-50">2. preflight를 발생시키지 않는 simple request 가 되도록 요청을 변경</p>
          <p class="inner-blog-text-50">이것이 가능하지 않은 경우 다른 방법도 있습니다.</p>
          <p class="inner-blog-text-50">1. Fetch API를 통해 Response.url (en-US) 이나 XMLHttpRequest.responseURL (en-US)를 사용하여 simple request 를 작성합니다. 이 simple request를 이용하여 실제 preflighted request가 끝나는 URL을 판별하세요.</p>
          <p class="inner-blog-text-50">2. 첫 번째 단계에서 Response.url 혹은 XMLHttpRequest.responseURL 로부터 얻은 URL을 사용하여 또 다른 요청(실제 요청)을 만듭니다.</p>
          <p class="inner-blog-text-50">그러나 요청에 Authorization 헤더가 있기 때문에 preflight를 트리거하는 요청일 경우에, 위의 단계를 사용하여 제한을 제거할 수 없습니다. 또한 요청이 있는 서버를 제어하지 않으면 문제를 해결할 수 없습니다.</p>
          <p class="inner-blog-text-30">인증정보를 포함한 요청</p>
          <p class="inner-blog-text-50">XMLHttpRequest 혹은 Fetch 를 사용할 때 CORS 에 의해 드러나는 가장 흥미로운 기능은 "credentialed" requests 입니다. credentialed requests는 HTTP cookies 와 HTTP Authentication 정보를 인식합니다. 기본적으로 cross-site XMLHttpRequest 나 Fetch 호출에서 브라우저는 자격 증명을 보내지 않습니다. XMLHttpRequest 객체나 Request 생성자가 호출될 때 특정 플래그를 설정해야 합니다.</p>
          <p class="inner-blog-text-50">이 예제에서 원래 http://foo.example 에서 불러온 컨텐츠는 쿠키를 설정하는 http://bar.other 리소스에 simple GET request를 작성합니다. foo.example의 내용은 다음과 같은 자바스크립트를 포함할 수 있습니다.</p>
          <pre class="inner-blog-text-50">
            const invocation = new XMLHttpRequest();
            const url = 'http://bar.other/resources/credentialed-content/';

            function callOtherDomain() {
              if (invocation) {
                invocation.open('GET', url, true);
                invocation.withCredentials = true;
                invocation.onreadystatechange = handler;
                invocation.send();
              }
            }
          </pre>
          <p class="inner-blog-text-50">7행은 쿠키와 함께 호출하기위한 XMLHttpRequest 의 플래그를 보여줍니다. 이 플래그는 withCredentials 라고 불리며 부울 값을 갖습니다. 기본적으로 호출은 쿠키 없이 이루어집니다. 이것은 simple GET request이기 때문에 preflighted 되지 않습니다. 그러나 브라우저는 Access-Control-Allow-Credentials: true 헤더가 없는 응답을 거부합니다. 따라서 호출된 웹 컨텐츠에 응답을 제공하지 않습니다.</pre>
          <img class="w-100" src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/cred-req-updated.png" alt="cred-req-updated image">
          <p class="inner-blog-text-50">클라이언트와 서버간의 통신 예제는 다음과 같습니다.</p>
          <pre class="inner-blog-text-50">
            GET /resources/credentialed-content/ HTTP/1.1
            Host: bar.other
            User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
            Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
            Accept-Language: en-us,en;q=0.5
            Accept-Encoding: gzip,deflate
            Connection: keep-alive
            Referer: http://foo.example/examples/credential.html
            Origin: http://foo.example
            Cookie: pageAccess=2


            HTTP/1.1 200 OK
            Date: Mon, 01 Dec 2008 01:34:52 GMT
            Server: Apache/2
            Access-Control-Allow-Origin: https://foo.example
            Access-Control-Allow-Credentials: true
            Cache-Control: no-cache
            Pragma: no-cache
            Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
            Vary: Accept-Encoding, Origin
            Content-Encoding: gzip
            Content-Length: 106
            Keep-Alive: timeout=2, max=100
            Connection: Keep-Alive
            Content-Type: text/plain
            [text/plain payload]
          </pre>
          <p class="inner-blog-text-50">10행에는 http://bar.other의 컨텐츠를 대상으로 하는 쿠키가 포함되어 있습니다. 하지만 17행의 Access-Control-Allow-Credentials: true 로 응답하지 않으면, 응답은 무시되고 웹 컨텐츠는 제공되지 않습니다.</p>
        </div>

        <div class="desc mt--45 mb--50">
          <p>HTTP CORS 회피 예시</p>
            <p class="inner-blog-text-10">WEB server</p>
            <p class="inner-blog-text-30">통신 방법(axios 기준) 사용되는 header의 type 을 지정해줍니다.</p>
            <p class="inner-blog-text-30">Allow-Origin=”*”은 보안상 위험하므로 권장하지 않습니다.</p>
            <img class="w-100" src="/img/web-development/front-cors.png" alt="front-cors image">
            <p class="inner-blog-text-10">WAS</p>
            <p class="inner-blog-text-30">Spring Boot 기준, Init 시 읽을 config에 origin에 대하여 설정합니다.</p>
            <p class="inner-blog-text-30">다만 아래와 같이 **형식은 보안상 위험하므로 권장하지 않는다.</p>
            <img class="w-100" src="/img/web-development/ap-cors.png" alt="front-cors image">
        </div>
    </div>
    <div class="mt--45 mb--50">
      <p>참고자료</p>
      <a href="https://developer.mozilla.org/ko/docs/Web/HTTP/CORS">https://developer.mozilla.org/ko/docs/Web/HTTP/CORS</a><br/>
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
