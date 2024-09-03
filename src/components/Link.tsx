import { Flex, Link as ChakraLink, Text, Icon } from "@chakra-ui/react";
import { MoveLeft, MoveRight } from "lucide-react";

interface LinkProps {
    to: string;
    variant: "forward" | "back";
}

export function Link({ to, variant }: LinkProps) {
    return (
        <Flex
            alignItems="center"
            gap={2}
            mt={8}
            py={1}
            cursor="pointer"
            position="relative"
            w="fit-content"
            _after={{
                content: '""',
                position: "absolute",
                bottom: 0,
                left: variant === "forward" ? 0 : "auto",
                right: variant === "back" ? 0 : "auto",
                h: "1px",
                w: "0px",
                bg: "highlight",
                transition: "width 0.5s ease",
            }}
            _hover={{ _after: { w: "100%" } }}
            as={ChakraLink}
            href={to}
            direction={variant === "forward" ? "row" : "row-reverse"}
        >
            <Text fontWeight="700" color="highlight" letterSpacing="0.4px">
                {variant === "forward" ? "Take a closer look" : "go back"}
            </Text>
            <Icon
                as={variant === "forward" ? MoveRight : MoveLeft}
                boxSize={4}
                color="highlight"
                mt={0.5}
            />
        </Flex>
    );
}
