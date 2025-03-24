import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ContactSection = styled.section`
  background: white;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.98) 0%, rgba(52, 152, 219, 0.98) 100%);
  padding: 8rem 2rem;
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
    background: url('/pattern.png') repeat;
    opacity: 0.05;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/hero-pattern.svg') repeat;
    opacity: 0.1;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 2px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-weight: 400;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Inter', sans-serif;
`;

const ContentSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const FAQTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: #3498db;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
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
    color: #3498db;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0;
  }

  i {
    transition: transform 0.3s ease;
    color: #3498db;
  }

  &.open i {
    transform: rotate(90deg);
  }
`;

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  margin-top: ${props => props.isOpen ? '1rem' : '0'};

  p {
    color: #666;
    line-height: 1.6;
    margin: 0;
    padding-right: 1rem;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
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
  color: #2c3e50;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
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
          <ContactGrid>
            <FAQSection>
              <FAQTitle>
                <FontAwesomeIcon icon={faQuestionCircle} />
                Frequently Asked Questions
              </FAQTitle>
              {faqs.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQQuestion 
                    className={openFAQ === index ? 'open' : ''}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <h3>{faq.question}</h3>
                    <FontAwesomeIcon icon={faChevronRight} />
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