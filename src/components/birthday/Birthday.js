import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import CommonStyles from '../../../assets/styles/CommonStyles';

export default function Birthday(props) {
    const {birthday, deleteBirthday} = props;
    const pasado = birthday.days > 0 ? true : false;

    const infoDay = () =>{
        if(birthday.days === 0){
            return <Text style={{color:'#fff'}}>Es su cumpleaños</Text>
        }else{
            const dias = -birthday.days;
            return(
                <View style={StylesComunes.textCurrent}>
                    <Text>{dias}</Text>
                    <Text>{dias ===1 ? 'día' : 'días'}</Text>
                </View>
            );
        }
    };

    return (
        <TouchableOpacity style={[
            StylesComunes.card, 
            pasado 
            ? StylesComunes.pasado 
                : birthday.days==0 
                ? StylesComunes.actual 
            :  StylesComunes.current]}
            onPress={()=>deleteBirthday(birthday)}>
            <Text style={StylesComunes.userName}>
                {birthday.nombre} {birthday.apellidos}
            </Text>
            {pasado 
            ? <Text style={{color:'#fff'}}>Pasado</Text> 
            :infoDay() }
        </TouchableOpacity>

    )
}

const StylesComunes = CommonStyles;


