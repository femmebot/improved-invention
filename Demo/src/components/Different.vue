<script setup>
// import { ref } from 'vue'
import Blob1 from '../assets/blob-1.svg'
import Blob2 from '../assets/blob-2.svg'
import Blob3 from '../assets/blob-3.svg'

defineProps({
  // msg: String
})

// const count = ref(0)



</script>

<template>

  <section class="different">

    <h2>
      We’re different
    </h2>

    <div class="card-wrapper">
      <div class="card">


        <img :src="Blob1" alt="blob" />

        <h3>
          Collective intelligence outperforms the competition in accuracy
        </h3>

        <p>
          By aggregating many opinions, we achieve a level of accuracy proven to outperform any individual board-certified doctor.
        </p>
      </div>

      <div class="card">

        <img :src="Blob2" alt="blob" />

        <h3>
          Performance-based compensation aligns incentives
        </h3>


        <p>
          We only reward the top performers, so our medical experts give 100% effort on every case they see, ensuring quality at every step, and allowing us to pass cost savings onto you.
        </p>
      </div>

      <div class="card">

        <img :src="Blob3" alt="blob" />

        <h3>
          Speed and scale that’s incomparable
        </h3>


        <p>
          Our on-demand network of medical experts produces tens of thousands of medical annotations per day.
        </p>
      </div>
    </div>

  </section>

</template>
