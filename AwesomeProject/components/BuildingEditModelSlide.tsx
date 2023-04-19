import { Box, CheckIcon, HStack, Slide, Text } from "native-base";
import { FC, Fragment } from "react";

interface BuildingEditModelSlideProps {
    isModalSlideOpen: boolean;
}

const BuildingEditModelSlide: FC<BuildingEditModelSlideProps> = ({
    isModalSlideOpen,
}) => {
    return (
        <>
            {" "}
            <Slide in={isModalSlideOpen} placement="top">
                <Box
                    w="100%"
                    position="absolute"
                    p="2"
                    borderRadius="xs"
                    bg="emerald.100"
                    alignItems="center"
                    justifyContent="center"
                    _dark={{
                        bg: "emerald.200",
                    }}
                    safeArea
                >
                    <HStack space={2}>
                        <CheckIcon
                            size="4"
                            color="emerald.600"
                            mt="1"
                            _dark={{
                                color: "emerald.700",
                            }}
                        />
                        <Text
                            color="emerald.600"
                            textAlign="center"
                            _dark={{
                                color: "emerald.700",
                            }}
                            fontWeight="medium"
                        >
                            Order Placed Successfully.
                        </Text>
                    </HStack>
                </Box>
            </Slide>
        </>
    );
};
export default BuildingEditModelSlide;
