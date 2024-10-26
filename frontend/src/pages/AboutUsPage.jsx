import React from 'react';
import '../css/AboutUs.css';

function App() {
  return (
    <div>

      <div className="banner">
      </div>

      <section className="about-section">
        <h2>Welcome to <strong>Flick'd</strong></h2>
        <p>
        Your ultimate destination for movie lovers. We're a platform designed for those who live and breathe films whether it's classic cinema or the latest blockbusters, or obscure indie gems.
        </p>
        <h2><strong>What is Flick'd?</strong></h2>
        <p>Flick'd is more than just a website; it's a vibrant community where film lovers come together to celebrate the art of storytelling. Use Flick'd as your personal film diary to share your movie-watching journey, rate and review films, create watchlists, and discover hidden treasures recommended by fellow Flick'd members.</p>
        <h2><strong>Why is it called Flick'd?</strong></h2>
      <p>The name Flick'd was chosen to be short, catchy, and relevant to our core focus: movies. It's a playful nod to the act of watching a movie, and it evokes a sense of community and shared enjoyment. </p>
        <h2><strong>Do I need to create an account to use this site?</strong></h2>
      <p>No. You may freely browse all of Flick'd without an account, but you'll need to create one if you want to log any movies or otherwise participate.</p>
      <h2><strong>How do I become a member?</strong></h2>
        <p><a href="/signup">Create an account</a> - there is no requirement to be invited by another member.</p>
        <h2><strong>Why Choose Flick'd?</strong></h2>
            <ul>
                <li>User-friendly interface:  Flick'd makes it easy to navigate, discover new films, and connect with other members.</li>
                <li>Discover New Movies: Explore curated lists, discover recommendations from other users, and uncover hidden cinematic treasures you may have missed.</li>
            </ul>

        <a href='/signup' type='button' className='button-default'>Join the Flick'd Family!</a>
      </section>
    </div>
  );
}

export default App;
