import { FC, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { HeaderComponentInterface } from '@nations-hub/components/UI/Header/interface';

const Header: FC<HeaderComponentInterface> = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle the drawer open/close state
  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2E3A59' }}>
      <Toolbar>
        {/* Logo or Brand Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, display: { md: 'block' } }}>
          Nations Hub
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {props.menus.map((menu) => (
            <ListItem component="a" key={menu.label}>
              <Link
                href={menu.link}
                color="inherit"
                underline="none"
                sx={{ width: '100%', padding: '0.5rem 1rem', display: 'block' }}
              >
                {menu.label}
              </Link>
          </ListItem>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          edge="start"
          sx={{ display: { xs: 'block', md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer Menu */}
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {props.menus.map((menu) => (
                <ListItem component="a" key={menu.label}>
                  <Link
                    href={menu.link}
                    color="inherit"
                    underline="none"
                    sx={{ width: '100%', padding: '0.5rem 1rem', display: 'block' }}
                  >
                    {menu.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;