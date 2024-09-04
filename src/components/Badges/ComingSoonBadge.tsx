import { Flex, Icon, Text } from "@chakra-ui/react";
import { Clock } from "lucide-react";

export function ComingSoonBadge() {
    return (
        <Flex
            alignItems="center"
            gap={{ base: 2, '2xl': 3 }}
            mt={{ base: 8, '2xl': 12 }}
            color="medium"
            px={{ base: 4, '2xl': 8 }}
            py={{ base: 1, '2xl': 2 }}
            bgColor="transparent"
            w="fit-content"
            borderRadius="md"
        >
            <Icon as={Clock} boxSize={{ base: 4, '2xl': 5 }} mt={0.5} />
            <Text
                fontWeight="400"
                letterSpacing="0.4px"
                fontSize={{ base: "md", '2xl': "lg" }}
            >
                coming soon
            </Text>
        </Flex>
    );
}
