import React from 'react'

function Icon({ children }) {
  return <span className="icon">{children}</span>
}

export default function Post({ post }) {
  return (
    <article className="post-card">
      <header className="post-header">
        <div className="post-avatar">{post.authorName.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
        <div className="post-meta">
          <div className="post-meta-top">
            <strong>{post.authorName}</strong>
            <span className="muted"> {post.handle} · {post.time}</span>
          </div>
          <div className="post-content">{post.content}</div>
        </div>
      </header>

      <footer className="post-actions">
        <div className="action"> <Icon>💬</Icon> {post.comments}</div>
        <div className="action"> <Icon>🔁</Icon> {post.reposts}</div>
        <div className="action"> <Icon>❤️</Icon> {post.likes}</div>
      </footer>
    </article>
  )
}
