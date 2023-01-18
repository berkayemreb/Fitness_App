import React from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';

const Welcome = () => {
    return (
        <View>
            <Text>Welcome</Text>
            <Button text='Üye Kaydı Oluştur' onPress={null} />
        </View>
    )
}

export default Welcome;