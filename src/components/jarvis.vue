<template>
  <div class="hello">
    <div class="grid-container">
      <div class="imagebox">
        <img src="./Images/people.png" width="100%-80px" style="background-color: white; border-radius: 50px">
      </div>
      <div class="databox">
        <center><h1>Jarvis</h1></center>
        <dl>
          <dt><h2>Language Details</h2></dt>
          <dd>
            <ul>
              <li><b>Front-End: </b>Python TKinter</li>
              <li><b>Back-End: </b>Python</li>
              <li><b>APIs: </b>GTtS, SpeechRecognition, Wikipedia Search</li>
              <li><b>Database: </b>Firebase Realtime Database</li>
            </ul>
          </dd>
          <dt><h2>Year: 2020</h2></dt>
          <dt><h2>Features</h2></dt>
          <dd>
            <ul>
              <li>Capable Of Hacking Wifi</li>
              <li>Doing Basic Calculations</li>
              <li>Play Music</li>
              <li>Handle Daily Task</li>
              <li>Provide Weather Report</li>
              <li>Helps in Gathering Information</li>
              <li>& Many more beyond your thinking</li>
            </ul>
          </dd>
          <dt><h2>Links</h2></dt>
          <dd>
            <ul>
              <li><b>Github: </b><a href="https://github.com/atishayj2202/Jarvis" target="_blank" rel="noopener">Click Here</a></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jarvis'
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
.databox{
  padding: 50px;
  padding-top: 0px;
}
.imagebox{
  background-image: url("./Images/g2.png");
  padding: 20px;
  background-size: 100% 100%;
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
