<template>
  <div class="bg-white text-black">
    <section class="hero">
      <div class="logo">
        <img src="/images/slides/logo_128.png" width="120" height="120">
        <h1 class="title">
          Remote for Slides
        </h1>
        <h2>
          Remote for Slides allows you to control Google Slides on any device, remotely, without the need for any
          extra hardware.
        </h2>
      </div>
      <div>
        <div class="buttonContainer">
          <a class="button" href="https://chrome.google.com/webstore/detail/remote-for-slides/pojijacppbhikhkmegdoechbfiiibppi" target="_blank" rel="noopener noreferrer">
            Download Chrome Extension
          </a>
          <a class="button" href="https://slides.limhenry.xyz" target="_blank" rel="noopener noreferrer">
            Open Progressive Web App
          </a>
          <a class="button" href="https://play.google.com/store/apps/details?id=xyz.limhenry.slides.lite" target="_blank" rel="noopener noreferrer">
            Download Android App
          </a>
          <a class="button" href="https://medium.com/@limhenry/meet-remote-for-google-slides-a-new-way-to-control-your-presentation-slides-c54a6b688674" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </div>
      </div>
      <a class="downIcon" href="#gettingstarted">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <title>Getting Started</title>
          <path d="M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z" />
        </svg>
      </a>
    </section>
    <section class="guide">
      <div id="gettingstarted" class="stepContainer">
        <div class="videoContainer">
          <div class="iframeContainer">
            <iframe
              title="Getting Started with Remote for Slides"
              src="https://www.youtube.com/embed/LLCXFAd94pk?rel=0&amp;showinfo=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="guide">
      <div id="step1" class="stepContainer">
        <div class="textContainer">
          <div class="step">
            Step 1
          </div>
          <div class="text">
            Download Remote for Slides Chrome Extension from Chrome Web Store
          </div>
          <a class="button" href="https://chrome.google.com/webstore/detail/remote-for-slides/pojijacppbhikhkmegdoechbfiiibppi?hl=en" target="_blank" rel="noopener noreferrer">Add to Chrome</a>
        </div>
        <div class="image" />
      </div>
    </section>
    <section class="guide">
      <div id="step2" class="stepContainer">
        <div class="textContainer">
          <div class="step">
            Step 2
          </div>
          <div class="text">
            Open your Presentation Slides in Edit Mode, then click on the <b>Present w/
              Remote</b> button
          </div>
          <a class="button" href="https://docs.google.com/presentation/" target="_blank" rel="noopener noreferrer">
            Open Google Slides
          </a>
        </div>
        <div class="image" />
      </div>
    </section>
    <section class="guide">
      <div id="step3" class="stepContainer">
        <div class="textContainer">
          <div class="step">
            Step 3
          </div>
          <div class="text">
            Click on the <b>Start Remote</b> button to show the 6-digit code
          </div>
        </div>
        <div class="image" />
      </div>
    </section>
    <section class="guide">
      <div id="step4" class="stepContainer">
        <div class="textContainer">
          <div class="step">
            Step 4
          </div>
          <div class="text">
            Open <b>s.limhenry.xyz</b> or <b>Remote for Slides Android App</b> and enter the
            6-digit code
          </div>
          <div class="guideButtonContainer">
            <a class="button" href="https://slides.limhenry.xyz" target="_blank" rel="noopener noreferrer">Open
              s.limhenry.xyz</a>
            <a class="button" href="https://play.google.com/store/apps/details?id=xyz.limhenry.slides.lite" target="_blank" rel="noopener noreferrer">Download Android App</a>
          </div>
        </div>
        <div class="image device" />
      </div>
    </section>
    <section class="guide">
      <div id="step5" class="stepContainer">
        <div class="textContainer">
          <div class="step">
            Step 5
          </div>
          <div class="text">
            Enjoy
          </div>
        </div>
        <div class="image device" />
      </div>
    </section>
    <footer>
      <div class="footerContainer">
        <div class="navItem">
          <div class="logo">
            Remote for Slides
          </div>
          <a class="link" href="https://policies.limhenry.xyz/slides" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a class="link" href="https://www.paypal.me/henrylim96/5usd" target="_blank" rel="noopener noreferrer">Donate</a>
          <a class="link" href="https://twitter.com/remoteforslides" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a class="link" href="https://medium.com/@limhenry/meet-remote-for-google-slides-a-new-way-to-control-your-presentation-slides-c54a6b688674" target="_blank" rel="noopener noreferrer">Blog</a>
        </div>
        <div class="info">
          <div class="copyright">
            © Copyright 2021 <a class="link" href="/" target="_blank" rel="noopener noreferrer">Henry Lim</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Remote for Slides',
      meta: [
        { hid: 'description', name: 'description', content: 'Remote for Slides allows you to control Google Slides on any device, remotely, without the need for any extra hardware.' },
        { hid: 'og:description', property: 'og:description', content: 'Remote for Slides allows you to control Google Slides on any device, remotely, without the need for any extra hardware.' },
        { hid: 'og:image', property: 'og:image', content: 'https://limhenry.xyz/images/slides/cover.jpeg' },
        { hid: 'og:image:width', property: 'og:image:width', content: '1500' },
        { hid: 'og:image:height', property: 'og:image:height', content: '800' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@remoteforslides' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Remote for Slides' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Remote for Slides allows you to control Google Slides on any device, remotely, without the need for any extra hardware.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://limhenry.xyz/images/slides/cover.jpeg' }
      ],
      link: [
        { hid: 'favicon', rel: 'icon', type: 'image/png', href: '/favicon-remote.png' }
      ]
    }
  }
}
</script>

<style scoped>
  section {
    display: flex;
    height: 100vh;
    min-height: 720px;
    max-height: 800px;
    flex-direction: column;
    align-items: center;
    justify-content: center
}

.hero {
    min-height: 100vh;
    height: auto
}

.hero .logo {
    margin-top: 48px;
    width: 100%;
    text-align: center
}

.hero .logo img {
    width: 100%;
    max-width: 120px;
    margin: auto;
}

.hero .logo h1 {
    margin: 28px auto;
    letter-spacing: -.5px;
    font-size: 36px;
    font-weight: 500
}

.hero .logo h2 {
    font-size: 22px;
    line-height: 32px;
    color: #404040;
    max-width: 480px;
    font-weight: 400;
    margin: 16px auto 36px
}

.hero .buttonContainer {
    display: flex;
    flex-direction: column;
    margin: 8px 0
}

.button {
    background-color: #f7b944;
    color: #1f1f1f;
    text-decoration: none;
    padding: 12px 28px;
    font-size: 16px;
    margin: 4px 8px;
    font-weight: 500;
    text-align: center;
    border-radius: 6px;
    transition: background-color 150ms ease
}

.button:hover {
    background-color: #f3b032
}

.hero .button {
    padding: 12px 48px
}

.button[disabled], .guide .stepContainer .button[disabled], .guide .stepContainer .button[disabled]:hover {
    background-color: #9e9e9e
}

.hero .downIcon {
    margin: 36px 0;
    border: 2px solid #565656;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center
}

.hero .downIcon svg {
    fill: #565656
}

.guide .stepContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: hidden
}

.guide .guideButtonContainer {
    display: flex;
    margin: 36px 0 48px
}

.guide .stepContainer .guideButtonContainer .button {
    margin: 0 4px
}

.guide:nth-child(even) {
    background-color: #f7b944
}

.guide .stepContainer .textContainer {
    max-width: 600px;
    margin-top: 56px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center
}

.guide .stepContainer .step {
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 500;
    text-transform: uppercase
}

.guide .stepContainer .text {
    font-size: 26px;
    line-height: 34px
}

.guide .stepContainer .button {
    margin: 36px 0 48px;
    background-color: #1a73e8;
    color: #fff
}

.guide .stepContainer .button:hover {
    background-color: #0a63d8
}

.guide .stepContainer .image {
    max-width: 1200px;
    max-height: 520px;
    width: 80%;
    height: 100%;
    background-position: top;
    background-size: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08)
}

.guide .stepContainer .image.device {
    max-width: 400px;
    max-height: 580px;
    box-shadow: none;
    border-radius: 0
}

.guide .stepContainer#gettingstarted {
    justify-content: center
}

.guide .stepContainer#gettingstarted .iframeContainer {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%
}

.guide .stepContainer#gettingstarted .iframeContainer iframe {
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1c4cb8;
}

.guide .stepContainer#gettingstarted {
    align-items: center;
    padding: 96px 0
}

.guide .stepContainer#gettingstarted .videoContainer {
    display: block;
    width: 90%;
    max-width: 960px
}

.guide .stepContainer#step1 .image {
    background-image: url(/images/slides/s1.png)
}

.guide .stepContainer#step2 .image {
    background-image: url(/images/slides/s2.png)
}

.guide .stepContainer#step3 .image {
    margin-top: 64px;
    background-image: url(/images/slides/s3.png);
    background-position: bottom;
    animation: step3image 3.5s infinite
}

.guide .stepContainer#step3 .text {
    max-width: 480px
}

.guide .stepContainer#step4 .image {
    background-image: url(/images/slides/s5.png)
}

.guide .stepContainer#step5 .image {
    margin-top: 64px;
    background-image: url(/images/slides/s6.png);
    animation: step5image 3.5s infinite
}

footer {
    background-color: #f8f9fa;
    padding: 48px 16px;
    color: #5f6368
}

.footerContainer {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px
}

.footerContainer .navItem {
    display: flex;
    align-items: center
}

.footerContainer .navItem a {
    text-decoration: none;
    color: #5f6368;
    margin-right: 16px;
    font-weight: 400
}

.footerContainer .navItem .logo {
    margin-right: 48px;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -.5px;
    color: #3a3a3a
}

.footerContainer .info {
    font-size: 13px;
    text-align: right;
    line-height: 16px
}

.footerContainer .info a {
    color: #5f6368;
    text-decoration: none
}

.footerContainer .info a:hover {
    text-decoration: underline
}

@-webkit-keyframes step3image {
    0% {
        background-image: url(/images/slides/s3.png)
    }
    40% {
        background-image: url(/images/slides/s3.png)
    }
    50% {
        background-image: url(/images/slides/s4.png)
    }
    90% {
        background-image: url(/images/slides/s4.png)
    }
    100% {
        background-image: url(/images/slides/s3.png)
    }
}

@keyframes step3image {
    0% {
        background-image: url(/images/slides/s3.png)
    }
    40% {
        background-image: url(/images/slides/s3.png)
    }
    50% {
        background-image: url(/images/slides/s4.png)
    }
    90% {
        background-image: url(/images/slides/s4.png)
    }
    100% {
        background-image: url(/images/slides/s3.png)
    }
}

@-webkit-keyframes step5image {
    0% {
        background-image: url(/images/slides/s6.png)
    }
    40% {
        background-image: url(/images/slides/s6.png)
    }
    50% {
        background-image: url(/images/slides/s7.png)
    }
    90% {
        background-image: url(/images/slides/s7.png)
    }
    100% {
        background-image: url(/images/slides/s6.png)
    }
}

@keyframes step5image {
    0% {
        background-image: url(/images/slides/s6.png)
    }
    40% {
        background-image: url(/images/slides/s6.png)
    }
    50% {
        background-image: url(/images/slides/s7.png)
    }
    90% {
        background-image: url(/images/slides/s7.png)
    }
    100% {
        background-image: url(/images/slides/s6.png)
    }
}

@media screen and (max-width: 920px) {
    section {
        min-height: initial;
        height: auto
    }
    .guide .stepContainer .image {
        padding-top: 40%;
        max-height: 0;
    }
    .guide .stepContainer .image.device {
        padding-top: 52%
    }
}

@media screen and (max-width: 860px) {
    .hero, .stepContainer {
        padding: 0 24px
    }
    .hero .logo {
        margin-top: 48px
    }
    .hero .logo img {
        width: 96px
    }
    .hero .logo .title {
        font-size: 28px
    }
    .hero .logo p {
        font-size: 30px;
        margin: 48px auto
    }
    .hero .buttonContainer {
        flex-direction: column
    }
    .hero .downIcon {
        margin: 36px 0
    }
    .button {
        margin: 4px 0;
        padding: 12px 24px;
    }
    .guide .guideButtonContainer {
        flex-direction: column
    }
    .guide .stepContainer#gettingstarted {
        padding: 64px 0;
    }
    .guide .stepContainer .guideButtonContainer .button {
        margin: 4px 0;
        font-size: 15px
    }
    .guide .stepContainer .textContainer {
        margin-top: 36px
    }
    .guide .stepContainer .step {
        font-size: 15px;
        margin-bottom: 12px
    }
    .guide .stepContainer .text {
        font-size: 20px;
        line-height: 28px
    }
    .guide .stepContainer .image {
        max-width: 600px;
        width: 100%;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px
    }
    .guide .stepContainer .image.device {
        padding-top: 68%
    }
    .guide .stepContainer#step5 .image {
        margin-top: 48px
    }
    footer {
        padding: 36px 16px
    }
    .footerContainer, .footerContainer .navItem {
        flex-direction: column;
        align-items: flex-start
    }
    .footerContainer .navItem .logo {
        margin-bottom: 24px
    }
    .footerContainer .navItem a {
        margin-bottom: 8px
    }
    .footerContainer .info {
        margin-top: 24px;
        text-align: left
    }
}

@media screen and (max-width: 680px) {
    .guide .stepContainer .image {
        padding-top: 58%
    }
    .guide .stepContainer .image.device {
        width: 80%;
        padding-top: 92%
    }
}
</style>
