import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    const goToMemberSign = () => {
        navigation.navigate('MemberSign')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>XYZ Fitness Salonu</Text>
            <Button text='Üye Kaydı Oluştur' onPress={goToMemberSign} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '600',
    },
})

export default Welcome;