'use client';

import React, { useEffect } from 'react';
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';

type ProvidersProps = {
	children: React.ReactNode;
};

function ThemeMigration() {
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		if (!theme) return;

		if (theme === 'professional') {
			setTheme('light');
			return;
		}

		const allowedThemes = new Set(['system', 'light', 'dark']);

		if (!allowedThemes.has(theme)) {
			setTheme('system');
		}
	}, [theme, setTheme]);

	return null;
}

export default function Providers({ children }: ProvidersProps) {
	return (
		<NextThemesProvider
			attribute="data-theme"
			defaultTheme="system"
			storageKey="mywebsite-theme"
			enableSystem
			themes={['light', 'dark']}>
			<ThemeMigration />
			{children}
		</NextThemesProvider>
	);
}
