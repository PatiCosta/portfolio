import { Flex } from "@chakra-ui/react";
import { SectionTitle } from "@/layouts/Section/SectionTitle";
import { Card } from "@/components/Project/Card";

export function Works() {
    return (
        <>
            <SectionTitle
                subtitle="Selected projects"
                title="Works that I'd like to share"
            />
            <Flex
                alignItems="start"
                flexWrap="wrap"
                gap={12}
                mt={{ base: 16, '2xl': 24 }}
            >
                <Flex direction="column" gap={{ base: 24, '2xl': 32 }}>
                    <Card
                        img="/assets/img/heroImages/cursinho-hero.png"
                        title="Cursinho FEAUSP"
                        tags={["UX/UI Design", "Front-end development"]}
                        variant="access"
                        link="/works/cursinho"
                        summary="A complete website and payment system that has enhanced the company's digital marketing and management of student registrations."
                    />
                    <Card
                        img="/assets/img/heroImages/torroja-hero.png"
                        title="Studio Torroja"
                        tags={["UX/UI Design", "Front-end development"]}
                        variant="soon"
                        summary="A landing page focusing on user experience and SEO to boost the studio’s digital marketing efforts.
"
                    />

                    <Card
                        img="/assets/img/heroImages/magic-hero.png"
                        title="Magic"
                        tags={["Digital Design"]}
                        variant="soon"
                        summary="Full set of presentations and proposals to assist the company’s commercial team in making a positive and memorable impression."
                    />
                    {/* <Card
                        img="/assets/img/heroImages/magic-hero.png"
                        title="JMA"
                        tags={["UX/UI Design", "Digital Design"]}
                        variant="access"
                        summary="A redesigned user interface for the website and new institutional presentation for the TI Hunting team at JMA Group."
                    />
                    <Card
                        img="/assets/img/heroImages/magic-hero.png"
                        title="C2DI"
                        tags={["UX/UI Design", "Front-end development"]}
                        variant="soon"
                        summary="A redesigned user interface for the website and new institutional presentation for the TI Hunting team at JMA Group."
                    /> */}
                </Flex>
                <Flex direction="column" gap={{ base: 24, '2xl': 32 }} mt={32}>
                    <Card
                        img="/assets/img/heroImages/scc-hero.png"
                        title="Spadoni & Carvalho"
                        tags={["Digital Design"]}
                        variant="soon"
                        summary="Since early 2024, I have been collaborating with Spadoni’s Uber team to create modern and impactful presentations for their meetings."
                    />
                    <Card
                        img="/assets/img/heroImages/checar-hero.png"
                        title="Checar"
                        tags={["UX/UI Design"]}
                        variant="soon"
                        summary="Full research and interface design to enhance the internet presence of the mechanic shop, with the focus of creating a lasting impact on visitors."
                    />
                    <Card
                        img="/assets/img/heroImages/botrt-hero.png"
                        title="BoTRT"
                        tags={["UX/UI Design", "Front-end development"]}
                        variant="soon"
                        summary="A desktop application that helps law offices on their daily routines by automating the process of gathering information from all the Regional Labor Court systems."
                    />
                    {/* <Card
                        img="/assets/img/heroImages/checar-hero.png"
                        title="Daterra Distribuidores"
                        tags={["Front-end development"]}
                        variant="soon"
                        summary="A comprehensive system for managing Daterra product distributors, featuring inventory control, order placement, and revenue tracking."
                    />
                    <Card
                        img="/assets/img/heroImages/checar-hero.png"
                        title="mycode"
                        tags={["Digital Design"]}
                        variant="access"
                        summary="A comprehensive system for managing Daterra product distributors, featuring inventory control, order placement, and revenue tracking."
                    /> */}
                </Flex>
            </Flex>
        </>
    );
}
