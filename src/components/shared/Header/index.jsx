import React, { useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import PeopleIcon from '@material-ui/icons/People';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import { ListItemText } from '@material-ui/core';

import useStyles from './Header.styles';
import StyleBadge from './StyleBadge';
import PokemonContext from './../../../context/Pokemon/PokemonContext';

const Header = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const pokemonContext = useContext(PokemonContext);
  const { favoriteList } = pokemonContext;

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
            Jhon Choque
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
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ExitToAppOutlinedIcon fontSize="large"/>
              </ListItemIcon>
              <Typography variant="inherit" >Logout</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <StyleBadge badgeContent={favoriteList.length}>
                  <FavoriteOutlinedIcon color="secondary" fontSize="large"/>
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
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Listado" />
            </ListItem>
            <ListItem button>
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
