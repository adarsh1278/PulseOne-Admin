"use client";

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { CheckAuth } from '@/component/validate';
import { Toaster } from 'react-hot-toast';

export default function ClientProvider({ children }) {
    return (
        <Provider store={store}>
            <CheckAuth />
            {children}
            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Default options for all toasts
                    duration: 4000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </Provider>
    );
}