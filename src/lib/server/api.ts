import type { AuthUserData, CreateUserData, User } from './types';

export async function registerUser(data: CreateUserData) {
	try {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		const response = await fetch('http://localhost:3000/auth/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers
		});

		if (response.ok) {
			const { token }: { token: string } = await response.json();

			return token;
		} else {
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

		const response = await fetch('http://localhost:3000/auth/login', {
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

		const response = await fetch('http://localhost:3000/users/me', {
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

		const response = await fetch(`http://localhost:3000/users/${id}`, {
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
