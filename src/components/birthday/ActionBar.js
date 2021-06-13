import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../../utils/firebase';
import CommonStyles from '../../../assets/styles/CommonStyles';
import ModalConfirmacion from '../../modales/ModalConfirmacion';

export default function ActionBar(props) {
    const {verLista, setVerLista} = props;
    const [modalOpen, setModalOpen] = useState(false)
    function logoff(){
        firebase.auth().signOut();
    }

    return (
        <>
        {modalOpen ?
        <ModalConfirmacion modalClose={setModalOpen}
        confirmar={logoff}
        titulo={'¿Seguro que desea cerrar sesión?'}
        />
        :
        <></>}
        <View style={StylesComunes.viewFooter}>
            <View style={StylesComunes.viewClose}>
                <Text style={StylesComunes.text} onPress={()=>setModalOpen(true)}>
                    Cerrar Sesión
                </Text>
            </View>
            <View style={StylesComunes.viewAdd}>
                <Text style={StylesComunes.text} onPress={() => setVerLista(!verLista)}>
                    {verLista ? "Nueva Fecha" :  "Cancelar"}
                </Text>
            </View>
        </View>
        </>
    )
}

const StylesComunes = CommonStyles;
