import React, { useEffect, useState } from 'react'
import Post from './components/Post'

const STORAGE_KEY = 'mini_twitter_posts_v1'

const defaultPosts = [
  {
    id: 1,
    authorName: 'Ava Johnson',
    handle: '@avaj',
    createdAt: Date.now() - 1000 * 60 * 60 * 2,
    content: 'Loving the new dashboard layout! Building small things every day ✨',
    likes: 24,
    comments: 3,
    reposts: 2,
    liked: false
  },
  {
    id: 2,
    authorName: 'Kai Turner',
    handle: '@kturner',
    createdAt: Date.now() - 1000 * 60 * 60 * 6,
    content: 'Pro tip: break UI into tiny components — it saves time later.',
    likes: 42,
    comments: 10,
    reposts: 5,
    liked: false
  },
  {
    id: 3,
    authorName: 'Riley Chen',
    handle: '@rchen',
    createdAt: Date.now() - 1000 * 60 * 60 * 24,
    content: 'Just shipped a small feature and it already feels great. Celebrating with coffee ☕️',
    likes: 88,
    comments: 12,
    reposts: 14,
    liked: false
  }
]

function formatTime(ts) {
  const diff = Date.now() - ts
  const mins = Math.floor(diff / (1000 * 60))
  if (mins < 1) return 'now'
  if (mins < 60) return `${mins}m`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h`
  const days = Math.floor(hours / 24)
  return `${days}d`
}

export default function App() {
  const [currentView, setCurrentView] = useState('home')
  const [posts, setPosts] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : defaultPosts
    } catch (e) {
      return defaultPosts
    }
  })

  const [composer, setComposer] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
    } catch (e) {
      // ignore
    }
  }, [posts])

  function handleCreatePost() {
    if (!composer.trim()) return
    const newPost = {
      id: Date.now(),
      authorName: 'You',
      handle: '@you',
      createdAt: Date.now(),
      content: composer.trim(),
      likes: 0,
      comments: 0,
      reposts: 0,
      liked: false
    }
    setPosts((p) => [newPost, ...p])
    setComposer('')
  }

  function toggleLike(id) {
    setPosts((ps) =>
      ps.map((p) => {
        if (p.id !== id) return p
        const liked = !p.liked
        return { ...p, liked, likes: Math.max(0, p.likes + (liked ? 1 : -1)) }
      })
    )
  }

  function addComment(id) {
    setPosts((ps) => ps.map((p) => (p.id === id ? { ...p, comments: p.comments + 1 } : p)))
  }

  function addRepost(id) {
    setPosts((ps) => ps.map((p) => (p.id === id ? { ...p, reposts: p.reposts + 1 } : p)))
  }

  function deletePost(id) {
    setPosts((ps) => ps.filter((p) => p.id !== id))
  }

  return (
    <div className="app-root">
      <header className="topbar">
        <h1 className="brand">Mini Twitter</h1>
        <nav className="top-actions">

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
            <button 
              className={`menu-item ${currentView === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentView('home')}
            >
              Home
            </button>
            <button 
              className={`menu-item ${currentView === 'explore' ? 'active' : ''}`}
              onClick={() => setCurrentView('explore')}
            >
              Explore
            </button>
            <button 
              className={`menu-item ${currentView === 'notifications' ? 'active' : ''}`}
              onClick={() => setCurrentView('notifications')}
            >
              Notifications
            </button>
            <button 
              className={`menu-item ${currentView === 'messages' ? 'active' : ''}`}
              onClick={() => setCurrentView('messages')}
            >
              Messages
            </button>
          </nav>
        </aside>

        <section className="feed">
          {(currentView === 'home' || currentView === 'explore') && (
            <>
              <div className="composer">
                <textarea
                  placeholder="What's happening?"
                  rows={3}
                  value={composer}
                  onChange={(e) => setComposer(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                      handleCreatePost()
                    }
                  }}
                ></textarea>
                <div className="composer-row">
                  
                  <div>
                    <button className="btn" onClick={() => setComposer('')}>Clear</button>
                    <button className="btn primary" onClick={handleCreatePost} style={{ marginLeft: 8 }}>Post</button>
                  </div>
                </div>
              </div>

              <div className="posts">
                {posts.map((p) => (
                  <Post
                    key={p.id}
                    post={{ ...p, time: formatTime(p.createdAt) }}
                    onLike={() => toggleLike(p.id)}
                    onComment={() => addComment(p.id)}
                    onRepost={() => addRepost(p.id)}
                    onDelete={() => deletePost(p.id)}
                  />
                ))}
              </div>
            </>
          )}

          {currentView === 'notifications' && (
            <div className="empty-state">
              <h2>Notifications</h2>
              <p>You have no new notifications</p>
            </div>
          )}

          {currentView === 'messages' && (
            <div className="empty-state">
              <h2>Messages</h2>
              <p>No messages</p>
            </div>
          )}
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
