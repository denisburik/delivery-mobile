import { useState } from 'react';
import { Modal, View, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Category } from '../category';

const { height } = Dimensions.get('window');

export function Search() {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <View>
    
      <TouchableOpacity 
        className='w-full flex-row border border-slate-300 rounded-2xl h-14 items-center gap-2 px-4 bg-transparent'
        onPress={() => setModalVisible(true)}
      >
        <Feather name='search' size={24} color="#64748b"/>
        <Text className='text-gray-400'>Procure sua comida...</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className='flex-1 justify-end items-center bg-black/50 w-full'>
          <View className='w-full h-full bg-white p-4 rounded-t-lg shadow-lg'>
            <View className='flex-row items-center mb-5'>
              <TouchableOpacity
                className='flex-row items-center'
                onPress={() => setModalVisible(false)}
              >
                <Feather name='chevron-left' size={30} color="#000000"/>
                <Text className='text-xl'>Voltar</Text>
              </TouchableOpacity>
            </View>
            <View className='flex-row items-center border-b border-gray-300 mb-5 px-4 py-2'>
              <Feather name='search' size={24} color="#64748b"/>
              <TextInput
                className='flex-1 ml-2'
                placeholder="Digite sua busca..."
                value={searchText}
                onChangeText={setSearchText}
                autoFocus
              />
            </View>
            <Category />
          </View>
        </View>
      </Modal>
    </View>
  );
}
