import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from '../../css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services';
export default function Login({...props}){
    const [email,SetEmail] = useState('');
    const [senha,SetSenha] = useState('');
    const [check,setCheck] = useState(false);

    const navi = () =>{
        props.navigation.navigate('Register');
    }

    const log = () => {
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            props.navigation.navigate('Home')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return(
        <View style={styles.container}>
            <StatusBar translucent/>
            <Text style={{fontSize:50, color:'#fffffff8', fontFamily:'Rajdhani-Bold'}}>Log In</Text>
            <TextInput style={styles.inputType1} placeholder='Username' placeholderTextColor={'#ffffff'} value={email} onChangeText={(text) => SetEmail(text)}/>
            <TextInput style={styles.inputType1} placeholder='Password' placeholderTextColor={'#ffffff'} value={senha} onChangeText={(text) => SetSenha(text)}/>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                    <CheckBox
                    disabled={false}
                    value={check}
                    onValueChange={(value) => setCheck(value)}
                    tintColors={{true:'#a176c9ff'}}
                    />
                    <Text style={{color:'#ffffff88'}}>Remember me</Text>
                    <TouchableOpacity style={{marginLeft:70}}>
                        <Text style={{color:'#ae60dbd8'}}>
                            Forgot Password
                        </Text>
                    </TouchableOpacity>

            </View>
            
            <View style={{flexDirection:'row', marginTop:20}}>
                <TouchableOpacity style={styles.buttonType1} onPress={() => navi()}>
                    <Text style={{color:'#eeeeee', fontSize:20, fontFamily:'Rajdhani-SemiBold'}}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}