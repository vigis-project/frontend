import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		// TODO: rest of the auth

		return false;
	}
};
