import React, { Fragment } from 'react';
import { Box } from 'theme-ui';
import RcDrawer from 'rc-drawer';

export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className || ''}`.trim()}
        handler={false}
        width={width}
        placement={placement}
        duration={'0.4s'}
        {...props}
      >
        {closeButton && (
          <Box as="div" onClick={toggleHandler} sx={closeButtonStyle}>
            {closeButton}
          </Box>
        )}
        <Box sx={drawerStyle}> {children} </Box>
      </RcDrawer>
      <Box className="drawer__handler" style={{ display: 'inline-block' }} onClick={toggleHandler}>{drawerHandler}</Box>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};