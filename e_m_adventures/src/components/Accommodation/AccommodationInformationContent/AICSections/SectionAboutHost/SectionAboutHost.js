import React from 'react';
import classes from './SectionAboutHost.module.css';

const SectionAboutHost = ({ logoBlackProps, showModalProps }) => (
  <section className={classes.sectionAboutHost}>
    <div className={classes.aboutHostHeading}>
      <img
        src={logoBlackProps}
        alt="e & m logo"
        className={classes.aboutHostHeadingLogo}
      />
      <div>
        <h3>Hosted by e &amp; m</h3>
        <p>Planning adventures since 2020</p>
      </div>
    </div>
    <div className={classes.aboutHostContent}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia
        quis vel eros donec ac odio tempor. Mauris rhoncus aenean vel elit
        scelerisque mauris pellentesque pulvinar pellentesque. Gravida dictum
        fusce ut placerat orci nulla. Pellentesque habitant morbi tristique
        senectus et netus. Felis eget velit aliquet sagittis. Odio pellentesque
        diam volutpat commodo sed egestas egestas fringilla. Proin fermentum leo
        vel orci porta non. Bibendum enim facilisis gravida neque convallis.
        Volutpat odio facilisis mauris sit. Netus et malesuada fames ac. Eget mi
        proin sed libero enim.
      </p>
    </div>
    <div className={classes.aboutHostContent}>
      <h4>During Your Stay</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia
        quis vel eros donec ac odio tempor. Mauris rhoncus aenean vel elit
        scelerisque mauris pellentesque pulvinar pellentesque. Gravida dictum
        fusce ut placerat orci nulla. Pellentesque habitant morbi tristique
        senectus et netus.
      </p>
    </div>
    <div className={classes.aboutHostContent}>
      <h4>e &amp; m are superhosts</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia
        quis vel eros donec ac odio tempor. Mauris rhoncus aenean vel elit
        scelerisque mauris pellentesque pulvinar pellentesque. Gravida dictum
        fusce ut placerat orci nulla. Pellentesque habitant morbi tristique
        senectus et netus.
      </p>
    </div>
    <div className={classes.aboutHostInfo}>
      <ul>
        <li>Languages: English, French, German, dutch</li>
        <li>Response Time: within an hour</li>
        <li>Avaliable: 24/7</li>
      </ul>
      <button type="button" onClick={() => showModalProps('contact')}>
        Contact Us
      </button>
      <div className={classes.aboutHostSecurity}>
        <ion-icon name="heart" />
        <p>
          To protect your payment, never transfer money or communicate outside
          of the e &amp; m adventures website or app.
        </p>
      </div>
    </div>
  </section>
);

export default SectionAboutHost;
