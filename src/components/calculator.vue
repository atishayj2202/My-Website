<template>
  <div class="hello">
    <div class="grid-container">
      <div class="imagebox">
        <img src="./Images/calculator.png" width="100%-80px" style="background-color: lightskyblue; border-radius: 50px">
      </div>
      <div class="databox">
        <center><h1>Scientific Calculator</h1></center>
        <dl>
          <dt><h2>Language Details</h2></dt>
          <dd>
            <ul>
              <li><b>Front-End: </b>Java Swing</li>
              <li><b>Back-End: </b>Java</li>
            </ul>
          </dd>
          <dt><h2>Year: 2019</h2></dt>
          <dt><h2>Features</h2></dt>
          <dd>
            <ul>
              <li>Capable of basic calculations</li>
              <li>Capable of Finding Trigonometric Ratios</li>
              <li>Memory Functions</li>
            </ul>
          </dd>
          <dt><h2>Links</h2></dt>
          <dd>
            <ul>
              <li><b>Github: </b><a href="https://github.com/atishayj2202/Calculator_Java" target="_blank" rel="noopener">Click Here</a></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calculator'
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
  background-image: url("./Images/g3.png");
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
