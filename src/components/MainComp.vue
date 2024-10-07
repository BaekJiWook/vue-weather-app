<template>
    <div class="container">
      <SearchBar/>
      <WeatherInfo :weatherData="props.weatherData" />
      <!-- defineProps를 props 변수로 받아왔기 때문에 붙여줌 -->
    </div>
  </template>
  
  <script setup>
    import SearchBar from './SearchBar.vue';
    import WeatherInfo from './WeatherInfo.vue';
    // 날씨 데이터 상태변수
    const props = defineProps({
        weatherData : Object,
    })
    console.log(props.weatherData)
  </script>