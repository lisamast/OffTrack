import { View, Text, Pressable, ImageBackground, TextInput, StyleSheet, Image } from 'react-native'



export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../assets/images/offtrack-background1.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.title}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.image}
                    />
                    {<Text style={styles.text1}>OffTrack</Text>}
                </View>

                <View style={styles.inputContainer}>

                    <TextInput style={styles.textInput}
                        placeholder='Email Adress'
                    />

                    <TextInput style={styles.textInput}
                        placeholder='Password'
                    />

                    <TextInput style={styles.textInput}
                        placeholder='Confirm password'
                    />

                    <Pressable onPress={() => alert('Geklikt!')} style={{
                        // position: 'flex',
                        // top: '60vh',
                        // alignItems: 'center',
                    }}>
                        <Text style={styles.buttontext}>
                            CREATE ACCOUNT
                        </Text>
                    </Pressable>
                    <Text style={styles.text2}>Already have an account? Sign in</Text>
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
        width: '80vw',
        borderRadius: 25,
        overflow: 'hidden',
    },
    inputContainer: {
        display: 'flex',
        gap: '2vh',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        flex: 1,
        paddingBottom: 50,
    },
    buttontext: {
        padding: 10,
        backgroundColor: 'black',
        color: 'white',
        width: '80vw',
        fontFamily: 'arial',
        textAlign: 'center',
        borderRadius: 25,
        overflow: 'hidden',
    },
    text2: {
        color: 'black',
        textAlign: 'center',
        textWeight: 'semibold',
        marginTop: 10,
    }


})