import React from 'react';
import { View } from '@shoutem/ui';
import { ElementPropTypes, mapComponentProps, mapElementProps } from '../components/RichMedia';
import { Inline } from './Inline';

/**
 * Should be used for the block HTML elements.
 * The Block behaves the same as the HTML block element,
 * it moves the content into a new line.
 * @param props {Object}
 * @returns {Component}
 * @constructor
 */
export function Block(props) {
  const { style } = props;

  return (
    <View style={style.container}>
      <Inline {...props} />
    </View>
  );
}

Block.propTypes = {
  ...ElementPropTypes,
};

export default mapComponentProps(mapElementProps)(Block);