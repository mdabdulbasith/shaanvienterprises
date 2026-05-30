import { ReactNode } from "react";

export default function AmberGradientBackground({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}