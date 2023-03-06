import styled from 'styled-components'

export const TextEditorAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  min-height: 100vh;
`

export const TextEditorResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #1b1c22;
  width: 85%;
  padding: 20px;
  max-width: 1100px;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46%;
  padding: 20px;
  min-height: 600px;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 32px;
  margin: 0px;
`

export const TextEditorImage = styled.img`
  width: 100%;
  margin: auto;
`
export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  width: 54%;
  border-radius: 12px;
`
export const ButtonsContainer = styled.ul`
  display: flex;
  align-items: center;
  border: 1px solid #334155;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin: 0px;
  padding: 10px;
  list-style-type: none;
`
export const ButtonItem = styled.li`
  margin: 5px;
`
export const TextArea = styled.textarea`
  color: #cbd5e1;
  background-color: transparent;
  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
  border: 1px solid #334155;
  border-top: none;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding-top: 20px;
  padding-left: 20px;
  text-decoration: ${props =>
    props.isUnderlineActive ? 'underline' : 'normal'};
  outline: none;
`

export const Button = styled.button`
  background-color: #25262c;
  border: none;
  outline: none;
  cursor: pointer;
`
export const BoldButton = styled(Button)`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const ItalicButton = styled(Button)`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`
export const UnderlineButton = styled(Button)`
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`
