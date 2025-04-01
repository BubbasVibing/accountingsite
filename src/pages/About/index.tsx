import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuoteLeft, 
  faChevronRight, 
  faStar, 
  faCalendarCheck,
  faAward,
  faShieldHalved,
  faLightbulb,
  faUsers,
  faFileInvoice,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { transform: scale(0.85); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const slideInLeft = keyframes`
  from { transform: translateX(-70px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(70px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const AboutSection = styled.div`
  background: white;
`;

const HeroSection = styled.div`
  padding: 10rem 2rem 6rem;
  position: relative;
  overflow: hidden;
  background: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80') center/cover no-repeat;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  text-align: center;
  color: ${theme.colors.primary};
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.92);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  animation: ${scaleIn} 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  position: relative;
  display: inline-block;

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
  line-height: 1.8;
  color: ${theme.colors.text.secondary};
  margin-top: 1.5rem;
`;

const StorySection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const StoryContent = styled.div`
  animation: ${slideInLeft} 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 4px;
      background: ${theme.colors.secondary};
      border-radius: 2px;
    }
  }

  p {
    font-size: 1.1rem;
    color: ${theme.colors.text.secondary};
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const StoryImage = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: ${slideInRight} 0.9s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  transform-origin: center;
  transition: all 0.5s ease;

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover {
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    
    img {
      transform: scale(1.05);
    }
  }
`;

const MetricsSection = styled.div`
  margin-top: 6rem;
  padding: 3rem 2rem;
  position: relative;
  animation: ${fadeIn} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  animation-delay: 0.3s;
  opacity: 0;
`;

const MetricsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const MetricNumber = styled.div`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: linear-gradient(90deg, ${theme.colors.primary}, #1a3a6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: left;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: ${theme.colors.secondary};
    border-radius: 4px;
    box-shadow: 0 3px 10px ${theme.colors.secondary}60;
  }
`;

const MetricItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  background: white;
  padding: 3rem 2rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(
      45deg, 
      transparent, 
      ${theme.colors.secondary}20, 
      transparent, 
      ${theme.colors.primary}15
    );
    background-size: 200% 100%;
    animation: ${shimmer} 6s infinite linear paused;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, ${theme.colors.secondary}, ${theme.colors.primary}80);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.12);
    
    &::before {
      opacity: 1;
      animation-play-state: running;
    }
    
    &::after {
      transform: scaleX(1);
    }
    
    ${MetricNumber} {
      transform: scale(1.1);
      background-position: right;
    }
  }
`;

const MetricLabel = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 500;
  margin-top: 0.8rem;
  letter-spacing: 0.5px;
`;

const ValuesSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, ${theme.colors.secondary}20 0%, transparent 100%);
    border-radius: 0 16px 0 100%;
  }

  .icon {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.8rem;
    color: ${theme.colors.secondary};
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: ${theme.colors.secondary};

    .icon {
      transform: scale(1.1);
      opacity: 1;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
    max-width: 90%;
  }
`;

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #1a3a6b 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/pattern-bg.png') repeat;
    opacity: 0.05;
  }
`;

const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 16px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }

  .quote-icon {
    color: ${theme.colors.secondary};
    font-size: 2rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: white;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  .author-info {
    h4 {
      font-size: 1.1rem;
      margin: 0;
    }

    span {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
`;

const StarRating = styled.div`
  color: #FFD700;
  margin-bottom: 1rem;
  
  .star {
    margin-right: 0.2rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
`;

const CTASection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
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
    background: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80') center/cover no-repeat;
    opacity: 0.05;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 1px solid rgba(166, 207, 79, 0.2);

  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

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
  }

  p {
    font-size: 1.2rem;
    color: ${theme.colors.text.secondary};
    margin-bottom: 2rem;
    line-height: 1.8;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(166, 207, 79, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(166, 207, 79, 0.4);
    background: #b8e15f;
  }

  .icon {
    transition: transform 0.3s ease;
  }

  &:hover .icon {
    transform: translateX(5px);
  }
`;

const About = () => {
  return (
    <AboutSection>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Our Story</HeroTitle>
            <HeroSubtitle>
              For over 15 years, we've been helping individuals and businesses
              navigate the complexities of tax and accounting with confidence and clarity.
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      <StorySection>
        <Container>
          <StoryGrid>
            <StoryContent>
              <h2>Building Trust Through Excellence</h2>
              <p>
                Since our founding in 2008, we've been committed to providing exceptional tax and accounting
                services to our community. With over 15 years of experience, we've built a reputation for excellence
                and reliability in the Philadelphia area.
              </p>
            </StoryContent>
            <StoryImage>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" alt="Professional Tax Services" />
            </StoryImage>
          </StoryGrid>

          <MetricsSection>
            <MetricsWrapper>
              <MetricItem>
                <MetricNumber>15+</MetricNumber>
                <MetricLabel>Years of Excellence</MetricLabel>
              </MetricItem>
              
              <MetricItem>
                <MetricNumber>5,000+</MetricNumber>
                <MetricLabel>Happy Clients</MetricLabel>
              </MetricItem>
              
              <MetricItem>
                <MetricNumber>25,000+</MetricNumber>
                <MetricLabel>Tax Returns Filed</MetricLabel>
              </MetricItem>
              
              <MetricItem>
                <MetricNumber>98%</MetricNumber>
                <MetricLabel>Client Satisfaction</MetricLabel>
              </MetricItem>
            </MetricsWrapper>
          </MetricsSection>
        </Container>
      </StorySection>

      <ValuesSection>
        <Container>
          <ValuesGrid>
            <ValueCard>
              <FontAwesomeIcon icon={faAward} className="icon" />
              <h3>Expertise</h3>
              <p>
                Our team of certified professionals brings years of experience and
                continuous education to provide you with the most up-to-date financial guidance.
              </p>
            </ValueCard>
            <ValueCard>
              <FontAwesomeIcon icon={faShieldHalved} className="icon" />
              <h3>Integrity</h3>
              <p>
                We maintain the highest standards of professional ethics, ensuring
                your financial matters are handled with complete confidentiality and care.
              </p>
            </ValueCard>
            <ValueCard>
              <FontAwesomeIcon icon={faLightbulb} className="icon" />
              <h3>Innovation</h3>
              <p>
                We leverage the latest technology and best practices to deliver
                efficient, accurate, and forward-thinking solutions for our clients.
              </p>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ValuesSection>

      <TestimonialsSection>
        <Container>
          <TestimonialsTitle>What Our Clients Say</TestimonialsTitle>
          <TestimonialsGrid>
            <TestimonialCard>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <StarRating>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="star" />
                ))}
              </StarRating>
              <p>
                "The team at Naseem CPA has been instrumental in helping our business
                grow. Their expertise and attention to detail are unmatched."
              </p>
              <TestimonialAuthor>
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100" alt="Sarah Johnson" />
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <span>Small Business Owner</span>
                </div>
              </TestimonialAuthor>
            </TestimonialCard>

            <TestimonialCard>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <StarRating>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="star" />
                ))}
              </StarRating>
              <p>
                "I've been working with them for over 5 years now. They make tax
                season stress-free and always find ways to maximize my returns."
              </p>
              <TestimonialAuthor>
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=100&h=100" alt="Michael Chen" />
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <span>Healthcare Professional</span>
                </div>
              </TestimonialAuthor>
            </TestimonialCard>

            <TestimonialCard>
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <StarRating>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="star" />
                ))}
              </StarRating>
              <p>
                "Their knowledge of international tax law has been invaluable for
                our expanding business. Highly recommended!"
              </p>
              <TestimonialAuthor>
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100" alt="Emily Rodriguez" />
                <div className="author-info">
                  <h4>Emily Rodriguez</h4>
                  <span>International Business Consultant</span>
                </div>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsGrid>
        </Container>
      </TestimonialsSection>

      <CTASection>
        <Container>
          <CTAContent>
            <h2>Ready to Get Started?</h2>
            <p>
              Schedule a free consultation with our team and discover how we can help
              you achieve your financial goals with confidence.
            </p>
            <CTAButton to="/contact">
              Schedule Consultation
              <FontAwesomeIcon icon={faCalendarCheck} className="icon" />
            </CTAButton>
          </CTAContent>
        </Container>
      </CTASection>
    </AboutSection>
  );
};

export default About; 