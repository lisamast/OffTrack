// import { View, Text, StyleSheet } from 'react-native';

// export default function DetailScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Detail Pagina</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });


import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const trips = [
    {
      id: '1',
      title: 'Barcelona',
      image: require('../../assets/images/Barcelona.png'),
      date: 'maart 2024 - april 2024',
      day1:
        'I finally made it! After months of planning, I landed in Barcelona this morning. The moment I stepped out of the airport, I felt the warm Mediterranean breeze and the city’s vibrant energy. My hotel is in the Gothic Quarter, a maze of narrow, cobblestone streets filled with history. I spent the afternoon wandering around, marveling at the medieval buildings and charming plazas. For dinner, I had my first taste of authentic tapas—patatas bravas, jamón ibérico, and a glass of sangria. A perfect start to my trip!',
      day2:
        'Today was all about Antoni Gaudí. I started my morning at the breathtaking Sagrada Família. The towering spires and intricate details left me speechless. I could’ve spent hours admiring the stained glass windows as sunlight danced through them. Next, I visited Park Güell, a whimsical wonderland filled with colorful mosaics and surreal architecture. Walking through the park, I felt like I had stepped into a dream. In the evening, I relaxed at a rooftop bar, watching the sun set over the city skyline.',
    },
    {
      id: '2',
      title: 'New York',
      image: require('../../assets/images/NewYork.png'),
      date: 'januari 2022 - februari 2022',
      day1:
        'Vandaag begon mijn avontuur in New York. Zodra ik de stad inreed, voelde ik meteen die enorme energie. Overal taxi’s, hoge gebouwen en mensen in beweging. Ik liep door Times Square en keek mijn ogen uit.',
      day2:
        'De tweede dag bezocht ik Central Park en daarna het uitzichtpunt boven op een wolkenkrabber. Vooral de skyline in de avond was ongelofelijk mooi. New York voelt alsof alles mogelijk is.',
    },
    {
      id: '3',
      title: 'Tokyo',
      image: require('../../assets/images/Tokyo.png'),
      date: 'september 2022 - december 2022',
      day1:
        'Tokyo voelde meteen bijzonder. De mix van rust en drukte is echt uniek. Ik bezocht kleine straatjes, at ramen in een lokaal restaurant en keek mijn ogen uit bij alle neonlichten.',
      day2:
        'Vandaag heb ik tempels bezocht en later door een drukke wijk gelopen vol winkels en arcades. Het contrast tussen traditioneel en modern maakt Tokyo echt onvergetelijk.',
    },
    {
      id: '4',
      title: 'Rome',
      image: require('../../assets/images/Rome.png'),
      date: 'januari 2023 - februari 2023',
      day1:
        'Rome voelde meteen warm en levendig. Ik liep door oude straatjes, dronk espresso op een plein en bezocht historische plekken die ik alleen uit boeken kende.',
      day2:
        'Vandaag stond vooral in het teken van geschiedenis. Het Colosseum en de oude ruïnes maakten veel indruk. In de avond heb ik genoten van pasta op een gezellig terras.',
    },
    {
      id: '5',
      title: 'Chongqing',
      image: require('../../assets/images/Chongqing.png'),
      date: 'januari 2023 - februari 2023',
      day1:
        'Chongqing was meteen overweldigend op de beste manier. De stad is enorm, vol hoogteverschillen en indrukwekkende gebouwen. Alles voelde groot en levendig.',
      day2:
        'Vandaag heb ik vooral de skyline en lokale eetplekken ontdekt. Het eten was pittig en de sfeer in de stad heel anders dan ik gewend ben. Dat maakte het juist zo interessant.',
    },
  ];

  const trip = trips.find((item) => item.id === id);

  if (!trip) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Reis niet gevonden</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>
            {trip.emoji} {trip.title}
          </Text>

          <Pressable onPress={() => router.replace('/screens/tabs/home')} style={styles.closeButton}>
            <Ionicons name="close" size={28} color="#111" />
          </Pressable>
        </View>

        <View style={styles.imageCard}>
          <Image source={trip.image} style={styles.image} />
        </View>

        <Text style={styles.date}>{trip.date}</Text>

        <View style={styles.textSection}>
          <Text style={styles.dayTitle}>Day 1</Text>
          <Text style={styles.bodyText}>{trip.day1}</Text>

          <Text style={[styles.dayTitle, styles.daySpacing]}>Day 2</Text>
          <Text style={styles.bodyText}>{trip.day2}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  scrollContent: {
    paddingTop: 60,
    paddingHorizontal: 18,
    paddingBottom: 30,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111',
  },
  closeButton: {
    padding: 4,
  },
  imageCard: {
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  date: {
    fontSize: 12,
    color: '#9a9a9a',
    marginTop: 8,
    marginBottom: 14,
  },
  textSection: {
    paddingHorizontal: 2,
  },
  dayTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111',
    marginBottom: 8,
  },
  daySpacing: {
    marginTop: 18,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 24,
    color: '#222',
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  notFoundText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
});