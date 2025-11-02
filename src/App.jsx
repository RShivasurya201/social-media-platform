import React from 'react'
import Post from './components/Post'

const posts = [
  {
    id: 1,
    authorName: 'Ava Johnson',
    handle: '@avaj',
    time: '2h',
    content: 'Loving the new dashboard layout! Building small things every day ✨',
    likes: 24,
    comments: 3,
    reposts: 2
  },
  {
    id: 2,
    authorName: 'Kai Turner',
    handle: '@kturner',
    time: '6h',
    content: 'Pro tip: break UI into tiny components — it saves time later.',
    likes: 42,
    comments: 10,
    reposts: 5
  },
  {
    id: 3,
    authorName: 'Riley Chen',
    handle: '@rchen',
    time: '1d',
    content: 'Just shipped a small feature and it already feels great. Celebrating with coffee ☕️',
    likes: 88,
    comments: 12,
    reposts: 14
  }
]

export default function App() {
  return (
    <div className="app-root">
      <header className="topbar">
        <h1 className="brand">Mini Twitter</h1>
        <nav className="top-actions">
          <button className="btn primary">New Post</button>
        </nav>
      </header>

      <main className="container">
        <aside className="sidebar">
          <div className="profile-card">
            <div className="avatar">MJ</div>
            <div>
              <strong>Mini Joe</strong>
              <div className="muted">@minijo</div>
            </div>
          </div>

          <nav className="menu">
            <a className="menu-item active">Home</a>
            <a className="menu-item">Explore</a>
            <a className="menu-item">Notifications</a>
            <a className="menu-item">Messages</a>
          </nav>
        </aside>

        <section className="feed">
          <div className="composer">
            <textarea placeholder="What's happening?" rows={3}></textarea>
            <div className="composer-row">
           
              <button className="btn">Post</button>
            </div>
          </div>

          <div className="posts">
            {posts.map((p) => (
              <Post key={p.id} post={p} />
            ))}
          </div>
        </section>

        <aside className="trends">
          <div className="card">
            <h3>Trends for you</h3>
            <ul>
              <li>#frontend</li>
              <li>#reactjs</li>
              <li>#webdev</li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  )
}
