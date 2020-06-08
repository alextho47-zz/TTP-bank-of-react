import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      totalDebit: 0,
      totalCredit: 0,
      debits: [],
      credits: [],
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );

    const DebitsComponent = () => (<Debits debits = {this.state.debitEntries} />)

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path='/debits' render={DebitsComponent} />
            <Route exact path='/credits' component={Credits} />
          </div>
        </Router>
    );
  }

}

export default App;