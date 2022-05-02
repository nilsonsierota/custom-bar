import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./pages/Home";
import New from "./pages/New";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

import { Entypo, Feather } from "@expo/vector-icons";
import { ButtonNew } from "./components/ButtonNew";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "transparent",
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: "#fff",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesquisar"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Novo"
        component={New}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, size }) => (
            <ButtonNew size={size} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={Notification}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="notification" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
