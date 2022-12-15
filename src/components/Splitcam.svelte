<div />

<style lang="scss">
  div {
    position: relative;
    // tweak to "1089" to include colored padding
    // as long as the ::after is 1920 / 1080, we're golden!
    background: linear-gradient(-45deg, var(--gradient-slinkity));
    box-shadow: 0 0.3rem 1rem black;

    &::after {
      content: "";
      position: absolute;
      inset: 0.3rem;
      background: var(--color-primary-7);
    }
  }
</style>
