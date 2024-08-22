import { Image, StyleSheet, Dimensions } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const { width } = Dimensions.get('window'); // Get screen width

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFC0CB', dark: '#8B3A62' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* About Me Section */}
      <ThemedView style={styles.aboutMeContainer}>
        <Image
          source={require('@/assets/images/profile-pic.png')}
          style={styles.profileImage}
        />
        <ThemedText type="title" style={styles.aboutMeTitle}>Shakyra Purdy</ThemedText>
        <ThemedText style={styles.aboutMeText}>
          "Why did the programmer go broke? Because they used up all their cache!"
        </ThemedText>
        <ThemedText style={styles.aboutMeText}>
          Hi! I'm Shakyra Purdy, and while I may enjoy a good tech pun now and then, my true passion lies in building amazing software solutions. Based in the vibrant city of Memphis, TN, I bring a diverse background in customer service, market research, and leadership to the world of software development. My mission? To deliver innovative, user-friendly applications that don't just solve problems—they enhance lives.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  aboutMeContainer: {
    padding: 20,
    backgroundColor: '#FFC0CB', // Light pink background
    borderRadius: 16,
    marginTop: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
    borderColor: '#fff',
    borderWidth: 2,
  },
  aboutMeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  aboutMeText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 22,
  },
  reactLogo: {
    width: width, // Stretch across the screen
    height: width * 0.4, // Maintain aspect ratio (adjust 0.4 to fit your logo's aspect ratio)
    resizeMode: 'contain', // Maintain aspect ratio and scale image to fit
    alignSelf: 'center', // Center the image horizontally
  },
});
