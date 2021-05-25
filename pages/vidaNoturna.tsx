import { Header } from "./components/Header";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
export default function VidaNoturna() {
  return (
    <>
      <Header />
      <Flex
        bgImage="banner-1.png"
        height="500"
        paddingY="60px"
        alignItems="flex-end"
      >
        <Box width="100%" maxWidth="1440px" margin="0 auto" paddingX="140px">
          <Text color="color.2" fontWeight="600" fontSize="48px">
            Europa
          </Text>
        </Box>
      </Flex>
      <Box
        padding="80px 140px 80px 140px"
        width="100%"
        maxWidth="1440px"
        margin="0 auto"
      >
        <Flex justifyContent="space-between">
          <Box width="100%" maxWidth="600px">
            <Text fontSize="24px" textAlign="justify" paddingRight="24px">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <Box
            width="100%"
            maxWidth="490px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text
                fontWeight="600"
                fontSize="48px"
                color="color.3"
                textAlign="center"
              >
                50
              </Text>
              <Text fontWeight="600" fontSize="24px" textAlign="center">
                países
              </Text>
            </Box>
            <Box>
              <Text
                fontWeight="600"
                fontSize="48px"
                color="color.3"
                textAlign="center"
              >
                60
              </Text>
              <Text fontWeight="600" fontSize="24px" textAlign="center">
                línguas
              </Text>
            </Box>
            <Box>
              <Text
                fontWeight="600"
                fontSize="48px"
                color="color.3"
                textAlign="center"
              >
                27
              </Text>
              <Text fontWeight="600" fontSize="24px" textAlign="center">
                cidades + 100
              </Text>
            </Box>
          </Box>
        </Flex>
        <Text
          fontWeight="500"
          fontSize="36px"
          marginTop="80px"
          marginBottom="40px"
        >
          Cidades + 100
        </Text>
        <Flex justifyContent="space-between" gap="46px" flexWrap="wrap">
          <Box>
            <Image src="foto-1.png" alt="foto" />
            <Flex
              border="1px solid#FFBA08"
              padding="18px 24px 24px 24px"
              justify="space-between"
              alignItems="center"
              borderRadius="4px"
            >
              <Box>
                <Text fontWeight="600" fontSize="20px">
                  Londres
                </Text>
                <Text fontWeight="500" fontSize="16px">
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="country-1.png"
                display="block"
                w="30px"
                h="30px"
                color="color.4"
              />
            </Flex>
          </Box>
          <Box>
            <Image src="foto-2.png" alt="foto" />
            <Flex
              border="1px solid#FFBA08"
              padding="18px 24px 24px 24px"
              justify="space-between"
              alignItems="center"
              borderRadius="4px"
            >
              <Box>
                <Text fontWeight="600" fontSize="20px">
                  Paris
                </Text>
                <Text fontWeight="500" fontSize="16px">
                  França
                </Text>
              </Box>
              <Image
                src="country-1.png"
                display="block"
                w="30px"
                h="30px"
                color="color.4"
              />
            </Flex>
          </Box>
          <Box>
            <Image src="foto-3.png" alt="foto" />
            <Flex
              border="1px solid#FFBA08"
              padding="18px 24px 24px 24px"
              justify="space-between"
              alignItems="center"
              borderRadius="4px"
            >
              <Box>
                <Text fontWeight="600" fontSize="20px">
                  Roma
                </Text>
                <Text fontWeight="500" fontSize="16px">
                  Itália
                </Text>
              </Box>
              <Image
                src="country-1.png"
                display="block"
                w="30px"
                h="30px"
                color="color.4"
              />
            </Flex>
          </Box>
          <Box>
            <Image src="foto-4.png" alt="foto" />
            <Flex
              border="1px solid#FFBA08"
              padding="18px 24px 24px 24px"
              justify="space-between"
              alignItems="center"
              borderRadius="4px"
            >
              <Box>
                <Text fontWeight="600" fontSize="20px">
                  Praga
                </Text>
                <Text fontWeight="500" fontSize="16px">
                  República Tcheca
                </Text>
              </Box>
              <Image
                src="country-1.png"
                display="block"
                w="30px"
                h="30px"
                color="color.4"
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
