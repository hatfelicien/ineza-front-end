import React, { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';

import img1 from '../../assets/imgedu.jpg';
import img2 from '../../assets/imgedu1.jpg';
import img3 from '../../assets/imgedu2.jpg';
import img4 from '../../assets/imgedu3.jpg';
import img5 from '../../assets/imgread.jpg';
import img6 from '../../assets/imgread1.jpg';

const initialImages = [
  { id: 1, src: img1, title: 'Education Program', category: 'Education' },
  { id: 2, src: img2, title: 'Community Workshop', category: 'Community' },
  { id: 3, src: img3, title: 'Skills Training', category: 'Skills' },
  { id: 4, src: img4, title: 'Healthcare Outreach', category: 'Healthcare' },
  { id: 5, src: img5, title: 'Reading Program', category: 'Education' },
  { id: 6, src: img6, title: 'Youth Program', category: 'Skills' },
];

const categories = ['All', 'Education', 'Healthcare', 'Skills', 'Community'];

const GalleryAdmin: React.FC = () => {
  const [images, setImages] = useState(initialImages);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? images : images.filter(i => i.category === filter);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex gap-2 flex-wrap">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${filter === c ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {c}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent transition">
          <FaPlus className="w-3.5 h-3.5" /> Upload Image
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(img => (
          <div key={img.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <img src={img.src} alt={img.title} className="w-full h-40 object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <button onClick={() => setImages(prev => prev.filter(i => i.id !== img.id))}
                className="bg-red-500 text-white p-2.5 rounded-full hover:bg-red-600 transition">
                <FaTrash className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-gray-800 truncate">{img.title}</p>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{img.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryAdmin;
