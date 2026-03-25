import { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect registry API endpoints
  if (!pathname.startsWith("/r/")) {
    return
  }

  const authHeader = request.headers.get("authorization")
  const token = authHeader?.replace("Bearer ", "")
  const validToken = process.env.REGISTRY_TOKEN

  if (!validToken) {
    return Response.json(
      {
        error: "Server Configuration Error",
        message: "REGISTRY_TOKEN is not configured on the server.",
      },
      { status: 500 }
    )
  }

  if (!token) {
    return Response.json(
      {
        error: "Unauthorized",
        message:
          "Authentication required. Set REGISTRY_TOKEN in your .env.local and add an Authorization header.",
      },
      { status: 401 }
    )
  }

  if (token !== validToken) {
    return Response.json(
      {
        error: "Forbidden",
        message: "Invalid token. Check your REGISTRY_TOKEN value.",
      },
      { status: 403 }
    )
  }
}

export const config = {
  matcher: "/r/:path*",
}
