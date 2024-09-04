import { CircleBounce } from "@/lib/animated/icons/CircleBounce";
import { CircleScale } from "@/lib/animated/icons/CircleScale";
import { DiamondBounce } from "@/lib/animated/icons/DiamondBounce";
import { SquareScale } from "@/lib/animated/icons/SquareScale";
import { opacity } from "@/styles/animations";
import { getTopPosition } from "@/utils/getTopPosition";
import { Box, Flex, Text, useSafeLayoutEffect } from "@chakra-ui/react";
import { useRef, useState } from "react";

interface TagProps {
    title: string;
    info: string;
    delay: string;
    variant:
        | "circle.bounce"
        | "circle.scale"
        | "diamond.bounce"
        | "square.scale";
}

export function Tag({ title, info, variant, delay = "0s" }: TagProps) {
    const [animate, setAnimate] = useState(false);

    const tagRef = useRef(document.createElement("div"));

    useSafeLayoutEffect(() => {
        const tagTopPosition = getTopPosition(tagRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            if (tagTopPosition < scrollPos) {
                setAnimate(true);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    return (
        <Flex
            px={8}
            py={4}
            bgColor="transparent"
            borderRadius="md"
            alignItems="center"
            gap={8}
            opacity={0}
            ref={tagRef}
            animation={
                animate
                    ? `${opacity.appear} 1.5s ${delay} ease forwards`
                    : "none"
            }
        >
            {variant === "circle.bounce" && <CircleBounce />}
            {variant === "circle.scale" && <CircleScale />}
            {variant === "diamond.bounce" && <DiamondBounce />}
            {variant === "square.scale" && <SquareScale />}
            <Box>
                <Text fontWeight="500" letterSpacing="0.6px">
                    {title}
                </Text>
                <Text fontWeight="200" letterSpacing="0.6px">
                    {info}
                </Text>
            </Box>
        </Flex>
    );
}
