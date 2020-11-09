/** @jsx jsx */
import { FunctionComponent } from 'react'
import { css, jsx } from '@emotion/core'
import { Box } from '@chakra-ui/core'

interface IProps {
  title: string
}

const AuthFormWrapper: FunctionComponent<any> = ({ title, children }) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80%'
      }}
    >
      <div
        css={{
          width: '60%',
          height: '75vh',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '4rem'
        }}
      >
        <h1
          css={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: '#319795'
          }}
        >
          {title}
        </h1>
        <Box
          d="flex"
          flexDirection="column"
          w="100%"
          h="100%"
          borderWidth="1px"
          p={4}
          mt={5}
        >
          {children}
        </Box>
      </div>
    </div>
  )
}

export default AuthFormWrapper
