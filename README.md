# 🔗 Trimly — URL Shortener

Trimly is a simple and fast **URL Shortener** built using **React, Node.js, Express, and MongoDB**.
It converts long URLs into short and shareable links.

Example:

Long URL

```
https://www.google.com/search?q=very+long+url+example
```

Short URL

```
https://url-shortner-h2wp.onrender.com/xIJGGJT1
```

# 🧠 How It Works

1. User enters a long URL in the frontend.
2. Frontend sends a **POST request** to the backend.
3. Backend generates a **shortId**.
4. The URL is stored in **MongoDB**.
5. Backend returns the shortId.
6. When the short URL is opened, the backend finds the original URL and redirects the user.

---

# 🛠 Tech Stack

Frontend

* React
* Tailwind CSS
* Axios

Backend

* Node.js
* Express.js
* MongoDB
* Nanoid (for generating short IDs)

Deployment

* Render (Backend)
* Vercel / Netlify (Frontend)

---

# 📁 Project Structure

```
trimly-url-shortener
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── src
│   └── components
│
└── README.md
```

---

# ⚡ Features

* Generate short URLs
* Instant redirection
* Clean modern UI
* Copy short link
* Fast API response

---

# 📦 Installation

Clone the repository

```
git clone https://github.com/yourusername/trimly-url-shortener.git
```

Install dependencies

```
cd backend
npm install

cd ../frontend
npm install
```

Run project

Backend

```
npm run dev
```

Frontend

```
npm run dev
```

---

# 🌍 Future Improvements

* Custom short links
* Click analytics
* QR code generation
* User authentication
* Link expiration

---

# 👨‍💻 Author

Om Narayan 