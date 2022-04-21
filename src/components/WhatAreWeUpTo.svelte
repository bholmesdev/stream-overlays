<div>
  <h2>What are we up to?</h2>
  <ul>
    <li>Chatting with the lovelies! Welcome y'all 👋</li>
    <li>Trying Astro + Contentful?</li>
  </ul>
</div>

<style lang="scss">
  @use "../styles/mixins";

  h2 {
    @include mixins.decorative-text;
    color: var(--color-primary-1);
    font-size: 0.8rem;
    background: var(--color-primary-6);
    padding: 0.3rem 0.8rem;
    text-align: center;
    margin: 0;
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
</style>
