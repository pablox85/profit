"use client";

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
};

export function trackEvent(eventName: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as AnalyticsWindow;

  analyticsWindow.gtag?.("event", eventName, params);
  analyticsWindow.clarity?.("event", eventName);
}
