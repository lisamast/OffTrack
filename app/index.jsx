import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore a new world with us</Text>
      
      <Pressable 
        style={styles.button}
        onPress={() => router.push('/screens/auth/register')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>

      <Pressable 
        style={styles.button}
        onPress={() => router.replace('/screens/auth/login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1A2B',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#F5F7FA',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    width: '100%',
    maxWidth: 320,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#2E5F9A',
    alignItems: 'center',
    marginBottom: 14,
  },
  buttonText: {
    color: '#F5F7FA',
    fontSize: 16,
    fontWeight: '600',
  },
});