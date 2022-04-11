import React, { useState, useEffect } from "react";
import { getTokenFromUrl } from "../spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { PlayArrow } from "@mui/icons-material";

const AuthContext = React.createContext({
  token: "",
  user: null,
  playlist: [],
});

const spotify = new SpotifyWebApi();

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        setUser(user);

        spotify.getUserPlaylists().then((playlist) => {
          setPlaylist(playlist);
        });
      });
    }
  }, [playlist]);

  return (
    <AuthContext.Provider
      value={{ token: token, user: user, playlist: playlist }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
