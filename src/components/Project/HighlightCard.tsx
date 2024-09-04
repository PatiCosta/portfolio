import { Box, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { BadgeGroup } from "../Badges/BadgeGroup";
import { Badge } from "../Badges/Badge";
import { Link } from "../Link";
import { useLayoutEffect, useRef, useState } from "react";
import { getTopPosition } from "@/utils/getTopPosition";
import { slide } from "@/styles/animations";

interface HighlightCardProps extends FlexProps {
    img: string;
    logo: string;
    badges: string[];
    summary: string;
    link: string;
    variant: "normal" | "inverted";
}

export function HighlightCard({
    img,
    logo,
    badges,
    summary,
    link,
    variant,
}: HighlightCardProps) {
    const [animate, setAnimate] = useState(false);

    const cardRef = useRef(document.createElement("div"));

    useLayoutEffect(() => {
        const cardTopPosition = getTopPosition(cardRef.current);

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
            mt={{ base: 16, '2xl': 24 }}
            gap={{ base: 12, '2xl': 20 }}
            alignItems="end"
            direction={variant === "inverted" ? "row-reverse" : "row"}
            ref={cardRef}
        >
            <Box
                borderRadius="md"
                bg="gradients.medium.horizontal"
                animation={animate ? `${slide.right.sm} 1s ease` : "none"}
            >
                <Image
                    src={img}
                    alt="Hero image for project highlight"
                    h={{ base: "40vh", '2xl': "45vh" }}
                    borderRadius="md"
                />
            </Box>
            <Box
                flex="1"
                h="100%"
                animation={animate ? `${slide.left.sm} 1s ease` : "none"}
            >
                <Image
                    src={logo}
                    alt="logo da empresa"
                    h={{ base: 10, '2xl': 12 }}
                />
                <BadgeGroup mt={{ base: 6, '2xl': 8 }}>
                    {badges.map((badge) => (
                        <Badge key={badge} text={badge} />
                    ))}
                </BadgeGroup>
                <Text
                    mt={12}
                    color="medium"
                    fontSize={{ base: "md", '2xl': "xl" }}
                >
                    {summary}
                </Text>
                <Link variant="forward" to={link} />
            </Box>
        </Flex>
    );
}
