import React from 'react';
import './index.css';

export const Contact = () => (
  <div className="contact">
    <p>Kysymyksissä ja peruutustapauksissa voit ottaa yhteyttä hääpariin:</p>
    <div className="contact-information">
      <div className="contact-single">
        <p>Kai-Mikael Alanne</p>
        <div className="contact-email-row">
          <p>
            <strong>Email:</strong>&nbsp;
          </p>
          <a href="mailto:&#107;&#097;&#105;&#116;&#115;&#117;&#106;&#097;&#097;&#105;&#110;&#111;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            &#107;&#097;&#105;&#116;&#115;&#117;&#106;&#097;&#097;&#105;&#110;&#111;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
          </a>
        </div>
        <p>
          <strong>Puhelin:</strong> +358400000000
        </p>
      </div>
      <div className="contact-single">
        <p>Ainolaura Oksman</p>
        <div className="contact-email-row">
          <p>
            <strong>Email:</strong>&nbsp;
          </p>
          <a href="mailto:&#107;&#097;&#105;&#116;&#115;&#117;&#106;&#097;&#097;&#105;&#110;&#111;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            &#107;&#097;&#105;&#116;&#115;&#117;&#106;&#097;&#097;&#105;&#110;&#111;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
          </a>
        </div>
        <p>
          <strong>Puhelin:</strong> +358400000000
        </p>
      </div>
    </div>
  </div>
);
