import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    MenuItem,
    Container,
    Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '@fontsource/inter';

const pages = ['Features', 'How it Works', 'Pricing'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#030303' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Box  sx={{
                        display: { xs: 'none', md: 'flex' }, mr: 1, width: 50,
                        height: 40, mb: 0.4
                    }} ><svg width="81" height="49" viewBox="0 0 81 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M80.25 47.1956C59.0367 43.5468 44.0856 34.7599 44.0856 24.5C44.0856 14.2401 59.0367 5.45319 80.25 1.80437C73.4867 0.64105 66.0869 0 58.3322 0C26.2543 0 0.25 10.969 0.25 24.5C0.25 38.031 26.2543 49 58.3322 49C66.0869 49 73.4867 48.359 80.25 47.1956Z" fill="#212AE3"/>
                    </svg>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 300,
                            mt: 1,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                       InteractAI
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'left', textTransform: 'initial', fontFamily: 'Inter, sans-serif' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box  sx={{
                        display: { xs: 'flex', md: 'none' }, mr: 1, width: 30,
                        height: 30, mb: 2.5
                    }} ><svg width="81" height="49" viewBox="0 0 81 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M80.25 47.1956C59.0367 43.5468 44.0856 34.7599 44.0856 24.5C44.0856 14.2401 59.0367 5.45319 80.25 1.80437C73.4867 0.64105 66.0869 0 58.3322 0C26.2543 0 0.25 10.969 0.25 24.5C0.25 38.031 26.2543 49 58.3322 49C66.0869 49 73.4867 48.359 80.25 47.1956Z" fill="#212AE3"/>
                    </svg> </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 1,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 300,
                            fontSize: 'large',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                      InteractAI 
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', display: 'flex', justifyContent: 'right' }, gap: '10px' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', textTransform: 'initial', fontFamily: 'Inter, sans-serif' }}
                            >
                                {page} 
                            </Button>
                        ))}
                    </Box>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Box sx={{ flexGrow: 0 }}>
                        <Button sx={{ backgroundColor: '#212AE3', color: '#FAFAFA', textTransform: 'initial', fontFamily: 'Inter, sans-serif', padding: {md:'10px', xs: '7px', sm: '7px'} }}> Watch Demo </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
