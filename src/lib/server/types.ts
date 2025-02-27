import type { Component } from "svelte";

interface User {
	id: number;
	email: string;
	username: string;
	firstName: string;
	lastName: string;
	secondName: string;
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

export interface Tab{
    title: String;
    component: Component;
}


export interface Exchange {
	
}