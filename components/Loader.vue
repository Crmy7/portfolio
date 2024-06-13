<template>
    <div>
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true,
        // Other data properties
      }
    },
    mounted() {
      // Make API call
      // Set isLoading to false when API call is complete
    }
  }
  </script>
  