

# ✅ Task List — Your Smart & Stylish Todo Manager

A minimal yet intelligent **React-based Todo List app** that helps you stay on top of your tasks with a sleek UI, voice commands, and AI-powered task creation.

🔗 **Live Demo**: [task-list-blue-nine.vercel.app](https://task-list-blue-nine.vercel.app/)

---

## 🚀 Features

* 📝 Add new tasks with title and description
* 🎙️ **Voice-based task input** using Speech Recognition
* 🤖 **AI Task Generation** via Gemini (Google AI) from natural language prompts
* 🗑️ Delete tasks with one click
* 💾 Persist tasks in `localStorage` (no data loss on reload)
* 🎨 Clean, responsive, and mobile-friendly UI
* 🌒 Dark-themed footer like modern websites
* ⚡ Built with functional React components and Hooks

---

## 🧠 How It Works

* Tasks are stored in `localStorage` and fetched automatically on load
* You can now **speak a task** and have it added instantly
* You can type a natural prompt (e.g., *“Buy groceries and schedule doctor appointment”*) and **Gemini AI will auto-create tasks**
* Every update (add/delete/AI action) reflects in UI and localStorage in real-time

---

## 🖼️ Preview

![Screenshot](https://github.com/user-attachments/assets/d5d99a7c-452c-4c65-a173-806438ca17ce)

---

## 🛠️ Tech Stack

* **Frontend:** React.js (with Hooks)
* **Speech Input:** Web Speech API
* **AI Integration:** Google Gemini API (via fetch or SDK)
* **Styling:** Custom CSS + Bootstrap
* **Deployment:** Vercel

---

## 📂 Project Structure

```
todo-list/
│
├── public/
│   ├── index.html
│   └── manifest.json
│
├── src/
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── Component/
│   │   ├── AddTodo.js
│   │   ├── Todos.js
│   │   ├── TodoItem.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── SpeechInput.js       ← 🎤 New Feature
│   │   └── GeminiPrompt.js      ← 🤖 New Feature
│   └── ...
│
└── README.md
```

---

## ✨ Enhanced Features

| Feature                  | Description                                         |
| ------------------------ | --------------------------------------------------- |
| 🎙️ **Speech Prompt**    | Say a task aloud and it will be added automatically |
| 🤖 **Gemini AI Input**   | Type a prompt and Gemini generates actionable todos |
| 🌓 **Dark Footer**       | Elegant black footer with responsive layout         |
| 📦 **Local Persistence** | Todos stay even after closing the tab or refreshing |
| 📱 **Responsive Design** | Looks great on both desktop and mobile              |

---

## 📌 Future Enhancements

* ✏️ Edit task functionality
* 🔄 Mark tasks as complete/incomplete
* 🎨 Light/Dark mode toggle
* 🔗 Full backend integration (MongoDB / Firebase) for cross-device sync
* 🔔 Notifications & Reminders

---

## 📥 Installation (For Local Development)

```bash
git clone https://github.com/your-username/todo-list.git
cd todo-list
npm install
npm start
```

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo, enhance it, and submit a pull request.

---

## 📄 License

MIT License © 2025 [Neha Singh](https://github.com/Neha-Singh-j)

---

