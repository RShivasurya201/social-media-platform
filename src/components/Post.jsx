import React from 'react'

function Icon({ children }) {
  return <span className="icon">{children}</span>
}

export default function Post({ post, onLike, onComment, onRepost, onDelete }) {
  return (
    <article className="post-card">
      <header className="post-header">
        <div className="post-avatar">{post.authorName.split(' ').map(n => n[0]).slice(0, 2).join('')}</div>
        <div className="post-meta">
          <div className="post-meta-top">
            <strong>{post.authorName}</strong>
            <span className="muted"> {post.handle} · {post.time}</span>
          </div>
          <div className="post-content">{post.content}</div>
        </div>
      </header>

      <footer className="post-actions">
        <button className="action" onClick={onComment} aria-label="comment">
          <Icon>💬</Icon>
          <span>{post.comments}</span>
        </button>

        <button className="action" onClick={onRepost} aria-label="repost">
          <Icon>🔁</Icon>
          <span>{post.reposts}</span>
        </button>

        <button
          className={`action ${post.liked ? 'liked' : ''}`}
          onClick={onLike}
          aria-pressed={post.liked}
          aria-label="like"
        >
          <Icon>❤️</Icon>
          <span>{post.likes}</span>
        </button>

        <button className="action" onClick={onDelete} aria-label="delete">
          <Icon>🗑️</Icon>
        </button>
      </footer>
    </article>
  )
}
