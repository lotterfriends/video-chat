# [Library Readme](libs/ngx-webrtc/README.md)

[npmjs.com](https://www.npmjs.com/package/ngx-webrtc)

# Publish

Increase Version in `libs/ngx-webrtc/package.json`

```bash
# build library
npx nx build ngx-webrtc --prod
# update docs
npm run gen:docs
# publish
cd dist/libs/ngx-webrtc
npm publish # normal relase
npm publish --tag next # prerelease
```

# Dev

## Start Demo application
Start server and client und two seperate terminals:

```
npx nx serve demo-video-chat-server # start server
npx nx serve demo-video-chat-client # start client
```

Open http://localhost:4400/ in Browser.

## Video emulation

https://filesamples.com/formats/mjpeg

```
google-chrome --use-fake-device-for-media-stream --use-file-for-fake-video-capture=$PWD/tmp/small.mjpeg #linux
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --use-fake-device-for-media-stream --use-file-for-fake-video-capture=Movies/small.mjpg # mac
```

## Dev/Debug Tools
### Chrome

```
chrome://webrtc-logs/
chrome://webrtc-internals/
```
https://chrome.google.com/webstore/detail/webrtc-network-limiter/npeicpdbkakmehahjeeohfdhnlpdklia


### Firefox

```
about:webrtc
```
Enforce Stun/Turn server in firefox: https://stackoverflow.com/questions/34030188/easy-way-to-test-turn-server/39490790#39490790


# License
Copyright (c) 2021 André Tarnowsky
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.