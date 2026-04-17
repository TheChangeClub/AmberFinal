import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
  // Protect specific routes from unauthenticated users
  matcher: ["/add", "/profile", "/cigarette/:path*"],
};