# 🏆 TECHNOVA 2026

A desktop-based **Technical Festival Event Registration System** built using **HTML, CSS, JavaScript, and Electron**.

TECHNOVA provides a simple interface for users to register for a technical festival, create an account, log in, view events, register for events, manage their profile, view registered events, leave events, and submit feedback.

---

## 📌 Project Overview

**TECHNOVA 2026** is a front-end-focused event management and registration application designed to simulate the digital platform of a technical festival.

The project provides a dark, gold-themed user interface with separate sections for authentication, events, event registration, timetable, profile management, and feedback.

The application is packaged as a desktop application using **Electron**.

---

## ✨ Features

### 🔐 User Registration

Users can create an account by providing:

* Full Name
* Email Address
* Mobile Number
* Password

The application performs basic validation for the entered information.

For example:

* Name cannot be empty
* Email must contain `@`
* Mobile number must contain 10 digits
* Password must contain at least 6 characters

The user information is stored using the browser's `localStorage`.

---

### 👤 User Login

Registered users can log in using their:

* Email
* Password

After successful login, the interface displays a personalized welcome message.

The login state is maintained using `localStorage`.

---

### 🏆 Technical Events

The application currently contains four events:

| Event      | Date    | Time     |
| ---------- | ------- | -------- |
| Code Clash | 12 June | 10:00 AM |
| Web Design | 12 June | 1:00 PM  |
| AI Quiz    | 13 June | 11:00 AM |
| Robo Race  | 14 June | 2:00 PM  |

These events are dynamically generated using JavaScript.

---

### 📝 Event Registration

Users can register for an event after logging in.

The application:

1. Checks whether the user is logged in.
2. Checks whether the user has already registered.
3. Adds the event to their registered-event list.
4. Stores the list in `localStorage`.

Duplicate registrations are prevented.

---

### 👤 Profile Management

Users can open their profile and modify:

* Name
* Email
* Phone number

The updated profile is stored locally.

---

### 📋 Registered Events

Users can view the events they have registered for.

They can also leave an event through the **Exit Event** option. The application asks for a reason before removing the event from the registered-event list.

---

### 💬 Feedback

Users can submit feedback through a dedicated feedback page.

## The application requires the feedback to contain at least **20 characters** before accepting it.

### 📅 Event Timetable

The home page contains an event timetable displaying the event, date, and time.

---

### 🎨 Responsive UI

The interface uses:

* Dark background
* Gold accent colors
* Cinzel and Poppins fonts
* Responsive layouts
* Navigation bar
* Sliding sidebar
* Event cards
* Modal windows
* Forms and validation

The styling and responsive behavior are implemented in CSS.

---

## 🛠️ Technologies Used

### Frontend

* **HTML5**
* **CSS3**
* **JavaScript**

### Desktop Application

* **Electron.js**
* **Node.js**

### Data Storage

* **Browser Local Storage**

### Fonts

* Google Fonts

  * Cinzel
  * Poppins

---

## 📂 Project Structure

```text
TECHNOVA-2026/
│
├── index.html
├── events.html
├── feedback.html
│
├── style.css
├── script.js
├── main.js
│
├── package.json
├── package-lock.json
│
|── node_modules
|
└── README.md
```

### File Description

| File                | Purpose                                                             |
| ------------------- | ------------------------------------------------------------------- |
| `index.html`        | Main/home page containing login, registration, events and timetable |
| `events.html`       | Dedicated events page                                               |
| `feedback.html`     | Feedback submission page                                            |
| `style.css`         | Application styling and responsive design                           |
| `script.js`         | Main application logic                                              |
| `main.js`           | Electron application entry point                                    |
| `package.json`      | Node.js project configuration and dependencies                      |
| `package-lock.json` | Locks dependency versions                                           |
| `node_modules`      | Contains installed Node.js project dependencies                     |
| `README.md`         | Project documentation                                               |

---

## ⚙️ How Electron Works in This Project

Electron is used to run the web-based interface as a desktop application.

The `main.js` file creates an Electron `BrowserWindow` and loads `index.html` when the application starts.

The basic application flow is:

```text
Electron
   │
   ▼
main.js
   │
   ▼
index.html
   │
   ├── style.css
   │
   └── script.js
          │
          ▼
     localStorage
```

---

## 🚀 Installation & Setup

### Prerequisites

Make sure you have installed:

* Node.js
* npm

You can check your installation with:

```bash
node --version
npm --version
```

---

### 1. Clone the Repository

```bash
git clone https://github.com/Kage-no-Yume/team-2-uid-19-27-31-37--.git
```

Then:

```bash
cd team-2-uid-19-27-31-37--
```

---

### 2. Install Dependencies

Do **not** upload `node_modules` to GitHub.

Instead, install the required dependencies using:

```bash
npm install
```

This uses `package.json` and `package-lock.json` to install the required packages.

---

### 3. Start the Application

If the project's `package.json` contains an appropriate start script, run:

```bash
npm start
```

Otherwise, the Electron application can be launched according to the Electron configuration in the project.

---

## 📦 About `package.json`

`package.json` contains the Node.js project configuration and information about the packages required by the application.

It should be committed to GitHub.

---

## 🔒 About `package-lock.json`

`package-lock.json` records the exact dependency versions used by the project.

It should also be committed to GitHub because it helps ensure that other users install compatible dependency versions.

---

## 🚫 What About `node_modules`?

**Do not upload `node_modules` to GitHub.**

The folder can contain a very large number of dependency files and can make the repository unnecessarily large.

Instead, create a `.gitignore` file containing:

```gitignore
node_modules/
```

Then anyone cloning the repository can recreate the folder using:

```bash
npm install
```

---

## ⚠️ Limitations & Disadvantages

This project is primarily a **front-end/academic demonstration application**, so it has several limitations.

### 1. No Backend Server

There is currently no backend server.

The application operates primarily on the client side using JavaScript and `localStorage`.

This means there is no centralized server managing:

* Users
* Events
* Registrations
* Feedback
* Authentication

---

### 2. Data Is Stored Locally

User information and registered events are stored using browser `localStorage`.

For example, user information is stored under:

```text
studentData
```

and the login state under:

```text
login
```

Registered events are stored under:

```text
myEvents
```

This means the data is tied to the local application's storage rather than a centralized database.

---

### 3. Only One User Record Is Supported

The current implementation stores a single `studentData` object.

Registering another user overwrites the previously stored user information.

Therefore, it does not currently support a proper multi-user database system.

---

### 4. Passwords Are Not Securely Stored

The password is stored directly in `localStorage` as part of the user object.

This is **not suitable for a real-world authentication system**.

A production application should use a secure backend authentication system and password hashing.

---

### 5. No Real Authentication

The application uses a locally stored login flag:

```text
login = "yes"
```

Therefore, it does not provide server-side authentication or session management.

---

### 6. No Database

There is no MySQL, PostgreSQL, MongoDB, or other database.

A real event management platform would require persistent centralized storage.

---

### 7. Event Information Is Hardcoded

The event information is directly defined in `script.js`.

Adding or modifying events requires modifying the source code rather than using an administrator dashboard.

---

### 8. Feedback Is Not Persisted

The feedback form displays a success message and resets the form, but there is no backend/database mechanism shown for permanently storing submitted feedback.

---

### 9. No Administrator Panel

There is no administrative interface for organizers to:

* Add events
* Remove events
* Edit event details
* View participants
* Manage users
* Review feedback
* Monitor registrations

---

### 10. No Real-Time Event Capacity

The application does not appear to maintain a maximum participant capacity for each event.

Therefore, it cannot prevent an event from exceeding its actual capacity.

---

### 11. No Payment Integration

There is no payment functionality for:

* Registration fees
* Online payments
* Payment verification
* Receipts
* Refunds

---

### 12. Limited Validation

The application performs basic client-side validation, but it does not provide the level of validation normally expected from a production application.

---

### 13. No Cloud Synchronization

Because information is stored locally, the user's registrations are not synchronized across different computers or devices.

---

### 14. Security Considerations

The Electron configuration currently enables:

```javascript
nodeIntegration: true
contextIsolation: false
```

These settings can introduce security risks in production Electron applications.

A production version should follow Electron's security recommendations and use safer renderer/main-process communication.

---

## 🔮 Future Improvements

The project could be developed into a complete event-management platform by adding:

* 🗄️ MySQL/MongoDB/PostgreSQL database
* 🌐 Backend API
* 🔐 Secure authentication
* 🔑 Password hashing
* 👥 Multiple-user support
* 👨‍💼 Administrator dashboard
* 🏆 Dynamic event management
* 👥 Participant management
* 📊 Registration statistics
* 📩 Email confirmation
* 💳 Online payment
* 🎟️ Digital event passes
* 📱 Better mobile support
* ☁️ Cloud synchronization
* 🔔 Event notifications
* 📅 Calendar integration
* 📝 Persistent feedback management

---

## 🎯 Learning Outcomes

This project provides practical experience with:

* HTML page structure
* CSS styling
* Responsive web design
* JavaScript DOM manipulation
* JavaScript functions
* Arrays and objects
* Form validation
* Event handling
* `localStorage`
* Client-side application logic
* Electron desktop application development
* Node.js/npm project structure

---

## 📸 Application Sections

The application contains the following major sections:

```text
TECHNOVA 2026
│
├── Home
│   ├── Sign In
│   ├── Register
│   ├── Events
│   └── Event Timetable
│
├── Events
│   └── Event Registration
│
├── Your Profile
│   └── Edit Profile
│
├── Registered Events
│   └── Exit Event
│
├── Feedback
│   └── Submit Feedback
│
└── Log Out
```

---

## 📌 Project Status

**Status: Completed**

This project represents a functional prototype of a technical festival event-registration platform.

It is intended primarily as an educational/project demonstration rather than a production-ready event management system.

---

## 👥 Contributors

Add your team members here:

* **[Member 1]**
* **[Member 2]**
* **[Member 3]**
* **[Member 4]**

---

## 📜 License

This project is intended primarily for **educational and academic purposes**.

Feel free to study, modify, and extend the project for learning and experimentation.
