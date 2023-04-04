import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IcStarOff, IcStarOn} from '../../../assets';
import {fonts} from '../../../utils';
import Number from '../Number';

export default function Rating({rating}) {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(<IcStarOn key={i} />);
      } else {
        star.push(<IcStarOff key={i} />);
      }
    }

    return star;
  };

  return (
    <View style={styles.rateContainer}>
      <View style={styles.starContainer}>{renderStar()}</View>
      <Number style={styles.rateNumber} value={rating} type="decimal" />
    </View>
  );
}

const styles = StyleSheet.create({
  rateContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 4,
  },
  rateNumber: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
    fontWeight: '700',
  },
});
