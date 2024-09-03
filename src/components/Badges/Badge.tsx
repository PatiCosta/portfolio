import { Box } from "@chakra-ui/react";

export function Badge({ text }: { text: string }) {
    return (
        <Box
            px={8}
            py={1}
            bgColor="transparent"
            borderRadius="md"
            color="medium"
            letterSpacing="0.4px"
            fontSize="sm"
        >
            {text}
        </Box>
    );
}
