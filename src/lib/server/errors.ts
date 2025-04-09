import { error } from '@sveltejs/kit';

export function NotFoundError(message?: string) {
	return error(404, { message: message ?? 'Данной страницы не существует.' });
}

export function ForbiddenError(message?: string) {
	return error(403, { message: message ?? 'У вас нет доступа к данной странице.' });
}
