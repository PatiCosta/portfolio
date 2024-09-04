import { Box } from "@chakra-ui/react";
import { ReactNode, RefObject } from "react";

export function Wrapper({
    children,
    sectionRef,
}: {
    children: ReactNode;
    sectionRef: RefObject<HTMLDivElement>;
}) {
    return (
        <Box px={24} py={16} ref={sectionRef}>
            {children}
        </Box>
    );
}
