import { Tabs } from 'expo-router';
import { Icon } from '../../components/UI';

/**
 * Шаблон для страниц вкладок ----------------
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={27} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" size={27} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
