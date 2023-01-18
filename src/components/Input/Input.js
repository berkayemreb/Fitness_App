import React from "react";
import { TextInput, View, Text } from 'react-native';
import styles from './Input.style';

const Input = ({ label, placeholder }) => {
    return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.input_container}>
                    <TextInput
                        placeholder={placeholder}
                        cursorColor='#8d8d8d'
                        selectionColor='#c0c0c0'
                    />
                </View>
            </View>
    )
}

export default Input;