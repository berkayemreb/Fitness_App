import React from "react";
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const MemberResult = ({ route }) => {

    const { user } = route.params;


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Üye Adı: <Text style={styles.text}> {user.userName}</Text></Text>
            <Text style={styles.label}>Üye Soyadı: <Text style={styles.text}> {user.userSurname}</Text></Text>
            <Text style={styles.label}>Üye Yaşı: <Text style={styles.text}> {user.userAge}</Text></Text>
            <Text style={styles.label}>Üye E-postası: <Text style={styles.text}> {user.userMail}</Text></Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        marginHorizontal: 10,
    },
    label: {
        marginBottom: 5,
        fontSize: 17,
        fontWeight: '700',
        color: 'red',
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
    }
})

export default MemberResult;