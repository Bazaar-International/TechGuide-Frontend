import React, { useEffect, useState } from 'react';
import api from './api/api'; // Import the Axios instance
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  const [sections, setSections] = useState([]);
  const [content, setContent] = useState('');
  const [subsections, setSubsections] = useState({});

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await api.get('/api/sections/');
        setSections(response.data);
      } catch (error) {
        console.error('Error fetching sections:', error);
      }
    };
    
    fetchSections();
  }, []);
  
  useEffect(() => {
    const fetchSubsections = async () => {
      try {
        const response = await api.get(`/api/subsections/`);
        console.log("response", response)
        setSubsections(response.data);
      } catch (error) {
        console.error('Error fetching subsections:', error);
      }
    };
    
    fetchSubsections();
  }, []); // Fetch subsections when selectedSectionId changes

  const handleSubsectionSelect = async (id) => {
    try {
      const response = await api.get(`/api/subsection/${id}/`);
      setContent(response.data.html_content);
    } catch (error) {
      console.error('Error fetching subsection:', error);
    }
  };
  
  const handleSelect = (htmlContent) => {
    setContent(htmlContent);
  };

  return (
    <AppContainer>
      <Sidebar sections={sections} subsections={subsections} onSelect={handleSelect} />
      <MainContent content={content} />
    </AppContainer>
  );
};

export default App;