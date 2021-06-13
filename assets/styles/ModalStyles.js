import { StyleSheet } from 'react-native';

export default ModalStyles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems:'center',
                

    },
    content: {
        backgroundColor: '#ffffff',
        opacity:1,
        width: '80%',
        height: '20%',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000'

    },
    btnModal:{
        borderRadius: 5,
        paddingHorizontal:30,
        paddingVertical:5,
        margin:5,
        backgroundColor: '#1f4f8d',
        borderColor: '#1f4f8d',
        borderWidth:1
        
    },
    titulo:{
        fontWeight:'bold',
        fontSize: 18,
        marginBottom:20
    }
})