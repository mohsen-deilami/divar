const setCookie = (Tokens) => {
  document.cookie = `accessToken=${Tokens.accessToken}`;
  `max-age=${1 * 24 * 60 * 60}`;

  document.cookie = `refreshToken=${Tokens.refreshToken}`;
  `max-age=${30 * 24 * 60 * 60}
`;
};

const getCookie = (cookieName) => {
  return document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

const deleteCookie = () => {
  document.cookie = "accessToken= ; expires=Wed, 18 Dec 2000 12:00:00 GMT";

  document.cookie = "refreshToken=; expires=Wed, 18 Dec 2000 12:00:00 GMT";
};
export { setCookie, getCookie, deleteCookie };
