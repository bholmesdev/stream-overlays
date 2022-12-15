<script>
  import Facecam from "../components/Facecam.svelte";
  import TextFooter from "../components/TextFooter.svelte";
  import Maincam from "../components/Maincam.svelte";
  import Chat from "../components/Chat.svelte";
</script>

<main>
  <Maincam />
  <div class="sidebar">
    <Facecam />
    <Chat />
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
