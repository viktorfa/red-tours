<template>
  <div>
    <div class="index-section">
      <div class="index-header">
        <h1>Røde reiser</h1>
        <h2>Din guide til revolusjonære Kina</h2>
      </div>
      <g-image
        src="../../static/images/mao-poster-mimeograf.jpg"
        id="mao-mimeograph-image"
        class="full-page-image"
      />
    </div>
    <div class="half-page-space"></div>
    <div class="index-section no-image">
      <div>
        <Trip v-for="edge in $page.trips.edges" :key="edge.node.id" :trip="edge.node"/>
      </div>
    </div>
    <div class="testimonial-list">
      <Testimonial
        v-for="(testimonial, i) in $page.testimonials.edges[0].node.data"
        :key="i"
        :testimonial="testimonial"
      />
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Trip from "@/components/Trip";
import Testimonial from "@/components/Testimonial";
export default {
  components: {
    Footer,
    Testimonial,
    Trip
  },
};
</script>

<style>
.testimonial-list {
  text-align: center;
  font-size: 1.4rem;
  color: var(--peasants-grey);
  background-color: var(--soldiers-brown);
  max-width: 512px;
  margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .testimonial-list {
    font-size: 1rem;
  }
  #mao-mimeograph-image {
    margin-left: -160px;
  }
}
.testimonial-list > div {
  padding: 16px;
}
.testimonial-list p {
  margin: 0;
}
.home-links a {
  margin-right: 1rem;
}
.index-section {
  min-height: 100vh;
  width: 100%;
}

.full-page-image {
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
}

.index-header {
  color: var(--workers-yellow);
  background-color: var(--revolutionary-red);
  font-size: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-family: "Oswald", sans-serif;
}
.index-header > * {
  margin-left: 1rem;
}

.index-down-header {
  color: var(--workers-yellow);
  background-color: var(--revolutionary-red);
  font-size: 4rem;
  padding: 2rem 0 0 2rem;
}

.no-image {
  background-color: var(--mao-white);
}

#mao-mimeograph-image {
  transform: scaleX(-1);
}

.half-page-space {
  height: 50vh;
}
</style>


<page-query>
query Trips {
  trips: allTrip {
    edges {
      node { 
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
      }
    }
  }
  testimonials: allTestimonial {
    edges {
      node {
        id 
        data {
          sign 
          quote
        }
      }
    }
  }
}
</page-query>