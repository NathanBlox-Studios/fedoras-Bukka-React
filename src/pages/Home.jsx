import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../components/MenuCard';

export default function Home() {
  const navigate = useNavigate();
  const [spiceLevel, setSpiceLevel] = useState('Lagos Hot');

  const featuredDishes = [
    {
      title: 'Party Jollof & Peppered Chicken',
      category: 'Fresh Off The Fire',
      price: '₦4,500',
      desc: 'smoky jollof rice served with grilled chicken and fried plantain.',
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Pounded Yam &  Egusi Soup',
      category: 'Fresh Off The Fire',
      price: '₦5,500',
      desc: 'Smooth pounded yam  with rich soup loaded with beef, ponmo, and stockfish.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Efo Riro & Assorted Buka Stew',
      category: 'Fresh Off The Fire',
      price: '₦5,000',
      desc: 'Traditional Yoruba vegetable soup with locust beans, dried fish, and goat meat.',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <div>
      <section className="hero">
        <span className="badge">Lekki Phase 1 • Daily Bukka & Event Catering</span>
        <h1>
          Welcome to <span>Fedoras Bukka</span>
        </h1>
        <p>
          Authentic Nigerian home-style cooking, firewood smoky jollof, and full-scale event catering
          prepared fresh every morning in the heart of Lekki, Lagos.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('/services')}>
            Explore Menu & Packages
          </button>
          <button className="btn-secondary" onClick={() => navigate('/contact')}>
            Book Catering
          </button>
        </div>

        <div style={{ marginTop: '24px' }}>
          <span style={{ color: '#a3a3a3', fontSize: '0.9rem', marginRight: '10px' }}>
            Preferred Pepper Level:
          </span>
          {['Mild', 'Lagos Hot', 'Extra spice'].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setSpiceLevel(level)}
              className={spiceLevel === level ? 'filter-btn active' : 'filter-btn'}
              style={{ padding: '5px 12px', fontSize: '0.82rem', marginRight: '6px' }}
            >
              {level}
            </button>
          ))}
          <p style={{ color: '#facc15', fontSize: '0.85rem', marginTop: '8px' }}>
            Selected Kitchen Heat: <strong>{spiceLevel}</strong>
          </p>
        </div>
      </section>

      <h2 className="section-title">Today&apos;s Hot Pot</h2>
      <div className="grid">
        {featuredDishes.map((dish, idx) => (
          <MenuCard
            key={idx}
            item={dish}
            onSelect={() => navigate('/contact')}
          />
        ))}
      </div>
    </div>
  );
}