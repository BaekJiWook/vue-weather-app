<script setup>
  import { useStore } from '../store/store';
  // 스토어 가지고 오기
  const store = useStore();
 </script>

<template>
    <nav class="navbar">
      <button class="toggle" @click="store.toggleButton()">
        <font-awesome-icon class="icon" :icon="['fas', 'bars-staggered']"/>
      </button>
    </nav>
  </template>
  
  <style lang="scss" scoped>
    .navbar {
      background: #fff;
      width: 100%;
      padding: 20px;
      display: flex;
      justify-content: end;
  
      button {
        border: none;
        background: transparent;
        cursor: pointer;
      }
      .icon {
        color: #333;
        font-size: 24px;
      }
    }
  </style>