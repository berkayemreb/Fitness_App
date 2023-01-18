import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const MemberResult = ({ route }) => {

    const { user } = route.params;
    
    console.log(user);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.header}>XYZ Fitness Salonu</Text>
                <Text style={styles.label}>Üye Adı: <Text style={styles.text}> {user.userName}</Text></Text>
                <Text style={styles.label}>Üye Soyadı: <Text style={styles.text}> {user.userSurname}</Text></Text>
                <Text style={styles.label}>Üye Yaşı: <Text style={styles.text}> {user.userAge}</Text></Text>
                <Text style={styles.label}>Üye E-postası: <Text style={styles.text}> {user.userMail}</Text></Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#d0d0d0',
    },

    inner_container: {
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#e0e0e0',
    },

    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#0288d1',
        marginBottom: 3,
    },

    label: {
        marginBottom: 5,
        fontSize: 17,
        fontWeight: '700',
        color: '#f44336',
    },

    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#212121',
    }
})

export default MemberResult;