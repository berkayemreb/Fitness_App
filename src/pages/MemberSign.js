import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

const MemberSign = () => {
    return (
        <SafeAreaView style={stlyes.container}>
            <Input
                label='Üye Adı'
                placeholder='Üyenin ismini giriniz...'
            />
            <Input
                label='Üye Soyadı'
                placeholder='Üyenin soyismini giriniz...'
            />
            <Input
                label='Üye Yaşı'
                placeholder='Üyenin yaşını giriniz...'
            />
            <Input
                label='Üye E-posta Adresi'
                placeholder='Üyenin e-posta adresini giriniz...'
            />
            
            <Button text='Kaydı tamamla' onPress={null} />
        </SafeAreaView>
    )
}

const stlyes = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 30,
    }
})

export default MemberSign;