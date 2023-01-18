import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Alert } from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

const MemberSign = ({ navigation }) => {

    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);

    const handleSubmit = () => {

        if (!userName || !userSurname || !userAge || !userMail) {
            return Alert.alert('XYZ Fitness Salonu', 'Herhangi bir alan boş bırakılamaz.');
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
        }
        // userName: userName , userAge: userAge şeklinde teker teker yapmak yerine bu şekilde aynı isimleriyle yeni bir obje oluşturmuş oluyor(ES6 ile gelen kolaylık)

        navigation.navigate('MemberResult');
    }

    return (
        <SafeAreaView style={stlyes.container}>
            <Input
                label='Üye Adı'
                placeholder='Üyenin ismini giriniz...'
                onChangeText={text => setUserName(text)}
            />
            <Input
                label='Üye Soyadı'
                placeholder='Üyenin soyismini giriniz...'
                onChangeText={setUserSurname}
            // onChangeText de state ataması yaparken yukarıda olduğu gibi de atama yapabilirsin , bu şekilde kısaltadabilirsin (Reactın kolaylığı)
            />
            <Input
                label='Üye Yaşı'
                placeholder='Üyenin yaşını giriniz...'
                onChangeText={setUserAge}
            />
            <Input
                label='Üye E-posta Adresi'
                placeholder='Üyenin e-posta adresini giriniz...'
                onChangeText={setUserMail}
            />

            <Button text='Kaydı tamamla' onPress={handleSubmit} />
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