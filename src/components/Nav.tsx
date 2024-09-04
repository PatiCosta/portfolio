import { opacity, slide } from "@/styles/animations";
import { Box, Flex, Text } from "@chakra-ui/react";

type NavLink = {
    title: string;
    to: () => void;
};

interface NavProps {
    links: NavLink[];
}

export function Nav({ links }: NavProps) {
    return (
        <Flex alignItems="center" gap={4} zIndex={2}>
            {links.map((link, index) => {
                return (
                    <Flex alignItems="center" gap={4} key={link.title}>
                        <Text
                            color="medium"
                            cursor="pointer"
                            transition="all 0.3s ease"
                            _hover={{ color: "light" }}
                            animation={`${slide.up.md} ${index === 0 ? 1 : index * 0.2 + 1}s ease`}
                            onClick={link.to}
                            fontSize={{ base: "md", '2xl': "xl" }}
                        >
                            {link.title}
                        </Text>
                        {links.length - 1 > index && (
                            <Box
                                h="4px"
                                w="4px"
                                bgColor="highlight"
                                borderRadius="full"
                                mt={0.5}
                                animation={`${opacity.appear} 2s ease`}
                            />
                        )}
                    </Flex>
                );
            })}
        </Flex>
    );
}
