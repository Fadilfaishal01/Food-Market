import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors, fonts} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import ItemListMenu from '../ItemListMenu';

const AccountTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentTabBar}>
      <ItemListMenu label="Edit Profile" />
      <ItemListMenu label="Home Address" />
      <ItemListMenu label="Security" />
      <ItemListMenu label="Payments" />
    </View>
  );
};

const FoodMarketTab = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.contentTabBar}>
      <ItemListMenu label="Rate App" />
      <ItemListMenu label="Help Center" />
      <ItemListMenu label="Privacy & Policy" />
      <ItemListMenu label="Terms & Conditions" />
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
  1: AccountTab,
  2: FoodMarketTab,
});

export default function ProfileTabSection() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'Food Market'},
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
