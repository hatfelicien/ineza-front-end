import React, { useState, useRef, useCallback } from 'react';
import { FaTrash, FaEdit, FaPlus, FaArrowLeft, FaBold, FaItalic, FaUnderline,
  FaStrikethrough, FaAlignLeft, FaAlignCenter, FaAlignRight, FaListUl, FaListOl,
  FaImage, FaQuoteRight } from 'react-icons/fa';
import { MdFormatColorText } from 'react-icons/md';

interface Post {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  status: 'published' | 'draft';
  image?: string;
  content?: string;
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
const fontFamilies = ['Default', 'Arial', 'Georgia', 'Times New Roman', 'Courier New', 'Verdana', 'Trebuchet MS'];
const fontSizes = ['12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px'];

const ToolbarBtn: React.FC<{ onClick: () => void; active?: boolean; title: string; children: React.ReactNode }> = ({ onClick, active, title, children }) => (
  <button type="button" title={title} onMouseDown={e => { e.preventDefault(); onClick(); }}
    className={`p-1.5 rounded text-sm transition ${active ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
    {children}
  </button>
);

const BlogEditor: React.FC<{ post: Post | null; onSave: (data: Partial<Post> & { image?: string; content?: string }) => void; onCancel: () => void }> = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [category, setCategory] = useState(post?.category || 'Education');
  const [status, setStatus] = useState<'published' | 'draft'>(post?.status || 'draft');
  const [image, setImage] = useState<string>(post?.image || '');
  const [fontFamily, setFontFamily] = useState('Default');
  const [fontSize, setFontSize] = useState('16px');
  const editorRef = useRef<HTMLDivElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const exec = useCallback((cmd: string, value?: string) => {
    document.execCommand(cmd, false, value);
    editorRef.current?.focus();
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setImage(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleFontFamily = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontFamily(e.target.value);
    exec('fontName', e.target.value === 'Default' ? 'inherit' : e.target.value);
  };

  const handleFontSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontSize(e.target.value);
    // execCommand fontSize only accepts 1-7, so use styleWithCSS
    document.execCommand('styleWithCSS', false, 'true');
    exec('fontSize', '3');
    // override with actual px via selection
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      const span = document.createElement('span');
      span.style.fontSize = e.target.value;
      try { range.surroundContents(span); } catch {}
    }
    editorRef.current?.focus();
  };

  const handleSave = () => {
    if (!title.trim()) return;
    onSave({ title, category, status, image, content: editorRef.current?.innerHTML || '' });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onCancel} className="flex items-center gap-2 text-gray-500 hover:text-primary transition text-sm font-medium">
          <FaArrowLeft className="w-4 h-4" /> Back to Posts
        </button>
        <h2 className="font-bold text-gray-800 text-lg">{post ? 'Edit Post' : 'New Post'}</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Main editor */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <input value={title} onChange={e => setTitle(e.target.value)}
              placeholder="Post title..."
              className="w-full text-xl font-bold text-gray-800 border-none outline-none placeholder-gray-300 mb-4" />

            {/* Toolbar */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="flex flex-wrap items-center gap-0.5 p-2 bg-gray-50 border-b border-gray-200">
                {/* Font family */}
                <select value={fontFamily} onChange={handleFontFamily}
                  className="text-xs border border-gray-200 rounded px-2 py-1 mr-1 focus:outline-none focus:border-primary">
                  {fontFamilies.map(f => <option key={f}>{f}</option>)}
                </select>
                {/* Font size */}
                <select value={fontSize} onChange={handleFontSize}
                  className="text-xs border border-gray-200 rounded px-2 py-1 mr-2 focus:outline-none focus:border-primary">
                  {fontSizes.map(s => <option key={s}>{s}</option>)}
                </select>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                <ToolbarBtn onClick={() => exec('bold')} title="Bold"><FaBold className="w-3.5 h-3.5" /></ToolbarBtn>
                <ToolbarBtn onClick={() => exec('italic')} title="Italic"><FaItalic className="w-3.5 h-3.5" /></ToolbarBtn>
                <ToolbarBtn onClick={() => exec('underline')} title="Underline"><FaUnderline className="w-3.5 h-3.5" /></ToolbarBtn>
                <ToolbarBtn onClick={() => exec('strikeThrough')} title="Strikethrough"><FaStrikethrough className="w-3.5 h-3.5" /></ToolbarBtn>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                <ToolbarBtn onClick={() => exec('justifyLeft')} title="Align Left"><FaAlignLeft className="w-3.5 h-3.5" /></ToolbarBtn>
                <ToolbarBtn onClick={() => exec('justifyCenter')} title="Align Center"><FaAlignCenter className="w-3.5 h-3.5" /></ToolbarBtn>
                <ToolbarBtn onClick={() => exec('justifyRight')} title="Align Right"><FaAlignRight className="w-3.5 h-3.5" /></ToolbarBtn>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                <ToolbarBtn onClick={() => exec('insertUnorderedList')} title="Bullet List"><FaListUl className="w-3.5 h-3.5" /></ToolbarBtn>
                <ToolbarBtn onClick={() => exec('insertOrderedList')} title="Numbered List"><FaListOl className="w-3.5 h-3.5" /></ToolbarBtn>
                <ToolbarBtn onClick={() => exec('formatBlock', 'blockquote')} title="Quote"><FaQuoteRight className="w-3.5 h-3.5" /></ToolbarBtn>

                <div className="w-px h-5 bg-gray-200 mx-1" />

                {/* Text color */}
                <label title="Text Color" className="p-1.5 rounded text-gray-600 hover:bg-gray-100 cursor-pointer flex items-center">
                  <MdFormatColorText className="w-4 h-4" />
                  <input type="color" className="w-0 h-0 opacity-0 absolute"
                    onChange={e => exec('foreColor', e.target.value)} />
                </label>

                {/* Heading buttons */}
                {['H1','H2','H3'].map(h => (
                  <ToolbarBtn key={h} onClick={() => exec('formatBlock', h.toLowerCase())} title={h}>
                    <span className="text-xs font-bold">{h}</span>
                  </ToolbarBtn>
                ))}

                <ToolbarBtn onClick={() => exec('removeFormat')} title="Clear Formatting">
                  <span className="text-xs font-bold">Tx</span>
                </ToolbarBtn>
              </div>

              {/* Editable area */}
              <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                className="min-h-[300px] p-4 text-gray-700 text-sm leading-relaxed focus:outline-none"
                style={{ fontFamily: fontFamily === 'Default' ? 'inherit' : fontFamily }}
                dangerouslySetInnerHTML={{ __html: post?.content || '' }}
              />
            </div>
          </div>
        </div>

        {/* Sidebar settings */}
        <div className="space-y-4">
          {/* Publish settings */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-4">
            <h4 className="font-bold text-gray-800 text-sm">Publish Settings</h4>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Status</label>
              <select value={status} onChange={e => setStatus(e.target.value as 'published' | 'draft')}
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary transition">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="flex gap-2 pt-1">
              <button onClick={onCancel}
                className="flex-1 py-2 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
                Cancel
              </button>
              <button onClick={handleSave}
                className="flex-1 py-2 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-accent transition">
                {post ? 'Update' : 'Publish'}
              </button>
            </div>
          </div>

          {/* Cover image */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h4 className="font-bold text-gray-800 text-sm mb-3">Cover Image</h4>
            {image ? (
              <div className="relative">
                <img src={image} alt="Cover" className="w-full h-40 object-cover rounded-xl" />
                <button onClick={() => setImage('')}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition">
                  <FaTrash className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-36 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-primary hover:bg-primary/5 transition">
                <FaImage className="w-8 h-8 text-gray-300 mb-2" />
                <span className="text-xs text-gray-400">Click to upload image</span>
                <input ref={imageInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogAdmin: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [editorPost, setEditorPost] = useState<Post | null | undefined>(undefined);

  const openAdd = () => setEditorPost(null);
  const openEdit = (post: Post) => setEditorPost(post);
  const closeEditor = () => setEditorPost(undefined);

  const handleSave = (data: Partial<Post>) => {
    if (editorPost) {
      setPosts(prev => prev.map(p => p.id === editorPost.id ? { ...p, ...data } : p));
    } else {
      setPosts(prev => [...prev, {
        id: Date.now(), author: 'Ineza Foundation',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        ...data,
      } as Post]);
    }
    closeEditor();
  };

  if (editorPost !== undefined) {
    return <BlogEditor post={editorPost} onSave={handleSave} onCancel={closeEditor} />;
  }

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
                  <div className="flex items-center gap-3">
                    {post.image && <img src={post.image} alt="" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />}
                    <p className="truncate">{post.title}</p>
                  </div>
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
                    <button onClick={() => setPosts(prev => prev.filter(p => p.id !== post.id))} className="p-1.5 text-gray-400 hover:text-red-500 transition">
                      <FaTrash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogAdmin;
