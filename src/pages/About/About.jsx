import './About.css'
import React from 'react';
import npsLogoBig from '../../assets/national-park-service-vector-logo.png';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo.jsx';

function About() {
    return (
        <div className="outer-container">

            <ProfileInfo
                title="National Park Service"
                discription="Since 1916, the National Park Service has been entrusted with the care of our national parks. With the help of volunteers and partners, we safeguard these special places and share their stories with more than 318 million visitors every year. But our work doesn't stop there.
                Taking care of the national parks and helping Americans take care of their communities is a job we love, and we need—and welcome—your help and support."
                image={npsLogoBig}
            />
            <div className="page-container-about">
                <div className="about-item">
                    <h2>Our Mission</h2>
                    <p>The National Park Service preserves unimpaired the natural and cultural resources and values of
                        the National Park System for the enjoyment, education, and inspiration of this and future
                        generations. The National Park Service cooperates with partners to extend the benefits of
                        natural and cultural resource conservation and outdoor recreation throughout this country and
                        the world.
                    </p>
                </div>

                <div className="about-item">
                    <h2>How We Are Organized</h2>
                    <p>The National Park Service is a bureau of the U.S. Department of the Interior and is led by a
                        Director nominated by the US President and confirmed by the US Senate. The Director is supported
                        by senior executives who manage national programs, policy, and budget in the Washington, DC,
                        headquarters and seven regional directors responsible for national park management and program
                        implementation.</p>
                    <br/>
                    <p>Approximately 20,000 strong, the uncommon men and women of the National Park Service share a
                        common trait: a passion for caring for the nation's special places and sharing their
                        stories.</p>
                </div>

                <div className="about-item">
                    <h2>Our Official Emblem</h2>
                    <p>The National Park Service arrowhead was authorized as our official emblem in 1951. The components
                        of the arrowhead may have been inspired by key attributes of the National Park System, with the
                        sequoia tree and bison representing vegetation and wildlife, the mountains and water
                        representing scenic and recreational values, and the arrowhead itself representing historical
                        and archeological values. A history of the arrowhead and other elements of NPS visual design is
                        available. The arrowhead is also the registered service mark of the agency (number 4706627),
                        protected by the trademark laws of the United States. The National Park Service allows limited
                        use of the NPS arrowhead when doing so contributes to our work.</p>
                </div>

            </div>
        </div>

    );
}

export default About