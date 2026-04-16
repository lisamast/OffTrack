import { View, Text, Pressable, ImageBackground, TextInput, StyleSheet, Image, Alert } from 'react-native'
import { useRouter } from 'expo-router';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = async () => {
        if (!formData.email.trim() || !formData.password.trim() || !formData.confirmPassword.trim()) {
            Alert.alert('Fout', 'Vul alle velden in');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            Alert.alert('Wachtwoorden komen niet overeen');
            return;
        }

        const user = {
            email: formData.email,
            password: formData.password,
        };

        try {
            await AsyncStorage.setItem('user', JSON.stringify(user));
            router.replace('/screens/auth/login');
        } catch (error) {
            console.log('Register error:', error);
            Alert.alert('Fout', 'Er ging iets mis bij het registreren');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../../assets/images/offtrack-background1.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.title}>
                    <Image
                        source={require('../../../assets/images/logo.png')}
                        style={styles.image}
                    />
                    {<Text style={styles.text1}>OffTrack</Text>}
                </View>

                <View style={styles.inputContainer}>

                    <TextInput style={styles.textInput}
                        placeholder='Email Adress'
                        keyboardType="email-address"
                        required
                        value={formData.email}
                        onChangeText={(text) => handleChange('email', text)}
                    />

                    <TextInput style={styles.textInput}
                        placeholder='Password'
                        secureTextEntry
                        required
                        value={formData.password}
                        onChangeText={(text) => handleChange('password', text)}
                    />

                    <TextInput style={styles.textInput}
                        placeholder='Confirm password'
                        secureTextEntry
                        required
                        value={formData.confirmPassword}
                        onChangeText={(text) => handleChange('confirmPassword', text)}
                    />

                    <Pressable onPress={handleSubmit} style={styles.button}>
                        <Text style={styles.buttontext}>
                            CREATE ACCOUNT
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => router.push('/../screens/auth/login')}>
                        <Text style={styles.text2}>
                            Already have an account? Sign in
                        </Text>
                    </Pressable>
                </View>

            </ImageBackground>


        </View>
    )
}
const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 80,
    },
    image: {
        width: 50,
        height: 50,
    },
    text1: {
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 25,
        letterSpacing: 2,
    },
    textInput: {
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        color: 'black',
        fontFamily: 'arial',
        fontWeight: 'semibold',
        width: '80%',
        borderRadius: 25,
        marginbottem: 15,
        // overflow: 'hidden',
    },
    inputContainer: {

        gap: '2%',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        flex: 1,
        paddingBottom: 50,
    },
    button: {
        gap: '2%',
        alignItems: 'center',
        width: '100%',
        // position: 'flex',
        // top: '60%',
        // alignItems: 'center',
    },
    buttontext: {
        padding: 10,
        backgroundColor: 'black',
        color: 'white',
        width: '80%',
        fontFamily: 'arial',
        textAlign: 'center',
        borderRadius: 25,
        marginTop: 10,
        // overflow: 'hidden',
    },
    text2: {
        color: 'black',
        textAlign: 'center',
        textWeight: 'semibold',
        marginTop: 10,
    }
})