import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { CategoryItem } from './item';

export interface CategoryProps {
  id: string;
  name: string;
  description: string;
}

export function Category() {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch('http://192.168.15.53:3000/categories');
      const data = await response.json();
      setCategories(data);
    }

    getCategories();
  }, []);

  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => <CategoryItem category={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      contentContainerStyle={{ gap: 14, paddingHorizontal: 14 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
