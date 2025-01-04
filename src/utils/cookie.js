const setCookie = (Tokens) => {
  console.log(Tokens.accessToken);
  document.cookie = `accessToken=${Tokens.accessToken}`;
    `max-age=${1 * 24 * 60 * 60}`;

  document.cookie = `refreshToken=${Tokens.refreshToken}`;
`max-age=${30 * 24 * 60 * 60}
`;
};
export { setCookie };
