import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import ItemListFood from '../ItemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const InProgressTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentTabBar}>
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        title="Sop Buntut Sapi"
        price="IDR 150.000"
        type="in-progress"
        items={14}
        image={FoodDummy1}
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        title="Baso Merecon Kang Mus"
        price="IDR 3.150.000"
        type="in-progress"
        items={20}
        image={FoodDummy2}
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        title="Kopi Kintamani Bali"
        price="IDR 1.150.000"
        type="in-progress"
        items={10}
        image={FoodDummy3}
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        title="Kari Ayam Khas Majalengka"
        price="IDR 850.000"
        type="in-progress"
        items={5}
        image={FoodDummy4}
      />
    </View>
  );
};

const PastOrdersTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentTabBar}>
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        title="Sop Buntut Sapi"
        price="IDR 350.000"
        type="past-orders"
        items={2}
        image={FoodDummy1}
        date="Jun 12, 14:00"
        status
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        title="Baso Merecon Kang Mus"
        price="IDR 2.950.000"
        type="past-orders"
        items={20}
        image={FoodDummy2}
        date="Jun 13, 10:00"
        status="Cancel"
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        title="Kopi Kintamani Bali"
        price="IDR 5.950.000"
        type="past-orders"
        items={40}
        image={FoodDummy3}
        date="Jun 14, 08:00"
        status
      />
      <ItemListFood
        onPress={() => navigation.navigate('OrderDetail')}
        title="Kari Ayam Khas Majalengka"
        price="IDR 100.000"
        type="past-orders"
        items={1}
        image={FoodDummy4}
        date="Jun 15, 22:00"
        status="Cancel"
      />
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
  1: InProgressTab,
  2: PastOrdersTab,
});

export default function OrderTabSection() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
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
