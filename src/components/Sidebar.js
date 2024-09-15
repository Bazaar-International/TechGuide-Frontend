import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import api from '../api/api';
import logo from '../images/logo.png'

// Styled components (unchanged, included for completeness)
const SidebarContainer = styled.div`
  width: 250px;
  background-color: #34495e;
  color: white;
  height: 100vh;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const LogoContainer = styled.div`
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100px;
  margin: 0 auto;
`;

const SidebarSection = styled.div`
  margin-bottom: 10px;
`;

const SectionTitle = styled.div`
  cursor: ${props => props.hasSubsections ? 'pointer' : 'pointer'};
  padding: 10px;
  background-color: ${props => props.isSelected ? '#4A9E55' : '#6CBA75'};
  border-radius: 5px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Arrow = styled.span`
  display: ${props => props.hasSubsections ? 'inline-block' : 'none'};
  transition: transform 0.3s ease;
  transform: ${props => props.expanded ? 'rotate(90deg)' : 'rotate(0deg)'};
`;

const SubsectionList = styled.div`
  padding-left: 20px;
`;

const Subsection = styled.div`
  padding: 5px;
  cursor: pointer;
  background-color: ${props => props.isSelected ? '#4A9E55' : '#6CBA75'};
  &:hover {
    background-color: #1abc9c;
  }
`;

const Sidebar = ({ sections, subsections, onSelect }) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedSectionId, setSelectedSectionId] = useState(null);
  const [selectedSubsectionId, setSelectedSubsectionId] = useState(null);

  // Memoized toggleSection function
  const toggleSection = useCallback((sectionId) => {
    setExpandedSections(prevState => {
      const newExpandedSections = { ...prevState, [sectionId]: !prevState[sectionId] };

      if (!prevState[sectionId]) {
        setSelectedSectionId(sectionId);
        // Fetch section content
        const section = sections.find(sec => sec.id === sectionId);
        onSelect(section.html_content);
      } else {
        setSelectedSectionId(null); // Collapse section if clicked again
        onSelect(''); // Clear content
      }
      
      return newExpandedSections;
    });
  }, [sections, onSelect]);

  // Memoized handleSubsectionSelect function
  const handleSubsectionSelect = useCallback((id) => {
    setSelectedSubsectionId(id);
    onSelect(
      subsections
        .filter(sub => sub.section === selectedSectionId)
        .find(sub => sub.id === id)?.html_content || ''
    );
  }, [subsections, selectedSectionId, onSelect]);

  return (
    <SidebarContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      {sections.map(section => {
        const hasSubsections = subsections.some(sub => sub.section === section.id);

        return (
          <SidebarSection key={section.id}>
            <SectionTitle
              onClick={() => toggleSection(section.id)}
              isSelected={section.id === selectedSectionId}
              hasSubsections={hasSubsections}
            >
              {section.title}
              <Arrow expanded={expandedSections[section.id]} hasSubsections={hasSubsections}>▶</Arrow>
            </SectionTitle>
            {expandedSections[section.id] && hasSubsections && (
              <SubsectionList>
                {subsections
                  .filter(sub => sub.section === section.id) // Filter subsections by section ID
                  .map(sub => (
                  <Subsection
                    key={sub.id}
                    onClick={() => handleSubsectionSelect(sub.id)}
                    isSelected={sub.id === selectedSubsectionId}
                  >
                    {sub.title}
                  </Subsection>
                ))}
              </SubsectionList>
            )}
          </SidebarSection>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
