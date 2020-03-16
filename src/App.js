import React, { useRef, useEffect} from 'react';
import './App.css';
import { ConversationalForm } from 'conversational-form';
import formFields from './data'

function App() {
  const chatRef = useRef(null)

  useEffect(() => {
    const initialize = () => {
      const submitCallback = () => {
        const formDataSerialized = newChat.getFormData(true);
        console.log("Formdata, obj:", formDataSerialized);
        newChat.addRobotChatResponse("You are done (after this user will be redirected to another page)")
      }
      const flowStepCallback = (dto, success, error) => {
        const questionTagType = dto.tag.type
        if (questionTagType === 'text'){ 
          console.log(dto)
          success()
        }
        else success()
      }
      const newChat = ConversationalForm.startTheConversation({
        options: {
          flowStepCallback,
          submitCallback,
          preventAutoFocus: true,
          showProgressBar: true
        },
        tags: formFields,
      })
      chatRef.current.appendChild(newChat.el)
    }
    
    initialize()
  }, [])


  return (
    <div className="App">
      <div ref={chatRef} />
    </div>
  );
}

export default App;
