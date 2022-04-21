<div />

<style lang="scss">
  div {
    position: relative;
    grid-area: maincam;
    // tweak to "1089" to include colored padding
    // as long as the ::after is 1920 / 1080, we're golden!
    aspect-ratio: 1920 / 1089;
    background: linear-gradient(-45deg, var(--gradient-slinkity));

    &::after {
      content: "";
      aspect-ratio: 1920 / 1080;
      position: absolute;
      inset: 0.3rem;
      background: var(--color-primary-7);
    }
  }
</style>
