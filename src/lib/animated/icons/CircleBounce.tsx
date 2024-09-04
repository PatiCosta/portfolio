import { bounce } from "@/styles/animations";
import { Box } from "@chakra-ui/react";

export function CircleBounce() {
    return (
        <Box
            w={6}
            h={6}
            borderRadius="full"
            border="1px solid"
            borderColor="light"
            position="relative"
        >
            <Box
                w="100%"
                h="100%"
                border="1px solid"
                borderColor="medium"
                borderRadius="full"
                position="absolute"
                opacity={0.6}
                animation={`${bounce.up} 6s ease infinite`}
            />
            <Box
                w="100%"
                h="100%"
                border="1px solid"
                borderColor="medium"
                borderRadius="full"
                position="absolute"
                opacity={0.6}
                animation={`${bounce.down} 6s ease infinite`}
            />
        </Box>
    );
}
