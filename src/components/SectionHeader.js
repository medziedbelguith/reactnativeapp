import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {sizes, spacing} from '../constants/theme';

const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.titles} onPress={() => {}}>{buttonTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: spacing.l,
    marginRight: spacing.m,
    marginTop: spacing.l,
    marginBottom: 10,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
  titles: {
    color: '#2196f3',
    fontSize: 17,
    marginRight: spacing.m,
    fontWeight: 'bold',
  },
});

export default SectionHeader;