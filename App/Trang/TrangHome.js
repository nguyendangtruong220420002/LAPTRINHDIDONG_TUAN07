import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'

const TrangHome =({navigation})=> {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Pressable style={styles.button} 
                onPress={()=>{ navigation.navigate("TrangXe")}} 
                 >
              <Text style={styles.textbutton}>Get Started</Text>
        </Pressable>
      </View>

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
  button:{
    backgroundColor:'#E94141',
    width:'340px',
    height:'61px',
    borderRadius:'30px',
  },
  textbutton:{
    fontSize:'27px',
    color:'#FEFEFE',
    left:100

  }
});
export default TrangHome;
