import { HighlightLine } from "@/components/HighlightLine";
import { slide } from "@/styles/animations";
import { getTopPosition } from "@/utils/getTopPosition";
import { Flex, Text, useSafeLayoutEffect } from "@chakra-ui/react";
import { useRef, useState } from "react";

export function Description({ text }: { text: string }) {
    const [animate, setAnimate] = useState(false);

    const descriptionRef = useRef(document.createElement("div"));

    useSafeLayoutEffect(() => {
        const descriptionTopPosition = getTopPosition(descriptionRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            if (descriptionTopPosition < scrollPos) {
                setAnimate(true);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    return (
        <Flex
            maxW={{ base: "600px", "2xl": "800px" }}
            h="inherit"
            direction="column"
            ref={descriptionRef}
            animation={animate ? `${slide.up.sm} 1s ease` : "none"}
        >
            <Text
                color="medium"
                fontSize={{ base: "1.25rem", "2xl": "1.5rem" }}
            >
                {text}
            </Text>
            <HighlightLine mt={14} variant="horizontal" />
        </Flex>
    );
}
