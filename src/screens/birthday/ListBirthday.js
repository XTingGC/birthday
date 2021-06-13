import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import moment from 'moment';
import AddBirthday from '../../components/birthday/AddBirthday';
import ActionBar from '../components/ActionBar';
import Birthday from '../../components/birthday/Birthday';
import firebase from '../../utils/firebase';
import 'firebase/firestore';

firebase.firestore().settings({experimentalForceLongPolling: true});
const db =firebase.firestore(firebase);


export default function ListBirthday(props) {
    const {user} = props;
    const [verLista, setVerLista] = useState(true);
    const [birthday, setBirthday] = useState([]);
    const [pastBirthday, setPastBirthday] = useState([]);
    const [reloadData, setReloadData] = useState(false);

    useEffect(() => {
        setBirthday([]);
        setPastBirthday([]);
        db.collection(user.uid)
            .orderBy('dateBirth', 'asc')
            .get()
            .then((response) =>{
                const itemsArray = [];
                response.forEach((doc) => {
                    const datos = doc.data();
                    datos.id = doc.id;
                    itemsArray.push(datos);
                });
                formatData(itemsArray);
            });
        setReloadData(false);
    }, [reloadData]);

    const formatData = (items) =>{
        //obtengo la fecha actual
        const fechaActual = moment().set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        });

        const birthdayTempArray = [];
        const pastbirthdayTempArray = [];

        items.forEach((item) => {
            const dateBirth = new Date(item.dateBirth.seconds *1000);
            const dateBirthday = moment(dateBirth);
            const currentYear = moment().get('year');
            dateBirthday.set({year: currentYear});

            const diffDate = fechaActual.diff(dateBirthday, 'days');
            const itemTemp = item;
            itemTemp.dateBirth = dateBirthday;
            itemTemp.days = diffDate;

            if(diffDate <= 0 ){
                birthdayTempArray.push(itemTemp);
            }else{
                pastbirthdayTempArray.push(itemTemp);
            }
        });
        setBirthday(birthdayTempArray);
        setPastBirthday(pastbirthdayTempArray);   
    };

    const deleteBirthday = (birthday) =>{
        Alert.alert(
            'Eliminar cumpleaños',
            `¿Seguro que quieres eliminar el cumpleaños de ${birthday.nombre} ${birthday.apellidos}?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Eliminar',
                    onPress: () => {
                        db.collection(user.uid)
                            .doc(birthday.id)
                            .delete()
                            .then(() => {
                                setReloadData();
                            });
                    },
                },
            ],
            {cancelable: false},
        )
    }

    return (
        <View style={styles.container}>
            {verLista ? (
                <ScrollView style={styles.scrollView}>
                    {birthday.map((item, index) => (
                        <Birthday key={index} birthday={item} deleteBirthday={deleteBirthday}/>
                    ))}
                    {pastBirthday.map((item,index)=>(
                        <Birthday key={index} birthday={item} deleteBirthday={deleteBirthday}/>
                    ))}
                </ScrollView>
            ) : (
                <AddBirthday user={user} setVerLista={setVerLista} setReloadData={setReloadData}/>
            )}
            <ActionBar verLista={verLista} setVerLista={setVerLista}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%'
    },
    scrollView: {
        marginBottom: 50,
        width: '100%'
    }
})
