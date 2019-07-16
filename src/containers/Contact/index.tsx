import React from 'react';
import './index.css';

export const Contact = () => {
  const phone1 = process.env.REACT_APP_PHONE_NUMBER_1;
  const phone2 = process.env.REACT_APP_PHONE_NUMBER_2;

  return (
    <div className="contact">
      <p>Kysymyksissä ja peruutustapauksissa voit ottaa yhteyttä hääpariin:</p>
      <div className="contact-information">
        <div className="contact-single">
          <p>Ainolaura Oksman</p>
          <div className="contact-email-row">
            <p>
              <strong>Email:</strong>&nbsp;
            </p>
            <a href="mailto:&#097;&#105;&#110;&#111;&#106;&#097;&#107;&#097;&#105;&#116;&#115;&#117;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
              &#097;&#105;&#110;&#111;&#106;&#097;&#107;&#097;&#105;&#116;&#115;&#117;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            </a>
          </div>
          <p>
            <strong>Puhelin:</strong> {phone2}
          </p>
        </div>
        <div className="contact-single">
          <p>Kai-Mikael Alanne</p>
          <div className="contact-email-row">
            <p>
              <strong>Email:</strong>&nbsp;
            </p>
            <a href="mailto:&#097;&#105;&#110;&#111;&#106;&#097;&#107;&#097;&#105;&#116;&#115;&#117;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
              &#097;&#105;&#110;&#111;&#106;&#097;&#107;&#097;&#105;&#116;&#115;&#117;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
            </a>
          </div>
          <p>
            <strong>Puhelin:</strong> {phone1}
          </p>
        </div>
      </div>
    </div>
  );
};
