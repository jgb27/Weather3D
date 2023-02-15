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
      bgGradient="linear(to-r, blue.400, blue.500)"
    >
      <Box
        w="25vw"
        h="65vh"
        bgGradient="linear(to-r, blue.300, blue.400)"
        borderRadius="xl"
        boxShadow="md"
        p="5"
      >
        <Center >
          <LazySunLoader />
        </Center>
      </Box >
    </Center >

  )
}