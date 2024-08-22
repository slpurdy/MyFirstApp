import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';

const ProjectsScreen = () => (
  <ThemedView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ThemedText type="title">Projects</ThemedText>
      <Collapsible title="React Native App">
        <ThemedText>
          A mobile app showcasing various features and functionalities.
        </ThemedText>
        <ExternalLink href="https://github.com/slpurdy">
        <ThemedText type="link">View Project</ThemedText>
      </ExternalLink>
      </Collapsible>
      <Collapsible title="Unity 2D Platformer">
        <ThemedText>
          A 2D platformer game created using Unity.
        </ThemedText><ExternalLink href="https://github.com/slpurdy">
        <ThemedText type="link">View Project</ThemedText>
      </ExternalLink>
      </Collapsible>
      <Collapsible title="Blazor MVC Applications">
        <ThemedText>
          Several web applications built with Blazor MVC.
        </ThemedText><ExternalLink href="https://github.com/slpurdy">
        <ThemedText type="link">View Project</ThemedText>
      </ExternalLink>
      </Collapsible>
      <Collapsible title="3D Art Gallery">
        <ThemedText>
          A virtual 3D art gallery project.
        </ThemedText><ExternalLink href="https://github.com/slpurdy">
        <ThemedText type="link">View Project</ThemedText>
      </ExternalLink>
      </Collapsible>
      <ExternalLink href="https://github.com/slpurdy">
        <ThemedText type="link">View More Projects</ThemedText>
      </ExternalLink>
    </ScrollView>
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5', // Light pink background
  },
  scrollViewContent: {
    padding: 16,
  },
});

export default ProjectsScreen;
