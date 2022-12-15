<div>
  <h1>@bholmesdev</h1>
  <p class="tagline">Whiteboardist that codes mildly well</p>
</div>

<style lang="scss">
  @use "../styles/mixins";

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

  .tagline {
    font-style: italic;
    margin: 0;
    color: var(--color-primary-1);
  }
</style>
