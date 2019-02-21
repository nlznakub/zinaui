import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Image, ViewPropTypes } from 'react-native';
import { styles } from '../resource/styles';

export default class Avatar extends Component {
    render() {
        const { source, size, containerStyle, imageStyle } = this.props;
        const width = size;
        const height = size;
        return (
            <View style={[styles.containerAvatar, { height, width, borderRadius: width / 2, overflow: 'hidden', ...containerStyle }]}>
                <Image source={source} style={{ height, width, ...imageStyle }} />
            </View>
        )
    }
}

Avatar.propTypes = {
    source: Image.propTypes.source.isRequired,
    size: PropTypes.number.isRequired,
    containerStyle: ViewPropTypes.style,
    imageStyle: ViewPropTypes.style
}