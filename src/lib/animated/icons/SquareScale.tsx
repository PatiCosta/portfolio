import { scale } from "@/styles/animations";
import { Box } from "@chakra-ui/react";

export function SquareScale() {
    return (
        <Box
            w={6}
            h={6}
            border="1px solid"
            borderColor="light"
            position="relative"
        >
            <Box
                w="100%"
                h="100%"
                border="1px solid"
                borderColor="medium"
                position="absolute"
                left={0}
                right={0}
                mx="auto"
                opacity={0.6}
                animation={`${scale.up} 6s ease infinite`}
            />
            <Box
                w="100%"
                h="100%"
                border="1px solid"
                borderColor="medium"
                left={0}
                right={0}
                mx="auto"
                position="absolute"
                opacity={0.6}
                animation={`${scale.down} 6s ease infinite`}
            />
        </Box>
    );
}
