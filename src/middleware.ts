import { clerkMiddleware, authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware({
//   publicRoutes: ["/"],
// });
export default clerkMiddleware({});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
