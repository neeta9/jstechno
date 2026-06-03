import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../../components/common/PageBanner/PageBanner";
import "./Blogs.css";

function Blogs() {
  const blogs = [
    {
      date: "May 28, 2026",
      category: "Industry Insights",
      title: "The Future of Drilling Technology",
      excerpt: "Exploring advanced drilling technologies and their impact on operational efficiency."
    },
    {
      date: "May 15, 2026",
      category: "Safety",
      title: "Zero Incident Safety Culture",
      excerpt: "How we maintain industry-leading safety standards across all operations."
    },
    {
      date: "April 30, 2026",
      category: "Technology",
      title: "Digital Transformation in Oilfield Services",
      excerpt: "Leveraging IoT and AI for predictive maintenance and optimization."
    },
    {
      date: "April 10, 2026",
      category: "Industry Insights",
      title: "Sustainable Oilfield Operations",
      excerpt: "Best practices for environmentally responsible operations."
    },
    {
      date: "March 25, 2026",
      category: "Best Practices",
      title: "Well Completion Optimization",
      excerpt: "Advanced techniques for maximizing well productivity."
    },
    {
      date: "March 5, 2026",
      category: "Case Studies",
      title: "Successful Project Execution",
      excerpt: "Lessons learned from our completed offshore drilling projects."
    }
  ];

  return (
    <MainLayout>
      <PageBanner title="Blogs" subtitle="Industry insights, best practices, and company updates" />
      
      <section className="blogs-section">
        <div className="container">
          <div className="blogs-grid">
            {blogs.map((blog, idx) => (
              <article key={idx} className="blog-card">
                <div className="blog-header">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-date">{blog.date}</span>
                </div>
                <h3>{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <a href="#" className="read-more">Read More →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Blogs;
