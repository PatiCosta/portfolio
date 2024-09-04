import { bounce } from "@/styles/animations";
import { Box } from "@chakra-ui/react";

export function DiamondBounce() {
    return (
        <Box w={5} h={5} position="relative">
            <Box
                w="100%"
                h="100%"
                position="absolute"
                animation={`${bounce.left} 6s ease infinite`}
            >
                <Box
                    w="100%"
                    h="100%"
                    border="1px solid"
                    borderColor="light"
                    opacity={0.6}
                    transform="rotate(45deg)"
                />
            </Box>
            <Box
                w="100%"
                h="100%"
                position="absolute"
                animation={`${bounce.right} 6s ease infinite`}
            >
                <Box
                    w="100%"
                    h="100%"
                    border="1px solid"
                    borderColor="medium"
                    opacity={0.6}
                    transform="rotate(45deg)"
                />
            </Box>
        </Box>
    );
}
