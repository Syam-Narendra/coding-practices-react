import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorAppContainer,
  TextEditorResponsiveContainer,
  HeadingContainer,
  Heading,
  TextEditorImage,
  TextAreaContainer,
  ButtonsContainer,
  ButtonItem,
  TextArea,
  BoldButton,
  ItalicButton,
  UnderlineButton,
} from './styledComponent'

class TextEditor extends Component {
  state = {
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
  }

  onUnderlineText = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  onItalicText = () => {
    this.setState(prevState => ({
      isItalicActive: !prevState.isItalicActive,
    }))
  }

  onBoldText = () => {
    this.setState(prevState => ({
      isBoldActive: !prevState.isBoldActive,
    }))
  }

  renderButtons = () => {
    const {isBoldActive, isItalicActive, isUnderlineActive} = this.state
    return (
      <ButtonsContainer>
        <ButtonItem>
          <BoldButton
            type="button"
            onClick={this.onBoldText}
            isActive={isBoldActive}
            data-testid="bold"
          >
            <VscBold size={25} />
          </BoldButton>
        </ButtonItem>
        <ButtonItem>
          <ItalicButton
            type="button"
            onClick={this.onItalicText}
            isActive={isItalicActive}
            data-testid="italic"
          >
            <GoItalic size={25} />
          </ItalicButton>
        </ButtonItem>
        <ButtonItem>
          <UnderlineButton
            type="button"
            onClick={this.onUnderlineText}
            isActive={isUnderlineActive}
            data-testid="underline"
          >
            <AiOutlineUnderline size={25} />
          </UnderlineButton>
        </ButtonItem>
      </ButtonsContainer>
    )
  }

  render() {
    const {isBoldActive, isItalicActive, isUnderlineActive} = this.state
    return (
      <TextEditorAppContainer>
        <TextEditorResponsiveContainer>
          <HeadingContainer>
            <Heading>Text Editor</Heading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </HeadingContainer>
          <TextAreaContainer>
            {this.renderButtons()}
            <TextArea
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderlineActive={isUnderlineActive}
              rows="35"
            />
          </TextAreaContainer>
        </TextEditorResponsiveContainer>
      </TextEditorAppContainer>
    )
  }
}

export default TextEditor
