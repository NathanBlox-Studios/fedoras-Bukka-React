import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../components/MenuCard';

const MENU_ITEMS = [
  {
    id: 1,
    title: 'Smoky Jollof Combo',
    category: 'Daily Bukka',
    price: '₦4,500',
    desc: 'Party-style jollof rice, sweet fried dodo, coleslaw, and spicy grilled chicken.',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Amala, Ewedu & Gbegiri Special',
    category: 'Daily Bukka',
    price: '₦4,800',
    desc: 'Amala served with abula soup, buka stew, and assorted meats.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Ofada Rice & Sauce',
    category: 'Daily Bukka',
    price: '₦5,200',
    desc: 'Local Ofada rice wrapped in Uma leaves with spicy ayamase stew.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Corporate Office Lunch Plan',
    category: 'Catering',
    price: '₦3,800 / head',
    desc: 'Scheduled weekday lunch packs delivered hot to offices across Lekki, VI, and Mainland.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Owambe & Event Buffet Package',
    category: 'Catering',
    price: 'From ₦250,000',
    desc: 'Full-service live chafing dish setup, servers, small chops, and main courses for 50–300 guests.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Weekend Family Soup Bowl (4 Litres)',
    category: 'Catering',
    price: '₦32,000',
    desc: 'Pre-ordered bulk bowls of Egusi, Efo Riro, or Okra stocked with fresh proteins.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
  },
];

export default function Services() {
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const filteredItems =
    filter === 'All' ? MENU_ITEMS : MENU_ITEMS.filter((item) => item.category === filter);

  return (
    <div>
      <div className="page-header">
        <h1>Our Menu & Catering Services</h1>
        <p>Filter between daily individual plates and bulk event catering packages.</p>
      </div>

      <div className="filter-bar">
        {['All', 'Daily Bukka', 'Catering'].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {filteredItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onSelect={() => navigate('/contact')}
          />
        ))}
      </div>
    </div>
  );
}