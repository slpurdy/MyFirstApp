import { Text, type TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        styles.textBase,
        { color },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'defaultSemiBold' && styles.defaultSemiBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  textBase: {
    fontFamily: 'System', // Ensures a consistent base font
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FF69B4', // Pink color
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#FF69B4', // Pink color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#FF1493', // Deeper pink color for titles
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    color: '#FF69B4', // Pink color
  },
  link: {
    fontSize: 16,
    color: '#FF4500', // Link color (coral for contrast)
    textDecorationLine: 'underline',
  },
});
