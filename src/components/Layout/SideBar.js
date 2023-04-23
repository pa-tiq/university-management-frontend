import {
  CloseIcon,
  IconContainer,
  SidebarButtonWrapper,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
} from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <IconContainer onClick={toggle}>
        <CloseIcon onClick={toggle} />
      </IconContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'>About</SidebarLink>
          <SidebarLink to='discover'>Discover</SidebarLink>
          <SidebarLink to='services'>Services</SidebarLink>
          <SidebarLink to='signup'>Sign up</SidebarLink>
        </SidebarMenu>
        <SidebarButtonWrapper>
          <SidebarRoute to='/signin'>Sign in</SidebarRoute>
        </SidebarButtonWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
