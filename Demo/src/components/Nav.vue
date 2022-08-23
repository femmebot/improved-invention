<script setup>
// import { ref } from 'vue'
import Logo from '../assets/centaur-mark.svg'

defineProps({
  // msg: String
})

// const count = ref(0)

const navMenu = [{
  navLabel: 'About',
  link: ''
}, {
  navLabel: 'Solutions',
  link: ''
}, {
  navLabel: 'Careers',
  link: ''
}, {
  navLabel: 'Contact',
  link: ''
}, {
  navLabel: 'Blog',
  link: ''
}, {
  navLabel: 'Customer login',
  link: ''
}, {
  navLabel: 'Request a demo',
  link: ''
}]

</script>

<template>
  <div class="">

    <nav id="topnav" class="block w-full">
      <img :src="Logo" alt="centaur labs" />

      <div class="nav-links">

        <button
          type="button" class="menu-button" aria-expanded="true" aria-haspopup="true"
          v-for="option, optionIndex in navMenu" :key="optionIndex">
          {{ option.navLabel }}
        </button>



      </div>
    </nav>

  </div>
</template>

<style scoped>

</style>
