// import React from 'react';
// import { connect } from 'react-redux';
// import './LogOutButton.css';

// import Button from '@material-ui/core/Button';

// const LogOutButton = props => (
//   <>
//     <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
//       rel="stylesheet"></link>
//     <Button
//       // This button shows up in multiple locations and is styled differently
//       // because it's styled differently depending on where it is used, the className
//       // is passed to it from it's parents through React props
//       className={props.className}
//       onClick={() => props.dispatch({ type: 'LOGOUT' })}
//     >
//       <i class="material-icons">account_circle</i>
//       <span> </span>
//       {props.user.username}
//       <span> </span>
//       <i class="material-icons">expand_more</i>
//     </Button>
//   </>
// );

// const mapStateToProps = state => ({
//   user: state.user,
// });
// // This component doesn't need 'mapStateToProps'
// // because it doesn't care what the current state is.
// // No matter what the redux state is, this button will always be a log out button
// // this component still needs 'connect' though, because it is going to dispatch a redux action
// export default connect(mapStateToProps)(LogOutButton);

