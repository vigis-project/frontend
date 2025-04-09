import type { Actions, PageServerLoad } from './$types';

export const actions: Actions = {
	default: async ({ request, params }) => {
		const formData = await request.formData();

		let data = {};
		/** @ts-ignore */
		formData.forEach((value, key) => (data[key] = value));

		const tableName = params['page'] as 'accounts' | 'businesses' | 'users' | 'services';
		const id = params['id'];

		// const table = tables[tableName];

		console.log(data);

		// await db.insert(table).values(formData)
	}
};
