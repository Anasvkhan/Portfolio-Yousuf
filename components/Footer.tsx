import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/55">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 border-t border-paper/10 px-5 py-8 text-[13px] sm:px-8">
        <span>© 2026 {profile.name}. All rights reserved.</span>
        <span>Off the clock: Football · Music · Podcasts</span>
        <a href={`mailto:${profile.email}`} className="text-paper/80 transition hover:text-lime">{profile.email}</a>
      </div>
    </footer>
  );
}
