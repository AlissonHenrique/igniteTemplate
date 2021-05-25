import { Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      height="100px"
      marginX="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Image src="/logo.svg" alt="Logo" width={187} height={45} />
      </Box>
    </Flex>
  );
}
