<template>
  <div class="hello">
    <div class="grid-container">
      <div class="item1">
        <p class="heading">Poker</p>
        <p class="cap">A Multiplayer Online Poker</p>
        <button class="buttons"><router-link to="/projects/poker">Explore</router-link></button>
      </div>
      <div class="item2">
        <p class="heading">Jarvis</p>
        <p class="cap">A Virtual Private Assistant</p>
        <button class="buttons"><router-link to="/projects/jarvis">Explore</router-link></button>
      </div>
      <div class="item3">
        <p class="heading">Scientific Calculator</p>
        <p class="cap">Scientific Calculator Built With Java</p>
        <button class="buttons"><router-link to="/projects/calculator">Explore</router-link></button>
      </div>
      <div class="item4">
        <p class="heading">Automated Library</p>
        <p class="cap">Software To Handle Library</p>
        <button class="buttons"><router-link to="/projects/library">Explore</router-link></button>
      </div>
      <div class="item5">
        <p class="heading">Flutter Builder<br>(Upcoming)</p>
        <p class="cap">Builds Flutter Code By Drag And Drop</p>
        <button class="buttons"><router-link to="/projects/flutter-builder">Explore</router-link></button>
      </div>
      <div class="item6">
        <p class="heading">My Website</p>
        <p class="cap">Record Of All Projects</p>
        <button class="buttons"><router-link to="/projects/pwebsite">Explore</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-container {
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-gap: 0;
}

.grid-container > div {
  width: 100%;
  text-align: center;
  height: 42.5vh;
  color: black;
  font-weight: bold;
  text-decoration: none;
}
a{
  text-decoration: none;
  color: black;
}

.item1 {
  background-image: url("./Images/g1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.item2 {
  background-image: url("./Images/g2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.item3 {
  background-image: url("./Images/g3.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.item4 {
  background-image: url("./Images/g4.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.item5 {
  background-image: url("./Images/g5.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.item6 {
  background-image: url("./Images/g6.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

@media only screen and (max-width: 820px) {
  .grid-container {
    grid-template-columns: 100%;
  }
  .grid-container > div{
    height: auto;
    padding-bottom: 10px;
  }
}
@media only screen and (max-height: 700px) {
  .grid-container > div{
    height: auto;
    padding-bottom: 15px;
  }
}
.hello {
  margin: 0;
  padding: 0;
}

.heading {
  font-size: 40px;
  font-weight: bolder;
}

.cap {
  font-size: 25px;
  font-weight: bold;
}

.buttons {
  background-color: rgba(255, 255, 255, 0.2);
  border: 3px solid #27282c;
  font-size: 15px;
  font-weight: bold;
  padding: 8px;
}

.buttons:hover {
  background-color: rgba(52, 73, 94, 0.8);
  border: 3px solid rgb(65, 184, 131);
}
</style>
