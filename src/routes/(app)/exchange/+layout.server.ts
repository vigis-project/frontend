import type { LayoutServerLoad } from './$types';
import { ForbiddenError } from '$lib/server/errors';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.userData) throw ForbiddenError();
};
