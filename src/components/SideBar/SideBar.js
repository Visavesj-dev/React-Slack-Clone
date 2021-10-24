import React from "react";
import styled from "styled-components";

export default function SideBar() {
  return (
    <SideContainer>
      <SidebarHeader>
        <SidebarInfo></SidebarInfo>
      </SidebarHeader>
    </SideContainer>
  );
}

const SideContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div``;

const SidebarInfo = styled.div``;
