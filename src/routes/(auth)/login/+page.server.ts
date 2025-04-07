import { loginUser } from '$lib/server/api';
import type { AuthUserData } from '$lib/server/types';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();

		const data = formData.entries().reduce(
			(prev, cur) => {
				prev[cur[0]] = cur[1];

				return prev;
			},
			{} as Record<string, any>
		) as any as AuthUserData;

		const token = await loginUser(data);

		if (token) {
			cookies.set('token', token, { httpOnly: true, path: '/', sameSite: 'lax' });

			// return { success: true, token };
			throw redirect(303, '/profile');
		} else {
			return fail(400, { message: 'Некорректные данные.' });
		}
	}
};
