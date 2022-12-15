<script>
  import Astro from "./icons/Astro.svelte";
</script>

<div class="icons">
  <p class="icons__heading">Try Astro like my job depends on it</p>
  <span class="astro-build-text">
    <Astro /> astro.build
  </span>
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
  }
  .astro-build-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
