import {StyleSheet} from 'react-native';
import React from 'react';
import {CText} from '../../components/UI';
import {MainLayout} from "~layouts/main";

/**
 * Вкладка первая ----------------
 */
export default function HomeTab() {
    return (
        <MainLayout>
            <CText style={styles.title}>Tab One</CText>
        </MainLayout>
    );
}

/**
 * Стили ----------------
 */
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
});
