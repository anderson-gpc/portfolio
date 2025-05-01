/// <reference types="vite/client" />

// global.d.ts ou swiper.d.ts
declare module "*.css" {
  const content: string;
  export default content;
}

declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/effect-fade";

declare module "*.png" {
  const content: string;
  export default content;
}
