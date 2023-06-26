import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';
// import iconPaths from '../iconPaths';

interface IconProps extends SvgProps {
  icon: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  size = 24,
  color = 'black',
  ...rest
}) => {
  //   const iconPath = iconPaths[icon];
  //   console.log('icon path', iconPath);
  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} {...rest}>
        <Path d={icon} fill={color} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Icon;
