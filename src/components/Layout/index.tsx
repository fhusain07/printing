import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import "./layout.css";
import logo from "../../assets/LOGO.png";
import TopBar from "../TopBar";
import { useMediaQuery, useTheme } from "@mui/material";

const drawerWidth = 240;

interface LayoutProps {
  children: React.ReactNode;
}

interface MenuItem {
  text: string;
  path: string;
}

function Layout(props: LayoutProps) {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDrawerToggle = (): void => {
    setMobileOpen((prev) => !prev);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const menuItems: MenuItem[] = [
    { text: "HOME", path: "/" },
    { text: "ABOUT", path: "/about" },
    { text: "CONTACT", path: "/contact" },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
            >
              <ListItemText
                style={{
                  fontSize: "14px",
                }}
                primary={item.text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {isMobile && (
        <Box sx={{ borderTop: "1px solid #e0e0e0", mt: 2, p: 1 }}>
          <TopBar />
        </Box>
      )}
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#f5f5f0",
        }}
      >
        {!isMobile && <TopBar />}
        <Toolbar sx={{ justifyContent: "space-between", padding: "0 16px" }}>
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "#000", display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="Advocate Aashutosh Srivastava Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
            </Box>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.text}
                variant="body1"
                sx={{
                  color: "#666",
                  mx: 2,
                  fontSize: "14px",
                  cursor: "pointer",
                  "&:hover": { color: "#000" },
                  textTransform: "uppercase",
                }}
                onClick={() => navigate(item.path)}
              >
                {item.text}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: {sm: 6 }, // <-- ADD THIS
          width: "100%", // Full width since no sidebar
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
