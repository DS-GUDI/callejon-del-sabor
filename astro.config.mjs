import { defineConfig } from 'astro/config';
import Swiper from "swiper";

// https://astro.build/config
export default defineConfig({
    vite:{
        define: {
            Swiper: JSON.stringify(Swiper)
        }
    }
});
