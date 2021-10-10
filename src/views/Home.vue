<template>
  <div class="home">
    <mt-header title="想当狗，找老付">
      <div slot="left">
        <router-link to="#" class="link" ><mt-button icon="back">返回 </mt-button></router-link>
      </div>
      <div slot="right">
        <mt-button icon="more"></mt-button>
      </div>
    </mt-header>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
};
</script>
<style scoped>
.link{
  color: #fff;
  }
</style>
