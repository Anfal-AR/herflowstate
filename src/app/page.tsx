'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  useEffect(() => {
    // Intersection Observer for card animations
    const cards = document.querySelectorAll('.feature-card, .coming-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all cards with staggered animation
    cards.forEach((card, index) => {
      const element = card as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(element);
    });

    // Click tracking with analytics
    const handleFeatureClick = (featureName: string) => {
      console.log(`Feature clicked: ${featureName}`);
      // Add analytics tracking here if needed
    };

    const buttons = document.querySelectorAll('.feature-btn');
    buttons.forEach((btn, index) => {
      const labels = ['Blog', 'Template', 'Video Series'];
      btn.addEventListener('click', () => handleFeatureClick(labels[index]));
    });

    // Parallax effect for header
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const header = document.querySelector('.header') as HTMLElement;
      if (header) {
        header.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      cards.forEach((card) => {
        const element = card as HTMLElement;
        observer.unobserve(element);
      });
      buttons.forEach((btn, index) => {
        const labels = ['Blog', 'Template', 'Video Series'];
        btn.removeEventListener('click', () => handleFeatureClick(labels[index]));
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="herflowstate-app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1>HerFlowState</h1>
            <p>A comprehensive self-care & productivity toolkit for modern women who build, create, and lead.</p>
            <div className="header-accent"></div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {/* Feature 1: Blog */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="feature-title">Modern Lady Self-Care Guide</h2>
              <p className="feature-description">
                A living guide to beauty, balance & belief. Dive deep into comprehensive articles that nurture your mind, body, and spirit.
              </p>
              <Link
                href="https://www.sparkskytech.com/blog/modern-lady-self-care"
                className="feature-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Latest Posts
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7,7 17,7 17,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Feature 2: Notion Template */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="feature-title">The Beautifully Aligned Life</h2>
              <p className="feature-description">
                Digital Notion template: Self-care & productivity kit designed specifically for women who build. Organize your life with intention.
              </p>
              <Link
                href="https://www.sparkskytech.com/shop/the-beautifully-aligned-life"
                className="feature-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Your Template
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7,7 17,7 17,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Feature 3: YouTube */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="feature-title">Self-Care Video Series</h2>
              <p className="feature-description">
                Visual guides on your YouTube journey. Watch, learn, and implement self-care practices that fit your busy lifestyle.
              </p>
              <Link
                href="https://www.youtube.com/watch?v=SabFAhnpegU&list=PLaSmN7qMfXNRY-LRgtJiCTN1s5AXD3f7t&index=8"
                className="feature-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7,7 17,7 17,17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="coming-soon">
            <div className="coming-header">
              <h3>✨ Coming Soon</h3>
              <p>Exciting new features in development</p>
            </div>
            <div className="coming-features">
              <div className="coming-item">
                <div className="coming-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Daily Planner</h4>
                <p>Mindful daily planning tools</p>
              </div>
              <div className="coming-item">
                <div className="coming-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Mood Tracker</h4>
                <p>Track your emotional wellness</p>
              </div>
              <div className="coming-item">
                <div className="coming-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Financial Care</h4>
                <p>Money mindset & budgeting tools</p>
              </div>
              <div className="coming-item">
                <div className="coming-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Social Wellness</h4>
                <p>Community & relationship building</p>
              </div>
              <div className="coming-item">
                <div className="coming-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Gentle Reminders</h4>
                <p>Personalized self-care nudges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link
                href="https://www.sparkskytech.com/blog/modern-lady-self-care"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Modern Lady Self-Care Blog
              </Link>
              <Link
                href="https://youtube.com/@SparkSkyTech"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube Series
              </Link>
              <Link
                href="https://www.sparkskytech.com/shop/the-beautifully-aligned-life"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notion Template
              </Link>
            </div>
            <div className="footer-tagline">
              <p>Designed with intention. Built for balance.</p>
              <div className="footer-heart">💜</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Inline Styles */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #fdf2f8 0%, #f8fafc 50%, #f3e8ff 100%);
          color: #374151;
          line-height: 1.6;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header {
          position: relative;
          text-align: center;
          padding: 100px 0 80px;
          background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
          color: white;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.05) 0%, transparent 50%);
          animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        .header-content {
          position: relative;
          z-index: 2;
        }

        .header h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          background: linear-gradient(45deg, #ffffff 0%, #f8fafc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 4px 20px rgba(0,0,0,0.1);
          letter-spacing: -0.02em;
        }

        .header p {
          font-size: 1.3rem;
          opacity: 0.95;
          max-width: 700px;
          margin: 0 auto 2rem;
          font-weight: 400;
          line-height: 1.7;
        }

        .header-accent {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #ffffff, rgba(255,255,255,0.5));
          margin: 0 auto;
          border-radius: 2px;
        }

        .features {
          padding: 100px 0;
          position: relative;
        }

        .features::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ec4899, transparent);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 50px 40px;
          box-shadow: 
            0 20px 40px rgba(236, 72, 153, 0.08),
            0 0 0 1px rgba(236, 72, 153, 0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(236, 72, 153, 0.1);
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #ec4899, #8b5cf6, #06b6d4);
          border-radius: 24px 24px 0 0;
        }

        .feature-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 
            0 30px 60px rgba(236, 72, 153, 0.15),
            0 0 0 1px rgba(236, 72, 153, 0.1);
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          background: linear-gradient(135deg, #fdf2f8, #f3e8ff);
          border: 2px solid rgba(236, 72, 153, 0.2);
          color: #ec4899;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: rotate(5deg) scale(1.1);
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          color: white;
        }

        .feature-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 20px;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .feature-description {
          color: #6b7280;
          margin-bottom: 35px;
          font-size: 1rem;
          line-height: 1.7;
        }

        .feature-btn {
          background: linear-gradient(135deg, #ec4899, #be185d);
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
        }

        .feature-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);
          background: linear-gradient(135deg, #f472b6, #ec4899);
        }

        .coming-soon {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-radius: 32px;
          padding: 60px 50px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          text-align: center;
          border: 2px dashed rgba(236, 72, 153, 0.2);
          position: relative;
          overflow: hidden;
        }

        .coming-soon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(236, 72, 153, 0.02) 0%, rgba(139, 92, 246, 0.02) 100%);
          pointer-events: none;
        }

        .coming-header {
          margin-bottom: 50px;
          position: relative;
          z-index: 1;
        }

        .coming-header h3 {
          font-size: 2.25rem;
          color: #1f2937;
          margin-bottom: 15px;
          font-weight: 800;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .coming-header p {
          color: #6b7280;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .coming-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .coming-item {
          background: linear-gradient(135deg, rgba(253, 242, 248, 0.8), rgba(243, 232, 255, 0.8));
          backdrop-filter: blur(10px);
          padding: 35px 25px;
          border-radius: 20px;
          border: 1px solid rgba(236, 72, 153, 0.15);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .coming-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .coming-item:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 15px 35px rgba(236, 72, 153, 0.15);
        }

        .coming-item:hover::before {
          transform: scaleX(1);
        }

        .coming-icon {
          width: 50px;
          height: 50px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          color: white;
          transition: all 0.3s ease;
        }

        .coming-item:hover .coming-icon {
          transform: rotate(10deg) scale(1.1);
        }

        .coming-item h4 {
          color: #1f2937;
          font-weight: 700;
          margin-bottom: 12px;
          font-size: 1.2rem;
        }

        .coming-item p {
          color: #6b7280;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .footer {
          background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
          color: white;
          padding: 60px 0 40px;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ec4899, transparent);
        }

        .footer-content {
          text-align: center;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .footer-link {
          color: #ec4899;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #f472b6;
          transform: translateY(-2px);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-tagline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .footer-tagline p {
          font-style: italic;
          opacity: 0.9;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .footer-heart {
          font-size: 1.5rem;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .header {
            padding: 80px 0 60px;
          }

          .header h1 {
            font-size: 2.8rem;
          }

          .header p {
            font-size: 1.1rem;
          }

          .features {
            padding: 60px 0;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            margin-bottom: 60px;
          }

          .feature-card {
            padding: 40px 30px;
          }

          .coming-soon {
            padding: 40px 30px;
          }

          .coming-features {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .footer-links {
            flex-direction: column;
            gap: 20px;
          }

          .footer-tagline {
            flex-direction: column;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .header h1 {
            font-size: 2.2rem;
          }

          .header p {
            font-size: 1rem;
          }

          .feature-card {
            padding: 30px 25px;
          }

          .feature-title {
            font-size: 1.5rem;
          }

          .coming-header h3 {
            font-size: 1.8rem;
          }

          .coming-item {
            padding: 25px 20px;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Focus states for better accessibility */
        .feature-btn:focus,
        .footer-link:focus {
          outline: 2px solid #ec4899;
          outline-offset: 2px;
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          body {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          }

          .feature-card,
          .coming-soon {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border-color: rgba(236, 72, 153, 0.2);
          }

          .feature-title,
          .coming-item h4 {
            color: #f9fafb;
          }

          .feature-description,
          .coming-item p {
            color: #d1d5db;
          }

          .coming-item {
            background: rgba(236, 72, 153, 0.05);
            backdrop-filter: blur(10px);
          }
        }

        /* Print styles */
        @media print {
          .header {
            background: #ec4899 !important;
            -webkit-print-color-adjust: exact;
          }

          .feature-card,
          .coming-soon {
            box-shadow: none;
            border: 1px solid #ec4899;
          }

          .feature-btn {
            background: #ec4899 !important;
            -webkit-print-color-adjust: exact;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .feature-card,
          .coming-soon {
            border: 2px solid #ec4899;
          }

          .feature-btn {
            border: 2px solid #ffffff;
          }
        }
      `}</style>
    </div>
  );
}