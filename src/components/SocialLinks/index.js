import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/sofiquldev'}
                rel="noopener noreferrer"
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/sofiquldev/'}
                rel="noopener noreferrer"
                type={'linkedin'}
            />
            <SocialLinks.Link
                url={'https://youtube.com/sofiquldev'}
                rel="noopener noreferrer"
                type={'youtube'}
            />
            <SocialLinks.Link
                url={'https://join.skype.com/invite/Bnb8sbYh4Hqd'}
                rel="noopener noreferrer"
                type={'skype'}
            />
            <SocialLinks.Link
                url={'tel:+8801799008442'}
                rel="noopener noreferrer"
                type={'phone'}
                types={'fa fa-phone'}
            />
        </div>
    );
};



SocialLinks.Link = ({url, type, types}) => <a href={url} target="_blank" ><span className={types ? types : `fab fa-${type}`} /></a>
;

export default SocialLinks;
