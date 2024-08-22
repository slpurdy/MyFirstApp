import { View, type ViewProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[styles.viewBase, { backgroundColor }, style]} {...otherProps} />;
}

const styles = StyleSheet.create({
  viewBase: {
    padding: 16, // Default padding for consistency
    borderRadius: 8, // Rounded corners for a modern look
    backgroundColor: '#FFF0F5', // Light pink background
  },
});
