
export default function Post({post : {name,location,postImage,likes,description}}){
    return (
        <div className="post-container">
       <div className="post-card">
        <div className="post-header">
          <div className="post-title">{name}</div>
          <div className="post-location">{location}</div>
          <div className="post-action">...</div>
        </div>
        <div className="post-image">
            <img src={postImage} />
        </div>
        <div className="post-footer">
            <div className="post-likes">
                {likes} likes
            </div>
            <div className="post-desc">
                {description}
            </div>
        </div>
        
       </div>
       </div>
    )
}