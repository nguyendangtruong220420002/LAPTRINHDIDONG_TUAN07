import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TrangXe =({navigation})=> {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>The world’s Best Bike</Text>
      <View>
        <View>
          <Pressable style={styles.button} 
                onPress={()=>{ navigation.navigate("TrangXe")}} 
                 >
              <Text style={styles.textbutton}>Get Started</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.button} 
                onPress={()=>{ navigation.navigate("XeTheThao")}} 
                 >
              <Text style={styles.textbutton}>Get Started</Text>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.button} 
                onPress={()=>{ navigation.navigate("XeThuong")}} 
                 >
              <Text style={styles.textbutton}>Get Started</Text>
          </Pressable>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
  button:{

    backgroundColor:'#E94141',
    width:'340px',
    height:'45px',
    borderRadius:'30px',
  },
  textbutton:{
    fontSize:'27px',
    color:'#FEFEFE',
    left:110,
    top:8,
    fontFamily:'VT323'
  }

});
export default TrangXe;
