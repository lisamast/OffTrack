import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image source={require('../../../assets/images/Banner.png')} style={styles.profilebanner} />
      </View>

      <View style={styles.profilePicture}>
        <Image source={require('../../../assets/images/profilepicture.png')} style={styles.profileImage} />
      </View>

      <View style={styles.content}>
        <View style={styles.names}>
          <Text style={styles.name}>Jason van Schaik</Text>
          <Ionicons name="create-outline" size={18} color="#9a9a9a" />
        </View>

        <Text style={styles.pronouns}>he/him</Text>

        <View style={styles.bio}>
          <Text style={styles.bioText}>Jason is a travel enthusiast with a deep passion for planes and aviation.
            Whether he's exploring new destinations or watching aircraft take off,
            he’s always captivated by the thrill of the journey. From planning his next trip to learning about
            different airlines and airports, Jason finds joy in every aspect of travel.
            For him, the sky is not the limit—it’s just the beginning!</Text>
        </View>

        <Text style={styles.favoritesTitle}>❤️ My favorites</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.favoritesScroll}
        >
          <View style={styles.favoriteCard}>
            <Image source={require('../../../assets/images/Barcelona.png')} style={styles.favoriteImage} />
          </View>

          <View style={styles.favoriteCard}>
            <Image source={require('../../../assets/images/NewYork.png')} style={styles.favoriteImage} />
          </View>

          <View style={styles.favoriteCard}>
            <Image source={require('../../../assets/images/Tokyo.png')} style={styles.favoriteImage} />
          </View>

          <View style={styles.favoriteCard}>
            <Image source={require('../../../assets/images/Rome.png')} style={styles.favoriteImage} />
          </View>

          <View style={styles.favoriteCard}>
            <Image source={require('../../../assets/images/Chongqing.png')} style={styles.favoriteImage} />
          </View>
        </ScrollView>
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },

  banner: {
    width: '100%',
    height: 220,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
    backgroundColor: '#ddd',
  },

  profilebanner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  profilePicture: {
    width: 110,
    height: 110,
    borderRadius: 55,
    // backgroundColor: 'white',
    // padding: 4,
    marginTop: -55,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },

  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 55,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },

  names: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111',
  },

  pronouns: {
    fontSize: 14,
    color: '#8c8c8c',
    marginTop: 2,
    marginBottom: 16,
  },

  bio: {
    backgroundColor: '#f8f8f8',
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  bioText: {
    fontSize: 14,
    lineHeight: 21,
    color: '#222',
  },

  favoritesTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111',
    marginTop: 28,
  },

  favoritesScroll: {
    marginTop: 14,
  },

  favoriteCard: {
    width: 100,
    height: 100,
    borderRadius: 18,
    backgroundColor: 'white',
    padding: 3,
    marginRight: 14,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  favoriteImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'cover',
  },
});