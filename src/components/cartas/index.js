import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';

export default Carta = ({item}) => {
  return (
    <View style={styles.fondo}>
      <View>
        <View style={styles.row}>
          <View style={[styles.caja, styles.tarjeta]}>
            <Image style={styles.imagen} source={{uri: item.imagen}} />
            <View style={styles.estrella}>
              <Image
                style={styles.iconEstrella}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
                }}
              />
              <Text style={styles.textoCalificacion}>{item.puntuacion}</Text>
            </View>
          </View>
          {/*  */}
          <View style={[styles.caja, styles.two]}>
            <View style={styles.nombre}>
              <Text style={styles.textoNombre}>{item.nombre}</Text>
              <View style={styles.ubicacion}>
                <Image
                  style={styles.iconUbicacion}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3421/3421853.png',
                  }}
                />
                <Text style={styles.textoUbicacion}>{item.direccion}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={[styles.box, styles.box2]}>
                <Image
                  style={styles.icons}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3030/3030336.png',
                  }}
                />
                <Text style={styles.textoValores}>{item.cupo}</Text>
              </View>

              <View style={[styles.box]}>
                <Image
                  style={styles.icons}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/5787/5787792.png',
                  }}
                />
                <Text style={styles.textoValores}>{item.baños}</Text>
              </View>
              <View style={[styles.box, styles.box3]}>
                <Image
                  style={styles.icons}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/5442/5442154.png',
                  }}
                />
                <Text style={styles.textoValores}>{item.espacio}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <View style={[styles.box, styles.box2]}>
                <Text style={styles.textoPrecio}>{item.precio}</Text>
              </View>
              <View style={[styles.boxCora]}>
                <Image
                  style={styles.iconCora}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/2943/2943758.png',
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
