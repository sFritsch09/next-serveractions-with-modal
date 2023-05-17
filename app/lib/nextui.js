'use client';
import { NextUIProvider } from '@nextui-org/react';

export default function ProviderUI({ children }) {
	return <NextUIProvider>{children}</NextUIProvider>;
}
