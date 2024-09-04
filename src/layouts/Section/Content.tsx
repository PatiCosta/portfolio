import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";
import { getTopPosition } from "@/utils/getTopPosition";
import { slide } from "@/styles/animations";
import { BadgeGroup } from "@/components/Badges/BadgeGroup";
import { Badge } from "@/components/Badges/Badge";
import { HighlightLine } from "@/components/HighlightLine";

interface ContentProps {
    variant: "normal" | "inverted";
    img: string;
    title: string;
    description: string;
    badges: string[];
    badgeType: "fineline" | "tag";
}

export function Content({
    variant,
    img,
    title,
    description,
    badges,
    badgeType,
}: ContentProps) {
    const [animate, setAnimate] = useState(false);

    const contentRef = useRef(document.createElement("div"));

    useLayoutEffect(() => {
        const cardTopPosition = getTopPosition(contentRef.current);

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
        <Flex
            my={{ base: 16, "2xl": 24 }}
            gap={{ base: 12, "2xl": 20 }}
            alignItems="end"
            ref={contentRef}
            animation={animate ? `${slide.up.sm} 1s ease` : "none"}
            direction={variant === "normal" ? "row" : "row-reverse"}
        >
            <Box borderRadius="md">
                <Image
                    src={img}
                    alt="Mockup for section"
                    h="40vh"
                    borderRadius="md"
                />
            </Box>
            <Box flex="1" h="100%">
                <Text fontWeight="700" fontSize={{ base: 32, "2xl": 40 }}>
                    {title}
                </Text>
                {badgeType === "tag" && (
                    <BadgeGroup mt={2}>
                        {badges.map((badge) => (
                            <Badge key={badge} text={badge} />
                        ))}
                    </BadgeGroup>
                )}
                {badgeType === "fineline" && (
                    <Flex
                        gap={4}
                        letterSpacing="0.6px"
                        alignItems="center"
                        fontWeight="200"
                        fontSize={{ base: "md", "2xl": "xl" }}
                    >
                        {badges.map((badge, index) => {
                            return (
                                <Flex key={badge} gap={4}>
                                    <Text color="medium">{badge}</Text>

                                    {index < badges.length - 1 && (
                                        <Text color="highlight">|</Text>
                                    )}
                                </Flex>
                            );
                        })}
                    </Flex>
                )}
                <Text
                    mt={{ base: 8, "2xl": 16 }}
                    color="medium"
                    fontSize={{ base: "1.25rem", "2xl": "1.5rem" }}
                >
                    {description}
                </Text>
                <HighlightLine mt={12} variant="horizontal" />
            </Box>
        </Flex>
    );
}
