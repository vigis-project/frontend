import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data, parent }) => {
	return await parent();
};
