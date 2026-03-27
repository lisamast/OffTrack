import { View, Text, Pressable, ImageBackground, TextInput, StyleSheet, Image } from 'react-native'
import { useRouter } from 'expo-router';
import { useState } from 'react';
export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = () => {
        console.log(formData.password)
        if (!formData.password.trim() || !formData.confirmPassword.trim() || !formData.email.trim()) {
            Alert.alert('Fout', 'Vul alle velden in');
            console.log("vul alle velden in")
            return;
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../../assets/images/offtrack-background2.png')}
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

                    <Pressable onPress={() => router.replace('/../screens/tabs/home')} style={styles.button}>
                        <Text style={styles.buttontext}>
                            LOGIN
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => router.push('/../screens/auth/register')}>
                        <Text style={styles.text2}>
                            Don't have an account? Sign up
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
        color: 'white',
        textAlign: 'center',
        fontWeight: 'semibold',
        marginTop: 10,
    }
})