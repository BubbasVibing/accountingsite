import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChevronRight, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { theme } from '../../styles/theme';

const ContactSection = styled.section`
  background: white;
`;

const HeroSection = styled.div`
  background: url('/images/philadelphia.png') center/cover no-repeat;
  padding: 10rem 2rem 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.primary};
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 800;
  position: relative;
  display: inline-block;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${theme.colors.secondary};
    border-radius: 2px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.8;
  margin-top: 1.5rem;
  font-weight: 400;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactInfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoCard = styled.a`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    border-bottom: 3px solid ${theme.colors.secondary};
  }

  .icon {
    background: rgba(166, 207, 79, 0.1);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: ${theme.colors.secondary};
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }

  &:hover .icon {
    background: ${theme.colors.secondary};
    color: white;
  }

  h3 {
    font-size: 1.2rem;
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const FAQSection = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${theme.colors.secondary};
    border-radius: 2px;
  }

  .icon {
    color: ${theme.colors.secondary};
  }
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1.5rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const FAQQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
    color: ${theme.colors.primary};
  }

  .icon {
    transition: transform 0.3s ease;
    color: ${theme.colors.secondary};
  }

  &.open .icon {
    transform: rotate(90deg);
  }
`;

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  margin-top: ${props => props.isOpen ? '1rem' : '0'};

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
    margin: 0;
    padding-right: 1rem;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${theme.colors.secondary};
    border-radius: 2px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${theme.colors.primary};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
    box-shadow: 0 0 0 3px rgba(166, 207, 79, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
    box-shadow: 0 0 0 3px rgba(166, 207, 79, 0.1);
  }
`;

const SubmitButton = styled.button`
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: #b8e15f;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(166, 207, 79, 0.3);
  }
`;

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What documents do I need for tax preparation?",
      answer: "We typically need your W-2 forms, 1099 forms, bank statements, and any other relevant financial documents. We'll provide a detailed checklist during our initial consultation."
    },
    {
      question: "How long does tax preparation take?",
      answer: "The time varies depending on the complexity of your tax situation. Simple returns can be completed in 1-2 weeks, while more complex cases may take 2-4 weeks."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a free initial consultation to discuss your needs and provide a personalized quote for our services."
    },
    {
      question: "What languages do you speak?",
      answer: "We provide services in English, Arabic, and several other languages to better serve our diverse client base."
    },
    {
      question: "What are your business hours?",
      answer: "We're open Monday through Friday, 9:00 AM to 6:00 PM. We also offer weekend appointments by request."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactSection>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Contact Us</HeroTitle>
          <HeroSubtitle>
            Have questions? We're here to help. Choose from our FAQ section or 
            fill out the contact form below to get in touch with us.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <Container>
          <ContactInfoSection>
            <ContactInfoCard href="tel:+15551234567">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </ContactInfoCard>
            
            <ContactInfoCard href="mailto:info@naseemcpa.com">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3>Email</h3>
              <p>info@naseemcpa.com</p>
            </ContactInfoCard>
            
            <ContactInfoCard 
              href="https://www.google.com/maps?q=5238+4249+Walnut+St,+Philadelphia,+PA+19104"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h3>Location</h3>
              <p>5238, 4249 Walnut St, Philadelphia, PA 19104</p>
            </ContactInfoCard>
          </ContactInfoSection>

          <ContactGrid>
            <FAQSection>
              <FAQTitle>
                <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
                Frequently Asked Questions
              </FAQTitle>
              {faqs.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQQuestion 
                    className={openFAQ === index ? 'open' : ''}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h3>{faq.question}</h3>
                    <FontAwesomeIcon icon={faChevronRight} className="icon" />
                  </FAQQuestion>
                  <FAQAnswer isOpen={openFAQ === index}>
                    <p>{faq.answer}</p>
                  </FAQAnswer>
                </FAQItem>
              ))}
            </FAQSection>

            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>Send Us a Message</FormTitle>
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" id="name" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="tel" id="phone" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea id="message" required />
              </FormGroup>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </ContactGrid>
        </Container>
      </ContentSection>
    </ContactSection>
  );
};

export default Contact; 