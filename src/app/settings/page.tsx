'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'next-themes';
import Headline from '../_components/Headline';

type ThemeOption = {
	value: 'system' | 'light' | 'dark' | 'professional';
	label: string;
	description: string;
	preview: {
		primary: string;
		background: string;
		text: string;
	};
};

function Settings() {
	const { theme, resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const themeOptions: ThemeOption[] = useMemo(
			() => [
				{
					value: 'system',
					label: 'System',
					description: 'Follow your OS light/dark preference.',
					preview: {
						primary: '#0f766e',
						background: 'linear-gradient(90deg, #fff 50%, #000 50%)',
						text: 'linear-gradient(90deg, #000 50%, #fff 50%)',
					},
				},
				{
					value: 'light',
					label: 'Light',
					description: 'Clean light theme with teal accents.',
					preview: {
						primary: '#0f766e',
						background: '#f8fafc',
						text: '#0f172a',
					},
				},
				{
					value: 'dark',
					label: 'Dark',
					description: 'Deep dark theme with teal accents.',
					preview: {
						primary: '#2dd4bf',
						background: '#0b1220',
						text: '#e2e8f0',
					},
				},
				{
					value: 'professional',
					label: 'Professional',
					description: 'Classic neutral palette with ink accents.',
					preview: {
						primary: '#0f172a',
						background: '#ffffff',
						text: '#0f172a',
					},
				},
			],
			[]
		);

	const selectedThemeValue = (theme ?? 'system') as ThemeOption['value'];
	const selectedThemeLabel =
		themeOptions.find((t) => t.value === selectedThemeValue)?.label ??
		'System';

	return (
		<div className="w-full max-w-4xl mx-auto">
			<Headline text="Settings" />
			<div className="mb-8 text-secondary">
				Theme is stored in your browser. Current:{' '}
				<span className="font-medium text-text">
					{mounted && theme === 'system'
						? `${selectedThemeLabel} (${resolvedTheme})`
						: selectedThemeLabel}
				</span>
			</div>

			<fieldset>
				<legend className="text-3xl font-bold mb-4">Color Theme</legend>
				<div
					role="radiogroup"
					aria-label="Color theme picker"
					className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{themeOptions.map((option) => (
						<label key={option.value} className="block">
							<input
								type="radio"
								name="theme"
								value={option.value}
								checked={mounted && theme === option.value}
								onChange={() => setTheme(option.value)}
								disabled={!mounted}
								className="sr-only peer"
							/>
							<div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-contrast p-4 cursor-pointer hover:bg-contrastDark peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary">
								<div>
									<div className="font-semibold text-text">
										{option.label}
									</div>
									<div className="text-sm text-secondary">
										{option.description}
									</div>
								</div>
								<div className="flex items-center gap-2">
									<span
										aria-hidden="true"
										className="h-5 w-5 rounded-full border border-border"
										style={{ background: option.preview.primary }}
									/>
									<span
										aria-hidden="true"
										className="h-5 w-5 rounded-full border border-border"
										style={{
											background: option.preview.background,
										}}
									/>
									<span
										aria-hidden="true"
										className="h-5 w-5 rounded-full border border-border"
										style={{ background: option.preview.text }}
									/>
								</div>
							</div>
						</label>
					))}
				</div>
			</fieldset>
		</div>
	);
}

export default Settings;
