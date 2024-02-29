import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import blogsData from './BlogContent';

const BlogDetail = () => {
  const { id } = useParams();
  const parsedBlogId = parseInt(id, 10);

  const blog = blogsData.find((blog) => blog.id === parsedBlogId);


  if (!blog) {
    return <div>Blog not found</div>;
  }

  const recommendedBlogs = blogsData.slice(0, 6);

  return (
    <div className="blog-detail-container">
      <div className="blog-detail">
        <div className="blog-img">
          <img src={blog.imageUrl} alt={`Blog ${blog.id}`} />
        </div>
        <h1>{blog.title}</h1>
        <div className="content-detail">
          <div className="author">
            <h4>By {blog.author} </h4>
            <h5> . {blog.publish_date}</h5>
          </div>
          <div className="share">
            <h5>Share Now</h5>
            <Link to={"#"}>
              <i className="fa-solid fa-share-nodes fa-lg" style={{ color: "#DC6745" }}></i>
            </Link>
          </div>
        </div>
        <div className='blog_div_content' dangerouslySetInnerHTML={{__html: blog.content}}>

        </div>
        
        {/* <p>{blog.content}</p> */}
      </div>
      <div className="recommended">
        <h3 style={{ color: "#7E49CC" }}>Recommended For You</h3>
        {recommendedBlogs.map((recommendBlog) => (
          <div key={recommendBlog.id}>
            <Link to={`/blogs/${recommendBlog.id}/${encodeURIComponent(recommendBlog.title)}`} className="recommend">
              <div className="blog-content">
                <h3>{recommendBlog.title}</h3>
                <p className="BlogInfo">
                  <span className="BlogDate">{blog.publish_date}</span>
                  <span className="BlogTag">{blog.category}</span>
                </p>
              </div>
            </Link>
          </div>
        ))}
        <div className="rBlogTopicsHolder">
          <h4>See more Topic Suggestions</h4>
          <div className="rBlogTags">
            <span className="rTag">History</span>
            <span className="rTag">Lifestyle</span>
            <span className="rTag">Heritage</span>
            <span className="rTag">Science</span>
            <span className="rTag">Social</span>
            <span className="rTag">Technology</span>
            <span className="rTag">Artificial Intellegence</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
