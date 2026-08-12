"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { createBrowserSupabase } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createBrowserSupabase();

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Invalid email format");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError("Password is required");
      return false;
    }
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return false;
    }
    setPasswordError(null);
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value) validateEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value) validatePassword(value);
  };

  const isFormValid = email && password && !emailError && !passwordError;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!validateEmail(email) || !validatePassword(password)) {
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const payload = await res.json().catch(() => null);
      setLoading(false);

      if (!res.ok) {
        setError((payload && payload.error) || "Unable to sign in.");
        return;
      }

      router.push("/admin/dashboard");
    } catch (err) {
      setLoading(false);
      setError("Network error");
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Admin Login</h1>
        <p className="text-sm text-slate-600 mb-8">Sign in to manage submissions.</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => validateEmail(email)}
              className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:border-transparent transition ${
                emailError
                  ? "border-red-300 focus:ring-red-500"
                  : "border-slate-300 focus:ring-[#00B2FE]"
              }`}
            />
            {emailError && <p className="text-xs text-red-600 mt-1.5">{emailError}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0F172A] mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                onBlur={() => validatePassword(password)}
                className={`w-full rounded-lg border px-4 py-2.5 pr-10 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:border-transparent transition ${
                  passwordError
                    ? "border-red-300 focus:ring-red-500"
                    : "border-slate-300 focus:ring-[#00B2FE]"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {passwordError && <p className="text-xs text-red-600 mt-1.5">{passwordError}</p>}
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid || loading}
            className="w-full rounded-lg bg-[#00B2FE] text-white py-2.5 text-sm font-medium hover:bg-[#0099DD] transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#00B2FE]"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
