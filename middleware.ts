export { default } from "next-auth/middleware";

export const config = {
  // Protect specific routes from unauthenticated users
  matcher: ["/add", "/profile", "/cigarette/:path*"],
};