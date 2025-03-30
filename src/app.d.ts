// See https://svelte.dev/docs/kit/types#app.d.ts
import type { User } from '$lib/server/types';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			userData?: User;
		}
		interface PageData {
			userData?: User;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
