// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const responseType = "token";
const clientId = "8b089d8873194f2d9e7b85614bd8b0f4";

const scopes = [
  "user-read-recently-played",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-top-read",
  "user-read-currently-playing",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;
