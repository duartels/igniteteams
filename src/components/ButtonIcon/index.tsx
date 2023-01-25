import { TouchableOpacityProps } from 'react-native'
import { ButtonIconTypeStyleProps, Container, Icon } from './styles'

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
}

export const ButtonIcon = ({ type = 'PRIMARY' }: Props) => {
  return (
    <Container>
      <Icon 
        name="home"
        type={type}
      />
    </Container>
  )
}