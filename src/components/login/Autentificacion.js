import React, {useState} from 'react';
import { StyleSheet ,View, Text, Image } from 'react-native';
import Login from '../Login';
import FormularioRegistro from '../../screens/birthday/FormularioRegistro';

export default function Autentificacion() {
    const [isLogin, setIsLogin] = useState(true);

    const changeForm = () =>{
        setIsLogin(!isLogin);
    };

    return (
        <View style={styles.view}>
            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
            {isLogin ? <Login changeForm={changeForm}/> : <FormularioRegistro changeForm={changeForm}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: '80%',
        height: 240,
        marginTop: 50,
        marginBottom: 50,
    },

})