import {
  Box,
  Center,
} from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import SunLoader from './components/sun-loader'

const LazySunLoader = dynamic(() => import('./components/sun'), {
  ssr: false,
  loading: () => <SunLoader />
})

export default function Home() {
  return (
    <Center
      h="100vh"
      bgGradient="linear(to-r, yellow.400, yellow.500)"
    >
      <Box
        w="25vw"
        h="65vh"
        bgColor="white"
        borderRadius="xl"
        boxShadow="md"
        p="5"
      >
        <Center border="1px solid black">
          <LazySunLoader />
        </Center>
      </Box >
    </Center >

  )
}