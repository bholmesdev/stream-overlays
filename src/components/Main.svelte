<script>
  import TextFooter from "./TextFooter.svelte";
</script>

<main>
  <div class="camera-box__main" />
  <div class="camera-box__facecam" />
  <TextFooter />
</main>

<style lang="scss">
  @use "../styles/mixins";
  main {
    aspect-ratio: 1920 / 1080;
    padding: 1rem;
    display: grid;
    grid-template-areas:
      "maincam facecam"
      "footer footer";
    grid-template-columns: 8.25fr 1.75fr;
    gap: 1rem;
    align-items: space-between;
  }

  .camera-box__main {
    position: relative;
    aspect-ratio: 1920 / 1080;
    grid-area: maincam;
    background: linear-gradient(-45deg, var(--gradient-slinkity));

    &::after {
      content: "";
      position: absolute;
      inset: 0.3rem;
      background: var(--color-primary-7);
    }
  }
  .camera-box__facecam {
    position: relative;
    aspect-ratio: 1 / 1;
    grid-area: facecam;
    background: var(--color-primary-7);
    border: 0.1rem solid var(--color-primary-5);
  }
</style>
