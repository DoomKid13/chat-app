# chat-app
Monolith for various versions and components of a chat room app

## Folder Structure

This is a monlithic repository containing multiple components of the application, and due to the exploratory premise of this project, multiple implementations of each of those components. Those implemnatations may not stay in sync with each other, but should generally comply with the contracts between components (i.e. any ui implemntation can inteface with any server implementation).

Under the root directory, each `<component>` will have its own subfolder. Within the `<component>` folders each `<implementation>` will have its own subfolder.

**Pattern:**
```bash
chat-app
└── <component>
    └── chat-app-<component>-<implementation>
```

**Example:**
```bash
chat-app
├── client
│   └── chat-app-ui-react
└── server
    ├── chat-app-server-go
    └── chat-app-server-node
```

It is recommended you open each project in your IDE with the implementation folder as your project root.