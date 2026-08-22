import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body as {
      email: string;
      password: string;
    };

    if (!email || !password) {
      return NextResponse.json(
        { error: "Missing credentials." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceRole) {
      console.error("Missing Supabase server environment variables.");

      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const supabase = createClient(
      supabaseUrl,
      serviceRole
    );

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error || !data.session) {
      return NextResponse.json(
        {
          error:
            error?.message ||
            "Invalid credentials.",
        },
        { status: 401 }
      );
    }

    const token = data.session.access_token;

    const res = NextResponse.json({
      success: true,
    });

    res.cookies.set(
      "sb-admin-token",
      token,
      {
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
      }
    );

    return res;
  } catch (err) {
    console.error("Admin login error:", err);

    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Server error",
      },
      { status: 500 }
    );
  }
}