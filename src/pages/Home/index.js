/* eslint-disable prettier/prettier */
import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getFoodData } from '../../redux/action';


export default function Home({navigation}) {
  const {apiReducer, homeReducer} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodData(apiReducer.url));
  }, []);

  return (
    <View style={styles.contaner}>
      <HomeProfile />
      <Gap height={10} />
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.foodContent}>
            <Gap width={24} />
            {homeReducer.food.map(itemFood => {
              return <FoodCard key={itemFood.id} image={itemFood.picturePath} title={itemFood.name} rating={itemFood.rate} onPress={() => navigation.navigate('FoodDetail', itemFood)} />;
            })}
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
