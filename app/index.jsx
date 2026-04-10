import { View, Text, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/offtrack-background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.title}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.image}
          />
          <Text style={styles.text1}>OffTrack</Text>
        </View>

        <view style={styles.content}>
          <Text style={styles.welcomeTitle}>
            Explore a{'\n'}
            new world {'\n'}
            with us</Text>
        </view>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => router.push('/screens/auth/register')}
          >
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => router.replace('/screens/auth/login')}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
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
    marginLeft: 20,
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
  content: {
    flex: 1,
    marginTop: 335,
    marginLeft: 20,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  welcomeTitle: {
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    gap: '2%',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 100,
  },
  button: {
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    width: '80%',
    fontFamily: 'arial',
    textAlign: 'center',
    borderRadius: 25,
    marginTop: 10,
  },
});