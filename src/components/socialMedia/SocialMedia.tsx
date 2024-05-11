import React from 'react';
import Icon from '../icon/Icon.tsx';
import Href from '../href/Href.tsx';

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media-icons-wrap">
      <div className="social-media-icons">
        <Href iconLink="linkedin" target="_blank">
          <Icon iconName="linkedin" />
        </Href>
        <Href iconLink="github" target="_blank">
          <Icon iconName="github" />
        </Href>
        <Href iconLink="facebook" target="_blank">
          <Icon iconName="facebook" />
        </Href>
        <Href iconLink="behance" target="_blank">
          <Icon iconName="behance" />
        </Href>
      </div>
    </div>
  );
};

export default SocialMedia;
