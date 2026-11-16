export default function MenuCard({ item, onSelect }) {
    return (
      <div className="card">
        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            className="card-img"
            loading="lazy"
          />
        )}
        <div className="card-top">
          <span className="tag">{item.category}</span>
          <span className="price">{item.price}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        {onSelect && (
          <button
            type="button"
            className="btn-secondary"
            style={{ marginTop: '14px', width: '100%' }}
            onClick={() => onSelect(item.title)}
          >
            Order This Dish
          </button>
        )}
      </div>
    );
}