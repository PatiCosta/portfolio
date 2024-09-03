import { Text, TextProps } from "@chakra-ui/react";

interface TitleProps extends TextProps {
    text: string;
    variant: "xl" | "lg";
}

export function Title({ text, variant, ...rest }: TitleProps) {
    return (
        <Text
            fontWeight="700"
            fontSize={variant === "xl" ? "6xl" : "2.75rem"}
            fontFamily="heading"
            maxW="50vw"
            lineHeight={variant === "xl" ? "4.5rem" : "3.5rem"}
            {...rest}
        >
            {text}
        </Text>
    );
}
