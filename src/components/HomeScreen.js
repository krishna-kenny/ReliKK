import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const jobListings = [
  { id: 1, title: 'Frontend Developer', company: 'ABC Inc.', location: 'New York' },
  { id: 2, title: 'Backend Developer', company: 'XYZ Corp.', location: 'San Francisco' },
  // Add more job listings here
];

const App = () => {
  const renderJobItem = ({ item }) => (
    <TouchableOpacity style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobCompany}>{item.company}</Text>
      <Text style={styles.jobLocation}>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Job Listings</Text>
      <FlatList
        data={jobListings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderJobItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  jobItem: {
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobCompany: {
    fontSize: 16,
    color: 'gray',
  },
  jobLocation: {
    fontSize: 16,
    color: 'gray',
  },
});

export default App;
