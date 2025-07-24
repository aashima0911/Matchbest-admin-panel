import LayoutProvider from '../components/layout/LayoutProvider';
import React from 'react';
import CareersList from './components/CareersList';

export default function page() {
    return (
        <div className="bg-gradient-to-b from-[#0F0722] to-black text-white pt-14 sm:pt-24 min-h-screen">
            <LayoutProvider>
                <CareersList />
            </LayoutProvider>
        </div>
    );
} 