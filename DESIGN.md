# Chat application.

This is plan for a chat application, that I have been putting off for sometime. But I think it'll will be a great way for me to get into learning web sockets using the **socket.io** framework.

# Project Features.

## Signing up.

The sign up feature will be based off google authentication. This will be my first time working with **google oauth2** and **oauth2** or any other third party authorization API.

## Adding Contacts.

This will be the ability for users to add contacts of friends, family and loved ones.

> This will have a modal UI that when triggered will bring up contacts who can be chosen from and an **add contact** button that will allow users to add contacts by their username to the application.

## Chats.

Chats will be saved in a **mongo database** which is my current database of choice.

```typescript
interface Chat {
	message: string,
	time: string,
	status: "scheduled" | "sent" | "received" | "read",
	to: string,
	from: string,
}

interface Contact {
	name: string,
	online: boolean,
	profileImage: string,
}

interface Chats {
	Contact[]
	Chat[]
}
```

# Architectural plans

## Stack

---

### Frontend

- **React**
- Redux particulary **react toolkit**

## Backend

- Node with **express** and **socket.io**
  > Am currently using express because I still don't know how to use CRUD with socket.io. But I think using one library for calls makes sense. Since I already have a socket running why not then just have it send requests to the back end as well. Only problem is I have the socket open only when a user is logged in.
