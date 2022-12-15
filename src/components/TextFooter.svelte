<script>
  import BholmesdevGlow from "./BholmesdevGlow.svelte";
  import AlsoBholmesdevOn from "./AlsoBholmesdevOn.svelte";
  import TryAstro from "./TryAstro.svelte";
</script>

<div class="text-footer">
  <BholmesdevGlow />
  <AlsoBholmesdevOn />
  <TryAstro />
</div>

<style lang="scss">
  @use "../styles/mixins";

  .text-footer {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 4rem;
    grid-area: "footer";
  }
</style>
