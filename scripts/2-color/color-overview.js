const colors = [];
const colorsHammerBlow = ['rgb(80, 16, 52)', 'rgb(104, 91, 40)', 'rgb(91, 103, 105)', 'rgb(90, 94, 92)'];
const colorsDB = ['rgb(166, 167, 169)', 'rgb(107, 105, 101)', 'rgb(56, 58, 55)'];


function generateColors(numColors) {
    const step = 360 / numColors; // Schrittgröße im Farbkreis berechnen
    let hue = 0; // Anfangsfarbe (0 Grad im Farbkreis)
  
    for (let i = 0; i < numColors; i++) {
      // Die HSL-Farbe wird in RGB konvertiert
      const rgbColor = hslToRgb(hue, 100, 50);
      colors.push(`rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`);
      
      // Farbwinkel für die nächste Farbe erhöhen
      hue += step;
    }
    return colors;
  }
  
  // Hilfsfunktion zur Konvertierung von HSL zu RGB
  function hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
  
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
  
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
  
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
  
  const numColors = 25; // Anzahl der gewünschten Farben
  const colorList = generateColors(numColors);
  //console.log(colorList);