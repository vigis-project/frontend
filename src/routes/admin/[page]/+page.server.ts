import { getTableData } from '$lib/server/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, params, cookies }) => {
	const table = params['page'];
	const page = Number(url.searchParams.get('page')) || 1;
	const limit = Number(url.searchParams.get('limit')) || 15;
	const token = cookies.get('token')!;

	const rows = await getTableData(token, table, { limit, page });

	const columns = Object.keys(rows[0] || {}) as unknown[] as string[];

	return {
		columns,
		rows,
		limit,
		page,
		rowsCount: rows.length
	};
};
