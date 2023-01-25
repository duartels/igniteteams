import { TouchableOpacityProps } from "react-native"
import { ButtonTypeStylesProps, Container, Title } from "./styles"

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStylesProps;
}

export const Button = ({title, type = 'PRIMARY', ...rest}: Props) => {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Title>{title}</Title>
    </Container>
  )
}