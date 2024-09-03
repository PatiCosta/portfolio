import { Flex, Icon, Text } from "@chakra-ui/react";
import { Clock } from "lucide-react";

export function ComingSoonBadge() {
    return (
        <Flex
            alignItems="center"
            gap={2}
            mt={8}
            color="medium"
            px={4}
            py={1}
            bgColor="transparent"
            w="fit-content"
            borderRadius="md"
        >
            <Icon as={Clock} boxSize={4} mt={0.5} />
            <Text fontWeight="400" letterSpacing="0.4px">
                coming soon
            </Text>
        </Flex>
    );
}
