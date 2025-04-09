import { getTableRow } from '$lib/server/api';
import { NotFoundError } from '$lib/server/errors';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, cookies }) => {
	const table = params['page'];
	const id = params['id'];
	const token = cookies.get('token')!;

	const row = await getTableRow(token, table, id);
	if (!row) throw NotFoundError('Записи с таким ID нет в базе данных');

	const columns = Object.keys(row) as unknown[] as (keyof typeof row)[];

	return {
		row,
		columns
	};
};
