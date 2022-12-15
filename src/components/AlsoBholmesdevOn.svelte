<script>
  import Twitter from "./icons/Twitter.svelte";
  import GitHub from "./icons/GitHub.svelte";
  import Discord from "./icons/Discord.svelte";
  import Devto from "./icons/Devto.svelte";
</script>

<div class="icons social">
  <p class="icons__heading">Also bholmesdev on</p>
  <div>
    <Twitter />
    <GitHub />
    <Discord />
    <Devto />
  </div>
</div>

<style lang="scss">
  @use "../styles/mixins";

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
</style>
