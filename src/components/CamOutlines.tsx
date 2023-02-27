import { scss } from "@acab/ecsstatic";

export function Facecam() {
  return (
    <div
      class={scss`
        aspect-ratio: 1 / 1;
        background: var(--color-primary-7);
        border: 0.1rem solid var(--color-primary-5);
      `}
    ></div>
  );
}

export function Splitcam() {
  return (
    <div
      class={scss`
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
      `}
    ></div>
  );
}

export function Maincam() {
  return (
    <div
      class={scss`
        position: relative;
        grid-area: maincam;
        // tweak to "1089" to include colored padding
        // as long as the ::after is 1920 / 1080, we're golden!
        aspect-ratio: 1920 / 1089;
        background: linear-gradient(-45deg, var(--gradient-slinkity));
        box-shadow: 0 0.3rem 1rem black;

        &::after {
          content: "";
          aspect-ratio: 1920 / 1080;
          position: absolute;
          inset: 0.3rem;
          background: var(--color-primary-7);
        }
      `}
    ></div>
  );
}
