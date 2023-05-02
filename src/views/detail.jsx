/* eslint-disable prettier/prettier */
import * as React from 'react'
import { ActionButton, ActionButtonTitle, Box, Text } from '../component/index'
import { SafeAreaView } from 'react-native-safe-area-context'
import FocusAwareStatusBar from '../component/FocusAwareStatusBar'
import theme from '../utils/theme'
import { Favorite, More, Sound, SoundSolid } from '../component/icons'
import DetailSummary from '../component/detail-summary'
import { ScrollView } from 'react-native'
import LoaderText from '../component/LoaderText'
import { ApiServices } from '../utils/Services'

function DetailView({ route }) {
  const [Dinleniyor, setDinleniyor] = React.useState(false)
  const [Favoride, setFavoride] = React.useState(false)
  const t = ApiServices.getInstance()
  const [data, setData] = React.useState(null)
  const { kelime, title } = route.params
  console.log(data)
  React.useEffect(() => {
    t.HistoryUpdateList(kelime).then()
    t.Ara(kelime).then((p) => setData(p))
    console.log(data)
  }, [])

  return (
    <Box as={SafeAreaView} flex={1} bg={theme.colors.softRed}>
      <FocusAwareStatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.white}
      />
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight={'bold'}>
            {kelime}
          </Text>
          <Text color={theme.colors.textLight} mt={6}>
            {data?.detay.telafuz && data?.telafuz} {data?.detay.lisan}
          </Text>
        </Box>
        <Box flexDirection={'row'}>
          <ActionButton>
            <Sound width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton>
            <Favorite width={24} height={24} color={theme.colors.textLight} />
          </ActionButton>
          <ActionButton ml={'auto'}>
            <More color={theme.colors.textMedium} />
            <ActionButtonTitle color={theme.colors.textLight}>
              Türk İşaret Dili
            </ActionButtonTitle>
          </ActionButton>
        </Box>

        <Box mt={30}>
          {!data ? (
            <>
              {[1, 2, 3].map((index) => (
                <DetailSummary isLoading={index === 1}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailSummary>
              ))}
            </>
          ) : (
            data.detay.anlamlarListe.map((p, i) => (
              <DetailSummary key={i} b={false} data={p} />
            ))
          )}
        </Box>
      </Box>
    </Box>
  )
}
export default DetailView
