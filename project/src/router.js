import { createWebHistory, createRouter } from 'vue-router'

import PlanetScreen from "./screens/PlanetScreen.vue";
import CharactersScreen from "./screens/CharactersScreen.vue";
import VehiclesScreen from "./screens/VehiclesScreen.vue";
import HomeScreen from "@/screens/HomeScreen.vue";

const routes = [
    { path: '/', component: HomeScreen, name: 'Home' },
    { path: '/planets', component: PlanetScreen, name: 'Planets' },
    { path: '/characters', component: CharactersScreen, name: 'Characters' },
    { path: '/vehicles', component: VehiclesScreen, name: 'Vehicles' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router