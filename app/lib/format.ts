// Utility for formatting byte sizes into human-readable strings
// Uses binary units (KB = 1024 bytes)

export function formatSize(bytes: number): string {
  // Guard against invalid or negative inputs
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 KB";

  const KB = 1024;
  const MB = KB * 1024; // 1,048,576
  const GB = MB * 1024; // 1,073,741,824

  const format = (value: number, unit: "KB" | "MB" | "GB") => {
    // For small values, show one decimal; for larger, no decimals
    const digits = value < 10 ? 1 : 0;
    return `${value.toFixed(digits)} ${unit}`;
  };

  if (bytes >= GB) return format(bytes / GB, "GB");
  if (bytes >= MB) return format(bytes / MB, "MB");
  // Default to KB for anything less than 1 MB
  return format(bytes / KB, "KB");
}

export default formatSize;


export const generateUUID = () => crypto.randomUUID();