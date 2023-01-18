import React from "react";
import { SafeAreaView, Text } from 'react-native';
import Input from '../components/Input';

const MemberSign = () => {
    return (
        <SafeAreaView>
            <Text>MemberSign a hosgeldin</Text>
            <Input label='Üye Adı' />
        </SafeAreaView>
    )
}


export default MemberSign;