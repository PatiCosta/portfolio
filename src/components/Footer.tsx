import { Box, Flex, Link, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <Flex
            // w="100vw"
            mx={24}
            py={16}
            borderTop="0.5px solid"
            borderColor="rgba(240, 239, 244, 0.1)"
            alignItems="center"
            justifyContent="space-between"
        >
            <Flex alignItems="center" gap={2}>
                <Text fontSize={14} letterSpacing="0.6px">
                    made with
                </Text>
                <Text fontSize={14} letterSpacing="0.6px" color="highlight">
                    ♥
                </Text>
                <Text fontSize={14} letterSpacing="0.6px">
                    by me
                </Text>
            </Flex>
            <Box>
                <Flex alignItems="center" gap={4}>
                    <Text
                        color="medium"
                        cursor="pointer"
                        transition="all 0.3s ease"
                        _hover={{ color: "light" }}
                        as={Link}
                        href="mailto:patricosouza@hotmail.com"
                    >
                        e-mail
                    </Text>
                    <Box
                        h="4px"
                        w="4px"
                        bgColor="highlight"
                        borderRadius="full"
                        mt={0.5}
                    />
                    <Text
                        color="medium"
                        cursor="pointer"
                        transition="all 0.3s ease"
                        _hover={{ color: "light" }}
                        as={Link}
                        href="https://github.com/PatiCosta"
                    >
                        github
                    </Text>
                    <Box
                        h="4px"
                        w="4px"
                        bgColor="highlight"
                        borderRadius="full"
                        mt={0.5}
                    />
                    <Text
                        color="medium"
                        cursor="pointer"
                        transition="all 0.3s ease"
                        _hover={{ color: "light" }}
                        as={Link}
                        href="https://www.linkedin.com/in/costa-pati/"
                    >
                        linkedin
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
}
