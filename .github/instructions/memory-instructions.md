# Memory Instructions

- Project uses React.js for this application.
- Prefer React best practices and component patterns consistent with a React + Vite app.
- Keep frontend work aligned with React-based architecture and state management patterns already used in the project.
- This project uses Zustand for global state management.
- Prefer creating or updating Zustand stores for shared application state instead of scattering state across components.
- When state is shared across multiple screens or components, consider creating or refining a dedicated store to keep logic organized and easier to maintain.
- This project uses Shadcn UI and Tailwind CSS for styling and component design.
- For any new component request, first check the Shadcn component library to see whether a matching component already exists before creating a custom implementation.
- Prefer extending existing Shadcn components and styling them with Tailwind utilities rather than building new UI primitives from scratch.
- This project uses Appwrite as its backend.
- Use Appwrite for CRUD operations, authentication, and future storage features such as image buckets when applicable.
- Design new backend integrations around Appwrite services rather than introducing separate backend infrastructure unless there is a clear requirement to do so.
