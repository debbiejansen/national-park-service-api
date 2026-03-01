import './Faq.css'
import React, {useState} from 'react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className={`arrow ${isOpen ? 'open' : ''}`}>↓</span>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

function Faq() {
    return (
        <div className="outer-container">
        <div className="page-container-faq">
            <h2>Frequently Asked Questions</h2>
            <FaqItem
                question="How can I find a park?"
                answer="You can use the green button on the Home page saying 'find a park' or you can the click the 'explore' link on the top of the page"
            />
            <FaqItem
                question="Where can I find parks I have added to my favorites?"
                answer="You can find all parks you have favourited in your personal account under 'profile'. You need to be logged in to see these. You need to be logged in to see these. Your personal account can be found under 'profile'."
            />
            <FaqItem
                question="Where can I find parks I have added to my visited overview?"
                answer="You can find all parks you have added to your visited overview in your personal account. You need to be logged in to see these. Your personal account can be found under 'profile'."
            />
            <FaqItem
                question="Can I remove parks?"
                answer="Yes, as long as you are logged into your account you are able to delete a park from your overview"
            />
        </div>
        </div>
    );
}

export default Faq