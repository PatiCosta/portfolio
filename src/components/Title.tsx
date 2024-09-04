import { Text, TextProps, useBreakpointValue } from "@chakra-ui/react";

interface TitleProps extends TextProps {
    text: string;
    variant: "xl" | "lg";
}

export function Title({ text, variant, ...rest }: TitleProps) {
    const isXl = useBreakpointValue({ base: false, "2xl": true });

    return (
        <Text
            fontWeight="700"
            fontSize={
                variant === "xl"
                    ? isXl
                        ? "7xl"
                        : "6xl"
                    : isXl
                      ? "3.25rem"
                      : "2.75rem"
            }
            fontFamily="heading"
            maxW={{ base: "50vw", "2xl": "45vw" }}
            lineHeight={
                variant === "xl"
                    ? isXl
                        ? "5.5rem"
                        : "4.5rem"
                    : isXl
                      ? "4rem"
                      : "3.5rem"
            }
            {...rest}
        >
            {text}
        </Text>
    );
}
