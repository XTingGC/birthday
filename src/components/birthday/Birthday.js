import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native'

export default function Birthday(props) {
    const {birthday, deleteBirthday} = props;
    const pasado = birthday.days > 0 ? true : false;

    const infoDay = () =>{
        if(birthday.days === 0){
            return <Text style={{color:'#fff'}}>Es su cumpleaños</Text>
        }else{
            const dias = -birthday.days;
            return(
                <View style={styles.textCurrent}>
                    <Text>{dias}</Text>
                    <Text>{dias ===1 ? 'día' : 'días'}</Text>
                </View>
            );
        }
    };

    return (
        <TouchableOpacity style={[
            styles.card, 
            pasado 
            ? styles.pasado 
                : birthday.days==0 
                ? styles.actual 
            :  styles.current]}
            onPress={()=>deleteBirthday(birthday)}>
            <Text style={styles.userName}>
                {birthday.nombre} {birthday.apellidos}
            </Text>
            {pasado 
            ? <Text style={{color:'#fff'}}>Pasado</Text> 
            :infoDay() }
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: 'center',
        paddingHorizontal: 10,
        margin: 10,
        borderRadius: 15,
    },
    actual: {
        backgroundColor: '#559204',
    },
    current: {
        backgroundColor: '#1ae1f2',
    },
    pasado: {
        backgroundColor:'#820000',
    },
    userName: {
        color: '#fff',
        fontSize: 16,
    },
    textCurrent: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})