<template>
  <div class="testimonial-quote">
    <p>{{testimonial.quote}}</p>
    <p>{{testimonial.sign}}</p>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: Object
  }
};
</script>

<style>
</style>
