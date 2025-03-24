import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  padding: 2rem 0;
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.05) 0%, rgba(52, 152, 219, 0.05) 100%);
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #3498db;
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .number {
    font-size: 2.5rem;
    font-weight: 700;
    color: #3498db;
    margin-bottom: 0.5rem;
  }

  .label {
    color: #666;
    font-size: 1rem;
  }
`;

const HistorySection = styled.div`
  margin-bottom: 4rem;
  position: relative;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #3498db, #2980b9);
    border-radius: 2px;
  }
`;

const HistoryTitle = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  i {
    color: #3498db;
    font-size: 2rem;
  }
`;

const HistoryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValuesSection = styled.div`
  margin-bottom: 4rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  i {
    font-size: 2.5rem;
    color: #3498db;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.3rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const MissionSection = styled.div`
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(44, 62, 80, 0.05) 0%, rgba(52, 152, 219, 0.05) 100%);
  border-radius: 12px;
  margin-bottom: 4rem;
`;

const MissionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
`;

const MissionText = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <Header>
          <Title>About Naseem CPA</Title>
          <Subtitle>
            Your trusted partner in professional accounting and tax services, 
            committed to excellence and personalized financial solutions.
          </Subtitle>
        </Header>

        <StatsSection>
          <StatCard>
            <div className="number">15+</div>
            <div className="label">Years Experience</div>
          </StatCard>
          <StatCard>
            <div className="number">500+</div>
            <div className="label">Happy Clients</div>
          </StatCard>
          <StatCard>
            <div className="number">1000+</div>
            <div className="label">Tax Returns Filed</div>
          </StatCard>
          <StatCard>
            <div className="number">24/7</div>
            <div className="label">Client Support</div>
          </StatCard>
        </StatsSection>

        <HistorySection>
          <HistoryTitle>
            <i className="fas fa-history"></i>
            Our Journey
          </HistoryTitle>
          <HistoryContent>
            <div>
              <p>
                Founded with a vision to provide exceptional financial services, 
                Naseem CPA has grown into a trusted name in accounting and tax services. 
                Our journey is built on a foundation of expertise, integrity, and dedication 
                to client success.
              </p>
              <p>
                We understand that every client has unique financial needs and goals. 
                Our approach combines professional expertise with personalized attention 
                to deliver solutions that make a real difference.
              </p>
            </div>
            <div>
              <p>
                Over the years, we've expanded our services to meet the growing needs 
                of our diverse client base. From individual tax returns to complex business 
                accounting, we've maintained our commitment to excellence and innovation.
              </p>
              <p>
                Our success is measured not just in numbers, but in the lasting relationships 
                we build with our clients and the positive impact we make on their financial well-being.
              </p>
            </div>
          </HistoryContent>
        </HistorySection>

        <ValuesSection>
          <HistoryTitle>
            <i className="fas fa-star"></i>
            Our Core Values
          </HistoryTitle>
          <ValuesGrid>
            <ValueCard>
              <i className="fas fa-check-circle"></i>
              <h3>Professional Excellence</h3>
              <p>We maintain the highest standards of professional competence and ethical conduct.</p>
            </ValueCard>
            <ValueCard>
              <i className="fas fa-users"></i>
              <h3>Client-Centric Approach</h3>
              <p>Your success is our priority. We provide personalized solutions tailored to your needs.</p>
            </ValueCard>
            <ValueCard>
              <i className="fas fa-shield-alt"></i>
              <h3>Integrity & Trust</h3>
              <p>We build lasting relationships based on trust, transparency, and reliability.</p>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>

        <MissionSection>
          <MissionTitle>Our Mission</MissionTitle>
          <MissionText>
            To provide exceptional financial services that empower our clients to 
            make informed decisions and achieve their financial goals. We strive to 
            be more than just accountants – we aim to be trusted financial partners 
            who contribute to our clients' success.
          </MissionText>
        </MissionSection>
      </Container>
    </AboutSection>
  );
};

export default About; 