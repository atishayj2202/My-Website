<template>
  <div id="appbar1">
    <div>
      <img src="./assets/logo.png" height="80px">
    </div>
    <div class="smaller">
      <div class="xyz">
        <a @click="openNav()" style="cursor: grab">☰</a>
      </div>
      <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav('')">X</a>
        <div class="overlay-content">
          <a @click="closeNav('/')">Home</a>
          <a @click="closeNav('/langs')">Tech Stack</a>
          <a @click="openPro()">Projects</a>
          <div class="pro" id="abx">
            <a @click="closeNav('/projects/poker')">Poker</a>
            <a @click="closeNav('/projects/jarvis')">Jarvis</a>
            <a @click="closeNav('/projects/calculator')">Scientific Calculator</a>
            <a @click="closeNav('/projects/library')">Automated Library</a>
            <a @click="closeNav('/projects/flutter-builder')">Flutter Builder</a>
            <a @click="closeNav('/projects/pwebsite')">My Website</a>
          </div>
          <a @click="closeNav('contact')">Contact Me</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExtraBar',
  methods: {
    openNav: function () {
      document.getElementById('myNav').style.width = '100%'
    },
    closeNav: function (text) {
      document.getElementById('myNav').style.width = '0'
      this.$router.push(text)
    },
    openPro: function () {
      const x = document.getElementById('abx')
      if (window.getComputedStyle(x).visibility === 'hidden') {
        x.style.visibility = 'visible'
        x.style.height = 'auto'
      } else {
        x.style.visibility = 'hidden'
        x.style.height = '0'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#appbar1{
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90px;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 15%;
  font-weight: bolder;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
.xyz{
  background-color: black;
  color: white;
  height: 80px;
  width: 80px;
  font-size: 30px;display: flex;
  justify-content: center;
  align-items: center;
}
.pro{
  font-weight: normal;
  visibility: hidden;
  height: 0;
}
</style>
