import React from "react"
import { UserSession, AppConfig } from "blockstack";

const appConfig = new AppConfig(["store_write"]);

const userSession = new UserSession({ appConfig: appConfig });





class App extends React.Component { 

  handleSignIn = () => {

    userSession.redirectToSignIn()
    
    }
    
render() {

return <div>Nice Meme
  <button className="ui button positive" onClick={this.handleSignIn}>

Sign in 

</button>
</div>



}

}


export default App