import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("62cb05a9258496d8f382")

export const account = new Account(client)

//Database

export const databases = new Databases(client, "62cb05e74e74f14aaea6")