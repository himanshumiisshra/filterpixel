import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Header() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <span style={{ display: "flex" }}>FilterPixel</span>
            </Typography>

            <div>
              {isAuthenticated && <p>{user.name}</p> && (
                <Stack direction="row" spacing={2}>
                  <Avatar alt={user.name} src={user.picture} />
                </Stack>
              )}
            </div>

            {isAuthenticated ? (
              <div>
                <IconButton
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </IconButton>
              </div>
            ) : (
              <div>
                <IconButton onClick={() => loginWithRedirect()}>
                  Log In
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
