import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BadgeGroupProps extends FlexProps {
    children: ReactNode;
}

export function BadgeGroup({ children, ...props }: BadgeGroupProps) {
    return (
        <Flex alignItems="center" gap={2} flexWrap="wrap" {...props}>
            {children}
        </Flex>
    );
}
