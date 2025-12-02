import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Founder & Master Chandler',
      bio: 'With over 10 years of experience in candle making, Sarah brings creativity and expertise to every candle we create.',
      image: process.env.PUBLIC_URL + '/images/team1.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of Production',
      bio: 'Michael ensures every candle meets our high standards of quality and consistency.',
      image: process.env.PUBLIC_URL + '/images/team2.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Fragrance Specialist',
      bio: 'Emily combines scents to create our unique, captivating fragrances.',
      image: process.env.PUBLIC_URL + '/images/team3.jpg'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Our Story</h1>
          <p>Handcrafting moments of warmth and serenity since 2015</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <h2>From a Small Workshop to Your Home</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                What began as a passion project in a small home workshop has blossomed into CandleGlow, a beloved brand 
                known for its exquisite handcrafted candles. Our founder, Sarah, started making candles as a way to 
                bring warmth and comfort to her home, and soon, friends and family couldn't get enough of her creations.
              </p>
              <p>
                Today, we continue to honor those humble beginnings by hand-pouring each candle with the same care, 
                attention to detail, and love that went into those first few batches. Every CandleGlow candle is a 
                testament to our commitment to quality, sustainability, and the simple joy of a beautifully scented space.
              </p>
            </div>
            <div className="story-image">
              <img 
                src={process.env.PUBLIC_URL + "/images/workshop.jpg"} 
                alt="Our candle making workshop" 
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We use 100% natural soy wax, lead-free cotton wicks, and recyclable packaging to minimize our environmental impact.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Quality</h3>
              <p>Each candle is hand-poured in small batches to ensure the highest quality and consistency in every product.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Community</h3>
              <p>We're committed to supporting our local community and giving back through various charitable initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="our-team">
        <div className="container">
          <h2>Meet the Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="img-fluid"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = process.env.PUBLIC_URL + '/images/placeholder-avatar.jpg';
                    }}
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Experience the CandleGlow Difference</h2>
          <p>Ready to transform your space with our handcrafted candles?</p>
          <Link to="/products" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
