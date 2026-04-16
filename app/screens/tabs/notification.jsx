import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function NotificationScreen() {
  const notifications = [
    {
      id: '1',
      name: 'Jason posted:',
      message: 'Ik luv het maatje! Lekker op die goede dingen. Siii!',
      image: require('../../../assets/images/profilepicture.png'),
    },
    {
      id: '2',
      name: 'Bram posted:',
      message: 'Ai ik hoor je. Ik wist niet dat jij dat op dat grote geld was 👏',
      image: require('../../../assets/images/profile2.png'),
    },
    {
      id: '3',
      name: 'Cristiano posted:',
      message: 'Muito bom primo. O trabalho duro finalmente valeu a pena',
      image: require('../../../assets/images/profile3.png'),
    },
    {
      id: '4',
      name: 'Cloakje posted:',
      message: 'ik weet waar je bed slaapt',
      image: require('../../../assets/images/profile4.png'),
    },
    {
      id: '5',
      name: 'Bas posted:',
      message: 'Goedendag, ik zie dat u goed heeft kunnen genieten van uw verblijf. Geniet ervan...',
      image: require('../../../assets/images/profile5.png'),
    },
    {
      id: '6',
      name: 'Strontvlieg posted:',
      message: 'Potje fortnite gisteren was craaazy! Die dub die we hebben gepakt was fenomenaal.',
      image: require('../../../assets/images/profile6.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message} numberOfLines={2}>
          {item.message}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔔 Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  // },


  //  container: {
  //   flex: 1,
  //   backgroundColor: '#f3f3f3',
  //   paddingTop: 60,
  //   paddingHorizontal: 20,
  // },

  // title: {
  //   fontSize: 22,
  //   fontWeight: '800',
  //   color: '#111',
  //   marginBottom: 20,
  // },

  // listContent: {
  //   paddingBottom: 20,
  // },

  // card: {
  //   backgroundColor: '#f8f8f8',
  //   borderRadius: 14,
  //   paddingVertical: 10,
  //   paddingHorizontal: 12,
  //   marginBottom: 10,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOpacity: 0.08,
  //   shadowRadius: 8,
  //   shadowOffset: { width: 0, height: 2 },
  //   elevation: 3,
  // },

  // image: {
  //   width: 46,
  //   height: 46,
  //   borderRadius: 23,
  //   marginRight: 12,
  // },

  // textContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },

  // name: {
  //   fontSize: 16,
  //   fontWeight: '800',
  //   color: '#111',
  //   marginBottom: 2,
  // },

  // message: {
  //   fontSize: 14,
  //   color: '#9a9a9a',
  //   lineHeight: 18,
  // },


  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 60,
    paddingHorizontal: 18,
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111',
    marginBottom: 18,
  },

  listContent: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    paddingVertical: 9,
    paddingHorizontal: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  image: {
    width: 58,
    height: 58,
    borderRadius: 22,
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111',
    marginBottom: 1,
  },

  message: {
    fontSize: 13,
    color: '#9a9a9a',
    lineHeight: 17,
  },
});