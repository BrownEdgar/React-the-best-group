import './Post.scss'

export default function Post({ posts }) {
    return (
        <div className="Post">
            {posts.map(post => {
                return (
                    <div className='Post__card' key={post.id}>
                        <div className='Post__banner'>
                            <h2>0{post.id}</h2>
                        </div>
                        <div className={post.color}>
                        <h2 className='name'>{post.name}</h2>
                        <p className='text'>{post.description}</p>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}
