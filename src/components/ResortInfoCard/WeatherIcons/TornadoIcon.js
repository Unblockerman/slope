import React from 'react';
import { Svg } from 'expo';

const { G, Path } = Svg;

const TornadoIcon = ({ width = 60, height = 60 }) => (
  <Svg width={width} height={height} viewBox="0 0 100 100">
    <G fill="none" fill-rule="evenodd">
      <Path
        d="M9.004 56.343C7.897 56.343 7 55.37 7 54.17 7 52.971 7.897 52 9.004 52h65.992c1.107 0 2.004.971 2.004 2.171 0 1.2-.897 2.172-2.004 2.172H9.004zM65.568 64.343H18.432c-.791 0-1.432-.972-1.432-2.172 0-1.2.64-2.171 1.432-2.171h47.136c.791 0 1.432.971 1.432 2.171 0 1.2-.64 2.172-1.432 2.172M55.738 71.343H28.262c-.697 0-1.262-.972-1.262-2.172 0-1.2.565-2.171 1.262-2.171h27.476c.697 0 1.262.971 1.262 2.171 0 1.2-.565 2.172-1.262 2.172M46.58 78.343h-9.16c-.232 0-.42-.972-.42-2.172 0-1.2.188-2.171.42-2.171h9.16c.232 0 .42.971.42 2.171 0 1.2-.188 2.172-.42 2.172"
        fill="#BAC6D1"
      />
      <Path
        d="M12.622 22.686C5.663 22.686 0 28.483 0 35.612c0 7.124 5.663 12.924 12.622 12.924H67.5c8.737 0 15.842-7.28 15.842-16.226 0-8.948-7.105-16.227-15.842-16.227-1.626 0-3.242.257-4.8.76l-1.015.33-.358-1.028C57.973 6.488 49.009 0 39.023 0c-12.209 0-22.341 9.369-23.57 21.792l-.114 1.15-1.12-.141a12.398 12.398 0 0 0-1.597-.115"
        fill="#D6E3F2"
      />
    </G>
  </Svg>
);

export default TornadoIcon;