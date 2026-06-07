import React from 'react';
import './Home.css';

const Home = () => {
  // 1. Profile Data (بيانات المستقلين)
  const freelancers = [
    {
      id: 1,
      name: "روهيت ك.",
      location: "سولان، الهند",
      rate: "7$/ساعة",
      rating: "4.9",
      jobs: "111 وظيفة",
      bio: "مطور ويب ماهر للغاية في ووردبريس، شوبيفاي، ماجينتو، ويكس، ويب فلو، لارفيل، بي إتش بي، وجو هاي ليفل...",
      skills: ["تطوير الويب", "جافا سكريبت", "ووردبريس"],
      avatar: "https://via.placeholder.com/60"
    },
    {
      id: 2,
      name: "فيد ب.",
      location: "سولان، الهند",
      rate: "10$/ساعة",
      rating: "4.9",
      jobs: "734 وظيفة",
      bio: "مطور ومصمم ويب محترف، أعمل على منصات ووردبريس، شوبيفاي، ويكس، ويكس ستوديو...",
      skills: ["تطوير الويب", "جافا سكريبت", "التصميم المتجاوب"],
      avatar: "https://via.placeholder.com/60"
    },
    {
      id: 3,
      name: "تريستان هـ.",
      location: "هايلاندز رانتش، كولورادو",
      rate: "70$/ساعة",
      rating: "5.0",
      jobs: "58 وظيفة",
      bio: "مرحباً! أدرس علوم الحاسب وتطوير الويب منذ 8 سنوات وأعمل بشكل أساسي مع ووردبريس...",
      skills: ["جافا سكريبت", "سي إس إس", "بي إتش بي"],
      avatar: "https://via.placeholder.com/60"
    },
    {
      id: 4,
      name: "محمد شاداب س.",
      location: "نيودلهي، الهند",
      rate: "13$/ساعة",
      rating: "5.0",
      jobs: "33 وظيفة",
      bio: "استشاري ومطور معتمد لإمكانية الوصول (IAAP CPWA) متخصص في تدقيق معايير WCAG 2.2 AA والامتثال لقوانين ADA...",
      skills: ["تطوير الويب", "جافا سكريبت", "رياكت"],
      avatar: "https://via.placeholder.com/60"
    },
    {
      id: 5,
      name: "ألكسندر ز.",
      location: "نيويورك، نيويورك",
      rate: "30$/ساعة",
      rating: "4.9",
      jobs: "816 وظيفة",
      bio: "تقديم تصميمات ويب مذهلة وبصرية ذات تأثير قوي يحقق نتائج حقيقية! خبرة تزيد عن 14 عاماً...",
      skills: ["التصميم المتجاوب", "مواقع إلكترونية", "تصميم الويب"],
      avatar: "https://via.placeholder.com/60"
    },
    {
      id: 6,
      name: "إدوين ج.",
      location: "مقاطعة كوينز، نيويورك",
      rate: "40$/ساعة",
      rating: "4.9",
      jobs: "160 وظيفة",
      bio: "أقوم بتصميم وبناء المواقع الإلكترونية. 15 عاماً من الخبرة عبر ووردبريس، ويب فلو، ويكس، وشوبيفاي...",
      skills: ["تطوير الويب", "ووردبريس", "تصميم الويب"],
      avatar: "https://via.placeholder.com/60"
    }
  ];

  // 2. How it works Data (كيف يعمل الموقع)
  const steps = [
    { id: 1, title: "انشر وظيفة مجاناً", description: "أخبرنا بما تحتاجه. أنشئ منشور وظيفتك أو استعن بالذكاء الاصطناعي لتوليده، ثم قم بتصفية المستقلين المناسبين.", icon: "📝" },
    { id: 2, title: "وظّف أفضل الكفاءات بسرعة", description: "استشر، وقابل، ووظّف بسرعة لتلتقي بالمستقلين الذين تطلع للعمل معهم.", icon: "🤝" },
    { id: 3, title: "تعاون بكل سهولة", description: "استخدم صمملي للدردشة أو مكالمات الفيديو، ومشاركة الملفات، ومتابعة تقدم المشروع مباشرة من التطبيق.", icon: "💻" },
    { id: 4, title: "دفعات مالية مبسطة", description: "إدارة المدفوعات في مكان واحد مع خيارات فواتير مرنة. ادفع فقط مقابل العمل المعتمد، سواء بالساعة أو بالمشروع.", icon: "💳" }
  ];

  // 3. Testimonials Data (آراء العملاء)
  const testimonials = [
    {
      id: 1,
      quote: "يوفر صمملي مستوى عالٍ من الأمان. يمكنني رؤية تاريخ عمل المستقل وتقييماته، وحفظ المدفوعات في نظام الضمان، والتواصل عبر الرسائل الداخلية بدلاً من البريد الإلكتروني.",
      author: "كيم دارلينج",
      company: "إميرالد تايجر",
      initials: "كد"
    },
    {
      id: 2,
      quote: "منصة صمملي هي الأفضل لتوظيف محترفين ومستقلين مهرة عندما لا نبحث عن موظف بدوام كامل. جميع الشركات في محفظتنا تستخدم الموقع للعثور على المبدعين.",
      author: "ديفيد ميري",
      company: "كينيتك للاستثمار",
      initials: "دم"
    }
  ];

  // 4. Resources Data (المصادر والمقالات)
  const resources = [
    { id: 1, title: "تكلفة توظيف مطور ويب", description: "استكشف أسعار مطوري الويب المعتادة وما تدفعه الشركات لتوظيف أفضل الكفاءات.", image: "https://via.placeholder.com/300x150" },
    { id: 2, title: "نموذج الوصف الوظيفي لمطور الويب", description: "احصل على نصائح لكتابة منشور وظيفة يجذب مطوري الويب المؤهلين.", image: "https://via.placeholder.com/300x150" },
    { id: 3, title: "أسئلة المقابلة الشخصية لمطوري الويب", description: "أبرز أسئلة المقابلات لمساعدتك في توظيف مطور الويب المناسب بشكل أسرع.", image: "https://via.placeholder.com/300x150" }
  ];

  // 5. Pricing Table Data (جدول الأسعار التقديرية)
  const pricingData = [
    {
      title: "تحديثات بسيطة للموقع",
      cost: "250$ - 1,500$ / للمشروع",
      level: "مستوى مبتدئ إلى متوسط",
      details: ["إصلاح الأخطاء البرمجية", "إضافة ميزات بسيطة", "تحديث المحتوى"]
    },
    {
      title: "صيانة مستمرة للموقع",
      cost: "500$ - 2,500$ / شهرياً",
      level: "مستوى متوسط إلى محترف",
      details: ["تحديثات دورية", "سد الثغرات الأمنية", "مراقبة الأداء"]
    },
    {
      title: "تطوير موقع إلكتروني مخصص",
      cost: "2,500$ - 15,000$ / للمشروع",
      level: "مستوى متوسط إلى محترف",
      details: ["موقع مخصص متعدد الصفحات", "ربط نظام إدارة المحتوى (CMS)", "تهيئة أساسية لمحركات البحث (SEO)"]
    },
    {
      title: "تطوير تطبيقات الويب",
      cost: "8,000$ - 50,000$ / للمشروع",
      level: "مستوى محترف أو متخصص",
      details: ["تطبيقات ويب مخصصة", "نظام تسجيل دخول المستخدمين", "ربط واجهات برمجة التطبيقات (APIs)"]
    },
    {
      title: "حلول الويب للمؤسسات الضخمة",
      cost: "25,000$ - 150,000$+ / للمشروع",
      level: "خبير أو متخصص دقيق",
      details: ["بنية تحتية قابلة للتوسع", "عمليات ربط معقدة", "التوثيق البرمجي والتقني"]
    }
  ];

  return (
    <div className="home-wrapper">
      <div className="home-container">
        
        {/* SECTION 1: HERO HEADER */}
        <header className="hero-section">
          <h1 className="hero-title">وظّف أفضل مطوري الويب</h1>
          <div className="rating-summary">
            <span>تقييم العملاء لمطورينا</span>
            <div className="stars">★★★★★</div>
            <span className="rating-score">4.8/5</span>
          </div>
          <p className="review-count">بناءً على 75,309 تقييم من العملاء</p>
          <button className="btn-main">وظّف مستقلين الآن</button>
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
                <span className="tag-arrow">˂</span>
              </div>
              <button className="btn-profile">عرض الملف الشخصي</button>
            </div>
          ))}
        </main>

        <div className="view-more-container">
          <button className="btn-secondary">عرض المزيد من المستقلين</button>
        </div>

        <hr className="section-divider" />

        {/* SECTION 3: HOW IT WORKS */}
        <section className="section-block how-it-works-section">
          <h2 className="section-title">كيف يعمل الموقع</h2>
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
            <h2 className="section-title">لا تكتفِ بسماع رأينا فقط</h2>
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
          <h2 className="section-title">مصادر تساعدك في التوظيف</h2>
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
          <h2 className="guide-main-title">ما هي تكلفة توظيف مطور ويب؟</h2>
          <p className="guide-paragraph">
            يتراوح أجر مطوري الويب المستقلين على منصة صمملي عادةً بين <span className="inline-link">15$ إلى 50$ في الساعة</span>، وتختلف الأسعار بناءً على خبرة المستقل ومهاراته، بالإضافة إلى حجم المشروع ومجاله. يوضح الجدول التالي متوسط التكلفة لتوظيف مطور ويب في المشاريع الشائعة.
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

          <h2 className="guide-main-title" style={{ marginTop: '60px' }}>دليل توظيف مطوري الويب</h2>
          <p className="guide-paragraph">
            مطورو الويب هم مهندسو المشهد الرقمي، فهم من يقومون ببناء المواقع والتطبيقات التي تدير الأعمال الحديثة. سواء كنت تبحث عن إنشاء صفحة هبوط بسيطة أو منصة تجارة إلكترونية معقدة، فإن هؤلاء المحترفين يحولون الأفكار الإبداعية إلى تجارب رقمية وظيفية وسهلة الاستخدام. يساعد توظيف مطور ماهر في ضمان بناء مشروعك على أساس تقني متين، ومحسن للأداء، وقابل للتوسع مع نمو أعمالك.
          </p>

          <h3 className="guide-sub-title">ماذا يفعل مطور الويب؟</h3>
          <p className="guide-paragraph">
            يقوم مطور الويب ببناء وصيانة المواقع الإلكترونية، تطبيقات الويب، والمنصات الأخرى عبر الإنترنت. يرتكز عملهم على كل شيء بدءاً من إنشاء الواجهات والتصميمات وحتى <span className="inline-link">إدارة قواعد البيانات</span> ومنطق الخادم (Server-side). قد يركز المطورون على <span className="inline-link">تطوير الواجهات الأمامية (Front-end)</span>، والتي تتعامل مع ما يراه المستخدم ويتفاعل معه، أو <span className="inline-link">تطوير الواجهات الخلفية (Back-end)</span>، والتي تدير العمليات خلف الكواليس. ويمكنهم أيضاً القيام بالأمرين معاً كـ <span className="inline-link">مطوري الويب الشاملين (Full-stack)</span>.
          </p>
          <p className="guide-paragraph">
            يعتمد معظم عمل الواجهات الأمامية على لغات البرمجة مثل HTML و <span className="inline-link">CSS</span> وجافا سكريبت، بينما قد يشمل تطوير الواجهات الخلفية لغات وتقنيات مثل بايثون، نود جي إس (Node.js)، أو بي إتش بي (PHP). يعرف المطور الجيد كيفية ربط الواجهات الأمامية والخلفية للموقع بسلاسة، وقد يشارك أيضاً في مهام مثل ربط واجهات برمجة التطبيقات (APIs)، أو تخصيص أنظمة إدارة المحتوى، أو دمج الإضافات الخارجية.
          </p>
          <p className="guide-paragraph">
            من حيث المؤهلات، يتمتع العديد من مطوري الويب بخبرة عملية في التعامل مع أطر العمل الحديثة مثل رياكت (React)، أو أنجولار (Angular)، أو فيو (Vue.js). يعد الإلمام بأنظمة التحكم في الإصدارات مثل <span className="inline-link">Git</span> أمراً ضرورياً للتعاون وتتبع المشاريع. يجب أن يفهم المطورون أيضاً تحسين أداء الويب، ومعايير إمكانية الوصول، ومبادئ <span className="inline-link">التصميم المتجاوب</span> لضمان عمل المواقع بشكل جيد على جميع الأجهزة.
          </p>
          <p className="guide-paragraph">
            بعيداً عن المهارات التقنية، يتميز مطورو الويب الناجحون بقدرتهم العالية على حل المشكلات، والاهتمام بالتفاصيل، والمرونة في التكيف. في حين أن التعليم الأكاديمي في علوم الحاسب أو تطوير الويب يمكن أن يكون مفيداً، فإن العديد من المطورين يعتمدون على التعلم الذاتي أو يتخرجون من المعسكرات البرمجية (Bootcamps)، حيث يبنون مؤهلاتهم من خلال معرض أعمالهم وتجاربهم في العالم الحقيقي.
          </p>
        </section>

        <hr className="section-divider" />

        {/* SECTION 7: FIND MORE FREELANCERS DIRECTORY */}
        <section className="section-block directory-section">
          <h2 className="directory-main-title">ابحث عن المزيد من المستقلين</h2>
          
          <h3 className="directory-sub-title">مهارات مشابهة لمطوري الويب</h3>
          <div className="directory-links-grid">
            <div>مطورو سايت فينيتي (Sitefinity)</div>
            <div>مطورو دوت نت الشاملين (.NET)</div>
            <div>مطورو كولد فيوجن (ColdFusion)</div>
            <div>مطورو هوجو (Hugo)</div>
            <div>مطورو بي إتش بي الشاملين (PHP)</div>
            <div>مطورو كود إجنايتر (CodeIgniter)</div>
            <div>مطورو كرافت سي إم إس (Craft CMS)</div>
            <div>مطورو جافا سكريبت</div>
            <div>مطورو الواجهات الأمامية</div>
            <div>مطورو مكونات الويب (Web Components)</div>
            <div>مطورو ومبرمجو إمبر جي إس (Ember.js)</div>
            <div>متخصصو إكسبريسشن إنجين</div>
            <div>مطورو هامل (Haml)</div>
            <div>مطورو أنجولار جي إس (AngularJS)</div>
            <div>مطورو باكمان جي إس (Backbone.js)</div>
            <div>مطورو إكسبو (Expo.io)</div>
          </div>

          <h3 className="directory-sub-title" style={{ marginTop: '40px' }}>أبرز الدول لمطوري الويب</h3>
          <div className="directory-links-grid">
            <div>مطورو كولد فيوجن في البرازيل</div>
            <div>مطورو كولد فيوجن في الهند</div>
            <div>مطورو كولد فيوجن في باكستان</div>
            <div>مطورو أدوبي فليكس في أوكرانيا</div>
            <div>مطورو جافا سكريبت في سويسرا</div>
            <div>مطورو جافا سكريبت في أوزبكستان</div>
            <div>مطورو جافا سكريبت في سريلانكا</div>
            <div>مطورو جافا سكريبت في تونس</div>
            <div>مطورو جافا سكريبت في أوكرانيا</div>
            <div>مطورو جافا سكريبت في فيتنام</div>
            <div>مطورو جافا سكريبت في أستراليا</div>
            <div>مطورو جافا سكريبت في إسرائيل</div>
            <div>مطورو جافا سكريبت في تشيلي</div>
            <div>مطورو جافا سكريبت في إندونيسيا</div>
            <div>مطورو جافا سكريبت في البرازيل</div>
            <div>مطورو جافا سكريبت في بلجيكا</div>
          </div>
        </section>

        {/* SECTION 8: GLOBAL HIRE HERO BANNER */}
        <section className="section-block global-hire-banner">
          <div className="global-banner-left">
            <h2>وظّف أي شخص، من أي مكان.</h2>
            <button className="btn-banner-white">سجّل مجاناً</button>
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
            <h4>للعملاء</h4>
            <ul>
              <li>كيفية التوظيف</li>
              <li>سوق المواهب</li>
              <li>كتالوج المشاريع</li>
              <li>توظيف وكالة</li>
              <li>المؤسسات والشركات الكبيره</li>
              <li>باقة الأعمال المتميزة</li>
              <li>خدمات التوظيف الشاملة</li>
              <li>التعاقد بغرض التثبيت</li>
              <li>العقود المباشرة</li>
              <li>التوظيف حول العالم</li>
              <li>التوظيف في الولايات المتحدة</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>للمستقلين</h4>
            <ul>
              <li>كيفية العثور على عمل</li>
              <li>العقود المباشرة</li>
              <li>البحث عن وظائف مستقلة عالمياً</li>
              <li>البحث عن وظائف مستقلة في أمريكا</li>
              <li>افتح فرص العمل بالإعلانات</li>
              <li>مصادر حصرية مع باقة المستقل بلس</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>المصادر</h4>
            <ul>
              <li>المساعدة والدعم</li>
              <li>قصص النجاح</li>
              <li>آراء وتقييمات صمملي</li>
              <li>المصادر التعليمية</li>
              <li>المدونة</li>
              <li>برنامج التسويق بالعمولة</li>
              <li>دعوة عميل</li>
              <li>أدوات أعمال مجانية</li>
              <li>ملاحظات التحديثات</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>الشركة</h4>
            <ul>
              <li>من نحن</li>
              <li>القيادة</li>
              <li>علاقات المستثمرين</li>
              <li>الوظائف</li>
              <li>تأثيرنا الاجتماعي</li>
              <li>الصحافة والإعلام</li>
              <li>اتصل بنا</li>
              <li>الشركاء</li>
              <li>الثقة والأمان والخصوصية</li>
              <li>بيان مناهضة العبودية الحديثة</li>
            </ul>
          </div>
        </div>

        <div className="footer-social-row">
          <div className="social-links">
            <span>تابعنا</span>
            <div className="social-icon">f</div>
            <div className="social-icon">in</div>
            <div className="social-icon">X</div>
            <div className="social-icon">▶</div>
            <div className="social-icon">📷</div>
            <div className="social-icon">👽</div>
          </div>
          <div className="mobile-apps">
            <span>تطبيق الهاتف</span>
            <span className="app-icon">🍏</span>
            <span className="app-icon">🤖</span>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom-legal">
          <p className="copyright">© 2015 - 2026 صمملي® جلوبال ذ.م.م</p>
          <div className="legal-links">
            <span>شروط الخدمة</span>
            <span>سياسة الخصوصية</span>
            <span>إشعار كاليفورنيا عند الجمع</span>
            <span>خيارات الخصوصية الخاصة بك <span className="toggle-ui">☑</span></span>
            <span>إمكانية الوصول للموقع</span>
            <span>خريطة الموقع</span>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;