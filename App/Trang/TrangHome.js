
import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'

const TrangHome =({navigation})=> {
  return (
    <View style={styles.container}>
      <View style={styles.c1} >
        <Text style={styles.t1}>  A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={styles.c2}>
        <Image style={styles.IMG}
        source={require('./../../App/IMG/xedo.png')}></Image>
      </View>
      <View style={styles.c3}>
        <Text style={styles.t2}>POWER BIKE SHOP</Text>
      </View>
      <View style={styles.c4}>
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
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center'
    
  },
  t1:{
    fontSize:20,
    fontFamily:'VT323',
    textAlign:'center',
    width:400,
    textAlign:'center',
    
  },
  c2:{
    width:359,
    height:350,
    borderRadius:50,
    backgroundColor:'#E941411A'
  },
  IMG:{
    width:292,
    height:270,
    resizeMode:"contain",
    margin:40
  },
  t2:{
    fontSize:24,
    fontWeight:'bold',
    width:200,
    textAlign:'center',
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
export default TrangHome;
