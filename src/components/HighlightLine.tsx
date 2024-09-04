import { Box, Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";

interface HighlightLineProps extends FlexProps {
    variant: "vertical" | "horizontal";
}

export function HighlightLine({ variant, ...rest }: HighlightLineProps) {
    const isXl = useBreakpointValue({ base: false, '2xl': true });

    return (
        <Flex
            alignItems="center"
            justifyContent={variant === "vertical" ? "center" : "start"}
            direction={variant === "horizontal" ? "row" : "column"}
            {...rest}
        >
            <Box h="6px" w="6px" bgColor="highlight" borderRadius="full" />
            <Box
                h={variant === "horizontal" ? "2px" : isXl ? "220px" : "160px"}
                w={
                    variant === "horizontal"
                        ? isXl
                            ? "400px"
                            : "200px"
                        : "2px"
                }
                bg={`gradients.highlight.${variant}`}
                translateX={variant === "horizontal" ? "90deg" : "0deg"}
            />
        </Flex>
    );
}
