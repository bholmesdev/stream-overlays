<script>
  import WhatAreWeUpTo from "./WhatAreWeUpTo.svelte";
  import TextFooter from "./TextFooter.svelte";
  import Maincam from "./icons/Maincam.svelte";
</script>

<main>
  <Maincam />
  <div style="grid-area: sidebar">
    <WhatAreWeUpTo />
  </div>
  <TextFooter />
</main>

<style lang="scss">
  @use "../styles/mixins";
  main {
    aspect-ratio: 1920 / 1080;
    padding: 1rem;
    display: grid;
    grid-template-areas:
      "maincam sidebar"
      "footer sidebar";
    grid-template-columns: 8.25fr 1.75fr;
    gap: 1rem;
    align-items: space-between;
  }
</style>
