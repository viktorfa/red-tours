<template>
  <div class="layout">
    <div class="container">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer
  }
};
</script>


<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
