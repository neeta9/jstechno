import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./News.css";

function News() {
  const news = [
    {
      date: "June 1, 2026",
      category: "Company News",
      title: "SAC Wins Major Drilling Contract in the Middle East",
      excerpt: "Secured a multi-year drilling services contract with a leading oil operator."
    },
    {
      date: "May 20, 2026",
      category: "Awards",
      title: "Recognized for Safety Excellence",
      excerpt: "Awarded Regional Safety Excellence Award for zero-incident operations."
    },
    {
      date: "April 15, 2026",
      category: "Press Release",
      title: "Strategic Partnership Announcement",
      excerpt: "Partnering with international technology provider for advanced solutions."
    },
    {
      date: "March 30, 2026",
      category: "Company News",
      title: "New Offshore Vessel Deployment",
      excerpt: "Launched new state-of-the-art support vessel for offshore operations."
    },
    {
      date: "February 28, 2026",
      category: "Industry News",
      title: "Market Analysis Report Released",
      excerpt: "Comprehensive analysis of oilfield services market trends and opportunities."
    },
    {
      date: "February 10, 2026",
      category: "Company News",
      title: "Expanded Operations in South Asia",
      excerpt: "Opened new regional headquarters to serve growing market demand."
    }
  ];

  return (
    <MainLayout>
      <PageBanner title="News" subtitle="Latest company news, press releases, and industry updates" />
      
      <section className="news-section">
        <div className="container">
          <div className="news-grid">
            {news.map((item, idx) => (
              <article key={idx} className="news-card">
                <div className="news-header">
                  <span className="news-category">{item.category}</span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#" className="read-more">View Full Story →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default News;
