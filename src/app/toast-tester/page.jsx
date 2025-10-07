"use client";

import React from 'react';
import { Toaster } from 'react-hot-toast';
import {
    showLoading,
    hideLoading,
    showSuccess,
    showError,
    showInfo,
} from '@/utils/toasttheme';

export default function ToastTesterPage() {
    const handleAutoLoading = async () => {
        showLoading('Processing...');
        // simulate async work
        await new Promise((r) => setTimeout(r, 2500));
        hideLoading('Done');
    };

    const handleManualLoading = () => {
        showLoading('Long operation...');
    };

    const handleHideLoading = () => {
        hideLoading('Completed');
    };

    return (
        <div style={{ padding: 24 }}>
            <Toaster position="top-right" />
            <h1>Toast Tester</h1>
            <div style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
                <button onClick={() => showSuccess('Success!')}>Show Success</button>
                <button onClick={() => showError('Something went wrong')}>Show Error</button>
                <button onClick={() => showInfo('FYI: this is an info')}>Show Info</button>
                <button onClick={handleAutoLoading}>Show Loading (auto hide)</button>
                <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={handleManualLoading}>Show Loading (manual)</button>
                    <button onClick={handleHideLoading}>Hide Loading</button>
                </div>
            </div>
        </div>
    );
}
