import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge'

function hexToHSL(H: string): [number, number, number] {
  let r = 0, g = 0, b = 0;
  if (H.length === 4) {
    r = parseInt(H[1] + H[1], 16);
    g = parseInt(H[2] + H[2], 16);
    b = parseInt(H[3] + H[3], 16);
  } else if (H.length === 7) {
    r = parseInt(H[1] + H[2], 16);
    g = parseInt(H[3] + H[4], 16);
    b = parseInt(H[5] + H[6], 16);
  }
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h! /= 6;
  }
  return [h! * 360, s * 100, l * 100];
}

function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

export function generateShades(hexColor: string, numberOfShades: number): string[] {
  const [h, s, l] = hexToHSL(hexColor);
  const shades: string[] = [];
  for (let i = 0; i < numberOfShades; i++) {
    const lightnessAdjustment = (l / numberOfShades) * i;
    shades.push(hslToHex(h, s, Math.max(Math.min(l - lightnessAdjustment, 100), 0)));

  }
  return shades;
}

export function cn(...classname: ClassValue[]) {
  return twMerge(clsx(classname));
} 
