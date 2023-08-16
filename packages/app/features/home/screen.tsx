import { Button, Paragraph, YStack } from '@my/ui'
import { AlarmCheck } from '@tamagui/lucide-icons'
import { LinearGradient } from 'tamagui/linear-gradient'
import React from 'react'

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600} alignItems="center">
        <Button icon={AlarmCheck} color="$primary">
          This button wont show an icon
        </Button>

        <Paragraph ta="center">Regluar color values work fine:</Paragraph>
        <LinearGradient colors={['white', 'black']} start={[0, 0]} end={[1, 1]} h={40} w={300} />

        <Paragraph ta="center">But custom color tokens don't:</Paragraph>
        <LinearGradient colors={['$white', '$black']} start={[0, 0]} end={[1, 1]} h={40} w={300} />

        <Paragraph ta="center">These use 'red' from tamagui/colors and work fine:</Paragraph>
        <LinearGradient colors={['$red4', '$red10']} start={[0, 0]} end={[1, 1]} h={40} w={300} />

        <Paragraph ta="center">
          But these use the same color values as 'green' from tamagui/colors, but have a different
          name:
        </Paragraph>
        <LinearGradient
          colors={['$somethingotherthangreen4', '$somethingotherthangreen10']}
          start={[0, 0]}
          end={[1, 1]}
          h={40}
          w={300}
        />
      </YStack>
    </YStack>
  )
}
