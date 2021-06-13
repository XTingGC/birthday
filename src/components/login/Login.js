import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import {validateEmail} from '../../utils/validaciones';
import firebase from '../../utils/firebase';
import CommonStyles from '../../../assets/styles/CommonStyles';

export default function Login(props) {
    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({})

    const login = () =>{
        let errors = {};
        if(!formData.email || !validateEmail(formData.email))
            errors.email = true;
        else if(!formData.password)
            errors.password = true;
        else{
            firebase
                .auth()
                .signInWithEmailAndPassword(formData.email, formData.password)
                .catch(()=>{
                    setFormError({
                        email: true,
                        password: true,
                    });
                });
        }
        setFormError(errors);
        
    };

    const onChange = (e,type)=>{
        setFormData({...formData, [type]: e.nativeEvent.text});
    };
    return (
        <>
            <TextInput 
                style={[StylesComunes.input, formError.email && StylesComunes.error]}
                placeholder="Correo electrónico"
                placeholderTextColor="#969696"
                onChange={(e) => onChange(e, 'email')}
            />
            <TextInput
                style={[StylesComunes.input, formError.password && StylesComunes.error]}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={(e) => onChange(e, 'password')}
            />
            <TouchableOpacity onPress={login}>
                <Text style={StylesComunes.btnText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <View style={StylesComunes.registrarse}>
            <TouchableOpacity  onPress={changeForm}>
                <Text style={StylesComunes.btnText}>Registrarse</Text>
            </TouchableOpacity>
            </View>
          
        </>
    )
}

function defaultValue(){
    return {
        email: "",
        password: ""
    }
}

const StylesComunes = CommonStyles;

