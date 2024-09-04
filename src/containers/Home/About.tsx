import { slide } from "@/styles/animations";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";
import { SectionTitle } from "@/components/Section/SectionTitle";
import { HighlightLine } from "@/components/HighlightLine";
import { getTopPosition } from "@/utils/getTopPosition";

export function About() {
    const [animateContent, setAnimateContent] = useState(false);

    const contentRef = useRef(document.createElement("div"));

    useLayoutEffect(() => {
        const contentTopPosition = getTopPosition(contentRef.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            if (contentTopPosition < scrollPos) {
                setAnimateContent(true);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    });

    return (
        <>
            <SectionTitle
                subtitle="Who I am"
                title="A front-end developer who loves beautiful things"
            />
            <Flex
                alignItems="end"
                gap={48}
                mt={16}
                ref={contentRef}
                animation={animateContent ? `${slide.up.sm} 1s ease` : "none"}
            >
                <Box h="100%">
                    <Text color="medium">
                        Sunt adipisicing deserunt magna consectetur adipisicing
                        laboris cillum quis culpa. In excepteur eu minim aute.
                        Commodo ex aliquip non officia aliquip laboris in dolore
                        id et ad excepteur reprehenderit nisi amet. Consectetur
                        nisi aliquip officia officia labore commodo cupidatat
                        minim sunt reprehenderit officia elit cupidatat. Sunt
                        sint nulla anim veniam. Consectetur aliqua nulla nisi
                        sunt voluptate et occaecat nisi quis. Aliqua ad occaecat
                        incididunt non ipsum duis reprehenderit.
                    </Text>

                    <Text color="medium" mt={4}>
                        Sunt adipisicing deserunt magna consectetur adipisicing
                        laboris cillum quis culpa. In excepteur eu minim aute.
                        Commodo ex aliquip non officia aliquip laboris in dolore
                        id et ad excepteur reprehenderit nisi amet.
                    </Text>

                    <Text color="medium" mt={4}>
                        Sunt adipisicing deserunt magna consectetur adipisicing
                        laboris cillum quis culpa. In excepteur eu minim aute.
                    </Text>
                    <HighlightLine mt={32} variant="horizontal" />
                </Box>
                <Box
                    bgImage="/assets/woman.jpg"
                    bgSize="cover"
                    w="32vw"
                    h="60vh"
                    flexShrink="0"
                />
            </Flex>
        </>
    );
}
