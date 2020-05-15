import React from 'react'; 
import User from '../../components/User';

const authIndexPage = (props) => { 
    return (
        <div>
            <h1>The Auth Index page ! {props.appName}</h1>
            <p>User infos</p>

            <User name="Ibrahima D." age={33} /> 
        </div>
    )
}

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "Super App (Auth)" });
      }, 1000);
    });
    return promise;
  };
  

export default authIndexPage;

