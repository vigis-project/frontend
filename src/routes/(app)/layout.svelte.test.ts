import { describe, test, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, getByRole } from '@testing-library/svelte';
import Layout from './+layout.svelte';
import Page from './+page.svelte';
import { createRawSnippet, mount, unmount } from 'svelte';

describe('Main layout structure', () => {
	it('should have header, main and footer', () => {
		const page = createRawSnippet(() => {
			return {
				render: () => `<div></div>`,
				setup: (target) => {
					const comp = mount(Page, { target });
					return () => unmount(comp);
				}
			};
		});
		mount(Layout, { target: document.body, props: { children: page } });

		expect(getByRole(document.body, 'banner')).toBeInTheDocument();
		expect(getByRole(document.body, 'main')).toBeInTheDocument();
		expect(getByRole(document.body, 'contentinfo')).toBeInTheDocument();
	});
});
