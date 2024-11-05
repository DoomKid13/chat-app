# chat-app-server-go

Basic chat application using Websockets, built with Golang. Contains both UI and server side components.

Based on example: https://github.com/gorilla/websocket/tree/main/examples/chat

### Run
Navigate to `chat-app-server-go` directory in your terminal.
```
go build main.go
```

### Usage (local)
Go to http://localhost:8080/

![image](https://github.com/user-attachments/assets/97c1d633-0876-4b90-92a7-58e8c2246d98)

Send a message, and see it in the text box above.

![image](https://github.com/user-attachments/assets/c99ef435-12ca-4206-97ff-51943f1419f7)

If you are able to expose the running application to other devices on your network (e.g. by accessing your host devices local ip address `http://<ipv4_address>:8080/`), you can send messages between devices via this chat app.

### Internals
Project is split into UI, server logic, and entry point drivers.

Entry point main.go sets up:
- HTML file server
- WebSocket hub

As clients connect:
1. Client connects to homepage `/`
2. Server serves HTML file to client
3. Client executes embedded JS and connects to `/ws` endpoint via Websocket protocol
4. Server sets up a `client` connection and registers it to the `hub`
   - `client` here is a server-side abstraction of the Websocket connection to the client machine

As messages are sent:
1. Client transmits a message to the server
2. Message is pumped from the `client` to the `hub`
3. `hub` broadcasts messages to all `client`s (including initiating `client`)
4. `client` transmits message to client machine
