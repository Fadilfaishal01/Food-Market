import React from 'react';
import {Text} from 'react-native';
import {NumericFormat} from 'react-number-format';

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
      thousandSeparator=","
      allowLeadingZeros
      decimalSeparator=","
      displayType="text"
      prefix="IDR "
      renderText={() => <Text style={style}>{value}</Text>}
    />
  );
}
