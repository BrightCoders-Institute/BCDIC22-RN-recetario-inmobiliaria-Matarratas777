import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../views/mainpage/styles';
import Carta from '../../components/cartas/index';
import BaseDatos from '../../../databas.json'


export default HomePage = ()=>{
    return(
      
            <View  style={styles.fondo}>
                <View>
                    { BaseDatos.map((item, index)=>(
                        <Carta key={index} item={item}/>
                    ))
                    }
                </View>
            </View>
        
    )
}
