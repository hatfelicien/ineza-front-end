import React, { useState } from 'react';
import { FaTrash, FaEdit, FaPlus, FaTimes } from 'react-icons/fa';

interface Post {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  status: 'published' | 'draft';
}

const initialPosts: Post[] = [
  { id: 1, title: 'How Education is Transforming Communities in Rwanda', category: 'Education', author: 'Ineza Foundation', date: 'Nov 12, 2024', status: 'published' },
  { id: 2, title: 'Community Health Initiative Reaches 10,000 Families', category: 'Healthcare', author: 'Ineza Foundation', date: 'Oct 5, 2024', status: 'published' },
  { id: 3, title: 'Youth Entrepreneurship Program Launches New Cohort', category: 'Skills', author: 'Ineza Foundation', date: 'Sep 18, 2024', status: 'published' },
  { id: 4, title: 'Building Stronger Families Through Support Programs', category: 'Community', author: 'Ineza Foundation', date: 'Aug 30, 2024', status: 'published' },
  { id: 5, title: 'Digital Literacy Program Bridges the Technology Gap', category: 'Education', author: 'Ineza Foundation', date: 'Jul 14, 2024', status: 'draft' },
  { id: 6, title: 'Annual Impact Report: A Year of Transformation', category: 'Impact', author: 'Ineza Foundation', date: 'Jun 1, 2024', status: 'published' },
];

const categories = ['Education', 'Healthcare', 'Skills', 'Community', 'Impact'];

const BlogAdmin: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [showForm, setShowForm] = useState(false);
  const [editPost, setEditPost] = useState<Post | null>(null);
  const [form, setForm] = useState({ title: '', category: 'Education', status: 'draft' as 'published' | 'draft' });

  const openAdd = () => { setForm({ title: '', category: 'Education', status: 'draft' }); setEditPost(null); setShowForm(true); };
  const openEdit = (post: Post) => { setForm({ title: post.title, category: post.category, status: post.status }); setEditPost(post); setShowForm(true); };

  const handleSave = () => {
    if (!form.title.trim()) return;
    if (editPost) {
      setPosts(prev => prev.map(p => p.id === editPost.id ? { ...p, ...form } : p));
    } else {
      setPosts(prev => [...prev, { id: Date.now(), ...form, author: 'Ineza Foundation', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }]);
    }
    setShowForm(false);
  };

  const deletePost = (id: number) => setPosts(prev => prev.filter(p => p.id !== id));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{posts.length} posts total</p>
        <button onClick={openAdd}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent transition">
          <FaPlus className="w-3.5 h-3.5" /> New Post
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Category</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Date</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {posts.map(post => (
              <tr key={post.id} className="hover:bg-gray-50 transition">
                <td className="px-5 py-4 font-medium text-gray-800 max-w-xs">
                  <p className="truncate">{post.title}</p>
                </td>
                <td className="px-5 py-4 hidden sm:table-cell">
                  <span className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-medium">{post.category}</span>
                </td>
                <td className="px-5 py-4 text-gray-500 hidden md:table-cell">{post.date}</td>
                <td className="px-5 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${post.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 justify-end">
                    <button onClick={() => openEdit(post)} className="p-1.5 text-gray-400 hover:text-primary transition">
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button onClick={() => deletePost(post.id)} className="p-1.5 text-gray-400 hover:text-red-500 transition">
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-gray-800 text-lg">{editPost ? 'Edit Post' : 'New Post'}</h3>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 transition">
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition"
                  placeholder="Post title..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                  {categories.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value as 'published' | 'draft' })}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowForm(false)}
                  className="flex-1 py-2.5 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
                  Cancel
                </button>
                <button onClick={handleSave}
                  className="flex-1 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-accent transition">
                  {editPost ? 'Save Changes' : 'Create Post'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAdmin;
