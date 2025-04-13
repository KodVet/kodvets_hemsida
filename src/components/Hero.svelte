<script>
    function changeBackground(event) {
        event.currentTarget.classList.toggle('clicked');
    }
</script>
<section class="hero_background" id="hem"> 
    <div class="hero_logga" onclick={(event) => changeBackground(event)}>
    </div>    
  <div class="text-box"> 
    <h1> VI TAR FRAM</h1>
    <h3> Digitala lösningar som förbättrar och förenklar sektionsarbetet</h3>
  </div>
</section>

<style>
    .hero_background {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.hero_background {
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 40%, var(--bg-color)), url(/images/hero_bakgrund.png);
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-position: center center;
}
section {
    padding: 0px 14%;
}
* {
    box-sizing: border-box;
    font-family: "Source Code Pro", monospace;
    padding: 0px;
    margin: 0px;
    list-style: none;
    text-decoration: none;
}
section {
    display: block;
    unicode-bidi: isolate;
}
@media (max-width: 1000px) {
    .hero_logga {
        width: 250px;
        height: 250px;
    }
}
.hero_logga {
    width: min(250px, 25vw);
    height: min(250px, 25vw);
    box-shadow: 0 0 25px var(--text-color);
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    background: url(/images/kodvet_logo_rund_indigo_bla.png) center center / cover no-repeat;
    overflow: hidden;
    transition: 5s;
}
div {
    display: block;
    unicode-bidi: isolate;
}
.text-box {
    text-align: center;
}
div {
    display: block;
    unicode-bidi: isolate;
}
:-webkit-any(article, aside, nav, section) h1 {
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
}
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}
@media (max-width: 1000px) {
    .text-box h3 {
        max-width: 90%;
        text-align: center;
        overflow-wrap: break-word;
        margin: 20px auto;
        white-space: normal;
    }
}
.text-box h3 {
    font-size: 15px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    margin: 5px 0px;
    transition: 0.8s;
    white-space: nowrap;
}
h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}
:global(.hero_logga.clicked) {
    background: center/cover no-repeat url('/images/kogvet.jpeg');
  }
  
</style>