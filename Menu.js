import styled from 'styled-components/native'

const Menu = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  }
})`
  background-color: #ffeaa7;
  padding: 10px;
`

export default Menu
