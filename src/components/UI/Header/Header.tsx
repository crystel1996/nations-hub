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
import { useTheme } from '@mui/material';

const Header: FC<HeaderComponentInterface> = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();

  // Toggle the drawer open/close state
  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar>
        {/* Logo or Brand Name */}
        <Typography 
          variant="h6" 
          sx={{ 
            flexGrow: 1, 
            display: { md: 'block' },
            color: theme.palette.text.secondary,
          }}
        >
          Nations Hub
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {(props.menus || []).map((menu) => (
            <Link
              key={menu.link}
              href={menu.label}
              color={theme.palette.secondary.main}
              underline="none"
              sx={{ margin: '0 1rem', fontSize: '1rem', fontWeight: 500 }}
            >
              {menu.label}
            </Link>
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
            bgcolor={theme.palette.background.default}
          >
            <List>
              {(props.menus || []).map((item) => (
                <ListItem key={item.label} disablePadding>
                  <Link
                    href={item.link}
                    color={theme.palette.text.primary}
                    underline="none"
                    sx={{ width: '100%', padding: '0.5rem 1rem', display: 'block' }}
                  >
                    {item.label}
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