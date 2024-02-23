import { CategoryButton } from '@/components/category-button';
import Header from '@/components/header';
import { Product } from '@/components/product';
import { useCartStore } from '@/stores/card-store';
import { CATEGORIES, MENU } from '@/utils/data/products';
import { Link } from 'expo-router';
import { useRef, useState } from 'react';
import { FlatList, SectionList, Text, View } from 'react-native';

export default function App() {
  const cartStore = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState<String>('');
  const sectionListRef = useRef<SectionList>(null);
  const cartQuantity = cartStore.products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const handleCategorySelection = (category: String) => {
    setSelectedCategory(category);

    const sectionIndex = CATEGORIES.findIndex((item) => item === category);

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
  };

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartNumber={cartQuantity} />

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

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      />
    </View>
  );
}
