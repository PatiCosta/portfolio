import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ComingSoonBadge } from "../Badges/ComingSoonBadge";
import { Link } from "../Link";
import { useLayoutEffect, useRef, useState } from "react";
import { slide } from "@/styles/animations";
import { getTopPosition } from "@/utils/getTopPosition";

type Tag = "UX/UI Design" | "Front-end development" | "Digital Design";

interface CardProps {
    img: string;
    title: string;
    tags: Tag[];
    summary: string;
    variant: "soon" | "access";
    link?: string;
}

export function Card({ img, title, tags, summary, variant, link }: CardProps) {
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
        <Box
            borderRadius="md"
            bg="gradients.medium.vertical"
            maxW="calc((100vw - 12rem - 3rem)/2)"
            ref={cardRef}
            animation={animate ? `${slide.up.sm} 1s ease` : "none"}
        >
            <Image
                src={img}
                alt={title}
                w="calc((100vw - 12rem - 3rem)/2)"
                borderTopRadius="md"
            />
            <Box mt={8} px={8}>
                <Text fontWeight="700" fontSize={24}>
                    {title}
                </Text>
                <Flex gap={4} letterSpacing="0.6px" alignItems="center">
                    {tags.map((tag, index) => {
                        return (
                            <Flex key={tag} gap={4}>
                                <Text color="medium">{tag}</Text>

                                {index < tags.length - 1 && (
                                    <Text color="highlight">|</Text>
                                )}
                            </Flex>
                        );
                    })}
                </Flex>
                <Text
                    mt={8}
                    fontSize={14}
                    lineHeight="22.4px"
                    letterSpacing="0.4px"
                >
                    {summary}
                </Text>
                {variant === "access" && (
                    <Link variant="forward" to={link ?? "/"} />
                )}
                {variant === "soon" && <ComingSoonBadge />}
            </Box>
        </Box>
    );
}
