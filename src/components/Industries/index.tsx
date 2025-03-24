import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBuilding, 
  faStore, 
  faBriefcaseMedical, 
  faGraduationCap, 
  faIndustry, 
  faUtensils,
  faCalendarAlt,
  faUsers,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { useCountUp } from '../../hooks/useCountUp';
import {
  IndustriesSection,
  SectionTitle,
  IndustriesGrid,
  IndustryCard,
  IndustryImage,
  IndustryContent,
  IndustryTitle,
  IndustryDescription,
  IndustryFeatures,
  FeatureItem,
  StyledIcon,
  ExperienceBanner,
  ExperienceContent,
  ExperienceText,
  ExperienceButton,
  ExperienceStats,
  StatItem,
  ExperienceRightColumn,
  SupportAgentImage
} from './styles';

const industries = [
  {
    title: 'Small Business',
    image: '/images/smallbusiness.jpg',
    description: 'Comprehensive financial solutions for small businesses, including bookkeeping, payroll, and tax services.',
    features: [
      'Bookkeeping & Accounting',
      'Payroll Services',
      'Tax Planning & Preparation',
      'Business Consulting'
    ],
    icon: faBuilding
  },
  {
    title: 'Retail & Hospitality',
    image: '/images/retail.jpg',
    description: 'Specialized services for retail and hospitality businesses, helping you manage inventory and cash flow.',
    features: [
      'Inventory Management',
      'Cash Flow Analysis',
      'Sales Tax Compliance',
      'Cost Control'
    ],
    icon: faStore
  },
  {
    title: 'Healthcare',
    image: '/images/healthcare.jpg',
    description: 'Expert financial services for healthcare providers, ensuring compliance with industry regulations.',
    features: [
      'HIPAA Compliance',
      'Medical Practice Management',
      'Healthcare Tax Planning',
      'Insurance Billing'
    ],
    icon: faBriefcaseMedical
  },
  {
    title: 'Education',
    image: '/images/education.jpg',
    description: 'Financial solutions for educational institutions, from small schools to large universities.',
    features: [
      'Grant Management',
      'Student Financial Services',
      'Educational Tax Credits',
      'Budget Planning'
    ],
    icon: faGraduationCap
  },
  {
    title: 'Manufacturing',
    image: '/images/manufacturing.jpg',
    description: 'Specialized accounting services for manufacturing companies, focusing on cost control and efficiency.',
    features: [
      'Cost Accounting',
      'Inventory Valuation',
      'Production Analysis',
      'Equipment Depreciation'
    ],
    icon: faIndustry
  },
  {
    title: 'Restaurant & Food Service',
    image: '/images/restaurant.jpg',
    description: 'Comprehensive financial services for restaurants and food service businesses.',
    features: [
      'Food Cost Analysis',
      'Labor Cost Management',
      'POS Integration',
      'Menu Profitability'
    ],
    icon: faUtensils
  }
];

const Industries: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const yearsCount = useCountUp(20);
  const clientsCount = useCountUp(1000);
  const satisfactionCount = useCountUp(98);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <IndustriesSection>
      <ExperienceBanner ref={sectionRef}>
        <ExperienceContent>
          <div>
            <ExperienceText>
              <h3>About Us</h3>
              <p>Since 2003, we've been providing expert financial services to businesses and individuals across Philadelphia. Our commitment to excellence and personalized service has made us a trusted partner in financial success.</p>
              <ExperienceStats>
                <StatItem>
                  <div className="icon">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                  </div>
                  <h4>{yearsCount}+</h4>
                  <p>Years of Experience</p>
                </StatItem>
                <StatItem>
                  <div className="icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <h4>{clientsCount}+</h4>
                  <p>Clients Served</p>
                </StatItem>
                <StatItem>
                  <div className="icon">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <h4>{satisfactionCount}%</h4>
                  <p>Client Satisfaction</p>
                </StatItem>
              </ExperienceStats>
            </ExperienceText>
          </div>
          <ExperienceRightColumn>
            <SupportAgentImage />
            <ExperienceButton href="/about">Learn About Us</ExperienceButton>
          </ExperienceRightColumn>
        </ExperienceContent>
      </ExperienceBanner>

      <SectionTitle>Industries We Serve</SectionTitle>
      <IndustriesGrid>
        {industries.map((industry, index) => (
          <IndustryCard key={index}>
            <IndustryImage style={{ backgroundImage: `url(${industry.image})` }} />
            <IndustryContent>
              <IndustryTitle>
                <StyledIcon>
                  <FontAwesomeIcon icon={industry.icon} />
                </StyledIcon>
                {industry.title}
              </IndustryTitle>
              <IndustryDescription>{industry.description}</IndustryDescription>
              <IndustryFeatures>
                {industry.features.map((feature, featureIndex) => (
                  <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                ))}
              </IndustryFeatures>
            </IndustryContent>
          </IndustryCard>
        ))}
      </IndustriesGrid>
    </IndustriesSection>
  );
};

export default Industries; 