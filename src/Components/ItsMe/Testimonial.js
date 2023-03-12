import React from 'react';

export default function Testimonial({text, person, imgUrl, position}) {
  return (
            <figure className="snip1574">
            <img src={imgUrl} alt="profile-sample" />
            <figcaption>
                <blockquote>
                <p>{text}</p>
                </blockquote>
                <h3>{person}</h3>
                <h5>{position}</h5>
            </figcaption>
            </figure>
  );
}
