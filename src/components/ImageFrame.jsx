export const ImageFrame = ({ dim = [], src, scale = 1 }) => {
  const w = dim[0] || 300;
  const h = dim[1] || 200;
  const wCut = dim[0] - (dim[2] || 0);
  const hCut = dim[1] - (dim[3] || 0);
  const r1 = dim[4] || 0;
  const r2 = dim[5] || 0;

  const zoom = (scale - 1) * 100;

  const path = `
                M 
                ${r1} 0 A${r1} ${r1} 0 0 0 0 ${r1}
                L
                0 ${h - r1} A${r1} ${r1} 0 0 0 ${r1} ${h}
                L
                ${wCut - r1} ${h} A${r1} ${r1} 0 0 0 ${wCut} ${h - r1}
                L
                ${wCut} ${hCut + r2} A${r2} ${r2} 0 0 1 ${wCut + r2} ${hCut}
                L
                ${w - r1} ${hCut} A${r1} ${r1} 0 0 0 ${w} ${hCut - r1}
                L
                ${w} ${r1} A${r1} ${r1} 0 0 0 ${w - r1} 0 
                Z
                `;

  return (
    <svg id="graph" width={w} height={h}>
      <defs>
        <pattern
          id={src}
          x={`-${zoom / 2}%`}
          y={`-${zoom / 2}%`}
          width={`${100 + zoom}%`}
          height={`${100 + zoom}%`}
        >
          <image
            href={src}
            width={`${100 + zoom}%`}
            height={`${100 + zoom}%`}
          />
        </pattern>
      </defs>

      <path
        d={path}
        fill={`url(#${src})`}
        stroke="lightblue"
        stroke-width={0}
      />
    </svg>
  );
};
