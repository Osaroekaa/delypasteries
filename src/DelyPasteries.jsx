export default function DelyPasteriesLanding() {
  const products = [
    {
      name: "Cakes",
      image: "/image/Cake.jpg",
      description: "Deliciously moist cakes for every celebration, baked fresh daily with premium ingredients"
    },
    {
      name: "Fish Roll",
      image: "/image/Fish-roll.jpg",
      description: "Crispy golden pastry filled with seasoned fish, perfect for any time snacking"
    },
    {
      name: "Egg Roll",
      image: "/image/Egg-roll.jpg",
      description: "Soft, fluffy rolls with perfectly cooked eggs wrapped in our signature dough"
    },
    {
      name: "Buns",
      image: "/image/Buns.jpg",
      description: "Light and airy sweet buns that melt in your mouth with every bite"
    },
    {
      name: "Meat Pie",
      image: "/image/Meat-pie.jpg",
      description: "Savory pastry pockets filled with seasoned minced meat and vegetables"
    },
    {
      name: "Small Chops",
      image: "/image/Small-Chops.jpg",
      description: "Assorted bite-sized treats perfect for parties and special occasions"
    },
    {
      name: "Doughnut",
      image: "/image/Doughnut.jpg",
      description: "Fluffy, glazed doughnuts that are irresistibly soft and sweet"
    },
    {
      name: "Chin Chin",
      image: "/image/Chin-Chin.jpg",
      description: "Crunchy, sweet treats that bring nostalgic flavors in every handful"
    }
  ];

  return (
    <>
      <header className="header">
        <img src="/image/Logo.png" alt="Logo" />
        <div className="business-name">DelyPasteries</div>
      </header>

      <section className="hero">
        <h2>Freshly Baked Delights</h2>
        <p>Crafted with love, baked to perfection</p>
      </section>
      <section className="products">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image">
              {product.image ? <img src={product.image} alt={product.name} /> : <span>{product.emoji}</span>}
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>📞 09013566686</p>
            <p> Eteo, Eleme, Rivers State</p>
          </div>

          <div className="footer-section">
            <h3>Connect With Us</h3>
          <div className="social-links">
              <a 
                href="https://wa.me/2349013566686" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="/image/WhatApp-Logo.jpg" alt="WhatsApp" style={{ width: '24px', height: '24px' }} />
              </a>
              <a 
                href="https://facebook.com/DeliveranceOsaroekaa" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src="/image/Facebook-Logo.jpg" alt="Facebook" style={{ width: '24px', height: '24px' }} />
              </a>
              <a 
                href="tel:09013566686" 
                className="social-icon"
              >
                <img src="/image/Call-Logo.jpg" alt="Call" style={{ width: '24px', height: '24px' }} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>About Us</h4>
            <p>At DelyPasteries, we bring you the finest baked goods made with love and the best ingredients. Every bite tells a story of quality and tradition.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 DelyPasteries. All rights reserved | Designed by Osaroekaa Sampson</p>
        </div>
      </footer>
    </>
  );
}
