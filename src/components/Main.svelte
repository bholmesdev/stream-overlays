<script>
  import TextFooter from "./TextFooter.svelte";
</script>

<main>
  <div class="camera-box__main" />
  <div class="sidebar">
    <div class="camera-box__facecam" />
    <h2>What are we up to?</h2>
    <ul>
      <li>Chatting with the lovelies! Welcome y'all 👋</li>
      <li>Exploring my new stream setup</li>
      <li>Trying Astro + Contentful?</li>
    </ul>
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

  .sidebar {
    grid-area: sidebar;

    h2 {
      @include mixins.decorative-text;
      color: var(--color-primary-1);
      font-size: 0.8rem;
      background: var(--color-primary-6);
      padding: 0.3rem 0.8rem;
      text-align: center;
      margin-bottom: 0;
    }

    ul {
      margin-top: 0;
      list-style: none;
      border-left: 0.2rem solid var(--color-primary-6);
      padding-inline-start: 0.8rem;
      background: hsl(var(--color-hs-primary) var(--color-weight-6) / 0.5);

      > li:first-child {
        padding-top: 0.8rem;
      }

      > li:last-child {
        padding-bottom: 0.8rem;
      }

      > li {
        margin-bottom: 0.6rem;
      }
    }
  }
  .camera-box__facecam {
    aspect-ratio: 1 / 1;
    background: var(--color-primary-7);
    border: 0.1rem solid var(--color-primary-5);
  }
</style>
