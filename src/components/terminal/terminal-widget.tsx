"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { content } from "@/data/translations";

type CommandKey = "status" | "stack" | "netstat" | "traceroute";

export function TerminalWidget() {
  const [activeCmd, setActiveCmd] = useState<CommandKey>("status");
  const { lang } = useLanguage();
  const t = content[lang].terminal;

  const outputs: Record<CommandKey, { title: string; content: React.ReactNode }> = {
    status: {
      title: "systemctl status ridwan.service",
      content: (
        <div className="space-y-1.5 font-mono text-xs leading-relaxed">
          <p className="text-emerald-400">● ridwan.service - Systems & Backend Engineering Daemon</p>
          <p className="text-[var(--muted)]">   Loaded: loaded (/etc/systemd/system/ridwan.service; enabled)</p>
          <p className="text-[var(--muted)]">
            {" "}
            Active: <span className="font-semibold text-emerald-400">active (running)</span> since 2022-09-01
          </p>
          <p className="text-[var(--muted)]">     Docs: https://github.com/mhdridwannst</p>
          <p className="text-[var(--muted)]"> Main PID: 2026 (pens-d4-telecom)</p>
          <p className="text-[var(--muted)]">
            {" "}
            Status: &quot;Building resilient backend APIs, exploring TCP/IP packets & IoT firmware&quot;
          </p>
          <div className="pt-2 text-[var(--foreground)]">
            <span className="text-[var(--signal)]">{t.goal}</span>
          </div>
        </div>
      ),
    },
    stack: {
      title: "curl -s https://api.ridwan.dev/v1/stack | jq .",
      content: (
        <div className="font-mono text-xs leading-relaxed text-sky-400">
          <pre className="overflow-x-auto text-[11px] text-[var(--foreground)]">
{`{
  "languages": ["Go", "TypeScript", "JavaScript", "Python", "C++"],
  "backend": {
    "frameworks": ["Express", "Gin", "Next.js App Router"],
    "databases": ["PostgreSQL", "MySQL", "Prisma ORM", "Supabase"]
  },
  "networking": {
    "layer": "L2 to L7 (Transport & Application)",
    "tools": ["Wireshark", "Cisco Packet Tracer", "GNS3", "Ngrok"]
  },
  "hardware": ["ESP32", "Sensor Telemetry", "HTTP/REST IoT"]
}`}
          </pre>
        </div>
      ),
    },
    netstat: {
      title: "netstat -tlpn | grep -E 'LISTEN'",
      content: (
        <div className="overflow-x-auto font-mono text-[11px] leading-relaxed">
          <div className="grid grid-cols-4 gap-2 border-b border-[var(--line)] pb-1 text-[var(--muted)]">
            <span>PROTO</span>
            <span>LOCAL ADDRESS</span>
            <span>FOREIGN</span>
            <span>PID/PROGRAM</span>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-1.5 text-emerald-400">
            <span>tcp</span>
            <span>0.0.0.0:8080</span>
            <span>0.0.0.0:*</span>
            <span className="text-[var(--foreground)]">go-telemetry-api</span>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-1 text-emerald-400">
            <span>tcp</span>
            <span>0.0.0.0:5432</span>
            <span>0.0.0.0:*</span>
            <span className="text-[var(--foreground)]">postgres:16-alpine</span>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-1 text-emerald-400">
            <span>tcp</span>
            <span>0.0.0.0:3000</span>
            <span>0.0.0.0:*</span>
            <span className="text-[var(--foreground)]">nextjs-dashboard</span>
          </div>
          <div className="grid grid-cols-4 gap-2 pt-1 text-emerald-400">
            <span>tcp</span>
            <span>127.0.0.1:4040</span>
            <span>0.0.0.0:*</span>
            <span className="text-[var(--foreground)]">ngrok-client-agent</span>
          </div>
        </div>
      ),
    },
    traceroute: {
      title: "traceroute pens.ac.id",
      content: (
        <div className="overflow-x-auto font-mono text-[11px] leading-relaxed text-[var(--muted)]">
          <p className="text-[var(--foreground)]">traceroute to pens.ac.id (103.10.60.10), 30 hops max, 60 byte packets</p>
          <p className="pt-1">1  gateway.local (192.168.1.1)  0.641 ms  0.512 ms  0.489 ms</p>
          <p>2  10.120.0.1 (isp-aggregation-surabaya)  4.218 ms  4.112 ms</p>
          <p>3  edge-core-router.pens.ac.id (103.10.60.1)  6.891 ms  6.720 ms</p>
          <p className="text-emerald-400">4  server-te.pens.ac.id (103.10.60.10) [REACHED]  7.102 ms</p>
          <p className="pt-1.5 text-xs text-[var(--signal)]">{t.tracerouteReached}</p>
        </div>
      ),
    },
  };

  return (
    <div className="my-8 rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] p-1 shadow-lg">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--surface-raised)] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 font-mono text-[11px] font-semibold text-[var(--muted)]">
            {t.titleBar}
          </span>
        </div>

        {/* Command Selector Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
          {(["status", "stack", "netstat", "traceroute"] as CommandKey[]).map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => setActiveCmd(cmd)}
              className={`rounded px-2.5 py-1 transition-all ${
                activeCmd === cmd
                  ? "bg-[var(--foreground)] text-[var(--background)] font-medium shadow-xs"
                  : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--line)]"
              }`}
            >
              ${cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="bg-[var(--background)] p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2 font-mono text-xs text-[var(--signal)]">
          <span className="text-emerald-500 font-bold">{t.prompt}</span>
          <span className="text-[var(--foreground)] font-medium">
            {outputs[activeCmd].title}
          </span>
        </div>

        <div className="min-h-[140px] rounded border border-[var(--line)] bg-[var(--surface)] p-4">
          {outputs[activeCmd].content}
        </div>

        {/* Bottom Prompt Helper */}
        <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-[var(--muted)]">
          <span>{t.footerHelp}</span>
          <span>{t.footerNode}</span>
        </div>
      </div>
    </div>
  );
}
