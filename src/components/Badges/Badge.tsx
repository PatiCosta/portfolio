import { Box } from "@chakra-ui/react";

export function Badge({ text }: { text: string }) {
    return (
        <Box
            px={{ base: 8, "2xl": 10 }}
            py={{ base: 1, "2xl": 2 }}
            bgColor="transparent"
            borderRadius="md"
            color="medium"
            letterSpacing="0.4px"
            fontSize={{ base: "sm", "2xl": "md" }}
        >
            {text}
        </Box>
    );
}
