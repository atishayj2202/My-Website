<template>
  <div class="hello">
    <div class="grid-container">
      <div class="imagebox">
        <img src="./Images/casino.png" width="100%-80px" style="background-color: white; border-radius: 50px">
      </div>
      <div class="databox">
        <center><h1>Poker</h1></center>
        <dl>
          <dt><h2>Language Details</h2></dt>
          <dd>
            <ul>
              <li><b>Front-End: </b>Flutter</li>
              <li><b>Back-End: </b>Flutter & Node Js</li>
              <li><b>Server-Side: </b>Node JS</li>
              <li><b>Database: </b>Firebase Realtime Database</li>
              <li><b>Auth System: </b>Firebase Authentication</li>
              <li><b>Server: </b>Firebase Cloud Functions</li>
            </ul>
          </dd>
          <dt><h2>Year: 2020</h2></dt>
          <dt><h2>Features</h2></dt>
          <dd>
            <ul>
              <li>Online Multiplayer Poker</li>
              <li>Play with 3-8 Friends</li>
              <li>Play with Random People</li>
              <li>Make Friends</li>
            </ul>
          </dd>
          <dt><h2>Links</h2></dt>
          <dd>
            <ul>
              <li><b>Github(Front-End): </b><a href="https://github.com/atishayj2202/Poker" target="_blank" rel="noopener">Click Here</a></li>
              <li><b>Github(Server-Side): </b><a href="https://github.com/atishayj2202/Poker_Server-side" target="_blank" rel="noopener">Click Here</a></li>
              <li><b>Android: </b><a href="https://drive.google.com/drive/folders/10M4QkWQUCPcrQoy9hfnau5gaok6KaiaG?usp=sharing" target="_blank" rel="noopener">Click Here</a></li>
              <li><b>iOS: </b>Coming Soon</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'poker'
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
  background-image: url("./Images/g1.png");
  padding: 20px;
  background-size: 100% 100%;
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
