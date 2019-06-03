<template>
  <div class="trip-info">
    <p>{{trip.price}},-</p>
    <p>{{trip.duration}} dager</p>
    <p>
      <span>ideologi</span>
      <StarRating :stars="trip.ideology"/>
    </p>
    <p>
      <span>revisjonisme</span>
      <StarRating :stars="trip.revisionism"/>
    </p>
  </div>
</template>

<script>
import StarRating from "@/components/StarRating";

export default {
  components: {
    StarRating
  },
  props: {
    trip: Object
  }
};
</script>

<style>
.trip-info p {
  display: inline-block;
  margin: 0 1rem;
}
.trip-info {
  font-size: 1.6rem;
  color: var(--peasants-grey);
}
@media screen and (min-width: 768px) {
}
</style>
