import './Post.scss'

export default function Post({ posts }) {
    return (
        <div className="Post">
            {posts.map(post => {
                return (
                    <div className={"Post__card"} key={post.id}>
                        <div className="Post__content">
                            <h2>{post.title}</h2>
                            <p>${post.price}</p>
                        </div>
                        <button>Learn More</button>
                        <img src={post.img} alt={post.title} />
                    </div>
                )
            })}
        </div>
    )
}