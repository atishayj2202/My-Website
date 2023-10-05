<template>
  <div class="hello">
    <h1 class="heading">Tech Stack</h1>
    <div class="langs">
      <h1>Programming Languages</h1>
    </div>
    <div class="grid-container">
      <div>
        <img src="./Images/abc-removebg-preview_Cropped-removebg-preview.png" height="90px">
        <div class="space"></div>
        <h2>Dart</h2>
      </div>
      <div>
        <img src="./Images/python.png" height="90px">
        <div class="space"></div>
        <h2>Python</h2>
      </div>
      <div>
        <img src="./Images/c.png" height="90px">
        <div class="space"></div>
        <h2>C++</h2>
      </div>
      <div>
        <img src="./Images/java.png" height="90px" style="filter: brightness(150%);">
        <div class="space"></div>
        <h2>Java</h2>
      </div>
      <div>
        <img src="./Images/html.png" height="90px">
        <div class="space"></div>
        <h2>HTML</h2>
      </div>
      <div>
        <img src="./Images/css.png" height="90px">
        <div class="space"></div>
        <h2>CSS</h2>
      </div>
      <div>
        <img src="./Images/javascript.png" height="90px">
        <div class="space"></div>
        <h2>Javascript</h2>
      </div>
    </div>
    <div class="works">
      <h1>Tools/Frameworks</h1>
    </div>
    <div class="grid-container">
      <div>
        <img src="./Images/github.png" height="90px" style="filter: invert(100%) brightness(200%);">
        <div class="space"></div>
        <h2>Github</h2>
      </div>
      <div>
        <img src="./Images/flutter.png" height="90px">
        <div class="space"></div>
        <h2>Flutter</h2>
      </div>
      <div>
        <img src="./Images/node-js.png" height="90px" style="filter: brightness(200%);">
        <div class="space"></div>
        <h2>Node JS</h2>
      </div>
      <div>
        <img src="./Images/vue.png" height="90px" style="filter: brightness(150%);">
        <div class="space"></div>
        <h2>Vue JS</h2>
      </div>
      <div>
        <img src="./Images/firebase.png" height="90px">
        <div class="space"></div>
        <h2>Firebase</h2>
      </div>
      <div>
        <img src="./Images/azure.png" height="90px">
        <div class="space"></div>
        <h2>Microsoft Azure</h2>
      </div>
      <div>
        <img src="./Images/aws.png" height="90px" style="filter: brightness(200%);">
        <div class="space"></div>
        <h2>AWS</h2>
      </div>
      <div>
        <img src="./Images/google-cloud-platform.png" height="90px">
        <div class="space"></div>
        <h2>Google Cloud Platform</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Languages'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading{
  font-size: 55px;
  font-weight: bolder;
}
.langs{
  background-image: url("./Images/g7.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #27282c;
}
.works{
  background-image: url("./Images/g8.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: #27282c;
}
.grid-container {
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
}

.grid-container > div {
  width: 100%;
  color: white;
  text-align: left;
  font-weight: bold;
  align-items: center;
  display: flex;
}
@media only screen and (max-width: 820px) {
  .grid-container {
    grid-template-columns: 100%;
  }
}
.space{
  width: 15px;
  height: 10px;
}
</style>
