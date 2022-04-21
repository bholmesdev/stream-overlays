<script>
  import Facecam from "./Facecam.svelte";
  import WhatAreWeUpTo from "./WhatAreWeUpTo.svelte";
  import TextFooter from "./TextFooter.svelte";
  import Maincam from "./icons/Maincam.svelte";
</script>

<main>
  <Maincam />
  <div class="sidebar">
    <Facecam />
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
  .sidebar {
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
