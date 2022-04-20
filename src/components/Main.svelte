<script>
  import Twitter from "./icons/Twitter.svelte";
  import GitHub from "./icons/GitHub.svelte";
  import Astro from "./icons/Astro.svelte";
</script>

<main>
  <div class="camera-box" />
  <div class="text-footer">
    <div>
      <h1>@bholmesdev</h1>
      <p class="tagline">Whiteboardist that codes mildly well</p>
    </div>
    <div class="icons">
      <p class="icons__heading">Also bholmesdev on</p>
      <div>
        <Twitter />
        <GitHub />
        <Twitter />
        <Twitter />
      </div>
    </div>
    <div class="icons">
      <p class="icons__heading">Try Astro like my job depends on it</p>
      <span class="astro-build-text">
        <Astro /> astro.build
      </span>
    </div>
  </div>
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
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  .text-footer {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 4rem;
  }
  .icons {
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__heading {
      @include mixins.decorative-text;
      font-size: 0.8rem;
      color: var(--color-primary-2);
      margin: 0;
    }
  }
  .astro-build-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .tagline {
    font-style: italic;
    margin: 0;
    color: var(--color-primary-1);
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
