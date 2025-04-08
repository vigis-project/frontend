export interface CreateUserData {
	email: string;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	secondName: string;
}

export interface AuthUserData {
	email: string;
	password: string;
}

export interface User {
	id: Number;
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	secondName: string;
	roles: string[];
}

export interface Exchange {
	bookOffer: Book;
	bookRequest: Book;
	userOffer: User;
	userRequest: User;
}

export interface Proposal {
	FullMatch: Exchange[];
	PartialMatch: Exchange[];
	Recommended: Exchange[];
}

export interface Message {
	id: number;
	sender: string;
	recipient: string;
	subject: string;
	body: string;
	timestamp: Date;
}

export interface Book {
	id: number;
	bookName: string;
	note: string;
	authorId: number;
}

export interface ExchangeCard {
    exchange: Exchange;
    offerStatus: string;
    requestStatus: string;
    offerNumber?: number;
    requestNumber?: number;
}


export interface Review {
	text: string;
	user: User;
	date: Date;
}
