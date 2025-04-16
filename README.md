# 🕊️ U-LINK – Social Feed App

U-LINK is a Twitter-style social media client that lets university students:
- View real tweets from X (Twitter)
- Create their own posts
- React, comment, and bookmark content
- Log in securely via a lightweight system

Built using Node.js, Express, HTML, and browser `localStorage`.

---

## 🚀 Features

- 🔐 **Login system** (with test user: `bob`)
- 🦆 **Twitter timeline integration**
- 📝 **User-created posts**
- 💬 **Comment system**
- ❤️ **Like/dislike reactions**
- 🔖 **Bookmarking**
- 🗂 **Category-based filtering**
- 🧠 **Frontend-only auth state using `localStorage.user`**

---

## 🛠️ Getting Started

### 1. 📆 Install the app

```bash
git clone https://github.com/YOUR_USERNAME/u-link.git
cd u-link
npm install
```

### 2. 🔐 Create a `.env` file

Add your Twitter/X Bearer Token:

```env
BEARER_TOKEN=your-twitter-api-token-here
```

### 3. 🏁 Run the server

```bash
npm run dev
```

App runs at: `http://localhost:3000`

---

## 🥺 Testing Credentials

Login with:

```json
{
  "username": "bob",
  "password": "bobpass"
}
```

---

## 🧱️ Route Reference

### Auth
| Method | Route          | Description      |
|--------|----------------|------------------|
| POST   | /auth/login    | User login       |

### Posts
| Method | Route      | Description        |
|--------|------------|--------------------|
| GET    | /posts     | List all posts     |
| POST   | /posts     | Create new post    |

### Comments
| Method | Route             | Description             |
|--------|-------------------|-------------------------|
| GET    | /comments/:postId | View comments on post   |
| POST   | /comments/:postId | Add a comment to a post |

### Reactions
| Method | Route              | Description       |
|--------|--------------------|-------------------|
| POST   | /reactions/:postId | Like/dislike post |

### Bookmarks
| Method | Route                         | Description           |
|--------|-------------------------------|-----------------------|
| POST   | /bookmarks/:postId            | Bookmark a post       |
| GET    | /bookmarks?userId=YOUR_ID     | View user bookmarks   |

### Categories
| Method | Route                      | Description            |
|--------|----------------------------|------------------------|
| GET    | /categories                | All post categories    |
| GET    | /categories/:categoryName  | Posts by category name |

### Twitter
| Method | Route               | Description                       |
|--------|---------------------|-----------------------------------|
| GET    | /twitter/timeline   | Tweets from `UWIGlobalCampus`     |

To avoid rate limits, use `mockTweets.js` and set `useMock = true` in `twitterController.js`.

---

## 🧠 localStorage.user (Frontend Auth)

After login:
```js
localStorage.setItem("user", JSON.stringify(user));
```

All pages use:
```js
const user = JSON.parse(localStorage.getItem("user"));
if (!user) window.location.href = "/login";
```

To logout:
```js
localStorage.clear();
```

---

## 🖼️ UI Pages

### `/login`
- Basic login form
- Authenticates and saves user in `localStorage`

### `/` (Main Page)
- Shows tweet timeline + user-generated posts
- Allows:
  - Post creation
  - Commenting
  - Like/dislike
  - Logout

---

## ✨ Recent Updates

- Login page (`/login`) with client-side login and `localStorage.user`
- `/` page now redirects to login if user not found
- Post creation form and category select
- Commenting system
- Tweets fetched from Twitter or mock data
- Like/dislike reactions (backend done)
- Bookmarking routes done
- Clean UI and responsive logic

---

## 📂 Project Structure

```
U-LINK/
├── controllers/
│   ├── authController.js
│   ├── postController.js
│   ├── commentController.js
│   ├── reactionController.js
│   └── bookmarkController.js
├── models/
│   ├── User.js
│   ├── Post.js
│   ├── Comment.js
│   ├── Reaction.js
│   └── Bookmark.js
├── routes/
│   ├── auth.js
│   ├── post.js
│   ├── comment.js
│   ├── reaction.js
│   └── bookmark.js
├── views/
│   ├── login.html
│   └── index.html
├── public/
│   └── style.css
├── mockTweets.js
├── server.js
├── .env
└── README.md
```

---

## 📌 To-Do

- [ ] Frontend like/dislike buttons
- [ ] Bookmark buttons in UI
- [ ] Category filter dropdown
- [ ] MongoDB or SQLite for data persistence
- [ ] Mobile responsive layout

---

## 📄 License

Open for educational use — built by Nickell Lewis and team.
```