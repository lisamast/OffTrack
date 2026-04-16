import { View, Text, FlatList, Pressable, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  const trips = [
    {
      id: '1',
      title: 'Barcelona',
      image: require('../../../assets/images/Barcelona.png'),
      date: '29 maart 2024 - april 2024',
    },
    {
      id: '2',
      title: 'New York',
      image: require('../../../assets/images/NewYork.png'),
      date: '16 januari 2022',
    },
    {
      id: '3',
      title: 'Tokyo',
      image: require('../../../assets/images/Tokyo.png'),
      date: '16 november 2022 - 4 december 2022',
    },
    {
      id: '4',
      title: 'Rome',
      image: require('../../../assets/images/Rome.png'),
      date: '15 maart 2023 - 20 maart 2023',
    },
    {
      id: '5',
      title: 'Chongqing',
      image: require('../../../assets/images/Chongqing.png'),
      date: '12 januari 2023 - 2 februari 2023',
    },
  ];

  const renderTrip = ({ item }) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: '/screens/tripdetails',
          params: {
            id: item.id,
            title: item.title,
            image: item.image,
            date: item.date,
          },
        })
      }
    >
      <Image source={item.image} style={styles.cardImage} />
    

      <View style={styles.infoBox}>
        <View style={styles.locationRow}>
          <Ionicons name="location-sharp" size={14} color="#e74c3c" />
          <Text style={styles.locationText}>{item.title}</Text>
        </View>

        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Trips</Text>

      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={renderTrip}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#111',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 16,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 130,
    borderRadius: 10,
  },
  infoBox: {
    marginTop: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
    marginBottom: 4,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111',
    marginLeft: 4,
  },
  dateText: {
    fontSize: 10,
    color: '#888',
  },
});