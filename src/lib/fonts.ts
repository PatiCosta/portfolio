// lib/fonts.ts
import localFont from "next/font/local";

const neueMontreal = localFont({
    src: [
        {
            path: "./fonts/NeueMontreal-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/NeueMontreal-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/NeueMontreal-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/NeueMontreal-Light.otf",
            weight: "200",
            style: "normal",
        },
    ],
    variable: "--font-neueMontreal",
});

const kiona = localFont({
    src: [
        {
            path: "./fonts/Kiona-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Kiona-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/Kiona-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Kiona-Light.ttf",
            weight: "200",
            style: "normal",
        },
    ],
    variable: "--font-kiona",
});

export const fonts = {
    kiona,
    neueMontreal,
};
