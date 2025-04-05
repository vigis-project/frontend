export interface User {
	id: Number;
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	secondName: string;
	avatar: string;
	rating: Number;
	city: string;
}

export interface Exchange {
	bookOffer: Book;
	bookRequest: Book;
	UserOffer: User;
	UserRequest: User;
}

export interface Proposal {
	FullMatch: Exchange[];
	PartialMatch: Exchange[];
	Recommended: Exchange[];
}

export interface Message {
	id: Number;
	sender: string;
	recipient: string;
	subject: string;
	body: string;
	timestamp: Date;
}

export interface Book {
	id: Number;
	author: string;
	title: string;
	data: string;
}

export interface ExchangeCard {
	exchange: Exchange;
	OfferStatus: string;
	RequestStatus: string;
}

export interface Review {
	text: string;
	user: User;
	date: Date;
}
