import Button from '@/components/button';
import { LinkButton } from '@/components/link-button';
import { useCartStore } from '@/stores/card-store';
import { PRODUCTS } from '@/utils/data/products';
import { FormatCurrency } from '@/utils/functions/format-currency';
import { Feather } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { Image, Text, View } from 'react-native';

export default function Product() {
  const { id } = useLocalSearchParams();
  const cartStore = useCartStore();

  const product = PRODUCTS.filter((item) => item.id === id)[0];

  function handleAddToCart() {
    cartStore.addProduct(product);
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-lime-400 text-2xl font-heading my-2">
          {FormatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <View key={ingredient} className="flex-row items-center gap-2">
            <View className="w-1 h-1 rounded-full bg-slate-400" />
            <Text className="text-slate-400 font-body text-base leading-6">
              {ingredient}
            </Text>
          </View>
        ))}
      </View>
      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
}
