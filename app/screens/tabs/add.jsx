import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function DiaryScreen() {
  const router = useRouter();

  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [duration, setDuration] = useState('');
  const [diaryEntry, setDiaryEntry] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission Denied', 'Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    const newTrip = {
      location,
      country,
      duration,
      diaryEntry,
      image,
    };

    console.log('Nieuwe trip:', newTrip);
    Alert.alert('Gelukt', 'Je reisverhaal is tijdelijk opgeslagen in de state.');
  };

   return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>📚 New diary entry</Text>
          </View>

          <Pressable onPress={() => router.back()}>
            <Ionicons name="close" size={28} color="black" />
          </Pressable>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Location of vacation</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Banner image</Text>
          <Pressable style={styles.imagePicker} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.previewImage} />
            ) : (
              <Ionicons name="add" size={60} color="#9d9d9d" />
            )}
          </Pressable>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Country</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={country}
              onValueChange={(itemValue) => setCountry(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select a country" value="" />
              <Picker.Item label="Spain" value="sp" />
              <Picker.Item label="Greece" value="Gr" />
              <Picker.Item label="Italy" value="It" />
              <Picker.Item label="Switserland" value="Switserland" />
              <Picker.Item label="France" value="Fr" />
            </Picker>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Duration</Text>
          <TextInput
            style={styles.input}
            value={duration}
            onChangeText={setDuration}
            placeholder=""
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Diary entry</Text>
          <TextInput
            style={styles.textArea}
            value={diaryEntry}
            onChangeText={setDiaryEntry}
            multiline
            textAlignVertical="top"
          />
        </View>

        <Pressable style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  emoji: {
    fontSize: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ececec',
    borderRadius: 10,
    height: 42,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#111',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  imagePicker: {
    height: 118,
    backgroundColor: '#ececec',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  pickerWrapper: {
    backgroundColor: '#ececec',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  textArea: {
    backgroundColor: '#ececec',
    borderRadius: 10,
    minHeight: 90,
    paddingHorizontal: 12,
    paddingTop: 12,
    fontSize: 15,
    color: '#111',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  submitButton: {
    marginTop: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 0.5,
  },
});