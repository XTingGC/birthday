import { StyleSheet } from 'react-native';

export default CommonStyles = StyleSheet.create({
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
    registrarse: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
    error: {
        borderColor: '#940c0c',
        backgroundColor: '#940c0c',
    },
    login: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
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
    },
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    datepicker:{
        justifyContent: 'center',
    },
    addBtn:{
        fontSize: 18,
        color: '#fff',
    },
    viewFooter:{
        position:'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginBottom: 20,
    },
    viewClose:{
        backgroundColor:'#820000',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textAlign:'center'
    },
    viewAdd:{
        backgroundColor: '#1ea1f2',
        borderRadius: 50,
        paddingHorizontal:30,
        paddingVertical:10,
    }
})