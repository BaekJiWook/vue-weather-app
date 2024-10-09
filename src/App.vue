<script setup>
   import Navbar from './components/Navbar.vue';
  import MainComp from './components/MainComp.vue';
  import About from './components/About.vue';
  import { ref, onMounted } from 'vue';
  
  import { useStore } from './store/store';
  import { storeToRefs } from 'pinia';
 
  const store = useStore();
  const { toggle } = storeToRefs(store);
  // storeToRefs라는 애로 감싸서 들고오는 문법임

  // onMounted(() => {
  //   // store.dispatch('getWeather');
  //   store.getWeather();
  // });
  onMounted(() => {
    // store.dispatch('getWeather');
    store.getWeather();
  })
</script>

<template>
  <Navbar/>
  <div v-if="!toggle">
    <!-- 이것도 그냥 사용할 수 있음 -->
    <MainComp/>
  </div>
  <div v-else>
    <About/>
  </div>

</template>

<style scoped lang="scss">

</style>