<script>
  import Twitter from "./icons/Twitter.svelte";
  import GitHub from "./icons/GitHub.svelte";
  import Discord from "./icons/Discord.svelte";
  import Devto from "./icons/Devto.svelte";
  import Astro from "./icons/Astro.svelte";
</script>

<main>
  <div class="camera-box" />
  <div class="text-footer">
    <div>
      <h1>@bholmesdev</h1>
      <p class="tagline">Whiteboardist that codes mildly well</p>
    </div>
    <div class="icons social">
      <p class="icons__heading">Also bholmesdev on</p>
      <div>
        <Twitter />
        <GitHub />
        <Discord />
        <Devto />
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

    &.social {
      :global(svg) {
        animation: icon-hover 2s ease-in-out infinite;
        transform: translateY(-0.2rem);
      }

      @for $i from 0 through 3 {
        :global(svg):nth-child(#{$i + 1}) {
          animation-delay: $i * 200ms;
        }
      }

      @keyframes icon-hover {
        0%,
        100% {
          transform: translateY(-0.1rem);
        }
        50% {
          transform: translateY(0.1rem);
        }
      }
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
