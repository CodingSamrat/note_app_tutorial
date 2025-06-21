
export function setSessionCookie(res, value) {
  console.log('setting cookie')
  res.cookie("session", value, {
    maxAge: 60 * 60 * 24 * 1000 * 3,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: "lax",
  });
}
export function clearSessionCookie(res) {
  res.clearCookie("session");
}
