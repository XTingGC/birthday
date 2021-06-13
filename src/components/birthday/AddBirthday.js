import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import firebase from '../../utils/firebase';
import 'firebase/firestore';
import CommonStyles from '../../../assets/styles/CommonStyles';

//esto es para que funcione en android, para ios es base-64
firebase.firestore().settings({experimentalForceLongPolling: true});
const db = firebase.firestore(firebase);

export default function AddBirthday(props) {
    const {user, setVerLista, setReloadData} = props;
    const [formData, setFormData] = useState({});
    const [isDatePicketVisible, setIsDatePicketVisible] = useState(false);
    const [formError, setFormError] = useState({});
    const [cumple, setCumple] = useState(new Date())

    const handlerConfirm = (date) =>{
        setIsDatePicketVisible(false);
        const dateBirth = date.nativeEvent.timestamp;
        if(dateBirth != null && dateBirth !=''){
            dateBirth.setHours(0);
            dateBirth.setMinutes(0);
            dateBirth.setSeconds(0);
            //poner hora a 0
            //si se pone una vez dateBirth toma el nombre como key y el valor como value
            setFormData({...formData, dateBirth})
        }
    };

    const onChange = (evento, type) => {
        setFormData({...formData, [type]: evento.nativeEvent.text})
    };

    const onSubmit = () => {
        let errors = {};
        if(!formData.nombre || !formData.apellidos || !formData.dateBirth){
            if(!formData.nombre)
                errors.nombre = true;
            if(!formData.apellidos)
                errors.apellidos = true;
            if(!formData.dateBirth)
                errors.dateBirth = true;
        }else{
            const datos = formData;
            //solo vamos a comparar mes y dia.
            datos.dateBirth.setYear(0);
            //crea una coleccion con el uid
            db.collection(user.uid)
                .add(datos)
                .then(()=>{
                    setReloadData(true);
                    setVerLista(true);
                })
                .catch(() => {
                    setFormError({
                        nombre: true,
                        apellidos: true,
                        dateBirth: true
                    })
                });
        }

        setFormError(errors)

    }

    return (
        <>
            <View style={StylesComunes.container}>
                <TextInput
                style={[StylesComunes.input, formError.nombre && {borderColor: '#940c0c'}]}
                placeholder= 'Nombre'
                placeholderTextColor='#969696'
                onChange={(evento)=>onChange(evento, 'nombre')}
                />
                <TextInput
                style={[StylesComunes.input, formError.apellidos && {borderColor: '#940c0c'}]}
                placeholder= 'Apellidos'
                placeholderTextColor='#969696'
                onChange={(evento)=>onChange(evento, 'apellidos')}
                />
                <View style={[StylesComunes.input, StylesComunes.datepicker, formError.dateBirth && {borderColor: '#940c0c'}]}>
                    <Text style={{color: formData.dateBirth ? '#fff' : '#969696', fontSize: 18,}} 
                        onPress={() => setIsDatePicketVisible(true)}>
                        {formData.dateBirth 
                            ? moment(formData.dateBirth).format('LL')
                            : 'Fecha de nacimiento'
                        }
                    </Text>
                </View>
                <TouchableOpacity onPress={onSubmit}>
                    <Text style={StylesComunes.addBtn}>Crear Cumpleaños</Text>
                </TouchableOpacity>
            </View>
            {isDatePicketVisible &&
                <DateTimePicker
                value={cumple}
                onChange={handlerConfirm}
                />
            }

        </>
    )
}

const StylesComunes = CommonStyles;


