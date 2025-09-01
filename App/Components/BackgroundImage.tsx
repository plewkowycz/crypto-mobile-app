import React from 'react';
import { ImageBackground } from 'react-native';
import Images from './Images';

const BackgroundImage = ({
    image,
    children,
}: {
    children: React.ReactNode;
    image: keyof typeof Images;
}) => (
    <ImageBackground
        style={{
            flex: 1,
            // width: '100%',
            // height: '100%',
            opacity: 0.6,
            justifyContent: 'center',
        }}
        source={Images[image]}>
        {children}
    </ImageBackground>
);

export default BackgroundImage;
