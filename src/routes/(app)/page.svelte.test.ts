import { describe, test, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { getByRole } from '@testing-library/svelte';
import Layout from './+layout.svelte';
import Page from './+page.svelte';
import { createRawSnippet, mount, unmount } from 'svelte';

//describe('Main page structure', () => {
	//it('should have paragraph', () => {
		//mount(Page, { target: document.body });

		//const paragraph = getByRole(document.body, 'paragraph');
		//expect(paragraph).toBeInTheDocument();
	//});
//});
