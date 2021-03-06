import { hubConnection } from 'signalr-no-jquery'
import { SIGNALR_NOTIFICATION } from '../actions/types'
 
const signalr = (store,url) => {
    const connection = hubConnection(url);

    let hubProxy = connection.createHubProxy("chat");
    
    //client callbacks from server
    hubProxy.on("channels",function(list){
        console.log("signalr channels callback", list)
        store.dispatch({ type: SIGNALR_NOTIFICATION, payload: { list } });
    });

    connection.start()
    .done(()=>{
    
      console.log('connected')

      //server call
      hubProxy.invoke('join', "test","murat")
      .done((users) => {
        console.log('joined to channel', users);
      }).fail(() => {
        console.warn('Something went wrong when calling server, it might not be up and running?')
      });
})
    .fail(()=>{console.log('failed')});
}

export default signalr;