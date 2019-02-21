import * as React from "react";
import { StyleProp, ViewStyle, ImageProps } from 'react-native'
interface AvatarProps {
    source?: Image.propTypes.source
    size?: number
    containerStyle: StyleProp<ViewStyle>
    imageStyle: StyleProp<ViewStyle>
}

export default class Avatar extends React.Component<AvatarProps>{ }