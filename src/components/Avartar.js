import React from 'react'
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { styles } from '../resource/styles';

const Avatar = ({ source, size, containerStyle, imageStyle }) => {
    const width = size;
    const height = size;
    return (
        <View style={[styles.containerAvatar, { height, width, borderRadius: width / 2, overflow: 'hidden', ...containerStyle }]}>
            <Image source={source} style={{ height, width, ...imageStyle }} />
        </View>
    )
}

Avatar.propTypes = {
    source: Image.propTypes.source,
    size: PropTypes.number.isRequired,
    containerStyle: PropTypes.object,
    imageStyle: PropTypes.object
}

export default Avatar