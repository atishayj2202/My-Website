<template>
  <div class="hello">
    <h1>Contact Me</h1>
    <div class="grid-container">
      <div>
        <h2>Contact Info</h2>
        Email 1: <a href="mailto:atishayj.dev@gmail.com">atishayj.dev@gmail.com</a><br>
        Email 2: <a href="mailto:atishayj2202@gmail.com">atishayj2202@gmail.com</a>
      </div>
      <div>
        <h2>Write To Me</h2>
        <form id="abcdf">
          <input type="text" id="name" placeholder="Name"><br>
          <input type="tel" id="number" placeholder="Mobile Number"><br>
          <input type="email" id="emailid" placeholder="Email Id"><br>
        </form>
        <textarea rows="4" cols="50" id="comment" form="abcdf" placeholder="Enter Your Message"></textarea><br>
        <button>Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped>
.grid-container {
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-gap: 0px;
  width: 100%;
}

.grid-container > div {
  text-align: center;
  font-weight: bold;
  color: white;
  height: min-content;
}
input, textarea{
  color: #41b883;
  background-color: #34495e;
  font-size: 20px;
  border: 3px solid #41b883;
  padding: 5px;
  margin: 5px;
  width: 80%;
  font-weight: bold;
}
@media only screen and (max-width: 820px) {
  .grid-container {
    grid-template-columns: 100%;
  }
}

.hello {
  margin: 0;
  padding: 0;
}
button {
  background-color: rgba(255, 255, 255, 1);
  border: 3px solid black;
  color: black;
  font-size: 15px;
  font-weight: bold;
  padding: 8px;
  width: 30vh;
}

button:hover {
  background-color: rgba(52, 73, 94, 0.8);
  border: 3px solid rgb(65, 184, 131);
  color: white;
}
h1{
  font-size: 55px;
  font-weight: bolder;
}
h2{
  font-size: 30px;
  font-weight: bold;
}
::placeholder {
  color: white;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: white;
}
a {
  color: white;
  text-decoration: none;
}
</style>
