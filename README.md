# Events App

A fullstack events application with a web backend and a mobile app.

---

## Setup Instructions (Step by Step)

### 1. Clone the repository

```bash
git clone https://github.com/ayech0x2/events-app.git
cd events-app
```

---

### 2. Setup the Web App (Backend)

```bash
cd web
```

Create a `.env` file:

```bash
touch .env
```

Add this variable:

```env
DATABASE_URL=your_database_url_here
```

> The value will be shared via email.

Install dependencies:

```bash
bun install
```

Run the server:

```bash
bun run dev
```

After running, you will see a URL like:

```
http://192.168.X.X:3000
```

Copy this URL (you will need it next).

---

### 3. Setup the Mobile App

Go to mobile folder:

```bash
cd ../mobile
```

Create a `.env` file:

```bash
touch .env
```

Add this variable:

```env
EXPO_PUBLIC_API_URL=http://YOUR_LOCAL_IP:3000
```

Example:

```env
EXPO_PUBLIC_API_URL=http://192.168.1.99:3000
```

Install dependencies:

```bash
bun install
```

Start the app:

```bash
bun run start
```

---

### 4. Run the Application

- First, make sure the **web server is running**
- Then launch the mobile app on:
  - iOS Simulator
  - Android Emulator
  - Physical device (Expo Go)

---

## Important Notes

- Your phone/emulator must be on the **same network** as your computer
- Do NOT use `localhost` for the API URL
- Backend must be running before using the mobile app

---

## Tech Stack

- Next.js (Web & API)
- React Native (Expo)
- Bun (optional)


