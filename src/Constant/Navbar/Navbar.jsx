import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [searchType, setSearchType] = useState('مستقلين');
  const [activeMenu, setActiveMenu] = useState(null); 
  const navbarRef = useRef(null);

  const handleMenuClick = (menuName, e) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // مصفوفة البيانات: توظيف المستقلين (Hire Talent)
  const developmentSkills = [
    { title: "مطورو الويب الشاملين (Full-Stack)", desc: "تطوير الواجهات الأمامية والخلفية للمواقع" },
    { title: "مطورو ووردبريس", desc: "بناء وصيانة مواقع ووردبريس" },
    { title: "مطورو ويب", desc: "بناء وصيانة المواقع والتطبيقات الإلكترونية" },
    { title: "مطورو شوبيفاي", desc: "إطلاق وتخصيص متاجر شوبيفاي" },
    { title: "مطورو تطبيقات الهواتف", desc: "تطبيقات أصلية (Native) وعابرة للأنظمة" },
    { title: "مطورو ويب فلو (Webflow)", desc: "التطوير البرمجي بدون كود على ويب فلو" },
    { title: "مطورو الواجهات الأمامية", desc: "واجهات وتجارب مستخدم دقيقة ومثالية" },
    { title: "مطورو مواقع التجارة الإلكترونية", desc: "بناء متاجر قابلة للتوسع وتزيد المبيعات" },
    { title: "مطورو رياكت (React JS)", desc: "واجهات أمامية سريعة وديناميكية باستخدام رياكت" },
    { title: "مطورو بابل (Bubble.io)", desc: "تطبيقات بدون كود مبنية بالكامل على منصة بابل" }
  ];

  // مصفوفة البيانات: ابحث عن عمل (Find Work)
  const findWorkCategories = [
    { title: "تطوير المواقع الإلكترونية", desc: "بناء المواقع من الصفر أو باستخدام القوالب" },
    { title: "البرمجة وكتابة الكود", desc: "البرمجة عبر مختلف اللغات والبيئات البرمجية" },
    { title: "تطوير البرمجيات", desc: "بناء المنتجات البرمجية والأدوات التقنية" },
    { title: "برمجة بايثون (Python)", desc: "كتابة السكربتات، الأتمتة، والبرمجة بلغة بايثون" },
    { title: "تطوير الواجهات الأمامية", desc: "بناء واجهات تفاعلية يفضلها المستخدمون" },
    { title: "تصميم الويب", desc: "تصميم مواقع إلكترونية نظيفة، عصرية وعملية" },
    { title: "برمجة رياكت (React JS)", desc: "بناء واجهات مستخدم ديناميكية وسريعة باستخدام رياكت" },
    { title: "تطوير ووردبريس", desc: "بناء وصيانة مواقع ووردبريس" },
    { title: "التطوير الشامل (Full Stack)", desc: "تطوير الواجهات الأمامية والخلفية معاً" },
    { title: "تطوير متاجر شوبيفاي", desc: "بناء وتخصيص متاجر شوبيفاي الإلكترونية" }
  ];

  // مصفوفة البيانات: لماذا صمملي (Why Upwork)
  const whyUpworkResources = [
    { title: "قصص النجاح", desc: "اكتشف كيف تعمل الفرق استراتيجياً لتحقيق النمو", category: "المصادر" },
    { title: "التقييمات وآراء العملاء", desc: "شاهد كيف يبدو التعاون المشترك على منصة صمملي", category: "المصادر" },
    { title: "كيفية التوظيف", desc: "تعلم الطرق المختلفة والمتنوعة لإنجاز أعمالك", category: "المصادر" },
    { title: "كيف تجد عملاً", desc: "تعلم كيفية تنمية مهاراتك والعمل بشروطك الخاصة", category: "المصادر" },
    { title: "تحديثات صمملي", desc: "أحدث منتجاتنا، وميزاتنا الجديدة، وشركائنا", category: "ما الجديد" },
    { title: "معهد البحوث والدراسات", desc: "رؤى وأدوات متقدمة لقادة الأعمال والشركات", category: "ما الجديد" },
    { title: "المدونة", desc: "أخبار وقصص شيقة من عالم العمل الحر والمستقلين", category: "ما الجديد" },
    { title: "ملاحظات الإصدار", desc: "آخر أخبار وتحسينات المنتجات والميزات التقنية", category: "ما الجديد" }
  ];

  return (
    <nav className="custom-navbar" ref={navbarRef} dir="rtl">
      {/* القسم الأيمن: الشعار وروابط التنقل */}
      <div className="navbar-right">
        <div className="navbar-logo">
          <img src={logo} alt="شعار صمملي" />
        </div>
        
        <ul className="navbar-links">
          {/* القائمة 1: توظيف المستقلين */}
          <li 
            className={`dropdown ${activeMenu === 'hire-talent' ? 'active' : ''}`}
            onClick={(e) => handleMenuClick('hire-talent', e)}
            onMouseEnter={() => handleMouseEnter('hire-talent')}
            onMouseLeave={handleMouseLeave}
          >
            وظّف مستقلين <span className="arrow">{activeMenu === 'hire-talent' ? '▲' : '▼'}</span>
            
            {activeMenu === 'hire-talent' && (
              <div className="mega-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                <div className="dropdown-category-title">التطوير وتكنولوجيا المعلومات</div>
                <div className="dropdown-grid">
                  {developmentSkills.map((item, idx) => (
                    <div key={idx} className="dropdown-grid-item">
                      <div className="item-title">{item.title}</div>
                      <div className="item-desc">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          {/* القائمة 2: ابحث عن عمل */}
          <li 
            className={`dropdown ${activeMenu === 'find-work' ? 'active' : ''}`}
            onClick={(e) => handleMenuClick('find-work', e)}
            onMouseEnter={() => handleMouseEnter('find-work')}
            onMouseLeave={handleMouseLeave}
          >
            ابحث عن عمل <span className="arrow">{activeMenu === 'find-work' ? '▲' : '▼'}</span>
            
            {activeMenu === 'find-work' && (
              <div className="mega-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                <div className="dropdown-category-title">التطوير وتكنولوجيا المعلومات</div>
                <div className="dropdown-grid">
                  {findWorkCategories.map((item, idx) => (
                    <div key={idx} className="dropdown-grid-item">
                      <div className="item-title">{item.title}</div>
                      <div className="item-desc">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* القائمة 3: لماذا صمملي */}
          <li 
            className={`dropdown ${activeMenu === 'why-upwork' ? 'active' : ''}`}
            onClick={(e) => handleMenuClick('why-upwork', e)}
            onMouseEnter={() => handleMouseEnter('why-upwork')}
            onMouseLeave={handleMouseLeave}
          >
            لماذا صمملي؟ <span className="arrow">{activeMenu === 'why-upwork' ? '▲' : '▼'}</span>
            
            {activeMenu === 'why-upwork' && (
              <div className="mega-dropdown-menu double-panel" onClick={(e) => e.stopPropagation()}>
                {/* اللوحة الإعلانية الجانبية */}
                <div className="dropdown-branding-panel">
                  <h3>تعرّف على منصة صمملي</h3>
                  <p>اكتشف المنصة المهيأة والمصممة لمستقبل العمل الحر.</p>
                </div>

                {/* لوحة المحتوى والشبكة البرمجية */}
                <div className="dropdown-content-panel">
                  <div className="dropdown-category-title">المصادر</div>
                  <div className="dropdown-grid">
                    {whyUpworkResources.filter(r => r.category === "المصادر").map((item, idx) => (
                      <div key={idx} className="dropdown-grid-item">
                        <div className="item-title">{item.title}</div>
                        <div className="item-desc">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="dropdown-category-title" style={{ marginTop: '24px' }}>ما الجديد</div>
                  <div className="dropdown-grid">
                    {whyUpworkResources.filter(r => r.category === "ما الجديد").map((item, idx) => (
                      <div key={idx} className="dropdown-grid-item">
                        <div className="item-title">{item.title}</div>
                        <div className="item-desc">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </li>

          <li className="nav-link-item">
            <a href="#build-website">صمم موقعك</a>
          </li>


          <li className="nav-link-item">
            <a href="#pricing">الأسعار</a>
          </li>
        </ul>
      </div>

      {/* القسم الأيسر: حقل البحث وأزرار تسجيل الدخول */}
      <div className="navbar-left">
        <div className="search-container">
          <div className="search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input type="text" placeholder="ابحث هنا..." className="search-input" />
          <div className="search-divider"></div>
          <div className="search-dropdown" onClick={() => setSearchType(searchType === 'مستقلين' ? 'مشاريع' : 'مستقلين')}>
            {searchType} <span className="arrow">▼</span>
          </div>
        </div>

        <div className="navbar-auth">
          <a href="#login" className="btn-login">تسجيل الدخول</a>
          <a href="#signup" className="btn-signup">إنشاء حساب</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;