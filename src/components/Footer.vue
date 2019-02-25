<template>
  <footer>
    <div class="footer-grid container">
      <p class="footer-logo">Røde reiser</p>
      <br>
      <div class="footer-links">
        <p>Ofte stilte spørsmål</p>
        <p>Skreddersydde turer</p>
        <p>Kontakt</p>
      </div>
      <br>
      <div>
        <p>En del av Association Internationale du Tourisme Rouge</p>
        <p>国际红色旅游协会</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  background-color: var(--revolutionary-red);
  color: var(--workers-yellow);
  padding-top: 10vh;
  min-height: 20vh;
  text-align: center;
  font-size: 1.4rem;
}
.footer-grid {
  grid-template-columns: 1fr 1fr;
}
.footer-logo {
  font-size: 4rem;
  font-family: "Oswald";
}

.footer-links {
  text-decoration: underline;
}

footer p {
  margin: 0;
}
</style>
