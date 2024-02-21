import Loading from '@/components/loading';
import {
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  useFonts,
} from '@expo-google-fonts/jost';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <Slot />
    </SafeAreaView>
  );
}
