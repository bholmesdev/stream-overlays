<script>
  import TextFooter from "../components/TextFooter.svelte";
  import Maincam from "../components/Maincam.svelte";
  import Chat from "../components/Chat.svelte";
  import Splitcam from "../components/Splitcam.svelte";
  import BholmesdevGlow from "../components/BholmesdevGlow.svelte";
  import AlsoBholmesdevOn from "../components/AlsoBholmesdevOn.svelte";
</script>

<main>
  <Splitcam />
  <Splitcam />
  <div class="chat">
    <Chat />
  </div>
  <div class="footer">
    <BholmesdevGlow />
    <AlsoBholmesdevOn />
  </div>
</main>

<style lang="scss">
  @use "../styles/mixins";
  main {
    aspect-ratio: 1920 / 1080;
    padding: 1rem;
    display: grid;
    grid-template-areas:
      "splitcam splitcam"
      "footer chat";
    grid-template-columns: 50% 50%;
    grid-template-rows: 3fr 1fr;
    gap: 1rem;
    align-items: space-between;
  }

  .chat {
    grid-area: chat;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 4rem;
    grid-area: "footer";
    align-items: center;
  }
</style>
