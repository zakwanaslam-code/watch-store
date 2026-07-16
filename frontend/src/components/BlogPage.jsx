import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="bg-gradient-to-br from-black via-neutral-900 to-black min-h-screen py-16">
     <div className="max-w-3xl mx-auto px-8">
  <Link
    to="/"
    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
  >
    ← Back to Home
  </Link>

  <h1 className="text-4xl font-serif font-bold text-white mb-2 text-center mt-6">
    The Journal
  </h1>
        <p className="text-gray-400 text-center mb-12">
          Insights, guides, and stories from the world of luxury watches.
        </p>

        {loading && (
          <p className="text-gray-400 text-center">Loading articles...</p>
        )}

        {!loading && posts.length === 0 && (
          <p className="text-gray-400 text-center">No articles yet.</p>
        )}

        <div className="space-y-4">
          {posts.map((post) => (
           <Link
              key={post._id}
            to={`/blog/${post._id}`}
               className="flex items-center gap-6 bg-neutral-800/60 border border-gray-700 rounded-xl p-6 hover:border-orange-400/50 transition-all duration-300"
>
            <img
             src={post.image}
             alt={post.title}
             className="w-36 h-36 object-cover rounded-lg flex-shrink-0"
             />

  <div className="min-w-0">
    <p className="text-orange-400 text-xs font-semibold uppercase tracking-wide mb-2">
      {post.author}
    </p>
    <h3 className="text-white font-serif font-bold text-xl mb-2 leading-snug">
      {post.title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
      {post.excerpt}
    </p>
  </div>
</Link>
          ))}
        </div>
      </div>
    </section>
  );
}