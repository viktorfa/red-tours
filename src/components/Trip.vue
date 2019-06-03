<template>
  <div class="trip">
    <h1 class="trip-banner">{{trip.chineseName}}</h1>

    <div class="trip-intro">
      <div class="trip-intro-text-column">
        <h1 class="trip-header">{{trip.title}}</h1>
        <p class="trip-subheader">{{trip.subheader}}</p>
      </div>
      <div class="trip-intro-image-column">
        <g-image :src="trip.image" class="trip-intro-image"/>
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

<static-query>
query MetaData {metaData {pathPrefix}}
</static-query>

<style>
.trip-banner {
  font-size: 4rem;
  color: var(--revolutionary-red);
  text-align: center;
  background-color: var(--soldiers-brown);
  line-height: 1.2;
  margin-bottom: 0;
}
.trip {
  min-height: 100vh;
}
.trip-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.trip-intro-text-column {
  text-align: right;
}
.trip-intro-image-column {
  text-align: left;
}
.trip-content {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.trip-intro > h1 {
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
  width: auto;
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
  .trip-intro-text-column {
    text-align: center;
  }
  .trip-intro > h1 {
    font-size: 1.4rem;
  }
  .trip-content {
    display: block;
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
