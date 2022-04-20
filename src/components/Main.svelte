<script>
  import TextFooter from "./TextFooter.svelte";
</script>

<main>
  <div class="camera-box" />
  <TextFooter />
</main>

<style lang="scss">
  @use "../styles/mixins";
  main {
    --padding: 1rem;
    aspect-ratio: 1920 / 1080;
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  h1 {
    position: relative;
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 0.5rem;

    &::before {
      color: var(--color-accent);
      animation: bholmesdev-neon-1 5s linear infinite;
    }
    &::after {
      color: var(--color-highlight);
      animation: bholmesdev-neon-2 5s linear infinite;
    }

    &::before,
    &::after {
      content: "@bholmesdev";
      position: absolute;
      inset: 0;
      z-index: -1;
      opacity: 0.8;
    }

    @keyframes bholmesdev-neon-1 {
      0%,
      100%,
      20%,
      80% {
        transform: translate(0, 0);
        filter: blur(0.1rem);
      }
      33% {
        transform: translate(3px, 1px);
        filter: blur(0.3rem);
      }
      67% {
        transform: translate(1px, 3px);
        filter: blur(0.3rem);
      }
    }

    @keyframes bholmesdev-neon-2 {
      0%,
      100%,
      20%,
      80% {
        transform: translate(0, 0);
        filter: blur(0.1rem);
      }

      33% {
        transform: translate(-3px, -1px);
        filter: blur(0.3rem);
      }
      67% {
        transform: translate(-1px, -3px);
        filter: blur(0.3rem);
      }
    }
  }
  .camera-box {
    height: 80%;
    position: relative;
    aspect-ratio: 1920 / 1080;
    background: linear-gradient(-45deg, var(--gradient-slinkity));

    &::after {
      content: "";
      position: absolute;
      inset: 0.5rem;
      background: var(--color-primary-7);
    }
  }
</style>
