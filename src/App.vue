<script setup>
  import Navbar from './components/Navbar.vue';
  import MainComp from './components/MainComp.vue';
  import { ref, onMounted } from 'vue';

  const weatherData = ref({
    icon :'icon',
    temp :0,
    text : 'text',
    location : 'location',
    city : 'Seoul',
  });

  onMounted(() => {
    console.log('mounted')
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=b9452c5be3c8d0556e2536d72283c286`
 
    fetch(API_URL)
      .then(res => res.json()) 
      .then(data => {
        console.log(data);

        weatherData.value.icon = data.weather[0].icon;
        weatherData.value.temp = data.main.temp;
        weatherData.value.text = data.weather[0].description;
        weatherData.value.location = data.sys.country;
        weatherData.value.city = data.name;
        console.log(weatherData.value);

      })
    });
</script>

<template>
  <Navbar/>
  <MainComp :weatherData="weatherData"/>

  <p>{{ weatherData.icon }}</p>
  <p>{{  weatherData.temp }}</p>
  <p>{{  weatherData.location }}</p>
  <p>{{  weatherData.city }}</p>

</template>

<style scoped lang="scss">

</style>