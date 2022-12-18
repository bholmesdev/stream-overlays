<script>
  import Chat from "../components/Chat.svelte";
  import Splitcam from "../components/Splitcam.svelte";
  import BholmesdevGlow from "../components/BholmesdevGlow.svelte";
  import AlsoBholmesdevOn from "../components/AlsoBholmesdevOn.svelte";
</script>

<main>
  <Splitcam />
  <Splitcam />
  <section class="footer">
    <BholmesdevGlow />
    <AlsoBholmesdevOn />
    <div class="chat">
      <Chat />
    </div>
  </section>
</main>

<style lang="scss">
  @use "../styles/mixins";
  main {
    aspect-ratio: 1920 / 1080;
    padding: 1rem;
    display: grid;
    grid-template-areas:
      "splitcam splitcam"
      "footer footer";
    grid-template-columns: 50% 50%;
    grid-template-rows: 75% 25%;
    gap: 0.8rem;
    align-items: space-between;
  }
  .footer {
    grid-area: footer;
    display: grid;
    grid-template-columns: auto 1fr 30%;
    gap: 4rem;
    align-items: center;
  }
  .chat {
    align-self: stretch;
    display: flex;
  }
</style>
