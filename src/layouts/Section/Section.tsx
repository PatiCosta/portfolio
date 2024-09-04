import { Box } from "@chakra-ui/react";
import { ReactNode, RefObject } from "react";

export function Section({
    children,
    sectionRef,
}: {
    children: ReactNode;
    sectionRef: RefObject<HTMLDivElement>;
}) {
    return (
        <Box
            px={{ base: 24, '2xl': 40 }}
            py={{ base: 16, '2xl': 24 }}
            ref={sectionRef}
        >
            {children}
        </Box>
    );
}
