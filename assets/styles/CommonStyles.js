import { StyleSheet } from 'react-native';

export default CommonStyles = StyleSheet.create({
    input: {
        height: 40,
        color: '#000000',
        width: '80%',
        marginBottom: 25,
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#1e3040'
    },
    btnContent:{
        borderRadius: 25,
        padding:10,
        backgroundColor: '#1f4f8d',
        borderColor: '#1f4f8d',
        borderWidth:1
    },
    btnContent2:{
        borderRadius: 25,
        padding:10,
        backgroundColor: '#d8a633',
        borderColor: '#d8a633',
        borderWidth:1
    },
    btnText: {
        color: '#ffffff',
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
        backgroundColor: '#446c9e',
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
        backgroundColor:'#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginBottom: 5
       
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
        backgroundColor: '#446c9e',
        borderRadius: 50,
        paddingHorizontal:30,
        paddingVertical:10,
    }
})