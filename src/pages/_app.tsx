import type { AppProps } from "next/app";
import { ChakraBaseProvider } from "@chakra-ui/react";

import { fonts } from "../lib/fonts";
import { theme } from "@/styles/theme";
import Head from "next/head";
import { Header } from "@/components/Header";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const [isHeaderRendered, setIsHeaderRendered] = useState(false);

    function headerFinishedRendering() {
        setIsHeaderRendered(true);
    }

    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-kiona: ${fonts.kiona.style.fontFamily};
                        --font-neueMontreal: ${fonts.neueMontreal.style
                            .fontFamily};
                    }
                `}
            </style>
            <ChakraBaseProvider theme={theme}>
                <Head>
                    <title>Patrícia Costa</title>
                </Head>
                <Header headerFinishedRendering={headerFinishedRendering} />
                {isHeaderRendered && <Component {...pageProps} />}
            </ChakraBaseProvider>
        </>
    );
}
