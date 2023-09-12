import React from 'react';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import * as SecureStore from 'expo-secure-store';

interface RequestData<T> {
    data: T;
}

/**
 * Хук для запросов
 */
export const useCustomFetch = <T>() => {
    /**
     * Переменные ----------------
     */
    const [data, setData] = React.useState<any | null>(null);
    const [errors, setErrors] = React.useState<any | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const token = SecureStore.getItemAsync('token')

    /**
     * Хук отправки запроса ----------------
     */
    const useFetch = async (url: string, options?: AxiosRequestConfig) => {
        // Устанавливаем загрузку
        setIsLoading(true);
        try {
            // Настройки запроса
            const axiosOptions: AxiosRequestConfig = {
                baseURL: 'https://api.wiki.itl.systems',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                method: options?.method || 'GET',
                ...options,
            };

            // Вызываем запрос
            const {data}: AxiosResponse<RequestData<T>> = await axios(
                url,
                axiosOptions,
            );
            // Сохраняем данные
            setData(data);
            // Очищаем ошибки
            setErrors(null);
        } catch (err: any) {
            if (err.response) {
                // Конвертируем ошибки
                const messagesArray: string[] = [];
                for (const key in err.response.data.messages) {
                    messagesArray.push(...err.response.data.messages[key]);
                }
                // Сохранем ошибки
                setErrors(messagesArray);
            } else {
                // Сохранем ошибки
                setErrors(err.message);
            }
        } finally {
            // Убираем загрузку
            setIsLoading(false);
        }

        // Возвращаем данные
        return data;
    };

    // Возвращаем функцию
    return {useFetch, errors, isLoading};
};
