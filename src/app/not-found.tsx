import { Metadata } from "next";

import NextImage from "@/components/NextImage";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-slate-200">
      <NextImage
        src="/NotFound.png"
        alt="404"
        width={1920}
        height={1080}
        className="w-2/3 xl:w-1/2"
      />
    </main>
  );
}
