<template>
  <div class="hello">
    <div class="grid-container">
      <div class="imagebox">
        <img src="./Images/logo.png" style="border-radius: 50px; width: 100%;">
      </div>
      <div class="databox">
        <center><h1>My Website</h1></center>
        <dl>
          <dt><h2>Language Details</h2></dt>
          <dd>
            <ul>
              <li><b>Front-End: </b>HTML, CSS</li>
              <li><b>FrameWork: </b>Vue JS & Node Js</li>
              <li><b>Hosting Service: </b>Microsoft Azure</li>
              <li><b>Database: </b>Firebase Realtime Database</li>
            </ul>
          </dd>
          <dt><h2>Year: 2020</h2></dt>
          <dt><h2>Features</h2></dt>
          <dd>
            <ul>
              <li>Have record of All Projects</li>
              <li>My Tech Stack</li>
              <li>Way to connect to me</li>
            </ul>
          </dd>
          <dt><h2>Links</h2></dt>
          <dd>
            <ul>
              <li><b>Github: </b><a href="https://github.com/atishayj2202/My-Website" target="_blank" rel="noopener">Click Here</a></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'webs'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-gap: 0px;
  width: 100%;
}

.grid-container > div {
  text-align: left;
  color: white;
  margin: 0px;
  height: min-content;
}
.imagebox{
  background-image: url("./Images/g6.png");
  padding: 20px;
  background-size: 100% 100%;
  border-radius: 70px;
}
.databox{
  padding: 50px;
  padding-top: 0px;
}
@media only screen and (max-width: 820px) {
  .grid-container {
    grid-template-columns: 100%;
  }
  .databox{
    padding: 0px;
  }
}
.hello {
  margin: 0;
  padding: 0;
  color: white;
  margin-top: 20px;
}
dd{
  margin-left: 5px;
  margin-top: 5px;
}
dt{
  margin-bottom: 0px;
  font-weight: bolder;
}
a{
  color: white;
}
h1{
  font-size: 50px;
  margin: 0px;
}
</style>
