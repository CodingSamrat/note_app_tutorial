
export function setSessionCookie(res, value) {

  res.cookie("session", value, {
    maxAge: 60 * 60 * 24 * 1000 * 3,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: "lax",
    domain: process.env.COOKIE_DOMAIN
  });
}
export function clearSessionCookie(res) {
  res.clearCookie("session");
}
