import React from 'react';
import styled from 'styled-components';

// Define the width of the sidebar
const SIDEBAR_WIDTH = '100px';

const Header = styled.div`
  background-color: #e0e0e0; /* Lighter grey background */
  color: #2c3e50; /* Darker text color for contrast */
  padding: 25px; /* Increased padding for greater height */
  text-align: center;
  font-size: 20px; /* Adjust font size if needed */
  font-weight: bold;
  width: calc(100% - ${SIDEBAR_WIDTH}); /* Full width minus sidebar width */
  box-sizing: border-box; /* Ensure padding is included in the width */
  position: fixed; /* Fix the header to the top */
  top: 0;
  left: ${SIDEBAR_WIDTH}; /* Adjust left position to account for sidebar */
`;

const ContentContainer = styled.div`
  margin-top: 85px; /* Adjusted margin-top to avoid content overlap with the taller fixed header */
  padding: 20px;
  padding-left: 0; /* Remove left padding since it's already accounted for in the header */
  padding-bottom: 120px; /* Ensure there's space at the bottom for the button */
  background-color: #fff;
  overflow-y: auto;
  width: calc(100% - ${SIDEBAR_WIDTH}); /* Full width minus sidebar width */
  margin-left: ${SIDEBAR_WIDTH}; /* Align content to the right of the sidebar */
`;

const TroubleshootingButton = styled.a`
  display: inline-block;
  background-color: #3498db; /* Button color */
  color: white; /* Text color */
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  position: fixed; /* Fix the button to the bottom of the viewport */
  bottom: 40px; /* Increased margin from the bottom */
  left: calc(50% - 75px); /* Center the button horizontally minus half the button width */
  z-index: 1000; /* Ensure the button is above other content */
  &:hover {
    background-color: #2980b9; /* Darker shade on hover */
  }
`;

const MainContent = ({ content }) => (
  <div>
    <Header>Cafe Bazaar International Technical Guide</Header>
    <ContentContainer>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </ContentContainer>
    <TroubleshootingButton href="mailto:International.Partnership@cafebazaar.ir">
      Troubleshooting
    </TroubleshootingButton>
  </div>
);

export default MainContent;
