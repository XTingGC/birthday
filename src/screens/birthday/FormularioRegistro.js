import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { validateEmail } from '../../utils/validaciones';
import firebase from '../../utils/firebase'

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
                style={[styles.input, formError.email && styles.error]}
                placeholder="Correo electrónico"
                placeholderTextColor="#969696"
                onChange={(e) => onChange(e, 'email')}
            />
            <TextInput
                style={[styles.input, formError.password && styles.error]}
                placeholder="Contraseña"
                placeholderTextColor="#969696"
                //para que la contraseña este en puntos
                secureTextEntry={true}
                onChange={(e) => onChange(e,'password')}
            />
            <TextInput
                style={[styles.input, formError.repeatPassword && styles.error]}
                placeholder="Repetir contraseña"
                placeholderTextColor="#969696"
                //para que la contraseña este en puntos
                secureTextEntry={true}
                onChange={(e) => onChange(e,'repeatPassword')}
            />

            <TouchableOpacity onPress={registrarse}>
                <Text style={styles.btnText}>Registrarse</Text>
            </TouchableOpacity>

            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.btnText}>Iniciar sesión</Text>
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

const styles = StyleSheet.create({
    input: {
        height: 40,
        color: '#fff',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#1e3040',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1e3040'
    },
    btnText: {
        color: '#000000',
        fontSize: 18,
    },
    login: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
    error: {
        borderColor: '#940c0c',
        backgroundColor: '#940c0c',
    }
})
