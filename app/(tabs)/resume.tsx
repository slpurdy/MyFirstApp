import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';

const ResumeScreen = () => (
  <ThemedView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ThemedText type="title">Resume</ThemedText>
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">About Me</ThemedText>
        <ThemedText>
          Motivated software developer with a diverse background in customer service, market research, and leadership. Proven ability to optimize processes, drive customer satisfaction, and enhance operational efficiency. Eager to apply technical skills and varied professional experience to innovative software development projects in a dynamic organization.
        </ThemedText>
        <ThemedText type="defaultSemiBold">Contact Information:</ThemedText>
        <ThemedText>Email: <ExternalLink href="mailto:shakyrapurdy@outlook.com"><ThemedText type="link">shakyrapurdy@outlook.com</ThemedText></ExternalLink></ThemedText>
        <ThemedText>LinkedIn | GitHub: <ExternalLink href="https://linkedin.com/in/shakyrapurdy"><ThemedText type="link">shakyrapurdy</ThemedText></ExternalLink></ThemedText>
      </ThemedView>
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Education</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">CodeCrew Code School, Memphis:</ThemedText> Full Stack Software Development Certification | 2024
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">University of Memphis:</ThemedText> Bachelor of Arts in Computer Technology Engineering (75 credits completed) | 2012 - 2015
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Whitehaven High School:</ThemedText> High School Diploma | 2012
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Technical Skills</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Programming Languages:</ThemedText> C#, .NET, Python, JavaScript, HTML, CSS, SASS, PHP
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Frontend Frameworks/Libraries:</ThemedText> React.js, Blazor
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Backend Technologies:</ThemedText> Node.js, Entity Framework
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Databases:</ThemedText> SQL, MongoDB, MySQL
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">DevOps/Cloud Tools:</ThemedText> Docker, Azure
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Version Control:</ThemedText> Git, GitHub
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Game Development:</ThemedText> Unity
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Methodologies:</ThemedText> Agile, Scrum
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Tools:</ThemedText> Visual Studio, VS Code
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Professional Experience</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">GDCCW – Market Researcher:</ThemedText> January 2023 – Present
        </ThemedText>
        <ThemedText>
          Conducted market research to analyze trends and gather insights on various industries. Designed and distributed surveys to capture customer feedback, improving strategic decision-making processes. Created detailed reports to support data-driven recommendations for business growth and customer engagement.
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">American Home Shield – Authorizer:</ThemedText> October 2019 – May 2021
        </ThemedText>
        <ThemedText>
          Authorized repair or replacement of over 1,000 systems and appliances, maintaining a 98% customer satisfaction rate. Negotiated contractor cost reductions, saving approximately $50,000 annually. Delivered empathetic customer communication, reducing complaint escalations by 30%.
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">PFS Web – Ecommerce Customer Service Representative:</ThemedText> January 2019 – August 2019
        </ThemedText>
        <ThemedText>
          Achieved a 90% first-call resolution rate by efficiently resolving customer issues. Increased sales revenue by 15% through upselling and cross-selling. Optimized system tools, reducing call handling time by 10%.
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">BCBGeneration – Customer Service Associate:</ThemedText> August 2017 – December 2018
        </ThemedText>
        <ThemedText>
          Managed store operations, driving a 25% increase in monthly sales through exceptional customer service. Enhanced operational efficiency by 20% through effective store stocking and floor-sets. Maintained a 99% transaction accuracy rate in a fast-paced retail environment.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Volunteer Experience</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Weekend Caregiver:</ThemedText> January 2023 – Present
        </ThemedText>
        <ThemedText>
          Provide caregiving support for children and assist my father with daily activities. Developed strong interpersonal and multitasking skills while balancing other responsibilities.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Other Experience</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Leader, The Collective Blueprint:</ThemedText> January 2024 – Present
        </ThemedText>
        <ThemedText>
          Engaged in development activities, business seminars, and workshops to build career-readiness skills. Demonstrated commitment to personal growth and excellence through active participation in the program.
        </ThemedText>
      </ThemedView>
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
  sectionContainer: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#FFFFFF', // White background for each section
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});


export default ResumeScreen;
