import React from 'react';
import { Constants, Svg } from 'expo';
import { View, StyleSheet } from 'react-native';

const {
  G,
  Path,
} = Svg;

const HeavenlyLogo = ({ width = 60, height = 60 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100">
      <G fill="#4A4A4A" transform="translate(2 2)" fill-rule="evenodd">
        <Path d="M38.18 1.96c-1.616.328-3.207.783-4.81 1.18l.036.176h.545c5.097 0 10.195.01 15.293-.014.62-.002.98.214 1.316.707 1.226 1.79 1.596 3.76 1.186 5.85-.34 1.74-.808 3.456-1.244 5.176-2 7.927-4.01 15.85-6.015 23.775-.336 1.33-.14 1.574 1.213 1.602 2.1.043 4.202.11 6.3.15 1.23.027 1.444-.15 1.732-1.32l5.64-22.956c.278-1.127.628-1.41 1.807-1.412 5.42-.013 10.84-.024 16.263-.03 1.316-.002 1.678.432 1.384 1.688-2.325 9.95-4.652 19.9-6.984 29.852-3.137 13.378-6.28 26.755-9.415 40.134-.554 2.363-.163 4.527 1.404 6.436.11-.03.188-.045.26-.07 8.61-3.067 15.875-8.094 21.544-15.25 6.827-8.617 10.28-18.278 10.325-28.917v-.44c-.005-1.636-.092-3.297-.26-4.98-.56-5.604-2.156-10.913-4.694-15.928-4.01-7.924-9.798-14.257-17.315-18.986-7.414-4.666-15.546-7.03-24.273-7.39-.573-.023-1.146-.036-1.72-.036-3.198 0-6.372.364-9.516 1.002z" id="a"/>
        <Path d="M4.186 65.707c10.62 26.1 38.25 33.953 57.565 28.14h-.628c-4.96-.045-9.92-.086-14.88-.15-.32-.004-.732-.086-.95-.293-1.643-1.56-2.497-3.453-2.008-5.733.84-3.92 1.752-7.82 2.65-11.727 2.05-8.91 4.11-17.82 6.167-26.727.25-1.074-.05-1.486-1.126-1.486-.842 0-1.68.005-2.52.01-1.374.008-2.746.016-4.116 0-.716-.007-1.012.342-1.16.966-.756 3.165-1.518 6.327-2.275 9.49-1.202 5.022-2.398 10.047-3.605 15.067-.28 1.168-.45 1.293-1.667 1.28-.482-.005-.964-.084-1.447-.086-2.995-.017-5.987-.018-8.982-.03-2.4-.01-4.8-.018-7.2-.046-1.086-.012-1.393-.42-1.153-1.48.278-1.23.565-2.462.862-3.69 4.56-18.872 9.122-37.743 13.697-56.612.44-1.817.866-3.627.354-5.488-.24-.888-.594-1.744-.896-2.618C7.3 13.757-5.983 40.717 4.186 65.707z" id="b"/>
      </G>
    </Svg>
  );
}

export default HeavenlyLogo;