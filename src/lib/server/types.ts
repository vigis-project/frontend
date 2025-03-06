import type { Component, ComponentProps } from "svelte";

export interface User {
	id: number;
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	secondName: string;
    avatar: string;
	rating: number;
}


export interface CompletedExchange {
    id: number;
    exchangedAt: Date;
    booksExchanged: string;
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
	author: string;
    title: string;
}

export interface Proposal {
    id: number;
    booksOffered: Book[];
    booksRequested: Book[];
    status: string;
}

// interface proptypes {
//     data: Proposal | Book;
// }

// export interface Tab {
//     title: string;
//     component: Component<{ data: proptypes; }, {}, "">; 
//     action: any;
// }

export interface Tab {
	title: string;
    component: Component<{ data: any | null; }, {}, "">; 
    action: any;
}

export interface Exchange {
	
}