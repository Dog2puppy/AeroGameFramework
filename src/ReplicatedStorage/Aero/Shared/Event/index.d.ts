interface Connection {
	Disconnect(): void
}

interface Event {
	new()

	Fire(arguments: any): void
	Wait(): void
	DisconnectAll(): void
	Connect(func: Function): void
}