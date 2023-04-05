import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';

const NewTasteTab = () => {
  const navigation = useNavigation();
  const {homeReducer, apiReducer} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByTypes(apiReducer.url, 'new_food'));
  }, []);

  return (
    <View style={styles.contentTabBar}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {homeReducer.newTaste.map(itemFood => {
          return (
            <ItemListFood
              key={itemFood.id}
              type="product"
              ratings={itemFood.rate}
              onPress={() => navigation.navigate('FoodDetail', itemFood)}
              title={itemFood.name}
              price={itemFood.price}
              image={itemFood.picturePath}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const PopularTab = () => {
  const navigation = useNavigation();
  const {homeReducer, apiReducer} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByTypes(apiReducer.url, 'popular'));
  }, []);

  return (
    <View style={styles.contentTabBar}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {homeReducer.popular.map(itemFood => {
          return (
            <ItemListFood
              key={itemFood.id}
              type="product"
              ratings={itemFood.rate}
              onPress={() => navigation.navigate('FoodDetail', itemFood)}
              title={itemFood.name}
              price={itemFood.price}
              image={itemFood.picturePath}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const RecommendedTab = () => {
  const navigation = useNavigation();
  const {homeReducer, apiReducer} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByTypes(apiReducer.url, 'recommended'));
  }, []);

  return (
    <View style={styles.contentTabBar}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {homeReducer.recommended.map(itemFood => {
          return (
            <ItemListFood
              key={itemFood.id}
              type="product"
              ratings={itemFood.rate}
              onPress={() => navigation.navigate('FoodDetail', itemFood)}
              title={itemFood.name}
              price={itemFood.price}
              image={itemFood.picturePath}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const renderTabBar = props => (
  <TabBar
    {...props}
    tabStyle={styles.tabStyle} // Untuk memberi style pada masing - masing tab
    indicatorStyle={styles.indicatorStyleTabView}
    style={styles.tabBarStyle}
    renderLabel={({route, focused, color}) => (
      <Text style={styles.textTabView(color, focused)}>{route.title}</Text>
    )}
  />
);

const renderScene = SceneMap({
  first: NewTasteTab,
  second: PopularTab,
  third: RecommendedTab,
});

export default function HomeTabSection() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'New Taste'},
    {key: 'second', title: 'Popular'},
    {key: 'third', title: 'Recommended'},
  ]);

  return (
    <TabView
      style={styles.tabView}
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}

const styles = StyleSheet.create({
  // Tab View
  tabView: {
    backgroundColor: colors.light,
  },
  tabStyle: {
    width: 'auto',
  },
  tabBarStyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: 'white',
    borderBottomColor: colors.Fifth,
    borderBottomWidth: 1,
  },
  indicatorStyleTabView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    height: 3,
  },
  textTabView: (color, focused) => ({
    fontFamily: fonts.poppinsMedium,
    color: focused ? colors.secondary : colors.third,
  }),
  // Style New Taste
  contentTabBar: {
    paddingTop: 8,
    paddingHorizontal: 20,
  },
});
