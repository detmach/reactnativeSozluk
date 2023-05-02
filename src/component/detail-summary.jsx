import React from 'react'
import Box from './box'
import Text from './text'
import theme from '../utils/theme'

export default function DetailSummary({ children, ...props }) {
  const { data, b } = props
  const type = (data?.ozelliklerListe &&
    data.ozelliklerListe.map((_) => _.tam_adi)) || ['isim']
  console.log(props)
  return (
    <Box position="relative" bg={theme.colors.white} px={28} py={20} {...props}>
      {b && (
        <Box
          position="absolute"
          left={12}
          right={12}
          top={0}
          height={1}
          bg={theme.colors.light}
        />
      )}

      {data ? (
        <Box>
          <Box flexDirection={'row'}>
            <Text
              ml={-14}
              mr={8}
              fontWeight={'600'}
              color={theme.colors.textLight}
            >
              {data.anlam_sira}
            </Text>
            <Text color={theme.colors.red}>{type.join(', ')}</Text>
          </Box>
          <Box mt={8}>
            <Text fontWeight="600">{data.anlam}</Text>
            {data.orneklerListe &&
              data.orneklerListe.map((ornek) => (
                <Box key={ornek.ornek_id}>
                  <Text
                    ml={10}
                    mt={12}
                    color={theme.colors.textLight}
                    fontWeight="500"
                  >
                    {ornek.ornek}{' '}
                    <Text fontWeight="700" color={theme.colors.textLight}>
                      {ornek.yazar_id !== '0' && `- ${ornek.yazar[0].tam_adi}`}
                    </Text>
                  </Text>
                </Box>
              ))}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  )
}
