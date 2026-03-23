import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import img1 from '../assets/646562610_1494701692275152_1413279718664048268_n.jpg';
import img2 from '../assets/647195619_1493958029016185_6351033761114794389_n.jpg';
import img3 from '../assets/649269831_1446969253543406_4918276034020187795_n.jpg';
import img4 from '../assets/649500685_1495990485479606_449884561961379105_n.jpg';
import img5 from '../assets/649633154_1495297505548904_8205040246101650319_n.jpg';
import img6 from '../assets/649875733_1496171165461538_4768409416532995933_n.jpg';
import img7 from '../assets/650324191_1499405755138079_6659901836972230176_n.jpg';
import img8 from '../assets/650698946_1498224405256214_4087537440083533_n.jpg';
import img9 from '../assets/651173732_1499165811828740_3137391731481315054_n.jpg';
import img10 from '../assets/651679395_122232618968100927_8440901709105372126_n.jpg';
import img11 from '../assets/652307808_866272139794459_2762522930739570475_n.jpg';
import img12 from '../assets/652379565_2104648810331458_3997499678761705759_n.jpg';

const events = [
  {
    id: 1,
    title: 'Annual Education Day 2024',
    date: 'March 15, 2024',
    category: 'Education',
    cover: img1,
    description: 'A celebration of academic achievements and educational milestones for students across Rwanda.',
    photos: [img1, img2, img3, img4, img5, img6],
  },
  {
    id: 2,
    title: 'Community Health Camp',
    date: 'June 8, 2024',
    category: 'Healthcare',
    cover: img7,
    description: 'Free medical checkups, health screenings and wellness education for underserved communities.',
    photos: [img7, img8, img9, img10],
  },
  {
    id: 3,
    title: 'Youth Skills Training',
    date: 'August 20, 2024',
    category: 'Skills',
    cover: img11,
    description: 'Vocational training and entrepreneurship workshops empowering the next generation.',
    photos: [img11, img12, img1, img3, img5],
  },
  {
    id: 4,
    title: 'Community Outreach Program',
    date: 'October 5, 2024',
    category: 'Community',
    cover: img4,
    description: 'Reaching out to remote communities with essential resources and support programs.',
    photos: [img4, img6, img8, img10, img12, img2],
  },
];

const categories = ['All', 'Education', 'Healthcare', 'Skills', 'Community'];

const Gallery: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered = activeCategory === 'All' ? events : events.filter(e => e.category === activeCategory);

  return (
    <section id="gallery" className="py-14 sm:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">Gallery</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore our events and the moments that define our mission
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setSelectedEvent(null); }}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === cat ? 'bg-primary text-white shadow-lg' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {!selectedEvent && (
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {filtered.map((event, index) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Cover Image */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={event.cover}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {event.category}
                    </span>
                  </div>

                  {/* Photo Count Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      {event.photos.length} Photos
                    </span>
                  </div>

                  {/* Preview thumbnails */}
                  <div className="absolute bottom-16 right-4 flex gap-1">
                    {event.photos.slice(0, 3).map((photo, i) => (
                      <div key={i} className="w-10 h-10 rounded-lg overflow-hidden border-2 border-white/50">
                        <img src={photo} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    {event.photos.length > 3 && (
                      <div className="w-10 h-10 rounded-lg bg-black/60 border-2 border-white/50 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">+{event.photos.length - 3}</span>
                      </div>
                    )}
                  </div>

                  {/* Title & Date */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-xl font-bold mb-1">{event.title}</h3>
                    <p className="text-white/70 text-sm">{event.date}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white dark:bg-gray-700 p-5 flex items-center justify-between">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mr-4">{event.description}</p>
                  <div className="flex-shrink-0 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Expanded Event Photos */}
        {selectedEvent && (
          <div className="animate-fade-in-up">
            {/* Back Button & Event Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={() => setSelectedEvent(null)}
                className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full hover:bg-accent transition-all duration-300 font-semibold hover:scale-105 w-fit"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Collections
              </button>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{selectedEvent.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{selectedEvent.date} · {selectedEvent.photos.length} Photos</p>
              </div>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {selectedEvent.photos.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => setLightboxImage(photo)}
                  className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-up ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 60}ms`, aspectRatio: index === 0 ? 'auto' : '1' }}
                >
                  <img
                    src={photo}
                    alt={`${selectedEvent.title} - Photo ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ minHeight: index === 0 ? '350px' : '180px' }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-accent transition w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            onClick={() => setLightboxImage(null)}
          >
            ✕
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
