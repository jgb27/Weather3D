import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const SunContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-sun"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <SunContainer>
    </SunContainer>
  )
}

export default Loader