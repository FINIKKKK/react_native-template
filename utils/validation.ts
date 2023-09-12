import * as yup from 'yup';

/**
 * --------------------------------
 * Схемы валидации
 * --------------------------------
 */

/**
 * Авторизация
 */
export const LoginScheme = yup.object().shape({
    email: yup.string().email('email').required('required'),
    password: yup.string().required('required'),
});

/**
 * Регистрация
 */
export const RegisterScheme = yup.object().shape({
    first_name: yup.string().required('required'),
    last_name: yup.string().required('required'),
    email: yup.string().required('required').email('email'),
    phone: yup.string().required('required'),
    password: yup.string().required('required').min(6, 'password'),
});
