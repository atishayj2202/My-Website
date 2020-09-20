<template>
  <div class="hell">
    <div>
      Copyright © 2020 ATISHAY JAIN
    </div>
    <div>
      Developed By ATISHAY JAIN
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar'
}
</script>

<style scoped>
.hell{
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-gap: 0;
  border: 4px solid yellowgreen;
  margin-top: fill;
  bottom:0px;
}
@media only screen and (max-width: 820px) {
  .hell {
    grid-template-columns: 100%;
  }
}
</style>
