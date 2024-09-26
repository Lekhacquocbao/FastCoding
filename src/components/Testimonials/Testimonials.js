import React from 'react';
import './Testimonials.scss'; // Đảm bảo file SCSS được import

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial-item">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut nulla sapien, at aliquam erat. Sed vitae massa tellus."
          </p>
          <cite>John Travis, CEO, DomainName.com</cite>
        </div>

        <div className="testimonial-item">
          <p>
            "Aliquam commodo aliquam metus, sed iaculis nibh tempus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          </p>
          <cite>Jane Doe, Founder, CompanyName.com</cite>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
