import React from 'react';

import {StyleSheet, Text, View,StatusBar,Button, Platform, TouchableOpacity, Dimensions, Touchable} from 'react-native';
import { TextInput} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {AuthContext} from '../components/Context';

const SignInScreen = ({navigation}) => {
   
    const[data, setData]= React.useState({
        email:'',
        password:'',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });

    const {signIn} = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.length != 0){
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        }else{
            setData({
                ...data,
                email: val,
                check_textInputChange: false
        });
    }
}

  const handlePasswordChange = (val) => {
      setData({
          ...data,
          password: val
      });

  }

  const updateSecureTextEntry = () => {
      setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
      });
  }
  const updateConfirmSecureTextEntry = () => {
    setData({
        ...data,
        confirm_secureTextEntry: !data.sconfirm_secureTextEntry
    });
}

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
       <Text style={styles.text_header}>Bienvenido</Text>
       </View>
       <Animatable.View 
       animation="fadeInUpBig"
       style={styles.footer}>
       <Text style={styles.text_footer}>E-mail</Text>
       <View style={styles.action}>
           <FontAwesome
               name="user-o"
               color="#05375a"
               size={20}
           />
           <TextInput
               placeholder="E-mail"
               style={styles.TextInput}
               autoCapitalize="none"
               onChangeText={(val)=>textInputChange(val)}
           />
           {data.check_textInputChange ? 
           <Animatable.View
              animation="bounceIn"
           >
           <Feather
           name="check-circle"
           color="green"
           size={20}
           />
           </Animatable.View>
           : null}
       </View>
       <Text style={[styles.text_footer,{
       marginTop: 35
    }]}>Contraseña</Text>
       <View style={styles.action}>
           <Feather
               name="lock"
               color="#05375a"
               size={20}
           />
           <TextInput
               placeholder="Contraseña"
               secureTextEntry={data.secureTextEntry ? true : false}
               style={styles.TextInput}
               autoCapitalize="none"
               onChangeText={(val)=>handlePasswordChange(val)}
           />
           <TouchableOpacity
              onPress={updateSecureTextEntry}
           >
           <Feather
           name="eye-off"
           color="grey"
           size={20}
           />
           </TouchableOpacity>
       </View>
       <TouchableOpacity>
           <Text style={{color: '#009387', marginTop:15}}>Olvide mi contraseña</Text>
       </TouchableOpacity>
       <View style= {styles.button}>
           <TouchableOpacity
           style={styles.signIn}
           onPress={() =>{signIn()}}
           >
           <LinearGradient
           colors={['#08d4c4', '#01ab9d']}
           style={styles.signIn}>
               <Text style={[styles.TextsignIn,{
                   color: '#fff'
               }]}>Entrar</Text>
           </LinearGradient>
           </TouchableOpacity>
           

           <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Registrarse</Text>
                </TouchableOpacity>

       </View>
    </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        fontSize: 40,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    TextsignIn:{
    fontSize: 18,
    fontWeight: 'bold'
    }
  });
  
export default SignInScreen;