import { Box, Flex, FlexProps } from "@chakra-ui/react";

interface HighlightLineProps extends FlexProps {
    variant: "vertical" | "horizontal";
}

export function HighlightLine({ variant, ...rest }: HighlightLineProps) {
    return (
        <Flex
            alignItems="center"
            justifyContent={variant === "vertical" ? "center" : "start"}
            direction={variant === "horizontal" ? "row" : "column"}
            {...rest}
        >
            <Box h="6px" w="6px" bgColor="highlight" borderRadius="full" />
            <Box
                h={variant === "horizontal" ? "2px" : "160px"}
                w={variant === "horizontal" ? "200px" : "2px"}
                bg={`gradients.highlight.${variant}`}
                translateX={variant === "horizontal" ? "90deg" : "0deg"}
            />
        </Flex>
    );
}
