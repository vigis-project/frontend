import { getTableFields } from '$lib/server/api';
import { NotFoundError } from '$lib/server/errors';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent, cookies }) => {
	const table = params['page'];
	const token = cookies.get('token')!;
	const { tableList } = await parent();

	const fields = await getTableFields(token, table);

	if (!fields) throw NotFoundError('Такой таблицы не существует');

	return {
		fields
	};
};

function coerceType(typeName: string): string {
	switch (typeName) {
		case 'ZodString':
			return 'string';
		case 'ZodDate':
			return 'object';
		case 'ZodNumber':
			return 'number';
		case 'ZodBoolean':
			return 'boolean';
		case 'ZodEnum':
			return 'string';
	}

	return 'object';
}

export const actions: Actions = {
	default: async ({ request, params }) => {
		const formData = await request.formData();

		let data = {};
		/** @ts-ignore */
		formData.forEach((value, key) => (data[key] = value));

		const tableName = params['page'] as 'accounts' | 'businesses' | 'users' | 'services';

		// const table = tables[tableName];

		console.log(data);

		// await db.insert(table).values(formData)
	}
};
