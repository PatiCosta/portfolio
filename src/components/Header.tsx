import { opacity, slide } from "@/styles/animations";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

export function Header({
    headerFinishedRendering,
}: {
    headerFinishedRendering: () => void;
}) {
    const router = useRouter();

    const [renderedName, setRenderedName] = useState(false);
    const [renderedRole, setRenderedRole] = useState(false);

    const currentPathname = router.asPath;

    if (currentPathname !== "/") {
        headerFinishedRendering();
    }

    return (
        <Flex
            w="100vw"
            px={24}
            h={48}
            alignItems="center"
            justifyContent="space-between"
            position="relative"
        >
            {(renderedRole || currentPathname !== "/") && (
                <Image
                    src="/assets/img/logos/logo_all_pink.svg"
                    alt="logo"
                    h={14}
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
                left="calc(100% - 190px)"
                transform={renderedRole ? "translateX(-50%)" : "none"}
                animation={
                    renderedRole && currentPathname === "/"
                        ? `${slide.right.header} 2s ease`
                        : "none"
                }
            >
                <Text
                    fontFamily="heading"
                    fontWeight="600"
                    fontSize="2xl"
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
                    fontSize="md"
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
