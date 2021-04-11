import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { createStructuredSelector } from 'reselect';
import './App.scss';
import Header from './components/header/header.component';
import PrivateRoute from './components/routing/PrivateRoute';
import AddExperience from './pages/add-experience/add-experience.component';
import CreateProfile from './pages/create-profile/create-profile.component';
import DashboardPage from './pages/dashboard/dashboard.component';
import EditProfile from './pages/edit-profile/edit-profile.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <>
          <section className='container'>
            <Route
              path='/sign-in'
              render={() =>
                currentUser ? <Redirect to='/dashboard' /> : <SignInAndSignOut />
              }
            />
            <PrivateRoute exact path='/dashboard' component={DashboardPage} />
            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
            <PrivateRoute exact path='/add-experience' component={AddExperience} />
          </section>
        </>
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
