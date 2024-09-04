import { HighlightLine } from "@/components/HighlightLine";
import { Link } from "@/components/Link";
import { Nav } from "@/components/Nav";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { opacity } from "@/styles/animations";
import { Box, Flex, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface MainProps {
    subtitle: string;
    title: {
        first: string;
        second: string;
        third: string;
    };
    variant: "locale" | "back";
    links: {
        title: string;
        to: () => void;
    }[];
    children: ReactNode;
}

export function Main({ subtitle, title, variant, links, children }: MainProps) {
    const [renderTitle, setRenderTitle] = useState(false);

    return (
        <Flex
            w="100vw"
            h={{ base: "calc(100vh - 12rem)", "2xl": "calc(100vh - 16rem)" }}
            px={{ base: 24, "2xl": 40 }}
            py={{ base: 16, "2xl": 24 }}
            direction="column"
            alignItems="start"
            justifyContent="space-between"
            position="relative"
        >
            <Box zIndex="2" mt={{ base: 0, "2xl": 12 }}>
                <Subtitle
                    text={subtitle}
                    onAnimationEnd={() => setRenderTitle(true)}
                />
                {renderTitle && (
                    <Title
                        text={title.first}
                        animation={`${opacity.appear} 2s ease`}
                        variant="xl"
                    />
                )}
                {renderTitle && (
                    <Title
                        opacity={0}
                        text={title.second}
                        animation={`${opacity.appear} 2s ease 0.5s forwards`}
                        variant="xl"
                    />
                )}
                {renderTitle && (
                    <Title
                        opacity={0}
                        text={title.third}
                        animation={`${opacity.appear} 2s ease 1s forwards`}
                        variant="xl"
                    />
                )}
            </Box>
            <Flex w="100%" alignItems="end" justifyContent="space-between">
                {variant === "locale" && (
                    <Box animation={`${opacity.appear} 2s ease`}>
                        <Text
                            color="medium"
                            fontSize={{ base: "md", "2xl": "lg" }}
                            letterSpacing="0.8px"
                        >
                            Based at
                        </Text>
                        <Text
                            fontWeight="400"
                            letterSpacing="0.6px"
                            mt={1}
                            fontSize={{ base: "md", "2xl": "lg" }}
                        >
                            Brazil
                        </Text>
                        <HighlightLine variant="horizontal" mt={8} />
                    </Box>
                )}
                {variant === "back" && (
                    <Box animation={`${opacity.appear} 2s ease`}>
                        <Link variant="back" to="/" />
                    </Box>
                )}
                <Nav links={links} />
            </Flex>
            {children}
        </Flex>
    );
}
