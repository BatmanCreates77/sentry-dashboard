import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * API route to trigger on-demand revalidation.
 * Called by the Python pipeline after syncing data.
 *
 * POST /api/revalidate
 * Body: { secret: string, paths?: string[] }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const secret = body.secret;
    const paths = body.paths || ["/", "/spend", "/goals", "/loan", "/log"];

    // Validate secret (set in env)
    const expectedSecret = process.env.REVALIDATE_SECRET || "sentry-revalidate";
    if (secret !== expectedSecret) {
      return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
    }

    // Revalidate each path
    for (const path of paths) {
      revalidatePath(path);
    }

    return NextResponse.json({
      revalidated: true,
      paths,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to revalidate", details: String(error) },
      { status: 500 }
    );
  }
}
