<template>
  <span class="star-rating">
    <span v-if="stars===0">&#x2729;&#x2729;&#x2729;</span>
    <span v-if="stars===1">&#x2605;&#x2729;&#x2729;</span>
    <span v-if="stars===2">&#x2605;&#x2605;&#x2729;</span>
    <span v-if="stars===3">&#x2605;&#x2605;&#x2605;</span>
  </span>
</template>

<script>
export default {
  props: {
    stars: Number
  }
};
</script>

<style>
.star-rating {
  color: var(--revolutionary-red);
}
</style>
