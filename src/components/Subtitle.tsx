import { opacity } from "@/styles/animations";
import { Text, TextProps } from "@chakra-ui/react";

interface SubtitleProps extends TextProps {
    text: string;
}

export function Subtitle({ text, ...rest }: SubtitleProps) {
    return (
        <Text
            fontWeight="400"
            color="medium"
            fontSize={{ base: "lg", '2xl': "xl" }}
            letterSpacing="0.8px"
            animation={`${opacity.appear} 0.5s ease`}
            ml={1}
            mb={{ base: 0, '2xl': 2 }}
            {...rest}
        >
            {text}
        </Text>
    );
}
