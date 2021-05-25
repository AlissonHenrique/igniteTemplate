import { Header } from "./components/Header";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);
export default function Home() {
  return (
    <>
      <Header />
      <Box width="100%">
        <Image src="/banner.png" alt="Banner" width="auto" height={335} />
      </Box>

      <Flex justifyContent="space-between" paddingTop="114px" paddingX="140px">
        <Box
          height="146px"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Image src="/icon-1.svg" alt="Banner" />
          <Text fontWeight="600" fontSize="24px">
            vida noturna
          </Text>
        </Box>

        <Box
          height="146px"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Image src="/icon-2.svg" alt="Banner" display="block" />
          <Text fontWeight="600" fontSize="24px">
            praia
          </Text>
        </Box>

        <Box
          height="146px"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Image src="/icon-3.svg" alt="Banner" />
          <Text fontWeight="600" fontSize="24px">
            moderno
          </Text>
        </Box>

        <Box
          height="146px"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Image src="/icon-4.svg" alt="Banner" />
          <Text fontWeight="600" fontSize="24px">
            clássico
          </Text>
        </Box>

        <Box
          height="146px"
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Image src="/icon-5.svg" alt="Banner" />
          <Text fontWeight="600" fontSize="24px">
            e mais...
          </Text>
        </Box>
      </Flex>
      <Box
        width="90px"
        margin="0 auto"
        w="90px"
        marginTop="80px"
        marginBottom="52px"
        height="2px"
        bgColor="color.1"
      />
      <Box marginTop="52px">
        <Text textAlign="center" fontWeight="500" fontSize="36px">
          Vamos nessa?
          <br /> Então escolha seu continente
        </Text>
      </Box>
      <Box paddingX="100px" paddingBottom="40px">
        <Swiper navigation={true} pagination={true} className="mySwiper">
          <SwiperSlide>
            <Link href="/vidaNoturna">
              <Image src="/banner-2.png" width="100%" height={450} />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/banner-2.png" width="100%" height={450} />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
