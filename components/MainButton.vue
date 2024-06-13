<template>
    <button data-aos="fade-in" data-aos-offset="60" data-aos-delay="50" data-aos-duration="1000">{{props.buttonText}}</button>
</template>

<script setup>
const props = defineProps({
  buttonText: String,
})
</script>

<style lang="scss">

  button{
    padding: 7.5px 40px;
    background-color: #343434;
    color: #0af4b5;
    cursor: pointer;
    border-radius: 5px;
    transition: all .3s ease-in-out !important;
    &:hover{
      color: #343434;
      background-color: #0af4b5;
      transform: translateY(-5px) !important;
    }
  }


</style>