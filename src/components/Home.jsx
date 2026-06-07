import React from 'react';
import './Home.css';

const Home = () => {
  // 1. Profile Data
  const freelancers = [
    {
      id: 1,
      name: "Rohit K.",
      location: "Solan, India",
      rate: "$7/hr",
      rating: "4.9",
      jobs: "111 jobs",
      bio: "Highly Skilled Wordpress, Shopify, Magento, Wix, Webflow Web Developer, Laravel, PHP, GoHighLevel (GHL) I am a...",
      skills: ["Web Development", "JavaScript", "WordPress"],
      avatar: "https://via.placeholder.com/60"
    },
    {
      id: 2,
      name: "Ved P.",
      location: "Solan, India",
      rate: "$10/hr",
      rating: "4.9",
      jobs: "734 jobs",
      bio: "I am a professional Web developer & Designer, Website Developer working with WordPress, Shopify, Wix, Wix Studio,...",
      skills: ["Web Development", "JavaScript", "Responsive Design"],
      avatar: "https://via.placeholder.com/60"
    },
    {
      id: 3,
      name: "Tristan H.",
      location: "Highlands Ranch, Colorado",
      rate: "$70/hr",
      rating: "5.0",
      jobs: "58 jobs",
      bio: "Hello! I have been studying Computer Science and Web Development for 8 years and primarily work with WordPress. I am...",
      skills: ["JavaScript", "CSS", "PHP"],
      avatar: "https://via.placeholder.com/60"
    },
    {
      id: 4,
      name: "Mohammad Shadab S.",
      location: "New Delhi, India",
      rate: "$13/hr",
      rating: "5.0",
      jobs: "33 jobs",
      bio: "🌍 IAAP CPWA-Certified Accessibility Consultant & Developer specializing in WCAG 2.2 AA audits, ADA compliance,...",
      skills: ["Web Development", "JavaScript", "React"],
      avatar: "https://via.placeholder.com/60"
    },
    {
      id: 5,
      name: "Aleksandr Z.",
      location: "New York, New York",
      rate: "$30/hr",
      rating: "4.9",
      jobs: "816 jobs",
      bio: "Delivering visually stunning, high-impact Web Design that drives real results! 🏆 With over 14 years of experience, we've launched...",
      skills: ["Responsive Design", "Website", "Web Design"],
      avatar: "https://via.placeholder.com/60"
    },
    {
      id: 6,
      name: "Edwin J.",
      location: "Queens County, New York",
      rate: "$40/hr",
      rating: "4.9",
      jobs: "160 jobs",
      bio: "I design and build websites. 15 years across WordPress, Webflow, Wix, Shopify, and Framer, with 117 completed jobs and $200K...",
      skills: ["Web Development", "WordPress", "Web Design"],
      avatar: "https://via.placeholder.com/60"
    }
  ];

  // 2. How it works Data
  const steps = [
    { id: 1, title: "Post a job for free", description: "Tell us what you need. Create your own job post or generate one with AI then filter talent matches.", icon: "📝" },
    { id: 2, title: "Hire top talent fast", description: "Consult, interview, and hire quickly, so you can meet the freelancers you're excited about.", icon: "🤝" },
    { id: 3, title: "Collaborate easily", description: "Use Upwork to chat or video call, share files, and track project progress right from the app.", icon: "💻" },
    { id: 4, title: "Payment simplified", description: "Manage payments in one place with flexible billing options. Only pay for approved work, hourly or by milestone.", icon: "💳" }
  ];

  // 3. Testimonials Data
  const testimonials = [
    {
      id: 1,
      quote: "Upwork provides an umbrella-level of security. I can see a talent's work history and ratings. I can hold payments in escrow. I can communicate through Upwork Messages instead of working through my email address.",
      author: "Kim Darling",
      company: "Emerald Tiger",
      initials: "KD"
    },
    {
      id: 2,
      quote: "Upwork is the best platform to hire skilled professionals when we're not looking for a full-time employee. All the companies in our portfolio use Upwork to find talent across a wide range of fields.",
      author: "David Merry",
      company: "Kinetic Investments",
      initials: "DM"
    }
  ];

  // 4. Resources Data
  const resources = [
    { id: 1, title: "Cost to hire a Web Developer", description: "Explore typical Web Developer rates and what businesses pay to hire top talent.", image: "https://via.placeholder.com/300x150" },
    { id: 2, title: "Web Developer job description template", description: "Get tips to write a job post that attracts qualified Web Developers.", image: "https://via.placeholder.com/300x150" },
    { id: 3, title: "Web Developer interview questions", description: "Top interview questions to help you hire the right Web Developers, faster.", image: "https://via.placeholder.com/300x150" }
  ];

  // 5. Pricing Table Data
  const pricingData = [
    {
      title: "Simple website updates",
      cost: "$250-$1,500 /project",
      level: "Entry- to mid-level",
      details: ["Bug fixes", "Minor feature additions", "Content updates"]
    },
    {
      title: "Ongoing website maintenance",
      cost: "$500-$2,500 /month",
      level: "Mid- to senior-level",
      details: ["Regular updates", "Security patches", "Performance monitoring"]
    },
    {
      title: "Custom website development",
      cost: "$2,500-$15,000 /project",
      level: "Mid- to senior-level",
      details: ["Multi-page custom website", "CMS integration", "Basic SEO setup"]
    },
    {
      title: "Web application development",
      cost: "$8,000-$50,000 /project",
      level: "Senior-level or specialist",
      details: ["Custom web apps", "User authentication", "API integrations"]
    },
    {
      title: "Enterprise web solutions",
      cost: "$255,000-$150,000+ /project",
      level: "Expert or specialist",
      details: ["Scalable architecture", "Complex integrations", "Technical documentation"]
    }
  ];

  return (
    <div className="home-wrapper">
      <div className="home-container">
        
        {/* SECTION 1: HERO HEADER */}
        <header className="hero-section">
          <h1 className="hero-title">Hire the Best Web Developers</h1>
          <div className="rating-summary">
            <span>Clients rate our Web Developers</span>
            <div className="stars">★★★★★</div>
            <span className="rating-score">4.8/5</span>
          </div>
          <p className="review-count">Based on 75,309 client reviews</p>
          <button className="btn-main">Hire freelancers</button>
        </header>

        {/* SECTION 2: PROFILES GRID */}
        <main className="cards-grid">
          {freelancers.map((f) => (
            <div key={f.id} className="profile-card">
              <div className="card-header">
                <img src={f.avatar} alt={f.name} className="avatar" />
                <div className="user-info">
                  <h3 className="user-name">{f.name}</h3>
                  <p className="user-location">{f.location}</p>
                </div>
              </div>
              <div className="stats-row">
                <span>{f.rate}</span>
                <span><span className="star-icon">★</span> {f.rating}</span>
                <span><span className="briefcase-icon">💼</span> {f.jobs}</span>
              </div>
              <p className="bio-text">{f.bio}</p>
              <div className="skills-tags">
                {f.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
                <span className="tag-arrow">˃</span>
              </div>
              <button className="btn-profile">See profile</button>
            </div>
          ))}
        </main>

        <div className="view-more-container">
          <button className="btn-secondary">View more freelancers</button>
        </div>

        <hr className="section-divider" />

        {/* SECTION 3: HOW IT WORKS */}
        <section className="section-block how-it-works-section">
          <h2 className="section-title">How it works</h2>
          <div className="steps-grid">
            {steps.map((s) => (
              <div key={s.id} className="step-card">
                <div className="step-icon-frame">{s.icon}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-description">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* SECTION 4: TESTIMONIALS */}
        <section className="section-block testimonials-section">
          <div className="testimonials-header">
            <h2 className="section-title">Don't just take our word for it</h2>
            <div className="carousel-arrows">
              <button className="arrow-btn">←</button>
              <button className="arrow-btn active">→</button>
            </div>
          </div>
          <div className="testimonials-row">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <p className="quote-text">“{t.quote}”</p>
                <div className="testimonial-footer">
                  <div className="avatar-initials">{t.initials}</div>
                  <div>
                    <h4 className="author-name">{t.author} <span className="verified-badge">✓</span></h4>
                    <p className="author-company">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* SECTION 5: RESOURCES */}
        <section className="section-block resources-section">
          <h2 className="section-title">Resources to help you hire</h2>
          <div className="resources-grid">
            {resources.map((r) => (
              <div key={r.id} className="resource-card">
                <img src={r.image} alt={r.title} className="resource-image" />
                <h3 className="resource-card-title">{r.title}</h3>
                <p className="resource-description">{r.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* SECTION 6: COST & HIRING GUIDE TEXT BLOCK */}
        <section className="section-block guide-section">
          <h2 className="guide-main-title">How much does hiring a web developer cost?</h2>
          <p className="guide-paragraph">
            Independent web developers on Upwork typically charge <span className="inline-link">$15-$50 per hour</span>, with rates varying according to the freelancer's experience and skillset, and the scope and industry of the project. The following chart offers the average cost for hiring a web developer on Upwork for common projects.
          </p>

          <div className="pricing-container">
            {pricingData.map((item, index) => (
              <div key={index} className="pricing-row">
                <div className="pricing-col-main">
                  <h4 className="pricing-item-title">{item.title}</h4>
                  <p className="pricing-item-cost">{item.cost}</p>
                </div>
                <div className="pricing-col-details">
                  <div className="pricing-level-header">
                    <span className="gear-icon">⚙</span> {item.level}
                  </div>
                  <ul className="pricing-bullets">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <h2 className="guide-main-title" style={{ marginTop: '60px' }}>Web developer hiring guide</h2>
          <p className="guide-paragraph">
            Web developers are the architects of the digital landscape, building the websites and applications that drive modern business. Whether creating a simple landing page or a complex e-commerce platform, these professionals translate creative concepts into functional, user-friendly digital experiences. Hiring a skilled developer helps ensure your project is built on a solid technical foundation, optimized for performance, and capable of scaling with your business needs.
          </p>

          <h3 className="guide-sub-title">What does a web developer do?</h3>
          <p className="guide-paragraph">
            A web developer builds and maintains websites, web applications, and other online platforms. Their work centers around everything from creating layouts and interfaces to <span className="inline-link">managing databases</span> and server-side logic. Developers might focus on <span className="inline-link">front-end development</span>, which deals with what users see and interact with, or <span className="inline-link">back-end development</span>, which powers the functionality behind the scenes. They may also do both as <span className="inline-link">full-stack developers</span>.
          </p>
          <p className="guide-paragraph">
            Most front-end work relies on coding languages like HTML, <span className="inline-link">CSS</span>, and JavaScript, while back-end development might involve languages and technologies like Python, Node.js, or PHP. A good developer knows how to connect the front and back ends of a site seamlessly and may also be involved in tasks like API integration, content management system customization, or third-party plugin implementation.
          </p>
          <p className="guide-paragraph">
            In terms of qualifications, many web developers have hands-on experience with modern frameworks like React, Angular, or Vue.js. Familiarity with version control systems like <span className="inline-link">Git</span> is also essential for collaboration and project tracking. Developers should also understand web performance optimization, accessibility standards, and responsive <span className="inline-link">design principles</span> to make sure that websites function well across all devices.
          </p>
          <p className="guide-paragraph">
            Beyond technical skills, successful web developers are strong problem-solvers, pay attention to detail, and are willing to adapt. While formal education in computer science or web development can be helpful, many developers are self-taught or come from bootcamp programs, building their qualifications through portfolios and real-world experience.
          </p>
        </section>

        <hr className="section-divider" />

        {/* SECTION 7: FIND MORE FREELANCERS DIRECTORY */}
        <section className="section-block directory-section">
          <h2 className="directory-main-title">Find more freelancers</h2>
          
          <h3 className="directory-sub-title">Similar Web Developer Skills</h3>
          <div className="directory-links-grid">
            <div>Sitefinity Developers</div>
            <div>Full Stack .NET Developers</div>
            <div>ColdFusion Developers</div>
            <div>Hugo Developers</div>
            <div>Full Stack PHP Developers</div>
            <div>CodeIgniter Developers</div>
            <div>Craft CMS Developers</div>
            <div>JavaScript Developers</div>
            <div>Front-End Developers</div>
            <div>Web Component Developers</div>
            <div>Ember.js Developers & Programmers</div>
            <div>Expression Engine Specialists</div>
            <div>Haml Developers</div>
            <div>AngularJS Developers</div>
            <div>Backbone.js Developers</div>
            <div>Expo.io Developers</div>
          </div>

          <h3 className="directory-sub-title" style={{ marginTop: '40px' }}>Top Countries for Web Developers</h3>
          <div className="directory-links-grid">
            <div>ColdFusion Developers in Brazil</div>
            <div>ColdFusion Developers in India</div>
            <div>ColdFusion Developers in Pakistan</div>
            <div>Adobe Flex Developers in Ukraine</div>
            <div>JavaScript Developers in Switzerland</div>
            <div>JavaScript Developers in Uzbekistan</div>
            <div>JavaScript Developers in Sri Lanka</div>
            <div>JavaScript Developers in Tunisia</div>
            <div>JavaScript Developers in Ukraine</div>
            <div>JavaScript Developers in Vietnam</div>
            <div>JavaScript Developers in Australia</div>
            <div>JavaScript Developers in Israel</div>
            <div>JavaScript Developers in Chile</div>
            <div>JavaScript Developers in Indonesia</div>
            <div>JavaScript Developers in Brazil</div>
            <div>JavaScript Developers in Belgium</div>
          </div>
        </section>

        {/* SECTION 8: GLOBAL HIRE HERO BANNER */}
        <section className="section-block global-hire-banner">
          <div className="global-banner-left">
            <h2>Hire anyone, anywhere.</h2>
            <button className="btn-banner-white">Sign up for free</button>
          </div>
          <div className="global-banner-right">
            <div className="globe-illustration">🌍</div>
          </div>
        </section>

      </div>

      {/* GLOBAL MULTI-COLUMN FOOTER */}
      <footer className="global-footer">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>For Clients</h4>
            <ul>
              <li>How to hire</li>
              <li>Talent Marketplace</li>
              <li>Project Catalog</li>
              <li>Hire an agency</li>
              <li>Enterprise</li>
              <li>Business Plus</li>
              <li>Any Hire</li>
              <li>Contract-to-hire</li>
              <li>Direct Contracts</li>
              <li>Hire worldwide</li>
              <li>Hire in the USA</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>For Talent</h4>
            <ul>
              <li>How to find work</li>
              <li>Direct Contracts</li>
              <li>Find freelance jobs worldwide</li>
              <li>Find freelance jobs in the USA</li>
              <li>Win work with ads</li>
              <li>Exclusive resources with Freelancer Plus</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Help & support</li>
              <li>Success stories</li>
              <li>Upwork reviews</li>
              <li>Resources</li>
              <li>Blog</li>
              <li>Affiliate program</li>
              <li>Refer a client</li>
              <li>Free Business Tools</li>
              <li>Release notes</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Leadership</li>
              <li>Investor relations</li>
              <li>Careers</li>
              <li>Our impact</li>
              <li>Press</li>
              <li>Contact us</li>
              <li>Partners</li>
              <li>Trust, safety & security</li>
              <li>Modern slavery statement</li>
            </ul>
          </div>
        </div>

        <div className="footer-social-row">
          <div className="social-links">
            <span>Follow us</span>
            <div className="social-icon">f</div>
            <div className="social-icon">in</div>
            <div className="social-icon">X</div>
            <div className="social-icon">▶</div>
            <div className="social-icon">📷</div>
            <div className="social-icon">👽</div>
          </div>
          <div className="mobile-apps">
            <span>Mobile app</span>
            <span className="app-icon">🍏</span>
            <span className="app-icon">🤖</span>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom-legal">
          <p className="copyright">© 2015 - 2026 Upwork® Global LLC</p>
          <div className="legal-links">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>CA Notice at Collection</span>
            <span>Your Privacy Choices <span className="toggle-ui">☑</span></span>
            <span>Accessibility</span>
            <span>Sitemap</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;