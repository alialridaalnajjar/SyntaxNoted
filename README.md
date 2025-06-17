# Syntax Noted

A modern, responsive notes and to-do app built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## Features

- **Note Taking:**  
  Create, edit, and manage notes with a clean, modern UI.

- **To-Do List:**  
  Add, search, and delete tasks. Real-time filtering as you type.

- **Responsive Design:**  
  Works great on desktop and mobile.

- **Visual Feedback:**  
  Animations and highlights for actions like adding tasks.

- **Navigation:**  
  Sidebar navigation for quick access to Notes, To-Do, Events, and more.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/your-username/notesapp.git
cd notesapp
npm install
```

### Running the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
  components/
    Navbar.tsx
    Featured.tsx
    ToDoComponents/
      AddToDoCard.tsx
      ToDoCard.tsx
      ToDoListMain.tsx
      ToDoListNavbar.tsx
  data/
    NotesCollection.ts
  pages/
    HomePage.tsx
    NoteTakingPage.tsx
    ToDoListPage.tsx
  types/
    NoteCardType.ts
  App.tsx
  main.tsx
```

---

## Customization

- **Styling:**  
  Uses [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- **Icons:**  
  Uses [react-icons](https://react-icons.github.io/react-icons/) for a modern look.

---

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run preview` – Preview production build
- `npm run lint` – Lint the codebase

---

## License

MIT

---

**Made with ❤️ using React, TypeScript, and Tailwind CSS.**
