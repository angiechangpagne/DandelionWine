import React from 'react';
import { Route } from 'react-router-dom';
import AllWines from './AllWines';
import NameRoute from './NameRoute';
import WinePage from './WinePage';
import Vintages from './Vintages';
import AllWinesForVint from './AllWinesForVint';

function WinesRoute(props){
  console.log('Hello Orwellian');
  return(
    <div>
      <Route exact path ="/wines" render={()=> <AllWines wines={props.wines} />}/>
      <Route exact path ="/wines/:name" render={prop => (<NameRoute wines={props.wines} {...prop} />)}/>
      <Route exact path ="/wines/:name/:vintage" render={prop => <WinePage wines={props.wines} {...props} />}/>
      <Route exact path ="/vintages" render={() => <Vintages wines ={props.wines}/>}/>
      <Route exact path ="/vintages/:vintage" render={prop => (AllWinesForVint wines={props.wines} {...prop} />)}/>
    </div>
  )
}

export default WinesRoute;