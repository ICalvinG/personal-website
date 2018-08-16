import React from 'react';

// Components
import SectionHeader from './SectionHeader.js';

const About = () => (
  <section>
    <SectionHeader title={"About Me"} />

    <img
      className='about__sticker'
      src='https://media.giphy.com/media/bGmzbqDKcmvyU/giphy.gif'
      alt='luffy'
    />
    <div className='about__section--description'>
      <p>
        Hello, my name is Calvin. I was born and raised in Brooklyn, New York
        in a neighborhood called Bensonhurst. I enjoy listening to
        <a href='https://soundcloud.com/icalving'> music</a>, watching tv
        shows/movies, reading manga/watching anime, playing video games, and
        writing <a href='https://github.com/ICalvinG'> code</a>.
      </p>

      <p>
        One odd fact about me is that I tend to have a endless void of trivial
        knowledge as I happen to fall into the wikipedia rabbit hole easily
        losing hours of my time. This does work in my favor because it means I
        can be conversational about almost anything and very good to have on
        your trivia night team.
      </p>

      <p>
        One of my favorite things to do is to
        <a href='https://www.instagram.com/cal_ieong/'> travel</a> because I
        embrace the feeling of not knowing and there is just so much in
        this world to discover. My stomach and taste buds also thank me
        because I believe one of the quickest ways to learn another
        culture is through food.
      </p>

      <p>
        I get excited when creating with new technologies and meeting new
        people. Message me and we can link up :).
      </p>
    </div>
  </section>
);

export default About;
