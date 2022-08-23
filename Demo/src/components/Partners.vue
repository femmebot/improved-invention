<script setup>
// import { ref } from 'vue'
import medtronic from '../assets/logos/medtronic.png'
import msk from '../assets/logos/msk.png'
import scite from '../assets/logos/scite.png'
import volastra from '../assets/logos/volastra.png'
import stanford from '../assets/logos/stanford.png'


defineProps({
  // msg: String
})

// const count = ref(0)


</script>

<template>

  <section class="partners">

    <!-- <div class="eyebrow">
      Testimonial
    </div> -->
    <h2>We’ve worked with researchers and practitioners at the forefront of AI</h2>

    <ul>
      <li>
        <img :src="medtronic" alt="Medtronic" />
      </li>
      <li>
        <img :src="msk" alt="Memorial Sloan Kettering" />
      </li>
      <li>
        <img :src="scite" alt="Scite" />
      </li>
      <li>
        <img :src="volastra" alt="Volastra" />
      </li>
      <li>
        <img :src="stanford" alt="Stanford Medicins" />
      </li>
    </ul>



  </section>

</template>
