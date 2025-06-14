import React, { useRef, useEffect } from 'react';
import './Blog.css';

const Blog: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 2; // Increased from 1 to 2 for faster scrolling
    let scrollInterval: NodeJS.Timeout;

    // Calculate the width of the original set of cards (half of the total scrollWidth)
    const originalWidth = scrollContainer.scrollWidth / 2;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        // Check if the current scroll position has reached the start of the duplicated cards
        if (scrollContainer.scrollLeft >= originalWidth) {
          // Instantly jump back to the beginning of the original set
          scrollContainer.scrollLeft = 0;
        } else {
          // Continue smooth scrolling
          scrollContainer.scrollLeft += scrollAmount;
        }
      }, 20); // Decreased from 30ms to 20ms for smoother and faster scrolling
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    // Start scrolling
    startScrolling();

    // Pause scrolling when hovering over the container
    scrollContainer.addEventListener('mouseenter', stopScrolling);
    scrollContainer.addEventListener('mouseleave', startScrolling);

    // Cleanup
    return () => {
      stopScrolling();
      scrollContainer.removeEventListener('mouseenter', stopScrolling);
      scrollContainer.removeEventListener('mouseleave', startScrolling);
    };
  }, []);

  return (
    <section className="news-section">
      <h2>Our Recent Projects</h2>
      <div className="news-cards-container" ref={scrollContainerRef}>
        {/* Card 1 */}
        <div className="news-card">
          <img src="https://via.placeholder.com/350x200" alt="News Image 1" />
          <div className="news-card-content">
            <h3>Minsun Solar Launched Solar Experience Centre in Bhopal</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="news-card">
          <img src="https://via.placeholder.com/350x200" alt="News Image 2" />
          <div className="news-card-content">
            <h3>Minsun Solar's Solar Experience Centre Opened in Indore</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="news-card">
          <img src="https://via.placeholder.com/350x200" alt="News Image 3" />
          <div className="news-card-content">
            <h3>Maharashtra's First Rooftop Solar Experience Centre Opens in Nagpur</h3>
          </div>
        </div>

        <div className="news-card">
          <img src="https://via.placeholder.com/350x200" alt="News Image 4" />
          <div className="news-card-content">
            <h3>Installed a 5 kW grid-tied solar system for a family home in Ujjain, enabling over 80% reduction in electricity bills.</h3>
          </div>
        </div>

        <div className="news-card">
          <img src="https://via.placeholder.com/350x200" alt="News Image 5" />
          <div className="news-card-content">
            <h3>Completed a 25 kW rooftop solar system for a packaging facility in Pune. With smart inverters and battery backup.</h3>
          </div>
        </div>
           {/* Duplicate Cards for seamless looping */}
         <div className="news-card">
          <img src="https://via.placeholder.com/350x200" alt="News Image 1" />
          <div className="news-card-content">
            <h3>Minsun Solar Launched Solar Experience Centre in Pachmarhi</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="news-card">
          <img src="https://via.placeholder.com/350x200" alt="News Image 2" />
          <div className="news-card-content">
            <h3>Minsun Solar's Solar Experience Centre Opened in Gwalior</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="news-card">
          <img src="https://via.placeholder.com/350x200" alt="News Image 3" />
          <div className="news-card-content">
            <h3>Madhya Pradesh's HighTech Rooftop Solar Experience Centre Opens in Agarmalwa</h3>
          </div>
        </div>

        <div className="news-card">
          <img src="https://via.placeholder.com/350x200" alt="News Image 4" />
          <div className="news-card-content">
            <h3>Madhya Pradesh's Latest Rooftop Solar Experience Centre Opens in Raisen</h3>
          </div>
        </div>

        <div className="news-card">
          <img src="https://via.placeholder.com/350x200" alt="News Image 5" />
          <div className="news-card-content">
            <h3>Madhya Pradesh's First Rooftop Solar Experience Centre Opens in Vidisha</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 