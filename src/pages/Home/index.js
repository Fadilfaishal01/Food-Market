/* eslint-disable prettier/prettier */
import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';


export default function Home() {
  return (
    <View style={styles.contaner}>
      <HomeProfile />
      <Gap height={10} />
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.foodContent}>
            <Gap width={24} />
            <FoodCard image={FoodDummy1} title="Breakfast American" />
            <FoodCard image={FoodDummy2} title="Avocado Salad" />
            <FoodCard image={FoodDummy3} title="Soup Kari" />
            <FoodCard image={FoodDummy4} title="Coffee Machiato" />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
  },
  foodContent: {
    marginVertical: 24,
    flexDirection: 'row',
  },
  tabContainer: {
    flex: 1,
  },
});
