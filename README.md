
# nodejs-webserver
A simple NodeJS webserver from scratch.

This wants to be a simple webserver implemented from scratch with the <em><strong>net</strong></em> package that is available in NodeJS. This project is for studying and not for real use. For production level you can just use the <em><strong>http</strong></em> package, that is the way to go.

<p>This project right now doesn't do to much. It opens a server that listen on port <em>3000</em> for request. With the callback from the <em>createServer</em> method we have access to the <em>socket</em>. </p>
Based on the socket now we can read the data that was sent by the client and send back a response. Of course we should parse the request to see if it's valid, http protocol and stuff. If the request is legit we can prepare the html response with the proper structure protocol, status code, headers, body.
<p>
Right now details that were explained above are not fully implemented in a automatically way. Also the request parsing / validation is not there, the webserver takes all the request and respond with an hardcoded response that is available in file <em>page_sample_html_response.txt</em>, normally this should be automatically generated.
</p>

<p>This is how the request looks like :</p>
<code>
Received: GET / HTTP/1.1
Host: localhost:3000
Connection: keep-alive
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML,
like Gecko) Chrome/75.0.3770.100 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/a
png,*/*;q=0.8,application/signed-exchange;v=b3
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
</code>

<p>And this is the response from the file that was mentioned above</p>
<code>
HTTP/1.0 200 OK
Date: Sat Jul 13 19:21:09 EEST 2019
Content-Type: text/html
Content-Length: 124
Connection: keep-alive

<html>
  <header>
    <title>Ola</title>
  </header>
  <body>
    <h1>Hello World from webfiles !!!</h1>
  </body>
</html>
</code>

**Example**
<p>Start the project with this commands</p>
<code> npm install </code>
<code> node net.js </code>
<p>And go to http://localhost:3000</p>
<p>Or try with <em> curl http://localhost:3000</em></p>
