import {StyleSheet, Text, View, useWindowDimensions, ScrollView} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import ItemListFood from '../ItemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const NewTasteTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentTabBar}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => console.log('Halo')}
          title="Sop Buntut Sapi"
          price="IDR 150.000"
          image={FoodDummy1}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Baso Merecon Kang Mus"
          price="IDR 80.000"
          image={FoodDummy2}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kopi Kintamani Bali"
          price="IDR 50.000"
          image={FoodDummy3}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kari Ayam Khas Majalengka"
          price="IDR 90.000"
          image={FoodDummy4}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => console.log('Halo')}
          title="Sop Buntut Sapi"
          price="IDR 150.000"
          image={FoodDummy1}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Baso Merecon Kang Mus"
          price="IDR 80.000"
          image={FoodDummy2}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kopi Kintamani Bali"
          price="IDR 50.000"
          image={FoodDummy3}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kari Ayam Khas Majalengka"
          price="IDR 90.000"
          image={FoodDummy4}
        />
      </ScrollView>
    </View>
  );
};

const PopularTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentTabBar}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => console.log('Halo')}
          title="Sop Buntut Sapi"
          price="IDR 150.000"
          image={FoodDummy1}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Baso Merecon Kang Mus"
          price="IDR 80.000"
          image={FoodDummy2}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kopi Kintamani Bali"
          price="IDR 50.000"
          image={FoodDummy3}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kari Ayam Khas Majalengka"
          price="IDR 90.000"
          image={FoodDummy4}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => console.log('Halo')}
          title="Sop Buntut Sapi"
          price="IDR 150.000"
          image={FoodDummy1}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Baso Merecon Kang Mus"
          price="IDR 80.000"
          image={FoodDummy2}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kopi Kintamani Bali"
          price="IDR 50.000"
          image={FoodDummy3}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kari Ayam Khas Majalengka"
          price="IDR 90.000"
          image={FoodDummy4}
        />
      </ScrollView>
    </View>
  );
};

const RecommendedTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentTabBar}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => console.log('Halo')}
          title="Sop Buntut Sapi"
          price="IDR 150.000"
          image={FoodDummy1}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Baso Merecon Kang Mus"
          price="IDR 80.000"
          image={FoodDummy2}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kopi Kintamani Bali"
          price="IDR 50.000"
          image={FoodDummy3}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kari Ayam Khas Majalengka"
          price="IDR 90.000"
          image={FoodDummy4}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => console.log('Halo')}
          title="Sop Buntut Sapi"
          price="IDR 150.000"
          image={FoodDummy1}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Baso Merecon Kang Mus"
          price="IDR 80.000"
          image={FoodDummy2}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kopi Kintamani Bali"
          price="IDR 50.000"
          image={FoodDummy3}
        />
        <ItemListFood
          type="product"
          ratings={4.5}
          onPress={() => navigation.navigate('FoodDetail')}
          title="Kari Ayam Khas Majalengka"
          price="IDR 90.000"
          image={FoodDummy4}
        />
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
