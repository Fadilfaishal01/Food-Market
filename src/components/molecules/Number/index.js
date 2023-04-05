import React from 'react';
import {Text} from 'react-native';
import {NumericFormat} from 'react-number-format';
import { getFormattedNumberRP } from '../../../utils';

export default function Number({value, type, style}) {
  if (type === 'decimal') {
    return (
      <NumericFormat
        value={value}
        decimalSeparator="."
        displayType="text"
        renderText={() => <Text style={style}>{value}</Text>}
        decimalScale={1}
        fixedDecimalScale
      />
    );
  }

  return (
    <NumericFormat
      value={value}
      thousandSeparator={true}
      displayType="text"
      renderText={() => (
        <Text style={style}>IDR {getFormattedNumberRP(value)}</Text>
      )}
    />
  );
}
