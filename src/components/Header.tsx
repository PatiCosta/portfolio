import { opacity, slide } from "@/styles/animations";
import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export function Header({
    headerFinishedRendering,
}: {
    headerFinishedRendering: () => void;
}) {
    const router = useRouter();
    const isXl = useBreakpointValue({ base: false, "2xl": true });

    const [renderedName, setRenderedName] = useState(false);
    const [renderedRole, setRenderedRole] = useState(false);

    const currentPathname = router.asPath;

    if (currentPathname !== "/") {
        headerFinishedRendering();
    }

    return (
        <Flex
            w="100vw"
            px={{ base: 24, "2xl": 40 }}
            h={{ base: 48, "2xl": 64 }}
            alignItems="center"
            justifyContent="space-between"
            position="relative"
        >
            {(renderedRole || currentPathname !== "/") && (
                <Image
                    src="/assets/img/logos/logo_all_pink.svg"
                    alt="logo"
                    h={{ base: 14, "2xl": 16 }}
                    opacity={
                        !renderedRole && currentPathname === "/" ? "0" : "1"
                    }
                    animation={
                        currentPathname !== "/"
                            ? "none"
                            : `${opacity.appear} .5s ease`
                    }
                    onAnimationEnd={headerFinishedRendering}
                />
            )}
            <Box
                minW="fit-content"
                position={renderedRole ? "absolute" : "initial"}
                left={{
                    base: "calc(100% - 190px)",
                    "2xl": "calc(100% - 236px)",
                }}
                transform={
                    renderedRole
                        ? isXl
                            ? "translateX(-72%)"
                            : "translateX(-50%)"
                        : "none"
                }
                animation={
                    renderedRole && currentPathname === "/"
                        ? `${isXl ? slide.right.header.lg : slide.right.header.md} 2s ease`
                        : "none"
                }
            >
                <Text
                    fontFamily="heading"
                    fontWeight="600"
                    fontSize={{ base: "2xl", "2xl": "3xl" }}
                    animation={
                        currentPathname !== "/"
                            ? "none"
                            : `${opacity.appear} 1.5s ease`
                    }
                    onAnimationEnd={() => setRenderedName(true)}
                >
                    Patrícia Costa
                </Text>
                <Text
                    opacity={
                        !renderedName && currentPathname === "/" ? "0" : "1"
                    }
                    fontWeight="200"
                    fontSize={{ base: "md", "2xl": "lg" }}
                    letterSpacing="0.6px"
                    animation={
                        currentPathname !== "/"
                            ? "none"
                            : `${opacity.appear} 1s ease 1s`
                    }
                    onAnimationEnd={() => setRenderedRole(true)}
                >
                    Creative Developer
                </Text>
            </Box>
        </Flex>
    );
}
