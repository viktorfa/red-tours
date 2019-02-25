<template>
  <div class="trip">
    <div class="trip-intro">
      <div>
        <h1 style>{{trip.title}}</h1>
        <p>{{trip.subheader}}</p>
      </div>
      <div>
        <g-image :src="`/images/${trip.imageUrl}`" class="trip-intro-image"/>
      </div>
    </div>
    <div class="container">
      <div class="trip-content">
        <div v-html="excerpt" class="trip-excerpt"></div>
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
      </div>
    </div>
    <h1 class="trip-undertext">{{trip.chineseName}}</h1>
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
  },
  computed: {
    excerpt() {
      return this.trip.content.substring(0, this.trip.content.indexOf("</p>"));
    }
  }
};
</script>

<style>
.trip-undertext {
  font-size: 4rem;
  color: var(--revolutionary-red);
  text-align: center;
}
.trip {
  min-height: 100vh;
}
.trip-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: right;
}
.trip-content {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.trip-intro h1 {
  font-size: 4rem;
  font-family: "Oswald";
}

.trip-intro div {
  margin: 12px;
}
.trip-intro p {
  font-size: 1.4rem;
}

.trip-intro-image {
  max-height: 75vh;
  max-width: 100%;
}

.trip-info {
  font-size: 1.6rem;
  color: var(--peasants-grey);
  text-align: right;
}
.trip-info p,
.trip-excerpt p {
  margin-top: 0;
}
.trip-excerpt {
  font-size: 1.2rem;
}

@media screen and (max-width: 768px) {
  .trip-intro {
    display: block;
    text-align: center;
  }
  .trip-content {
    display: block;
    margin: 1rem;
  }
  .trip-info {
    text-align: center;
  }
  .trip-info p {
    display: inline-block;
    margin: 0 1rem;
  }
  .trip-excerpt {
    font-size: 1rem;
  }
  h1,
  p {
    margin: 0;
  }
}
</style>
