import React, { useState } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaGithubAlt, FaDribbble } from 'react-icons/fa';
import menuItems from './header.data';

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

export default function MobileDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <Drawer
      width="300px"
      drawerHandler={
        <Box sx={styles.handler}> <IoMdMenu size="30px" /> </Box>
      }
      open={drawerOpen}
      toggleHandler={() => setDrawerOpen(!drawerOpen)}
      closeButton={<IoMdClose size="30px" color="#000" />}
      closeButtonStyle={styles.close}
      drawerStyle={styles.drawer}
    >
      <Scrollbars autoHide >
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map((menuItem, i) => (
              <Link
                key={i}
                activeClass="active"
                to={menuItem.path}
                spy={true}
                offset={-70}
                duration={500}
                smooth={true}
              >
                {menuItem.label}
              </Link>
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
              <Box sx={styles.social}>
                {social.map((socialItem , i)=>(
                  <Box as="span" sx={styles.social.icon} key={i}>
                    <Link to={socialItem.path}> {socialItem.icon} </Link>
                  </Box>
                ))}
              </Box>
          </Box>

        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};