const { html } = require("common-tags");

function Icon({ wanted, title = "", name = "icon", styleClass = "ion-icon" }) {
  let html = "";
  // Start with svg tag
  html += `<svg xmlns="http://www.w3.org/2000/svg" `;
  // Add class
  html += `class="${styleClass}" `;
  // Accesibility stuff
  html += `aria-labelledby="${title}" name="${name}" role="img" height="16" width="16" viewBox="0 0 512 512">`;
  // Title tag (must have one based on W3C specification)
  html += `<title id="${title}">${title}</title>`;

  // Add path content based on wanted icon
  switch (wanted) {
    case "menu":
      html += `<path stroke-linecap="round" stroke-miterlimit="10" d="M80 160h352M80 256h352M80 352h352"/>`;
      break;
    case "closeMenu":
      html += `<path stroke-linecap="round" stroke-linejoin="round" d="M368 368L144 144M368 144L144 368"/>`;
      break;
    case "book-outline":
      html += `<path d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>`;
      break;
    case "caret-back-outline":
      html += `<path d="M321.94 98L158.82 237.78a24 24 0 000 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18z"/>`;
      break;
    case "caret-forward-outline":
      html += `<path d="M190.06 414l163.12-139.78a24 24 0 000-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18z"/>`;
      break;
    case "bicycle":
      html += `<path d="M388 288a76 76 0 1076 76 76.24 76.24 0 00-76-76zM124 288a76 76 0 1076 76 76.24 76.24 0 00-76-76z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 360v-86l-64-42 80-88 40 72h56"/><path d="M320 136a31.89 31.89 0 0032-32.1A31.55 31.55 0 00320.2 72a32 32 0 10-.2 64z"/>`;
      break;
    case "magnet":
      html += `<path d="M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"/><path d="M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/>`;
      break;
    case "heart-half":
      html += `<path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0036 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64zM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 01.08-.16 123 123 0 0121.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416z"/>`;
      break;
    case "locate":
      html += `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 96V56M256 456v-40"/><path d="M256 112a144 144 0 10144 144 144 144 0 00-144-144z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M416 256h40M56 256h40"/>`;
      break;
    case "code-slash":
      html += `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"/>`;
      break;
    case "speedometer":
      html += `<path d="M326.1 231.9l-47.5 75.5a31 31 0 01-7 7 30.11 30.11 0 01-35-49l75.5-47.5a10.23 10.23 0 0111.7 0 10.06 10.06 0 012.3 14z"/><path d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0056.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0037.1-.1 173.13 173.13 0 01254.8 0 25.19 25.19 0 0037.1.1l3.2-3.5A223.18 223.18 0 00480 287.9C480 164.2 379.7 64 256 64z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63"/>`;
      break;
    case "nutrition":
      html += `<path d="M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160 0 80 64 192 111.2 192s51.94-24 80.8-24 33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 01-9.1-8.73 97.6 97.6 0 0128.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 018.67 8.92 98 98 0 01-28.08 58.2z"/><ellipse cx="216" cy="304" rx="24" ry="48"/><ellipse cx="296" cy="304" rx="24" ry="48"/>`;
      break;
    case "twitter":
      html += `<path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"/>`;
      break;
    case "instagram":
      html += `<path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/>`;
      break;
    case "soundcloud":
      html += `<path d="M5.8 278a2.11 2.11 0 00-2 2L0 308.64l3.74 28.16a2.12 2.12 0 002.05 2 2.14 2.14 0 002-2l4.44-28.17L7.83 280a2.14 2.14 0 00-2-2zM26.85 262.32a2.13 2.13 0 00-4.26 0l-5 46.32 5 45.3a2.13 2.13 0 004.26 0l5.73-45.31-5.73-46.32zM106.17 219.59a4 4 0 00-3.87 3.87l-4 85.22 4 55.08a3.88 3.88 0 007.75 0l4.53-55.08-4.53-85.22a4 4 0 00-3.88-3.87zM65.12 249.21a3.09 3.09 0 00-3 3l-4.52 56.45 4.51 54.63a3 3 0 006 0l5.13-54.63-5.13-56.48a3.1 3.1 0 00-2.99-2.97zM147.88 367.6a4.83 4.83 0 004.75-4.74l3.93-54.15-3.93-113.46a4.75 4.75 0 00-9.5 0l-3.49 113.45 3.49 54.17a4.81 4.81 0 004.75 4.73zM233.28 367.85a6.6 6.6 0 006.5-6.52l2.74-52.6-2.74-131a6.5 6.5 0 10-13 0l-2.45 131c0 .08 2.45 52.67 2.45 52.67a6.59 6.59 0 006.5 6.45zM190.26 367.65a5.67 5.67 0 005.62-5.64l3.34-53.33-3.34-114.28a5.63 5.63 0 10-11.25 0l-3 114.29 3 53.32a5.66 5.66 0 005.63 5.6zM85.56 367.15a3.53 3.53 0 003.44-3.41l4.83-55.09-4.83-52.4a3.44 3.44 0 00-6.88 0l-4.26 52.38 4.26 55.08a3.5 3.5 0 003.44 3.44zM44.84 364.13a2.67 2.67 0 002.57-2.52l5.43-53-5.42-55a2.57 2.57 0 00-5.14 0l-4.78 55 4.78 53a2.62 2.62 0 002.56 2.53zM211.69 192.53a6.1 6.1 0 00-6.07 6.09l-2.71 110.11 2.71 53a6.07 6.07 0 0012.13 0l3-53-3-110.13a6.1 6.1 0 00-6.06-6.07zM127 367.71a4.41 4.41 0 004.31-4.3l4.23-54.71-4.28-104.7a4.32 4.32 0 00-8.63 0l-3.74 104.7 3.75 54.73a4.38 4.38 0 004.36 4.28zM174.17 362.54l3.63-53.8-3.63-117.28a5.19 5.19 0 10-10.37 0l-3.23 117.28 3.23 53.83a5.18 5.18 0 0010.36 0zM449 241.1a62.42 62.42 0 00-24.33 4.9c-5-57.18-52.61-102-110.66-102a111.92 111.92 0 00-40.28 7.58c-4.75 1.85-6 3.76-6.06 7.46V360.4a7.66 7.66 0 006.8 7.5l174.56.11c34.78 0 63-28.41 63-63.45s-28.2-63.46-63-63.46zM254.79 158.87a7 7 0 00-6.94 7L245 308.75l2.85 51.87a6.94 6.94 0 1013.87-.06v.06l3.09-51.87-3.09-142.93a7 7 0 00-6.93-6.95z"/>`;
      break;
    case "copyPasteThis":
      html += ``;
      break;
  }
  html += `</svg>`;
  return html;
}
module.exports = Icon;
