import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

export function TagGroup({ children }: { children: ReactNode }) {
    return (
        <Grid w="100%" templateColumns="1fr" gap={2}>
            {children}
        </Grid>
    );
}
