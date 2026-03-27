import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import img1 from '../assets/imgedu1.jpg';
import img2 from '../assets/imgedu3.jpg';
import img3 from '../assets/imgedu2.jpg';
import img4 from '../assets/imgread1.jpg';
import img5 from '../assets/imgread2.jpg';
import img6 from '../assets/imgread3.jpg';

interface Comment {
  id: number;
  name: string;
  role?: string;
  date: string;
  text: string;
  avatar: string;
  likes?: number;
  avatarColor?: string;
}

const initialComments: Record<number, Comment[]> = {
  1: [
    { id: 1, name: 'Alice M.', role: 'Teacher, Kigali', date: 'Nov 14, 2024', text: 'This is truly inspiring! Education is the key to everything. I have seen firsthand how access to schooling transforms children\'s lives in our community.', avatar: 'AM', likes: 12, avatarColor: 'bg-accent' },
    { id: 2, name: 'Jean P.', role: 'Program Volunteer', date: 'Nov 15, 2024', text: 'Amazing work by the Ineza Foundation. The scholarship program changed my cousin\'s life — she is now studying medicine at university. Keep it up!', avatar: 'JP', likes: 8, avatarColor: 'bg-orange' },
  ],
  2: [
    { id: 1, name: 'Marie K.', role: 'Community Health Worker', date: 'Oct 7, 2024', text: 'Healthcare access is so important. Thank you for this initiative! The mobile medical units reached villages that had never seen a doctor before.', avatar: 'MK', likes: 15, avatarColor: 'bg-primary' },
  ],
  3: [
    {
      id: 1,
      name: 'David N.',
      role: 'Cohort 2 Graduate · Entrepreneur',
      date: 'Sep 20, 2024',
      text: 'I graduated from the second cohort and launched my agri-tech startup just six months later. The mentorship and business training I received were world-class. This program doesn\'t just teach skills — it builds confidence and opens doors. I now employ 7 people from my village. Highly recommend to every young Rwandan with a dream!',
      avatar: 'DN',
      likes: 34,
      avatarColor: 'bg-secondary',
    },
  ],
  4: [], 5: [], 6: [],
};

const posts = [
  {
    id: 1,
    title: 'How Education is Transforming Communities in Rwanda',
    excerpt: 'Over the past decade, access to quality education has been the single most powerful driver of change in rural Rwanda. Our programs have reached thousands of children...',
    content: `Over the past decade, access to quality education has been the single most powerful driver of change in rural Rwanda. Our programs have reached thousands of children who previously had no access to schooling.\n\nThrough partnerships with local schools and government bodies, we have built classrooms, provided learning materials, and trained teachers to deliver quality education. The results have been remarkable — literacy rates in our target communities have increased by over 60%.\n\nWe believe that every child deserves the opportunity to learn, grow, and contribute to society. Education is not just about reading and writing; it is about building confidence, critical thinking, and a vision for the future.\n\nOur scholarship program has supported over 500 students through secondary school and university, many of whom have returned to their communities as teachers, doctors, and entrepreneurs.`,
    image: img1, category: 'Education', author: 'Ineza Foundation', date: 'November 12, 2024', readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Community Health Initiative Reaches 10,000 Families',
    excerpt: 'Our latest healthcare outreach program has successfully provided free medical checkups, vaccinations, and health education to over 10,000 families across 20 districts...',
    content: `Our latest healthcare outreach program has successfully provided free medical checkups, vaccinations, and health education to over 10,000 families across 20 districts in Rwanda.\n\nThe initiative, launched in partnership with local health centers, deployed mobile medical units to remote areas where healthcare access has historically been limited. Teams of volunteer doctors, nurses, and health educators worked tirelessly over three months to deliver these services.\n\nKey achievements include over 8,000 vaccinations administered, 2,500 maternal health consultations, and 1,200 children screened for malnutrition. We also distributed hygiene kits and clean water purification tablets to families in need.\n\nThis program demonstrates what is possible when communities, organizations, and governments work together toward a common goal of health equity.`,
    image: img2, category: 'Healthcare', author: 'Ineza Foundation', date: 'October 5, 2024', readTime: '4 min read',
  },
  {
    id: 3,
    title: 'Youth Entrepreneurship Program Launches New Cohort',
    excerpt: 'We are excited to announce the launch of our third cohort of the Youth Entrepreneurship Program, welcoming 150 young innovators from across Rwanda...',
    content: `We are excited to announce the launch of our third cohort of the Youth Entrepreneurship Program, welcoming 150 young innovators from across Rwanda.\n\nThis six-month intensive program equips young people aged 18-30 with the skills, knowledge, and networks needed to start and grow successful businesses. Participants receive training in business planning, financial management, digital marketing, and leadership.\n\nPrevious cohorts have produced over 80 successful businesses, creating employment for more than 300 people in local communities. From agriculture to technology, our graduates are driving economic growth and innovation.\n\nApplications for the next cohort are now open. We encourage young people with a passion for entrepreneurship and a desire to make a difference to apply.`,
    image: img3, category: 'Skills', author: 'Ineza Foundation', date: 'September 18, 2024', readTime: '3 min read',
  },
  {
    id: 4,
    title: 'Building Stronger Families Through Support Programs',
    excerpt: 'Family is the foundation of every community. Our family support programs have been helping vulnerable households build resilience and stability...',
    content: `Family is the foundation of every community. Our family support programs have been helping vulnerable households build resilience and stability through a holistic approach to wellbeing.\n\nOur programs address the root causes of family vulnerability, including poverty, lack of education, and limited access to social services. We provide counseling, parenting workshops, economic empowerment training, and emergency assistance to families in crisis.\n\nOver the past year, we have supported over 1,000 families, helping them access social services, improve their livelihoods, and strengthen family bonds. Many families have reported significant improvements in their quality of life and sense of hope for the future.\n\nWe believe that strong families build strong communities, and strong communities build a strong nation.`,
    image: img4, category: 'Community', author: 'Ineza Foundation', date: 'August 30, 2024', readTime: '4 min read',
  },
  {
    id: 5,
    title: 'Digital Literacy Program Bridges the Technology Gap',
    excerpt: 'In an increasingly digital world, access to technology and digital skills is essential. Our digital literacy program is helping communities bridge the technology gap...',
    content: `In an increasingly digital world, access to technology and digital skills is essential. Our digital literacy program is helping communities bridge the technology gap by providing computer training, internet access, and digital skills education.\n\nWe have established five community technology centers equipped with computers, high-speed internet, and trained instructors. These centers serve as hubs for learning, innovation, and economic opportunity.\n\nParticipants learn basic computer skills, internet navigation, online safety, and digital tools for business and education. Advanced courses cover coding, graphic design, and digital marketing.\n\nSince launching, over 2,000 people have completed our digital literacy courses, with many using their new skills to find employment, start online businesses, or continue their education.`,
    image: img5, category: 'Education', author: 'Ineza Foundation', date: 'July 14, 2024', readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Annual Impact Report: A Year of Transformation',
    excerpt: 'As we reflect on the past year, we are proud to share the incredible impact our programs have had on communities across Rwanda. From education to healthcare...',
    content: `As we reflect on the past year, we are proud to share the incredible impact our programs have had on communities across Rwanda. From education to healthcare, skills training to community development, 2024 has been a year of remarkable transformation.\n\nKey highlights include: 2,500 children enrolled in our education programs, 10,000 families reached through healthcare initiatives, 150 youth trained in entrepreneurship, and 50 communities supported through our development programs.\n\nNone of this would have been possible without the generous support of our donors, partners, and volunteers. Your contributions have made a real difference in the lives of thousands of people.\n\nAs we look ahead to 2025, we are committed to expanding our reach, deepening our impact, and continuing to build a brighter future for all Rwandans.`,
    image: img6, category: 'Impact', author: 'Ineza Foundation', date: 'June 1, 2024', readTime: '6 min read',
  },
];

const categories = ['All', 'Education', 'Healthcare', 'Skills', 'Community', 'Impact'];

const CommentSection: React.FC<{ postId: number }> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments[postId] || []);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const newComment: Comment = {
      id: comments.length + 1,
      name,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      text,
      avatar: name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      likes: 0,
      avatarColor: 'bg-primary',
    };
    setComments([...comments, newComment]);
    setName('');
    setText('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="mt-12 pt-10 border-t border-gray-100 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
        <span className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">{comments.length}</span>
        Comments
      </h3>

      {/* Comments List */}
      <div className="space-y-6 mb-10">
        {comments.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-center py-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            className="flex gap-4 animate-fade-in-up bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={`flex-shrink-0 w-12 h-12 ${comment.avatarColor || 'bg-primary'} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md`}>
              {comment.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white leading-tight">{comment.name}</h4>
                  {comment.role && (
                    <span className="text-xs text-primary dark:text-accent font-medium">{comment.role}</span>
                  )}
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap mt-0.5">{comment.date}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-2 mb-3">{comment.text}</p>
              {typeof comment.likes === 'number' && (
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <span className="text-base">👍</span>
                  <span>{comment.likes} {comment.likes === 1 ? 'like' : 'likes'}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <div className="bg-gray-50 dark:bg-gray-700 p-5 sm:p-8 rounded-2xl">
        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Leave a Comment</h4>
        {submitted && (
          <div className="bg-accent/20 text-primary dark:text-accent border border-accent/30 px-4 py-3 rounded-lg mb-6 font-medium">
            ✅ Your comment has been posted successfully!
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl focus:outline-none focus:border-primary transition"
          />
          <textarea
            placeholder="Share your thoughts..."
            value={text}
            onChange={e => setText(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-4 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-xl focus:outline-none focus:border-primary transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  const filtered = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-14 sm:py-24 bg-white dark:bg-gray-900">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">

        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">Blog & News</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Stories, updates and insights from our work across Rwanda
          </p>
        </div>

        {!selectedPost && (
          <>
            <div className="max-w-xl mx-auto mb-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full px-6 py-4 pl-14 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-full focus:outline-none focus:border-primary transition shadow-sm"
                />
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                    activeCategory === cat ? 'bg-primary text-white shadow-lg scale-105' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary/10 border border-gray-200 dark:border-gray-600'
                  }`}
                >{cat}</button>
              ))}
            </div>

            {filtered.length > 0 && (
              <div ref={ref} onClick={() => setSelectedPost(filtered[0])}
                className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl cursor-pointer mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-56 sm:h-72 md:h-auto overflow-hidden">
                    <img src={filtered[0].image} alt={filtered[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 sm:p-10 flex flex-col justify-center">
                    <span className="bg-orange/10 text-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider w-fit mb-4">{filtered[0].category}</span>
                    <h3 className="text-xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-primary transition-colors">{filtered[0].title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{filtered[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">IF</div>
                        <div>
                          <p className="text-sm font-semibold text-gray-800 dark:text-white">{filtered[0].author}</p>
                          <p className="text-xs text-gray-500">{filtered[0].date}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{filtered[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.slice(1).map((post, index) => (
                <div key={post.id} onClick={() => setSelectedPost(post)}
                  className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs">IF</div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{post.date}</p>
                      </div>
                      <span className="text-xs text-gray-400">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 dark:text-gray-400 text-xl">No articles found. Try a different search or category.</p>
              </div>
            )}
          </>
        )}

        {/* Single Post View */}
        {selectedPost && (
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <button onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full hover:bg-accent transition-all duration-300 font-semibold hover:scale-105 mb-8 sm:mb-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </button>

            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-56 sm:h-72 md:h-96 overflow-hidden">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 sm:p-10">
                  <div>
                    <span className="bg-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">{selectedPost.category}</span>
                    <h1 className="text-2xl sm:text-4xl font-bold text-white leading-tight">{selectedPost.title}</h1>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-10">
                <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">IF</div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">{selectedPost.author}</p>
                      <p className="text-sm text-gray-500">{selectedPost.date}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full">{selectedPost.readTime}</span>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Share this article</p>
                    <div className="flex gap-3">
                      <a href="#" className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-full transition-all duration-300 text-lg">📘</a>
                      <a href="#" className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-full transition-all duration-300 text-lg">🐦</a>
                      <a href="#" className="bg-primary/10 hover:bg-primary text-primary hover:text-white p-2 rounded-full transition-all duration-300 text-lg">💼</a>
                    </div>
                  </div>
                  <button onClick={() => setSelectedPost(null)} className="text-primary dark:text-accent font-semibold hover:underline">
                    ← More Articles
                  </button>
                </div>

                {/* Comment Section */}
                <CommentSection postId={selectedPost.id} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
