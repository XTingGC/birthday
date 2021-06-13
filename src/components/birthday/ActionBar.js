import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../../utils/firebase';
import CommonStyles from '../../../assets/styles/CommonStyles';

export default function ActionBar(props) {
    const {verLista, setVerLista} = props;

    return (
        <View style={StylesComunes.viewFooter}>
            <View style={StylesComunes.viewClose}>
                <Text style={StylesComunes.text} onPress={() => firebase.auth().signOut()}>
                    Cerrar Sesión
                </Text>
            </View>
            <View style={StylesComunes.viewAdd}>
                <Text style={StylesComunes.text} onPress={() => setVerLista(!verLista)}>
                    {verLista ? "Nueva Fecha" :  "Cancelar"}
                </Text>
            </View>
        </View>
    )
}

const StylesComunes = CommonStyles;
