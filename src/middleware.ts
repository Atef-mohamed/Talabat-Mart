
import { auth } from "./services/auth";
// import type { NextRequest } from "next/server";
const middleware = auth;

export default middleware;

export const config = {
  matcher: ["/cart"],
};
