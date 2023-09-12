import * as Localization from 'expo-localization';

/**
 * Хук для определения языка
 */
export const useTranslate = (component: any) => {
    const currentLocale = Localization.locale; // Язык системы

    // Если язык казахский
    if (currentLocale === 'kk-KZ') return component.kz
    // Если язык русский
    else return component.ru;
};