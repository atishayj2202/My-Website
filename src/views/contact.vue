<template>
  <div class="hello">
    <h1>Contact Me</h1>
    <iframe height="0" width="0" id="databasex" style="display: none"></iframe>
    <div class="grid-container">
      <div>
        <h2>Contact Info</h2>
        Email 1: <a href="mailto:admin@atishay.codes">admin@atishay.codes</a><br>
        Email 2: <a href="mailto:atishayj.dev@gmail.com">atishayj.dev@gmail.com</a><br>
        Email 3: <a href="mailto:atishayj2202@gmail.com">atishayj2202@gmail.com</a>
      </div>
      <div>
        <h2>Write To Me</h2>
        <p id="errm"></p>
        <form id="abcdf">
          <input type="text" id="name" placeholder="Name"><br>
          <input type="tel" id="number" placeholder="Mobile Number"><br>
          <input type="email" id="emailid" placeholder="Email Id" required><br>
        </form>
        <textarea rows="4" cols="50" id="comment" form="abcdf" placeholder="Enter Your Message"></textarea><br>
        <button @click="submitted()">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'contact',
  methods: {
    submitted: function () {
      const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
      const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (!(document.getElementById('number').value.match(phoneno))) {
        document.getElementById('errm').innerText = 'Please Enter A Valid Number'
        document.getElementById('errm').style.color = 'red'
      } else if (document.getElementById('name').value.length < 2) {
        document.getElementById('errm').innerText = 'Please Enter Your Name'
        document.getElementById('errm').style.color = 'red'
      } else if (!(document.getElementById('emailid').value.match(email))) {
        document.getElementById('errm').innerText = 'Please Enter Valid Email Id'
        document.getElementById('errm').style.color = 'red'
      } else if (document.getElementById('comment').value.length < 1) {
        document.getElementById('errm').innerText = 'Please Enter Your Message'
        document.getElementById('errm').style.color = 'red'
      } else {
        const u = 'https://unified-radar-256702.firebaseapp.com/?name=' + document.getElementById('name').value + '&num=' + document.getElementById('number').value + '&mail=' + document.getElementById('emailid').value
        document.getElementById('databasex').src = u
        document.getElementById('errm').innerText = 'Thanks for Messaging'
        document.getElementById('errm').style.color = 'white'
        document.getElementById('comment').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
        document.getElementById('emailid').value = ''
      }
    }
  }
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
