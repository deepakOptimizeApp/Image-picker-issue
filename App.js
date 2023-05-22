import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as ImagePicker from 'expo-image-picker'

export default function App() {

  const openGallery=async()=>{
    console.log("openGallery")
    try {
      const result=await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.All,
        exif:false,
        quality: 1,
        base64:false
      })
      console.log(result);
    } catch (error) {
      console.log(error);
    }
 
  }
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={()=>openGallery()}>
      <Text>Select image</Text>
    </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
