import React, { useContext, useState } from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import clsx from 'clsx';

import PeopleIcon from '@material-ui/icons/People';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import { ListItemText } from '@material-ui/core';

import useStyles from './Header.styles';
import StyleBadge from './StyleBadge';
import PokemonContext from './../../../context/Pokemon/PokemonContext';
import AuthContext from './../../../context/Auth/AuthContext';

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const pokemonContext = useContext(PokemonContext);
  const { favoriteList } = pokemonContext;

  const authContext = useContext(AuthContext);
  const { logout, userLogged } = authContext;

  const openMenu = Boolean(anchorEl);

  const handleDrawer = (value) => {
    setOpen(Boolean(value));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleClose();
    await logout();
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawer(true)}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            flexGrow={1}
            alignItems="center"
            flexDirection="column"
          >
            <img
              src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
              alt="pokeapi"
              className={classes.headerImage}
            />
          </Box>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.nameUser}
          >
            {userLogged.displayName}
          </Typography>
          <IconButton color="inherit" onClick={handleClick}>
            <MoreVertOutlinedIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={openMenu}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: '20ch',
                marginTop: '48px',
                marginLeft: '-25px',
              },
            }}
          >
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppOutlinedIcon fontSize="large" />
              </ListItemIcon>
              <Typography variant="inherit">Logout</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/pokemon/favorites">
              <ListItemIcon>
                <StyleBadge badgeContent={favoriteList.length}>
                  <FavoriteOutlinedIcon color="secondary" fontSize="large" />
                </StyleBadge>
              </ListItemIcon>
              <Typography variant="inherit">Favorites</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => handleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <div>
            <ListItem button component={Link} to="/pokemon/list">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Listado" />
            </ListItem>

            <ListItem button component={Link} to="/pokemon/favorites">
              <ListItemIcon>
                <FavoriteOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Favoritos" />
            </ListItem>
          </div>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
