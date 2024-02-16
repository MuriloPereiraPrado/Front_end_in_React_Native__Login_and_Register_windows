import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from '../../css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services';

export default function Register({...props}){
    const [email,SetEmail] = useState('');
    const [senha,SetSenha] = useState('');
    const [csenha,SetCsenha] = useState('');
    const [nome,SetNome] = useState('');
    const [check,setCheck] = useState(false);

    const naviLogin = () =>{
        props.navigation.navigate('Login');
    }

    const regis = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;

            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });

    }
    return(
        <View style={styles.container}>
            <Text style={{fontSize:50, color:'#fffffff8', fontFamily:'Rajdhani-Bold'}}>Sign Up</Text>
            <TextInput style={styles.inputType1} placeholderTextColor={'#ffffff'} placeholder='Name' value={nome} onChangeText={(text) => SetNome(text)}/>
            <TextInput style={styles.inputType1} placeholderTextColor={'#ffffff'} placeholder='Email' value={email} onChangeText={(text) => SetEmail(text)}/>
            <TextInput style={styles.inputType1} placeholderTextColor={'#ffffff'} placeholder='Password' value={senha} onChangeText={(text) => SetSenha(text)}/>
            <TextInput style={styles.inputType1} placeholderTextColor={'#ffffff'} placeholder='Re-Type Passowrd' value={csenha} onChangeText={(text) => SetCsenha(text)}/>
            <View style={{marginTop:20}}>
                <View style={{flexDirection:'row', alignItems:'center',marginLeft:20, marginBottom:20}}>
                    <CheckBox
                            disabled={false}
                            value={check}
                            onValueChange={(value) => setCheck(value)}
                            tintColors={{true:'#a176c9ff'}}
                    />
                    <Text style={{color:'#ffffff'}}>I accept the </Text>  
                    <TouchableOpacity>
                        <Text style={{color:'#ca57f8'}}>Privacy Policy</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#ffffff'}}> and </Text>
                    <TouchableOpacity>
                        <Text style={{color:'#ca57f8'}}>Terms</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonType1} onPress={() => naviLogin()}>
                    <Text style={{color:'#eeeeee', fontSize:20, fontFamily:'Rajdhani-SemiBold'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}