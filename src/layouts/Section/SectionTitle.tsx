import { slide } from "@/styles/animations";
import { Box } from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";
import { getTopPosition } from "@/utils/getTopPosition";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";

export function SectionTitle({
    subtitle,
    title,
}: {
    subtitle: string;
    title: string;
}) {
    const [animate, setAnimate] = useState(false);

    const titleRef = useRef(document.createElement("div"));

    useLayoutEffect(() => {
        const titleTopPosition = getTopPosition(titleRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            if (titleTopPosition < scrollPos) {
                setAnimate(true);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    return (
        <Box
            ref={titleRef}
            animation={animate ? `${slide.up.sm} 2s ease` : "none"}
        >
            <Subtitle text={subtitle} />
            <Title text={title} variant="lg" mt={{ base: 1, "2xl": 0 }} />
        </Box>
    );
}
