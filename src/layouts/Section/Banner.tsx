import { slide } from "@/styles/animations";
import { getTopPosition } from "@/utils/getTopPosition";
import { Box, Image } from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";

export function Banner({ img }: { img: string }) {
    const [animate, setAnimate] = useState(false);

    const bannerRef = useRef(document.createElement("div"));

    useLayoutEffect(() => {
        const cardTopPosition = getTopPosition(bannerRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            if (cardTopPosition < scrollPos) {
                setAnimate(true);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    return (
        <Box
            w="100%"
            overflow="hidden"
            borderRadius="md"
            ref={bannerRef}
            animation={animate ? `${slide.up.sm} 1s ease` : "none"}
        >
            <Image src={img} alt="banner da seção" w="100%" />
        </Box>
    );
}
