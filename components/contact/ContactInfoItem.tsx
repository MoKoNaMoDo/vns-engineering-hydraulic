import React from "react";

export default function ContactInfoItem({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-blue-500">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
        <p className="text-zinc-400 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
