<template>
  <Layout>
    <h1 class="trip-header">{{trip.title}}</h1>
    <p class="trip-subheader">{{trip.subheader}}</p>
    <g-image class="trip-image" :src="trip.image"></g-image>
    <div class="itinerary" id="itinerary">
      <p v-html="trip.content"></p>
    </div>
    <TripInfo :trip="trip"/>
  </Layout>
</template>

<script>
import TripInfo from "@/components/TripInfo";
export default {
  components: {
    TripInfo
  },
  metaInfo() {
    return {
      //title: this.$page.trip.title
    };
  },
  computed: {
    trip() {
      return this.$page.trip;
    }
  }
};
</script>

<style>
.trip-image {
  margin: auto;
  width: 100%;
}
.trip-subheader {
  font-size: 1.2rem;
}
.trip-header {
  font-family: "Oswald", serif;
}
.trip-info {
  text-align: center;
}

@media screen and (min-width: 768px) {
  .trip-header {
    font-size: 3rem;

  }
  .trip-subheader {
    font-size: 2rem;
  }
}
</style>



<page-query>
query Trip ($path: String!) {
  trip: trip (path: $path) { 
    id
    title
    subheader
    content
    image
    misc
    revisionism
    ideology
    price
    duration
    chineseName
    path
  }
}
</page-query>