import type { AuthUserData, CreateUserData, User } from './types';
import { env } from '$env/dynamic/private';

const BASE_URL = `http://${env['API_HOST']}:${env['API_PORT'] ?? 3000}/`;

export async function registerUser(data: CreateUserData) {
	try {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const response = await fetch(BASE_URL + 'auth/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers
		});

		if (response.ok) {
			const { token }: { token: string } = await response.json();

			return token;
		} else {
			console.log(await response.json());
			// Handle error
			return undefined;
		}
	} catch (err) {
		console.error(err);

		return undefined;
	}
}

export async function loginUser(data: AuthUserData) {
	try {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const response = await fetch(BASE_URL + 'auth/login', {
			method: 'POST',
			body: JSON.stringify(data),
			headers
		});

		if (response.ok) {
			const { token }: { token: string } = await response.json();

			return token;
		} else {
			// TODO:
		}
	} catch (err) {
		console.error(err);

		return undefined;
	}
}

export async function getMe(token: string) {
	try {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${token}`);

		const response = await fetch(BASE_URL + 'users/me', {
			method: 'GET',
			headers
		});

		if (response.ok) {
			const userData: User = await response.json();

			return userData;
		} else {
			// TODO:
		}
	} catch (err) {
		console.error(err);

		return undefined;
	}
}

export async function getUserData(token: string, id: number) {
	try {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${token}`);

		const response = await fetch(BASE_URL + `users/${id}`, {
			method: 'GET',
			headers
		});

		if (response.ok) {
			const userData: User = await response.json();

			return userData;
		} else {
			// TODO:
		}
	} catch (err) {
		console.error(err);

		return undefined;
	}
}

export async function getTableData(
	token: string,
	table: string,
	{ limit, page }: { limit: number; page: number }
) {
	try {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${token}`);

		const response = await fetch(BASE_URL + `${table}?limit=${limit}&page=${page}`, {
			method: 'GET',
			headers
		});

		if (response.ok) {
			return (await response.json()) as {
				[key: string]: string;
			}[];
		} else {
			// TODO:
			return [];
		}
	} catch (err) {
		console.error(err);

		return [];
	}
}

export async function getTableList(token: string) {
	try {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${token}`);

		const response = await fetch(BASE_URL + `tables`, {
			method: 'GET',
			headers
		});

		if (response.ok) {
			return (await response.json()) as {
				[key: string]: string;
			};
		} else {
			// TODO:
		}
	} catch (err) {
		console.error(err);

		return undefined;
	}
}

export async function getTableFields(token: string, table: string) {
	try {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${token}`);

		const response = await fetch(BASE_URL + `tables/${table}/fields`, {
			method: 'GET',
			headers
		});

		if (response.ok) {
			return (await response.json()) as {
				name: string;
				type: 'INTEGER' | 'STRING' | 'DATE' | 'BOOLEAN';
				allowNull: boolean;
				primaryKey: boolean;
				autoIncrement: boolean;
			}[];
		} else {
			// TODO:
		}
	} catch (err) {
		console.error(err);

		return undefined;
	}
}

export async function getTableRow(token: string, table: string, id: string) {
	try {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${token}`);

		const response = await fetch(BASE_URL + `${table}/${id}`, {
			method: 'GET',
			headers
		});

		if (response.ok) {
			return (await response.json()) as {
				[key: string]: string;
			};
		} else {
			// TODO:
		}
	} catch (err) {
		console.error(err);

		return undefined;
	}
}
