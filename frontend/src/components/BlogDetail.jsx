import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-center py-24 text-gray-400">
        Loading...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-black min-h-screen text-center py-24">
        <p className="text-white text-xl mb-4">Article not found.</p>
        <Link to="/blog" className="text-orange-400 underline">
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-black via-neutral-900 to-black min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-8">
        <Link
          to="/blog"
          className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
        >
          ← Back to Journal
        </Link>

        {/* TOP - Image left, title/summary right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6 mb-12">
          <div className="w-full max-w-sm mx-auto aspect-square rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-orange-400 text-xs font-semibold uppercase tracking-wide mb-3">
              {post.author}
            </p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
          </div>
        </div>

        {/* BOTTOM - Full article content */}
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </div>
    </section>
  );
}