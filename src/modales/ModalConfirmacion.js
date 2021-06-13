import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import CommonStyles from '../../assets/styles/CommonStyles';
import ModalStyles from '../../assets/styles/ModalStyles';

export default function ModalConfirmacion(props) {
    const {modalClose, confirmar, titulo} = props;
    return (
        <Modal transparent={true}>
            <View style={StylesModales.container}>
                <View style={StylesModales.content}>
                    <Text style={StylesModales.titulo}>{titulo}</Text>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={confirmar} style={StylesModales.btnModal}>
                            <Text style={StylesComunes.addBtn}>Sí</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => modalClose(false)} style={StylesModales.btnModal}>
                            <Text style={StylesComunes.addBtn}>No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const StylesComunes = CommonStyles;

const StylesModales = ModalStyles;

