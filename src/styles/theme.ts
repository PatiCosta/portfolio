/* theme.ts */
import { extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button } = chakraTheme.components;

export const theme = extendBaseTheme({
    fonts: {
        heading: "var(--font-kiona)",
        body: "var(--font-neueMontreal)",
    },
    components: {
        Button,
    },
    colors: {
        highlight: "#d93b60",
        dark: "#131316",
        light: "#f0eff4",
        medium: "#a6a6a6",
        transparent: "rgba(240, 239, 244, 0.03)",
        gradients: {
            highlight: {
                horizontal:
                    "linear-gradient(90deg, hsla(346, 68%, 54%, 1) 0%, hsla(240, 7%, 8%, 1) 80%)",
                vertical:
                    "linear-gradient(180deg, hsla(346, 68%, 54%, 1) 0%, hsla(240, 7%, 8%, 1) 80%)",
            },
            medium: {
                horizontal:
                    "linear-gradient(90deg, hsla(240, 7%, 8%, 1) 0%, hsla(0, 0%, 13%, 1) 80%);",
                vertical:
                    "linear-gradient(180deg, hsla(0, 0%, 13%, 1)  0%, hsla(240, 7%, 8%, 1) 90%);",
                radial: "radial-gradient(circle, hsla(0, 0%, 13%, 1) 0%, hsla(240, 7%, 8%, 1) 60%);",
            },
        },
    },
    styles: {
        global: {
            "html, body": {
                bgColor: "dark",
                fontWeight: "400",
                color: "light",
                scrollBehavior: "smooth",
            },
        },
    },
});
