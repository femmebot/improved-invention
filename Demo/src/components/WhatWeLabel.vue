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

  <section class="what-we-label">

    <div>
      <h2>
        What we label
      </h2>
    </div>

    <div>

      <h3>Supported tasks</h3>
      <ul>
        <li>
          Classification
        </li>
        <li>
          Polygon segmentation
        </li>
        <li>
          Box segmentation
        </li>
        <li>
          Line segmentation
        </li>
        <li>
          Circle segmentation
        </li>
      </ul>

      <h3>Supported data types</h3>
      <ul>
        <li>
          DICOM
        </li>
        <li>
          Audio
        </li>
        <li>
          Images
        </li>
        <li>
          Videos
        </li>
        <li>
          Text
        </li>
        <li>
          NIfTI
        </li>
        <li>
          CT scan
        </li>
        <li>
          MRI
        </li>
        <li>
          X-ray
        </li>
        <li>
          Ultrasound
        </li>
        <li>
          Whole slide images
        </li>
      </ul>

    </div>


  </section>

</template>
