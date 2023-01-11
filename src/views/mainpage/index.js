import {FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Carta from '../../components/cartas/index';
import BaseDatos from '../../../databas.json';

export default HomePage = () => {
  return (
    <FlatList
      data={BaseDatos}
      renderItem={({item, index}) => (
        <TouchableOpacity key={index}>
          <Carta item={item} />
        </TouchableOpacity>
      )}
    />
  );
};
