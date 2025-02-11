import { Text, View, ScrollView } from 'react-native';
import { Header } from '../components/header';
import { Banner } from '../components/banner';
import { Search } from "../components/search";
import { Section } from '../components/section'
import { TrendingFoods } from '../components/trending';
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from '../components/list'

import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
	return (
		<ScrollView
			style={{ flex: 1 }}
			className="bg-slate-100"
			showsVerticalScrollIndicator={false}
		>
			<View className="w-full px-4" style={{ marginTop: statusBarHeight / 2 }}>
				<Header/>
				<Banner/>
				<Search/>
			</View>

			<Section
        name="Comidas em alta"
        label="Veja mais"
        action={ () => console.log("click foods")}
        size="text-2xl"
      />
      <TrendingFoods/>

      <Section
        name="Restaurantes em alta"
        label="Veja todos"
        action={ () => console.log("click restaurants")}
        size="text-2xl"
      />
      <Restaurants/>

      <Section
        name="Restaurantes próximos"
        label="Veja todos"
        action={ () => console.log("CLICOU NO RESTAURANTES")}
        size="text-xl"
      />
      <RestaurantVerticalList/>
		</ScrollView>
	);
}