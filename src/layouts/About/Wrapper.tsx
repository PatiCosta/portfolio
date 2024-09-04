import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

export function Wrapper({ children }: { children: ReactNode }) {
    return (
        <Grid
            templateColumns="1.2fr 0.8fr"
            gap={12}
            alignItems="end"
            justifyItems="start"
        >
            {children}
        </Grid>
    );
}
