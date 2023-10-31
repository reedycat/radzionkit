import { ReactNode } from 'react'
import { HStack } from '../../layout/Stack'
import { Text } from '../Text'
import { ShyTextButton } from '../../buttons/ShyTextButton'

interface AmountSuggestionProps {
  name: ReactNode
  value: number
  renderValue?: (value: number) => ReactNode
  onSelect: (value: number) => void
}

export const AmountSuggestion = ({
  name,
  value,
  onSelect,
  renderValue = (value) => value.toString(),
}: AmountSuggestionProps) => {
  return (
    <HStack alignItems="center" gap={4}>
      <Text size={14}>{name}:</Text>
      <ShyTextButton
        as="div"
        onClick={() => onSelect(value)}
        text={renderValue(value)}
      />
    </HStack>
  )
}
