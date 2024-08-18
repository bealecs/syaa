export default function HamburgerMenu() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      href="http://www.w3.org/1999/xlink"
    >
      <rect width="128" height="128" fill="url(#pattern0_55_3)" />
      <defs>
        <pattern
          id="pattern0_55_3"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_55_3" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_55_3"
          width="128"
          height="128"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
