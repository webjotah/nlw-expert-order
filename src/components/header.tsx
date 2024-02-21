import { Feather } from '@expo/vector-icons';
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';

type HeaderProps = {
  title: string;
  cartNumber?: number;
};

export default function Header({ title, cartNumber = 0 }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require('@/assets/logo.png')} className="h-6 w-32" />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {cartNumber > 0 && (
        <TouchableOpacity className="relative" activeOpacity={0.5}>
          <View className="z-10 top-2 -right-3.5 bg-lime-300 w-4 h-4 items-center justify-center rounded-full">
            <Text className="text-slate-950 text-xs font-bold">
              {cartNumber}
            </Text>
          </View>

          <Feather name="shopping-bag" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}
