import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import { Link } from "react-router-dom";
import "./Media.css";

function Media() {
  const mediaCategories = [
    {
      title: "Blogs",
      description: "Industry insights, best practices, and technical articles",
      icon: "📝",
      link: "/media/blogs"
    },
    {
      title: "News",
      description: "Company announcements, press releases, and latest updates",
      icon: "📰",
      link: "/media/news"
    },
    {
      title: "Gallery",
      description: "Photo gallery of our operations and projects",
      icon: "📸",
      link: "/gallery"
    }
  ];

  const recentUpdates = [
    { title: "New Partnership Announced", date: "June 2024", category: "Press Release" },
    { title: "Expansion to New Markets", date: "May 2024", category: "News" },
    { title: "Safety Awards Received", date: "April 2024", category: "Awards" },
    { title: "Project Completion Milestone", date: "March 2024", category: "News" },
  ];

  return (
    <MainLayout>
      <PageBanner title="Media Hub" subtitle="News, blogs, and company updates" />
      
      <section className="media-hub-section">
        <div className="container">
          <div className="media-intro">
            <h2>Stay Connected</h2>
            <p>
              Explore our latest news, industry insights, and company updates. Stay informed about 
              South Asia Consultancy's achievements, projects, and industry news.
            </p>
          </div>

          <div className="media-categories">
            <h3>Explore Our Content</h3>
            <div className="categories-grid">
              {mediaCategories.map((cat, idx) => (
                <Link key={idx} to={cat.link} className="category-card">
                  <div className="category-icon">{cat.icon}</div>
                  <h4>{cat.title}</h4>
                  <p>{cat.description}</p>
                  <span className="arrow">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="recent-updates">
            <h3>Recent Updates</h3>
            <div className="updates-grid">
              {recentUpdates.map((item, idx) => (
                <div key={idx} className="update-card">
                  <p className="update-category">{item.category}</p>
                  <h4>{item.title}</h4>
                  <p className="update-date">📅 {item.date}</p>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Media;
