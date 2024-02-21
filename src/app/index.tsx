import { CategoryButton } from '@/components/category-button';
import Header from '@/components/header';
import { CATEGORIES } from '@/utils/data/products';
import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<String>('');

  const handleCategorySelection = (category: String) => {
    setSelectedCategory(category);
  };

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartNumber={8} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            onPress={() => handleCategorySelection(item)}
            isSelected={item == selectedCategory}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
