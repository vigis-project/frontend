// import { tables } from '$lib/server/db/schema';
import { getTableList } from '$lib/server/api';
import { ForbiddenError } from '$lib/server/errors';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	if (!locals.userData || !locals.userData.roles.includes('ADMIN')) throw ForbiddenError();

	let tableList = await getTableList(cookies.get('token')!);

	return {
		tableList
	};
};
