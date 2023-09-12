import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { MainLayout } from '../../layouts/main';

/**
 * Вкладка вторая ----------------
 */
export default function SettingsTab() {
  return (
    <MainLayout>
      <Text style={ss.title}>Tab Two</Text>
    </MainLayout>
  );
}

/**
 * Стили ----------------
 */
const ss = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
