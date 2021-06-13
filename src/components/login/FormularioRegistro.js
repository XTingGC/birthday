import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { validateEmail } from '../../utils/validaciones';
import firebase from '../../utils/firebase';
import CommonStyles from '../../../assets/styles/CommonStyles';

export default function FormularioRegistro(props) {
    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({});

    const registrarse = () => {
        let errors = {};
        if (!formData.email || !validateEmail(formData.email)) 
            errors.email = true;
        else if (!formData.password) 
            errors.password = true;
        else if (!formData.repeatPassword) 
            errors.repeatPassword = true;
        else if (formData.password != formData.repeatPassword || formData.password.length < 6) {
            errors.password = true;
            errors.repeatPassword = true;
        }else{
            firebase
            .auth().createUserWithEmailAndPassword(formData.email, formData.password).then(() => {
                console.log('cuenta creada');
            }).catch(() => {
                setFormError({
                    email: true,
                    password: true,
                    repeatPassword: true,
                });
            });
        }
        setFormError(errors);
            
    };

    //type es el key, hay que ponerlo entre [] si se le quiere llamar
    const onChange = (e, type) =>{
        setFormData({...formData, [type]: e.nativeEvent.text});
    }

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
                //para que la contraseña este en puntos
                secureTextEntry={true}
                onChange={(e) => onChange(e,'password')}
            />
            <TextInput
                style={[StylesComunes.input, formError.repeatPassword && StylesComunes.error]}
                placeholder="Repetir contraseña"
                placeholderTextColor="#969696"
                //para que la contraseña este en puntos
                secureTextEntry={true}
                onChange={(e) => onChange(e,'repeatPassword')}
            />

            <TouchableOpacity onPress={registrarse} style={StylesComunes.btnContent}>
                <Text style={StylesComunes.btnText}>Registrarse</Text>
            </TouchableOpacity>

            <View style={StylesComunes.login}>
                <TouchableOpacity onPress={changeForm} style={StylesComunes.btnContent2}>
                    <Text style={StylesComunes.btnText}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

function defaultValue() {
    return {
        email: "",
        password: "",
        repeatPassword: ""
    }
}

const StylesComunes = CommonStyles;

