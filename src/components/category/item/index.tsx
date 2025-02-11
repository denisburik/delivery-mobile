import { View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import { CategoryProps } from '..';

export function CategoryItem({ category }: { category: CategoryProps }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <Pressable className='flex w-48 h-48 bg-red-200 rounded-2xl relative' onPress={() => console.log('view with in filter')}>
      <View className='flex flex-row bg-neutral-500 gap-1 rounded-2xl w-48 h-48 items-center justify-center'>
        <Pressable
          onPress={toggleFavorite}
          className='absolute top-3 right-4'
        >
          <Ionicons name="heart" size={24} color={isFavorite ? "#ff0000" : "#c3c3c3"} />
        </Pressable>
        <Text className='text-white mt-1'>{category.name}</Text>
      </View>
    </Pressable>
  );
}
