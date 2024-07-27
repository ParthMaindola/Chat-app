import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {


  return (
    <div style={{ height: '100vh'}}>
        <PrettyChatWindow
        projectId='a367f33c-acb0-4095-aa4a-65db5c0d6ef6'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100%'}} />
    </div>
  )
}

export default ChatsPage;
