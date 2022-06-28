// import { Route, Routes } from "react-router-dom";
// import HomeView from "./View/HomeView";
// import LoginView from "./View/LoginView";
// import RegisterView from "./View/RegisterView";
// import { useDispatch, useSelector } from "react-redux";
// import { AuthOperations, AuthSelector } from 'redux/auth';
// import { useEffect } from "react";
// import Loader from "./Loader/Loader";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";
// import PablicRoute from "./PablicRoute/PablicRoute";
// import NotFoundView from "./View/NotFoundView";

// export default function App() {
//   const dispatch = useDispatch();
//   const isRefreshing = useSelector(AuthSelector.getIsRefreshing);

//   useEffect(() => {
//     dispatch(AuthOperations.fetchCurrentUser());
//   }, [dispatch]);
//   return isRefreshing ? (
//     <Loader />
//   ) : (
//     <Routes>
//       <Route
//         exat
//         path="/"
//         element={
//           <PrivateRoute>
//             <HomeView />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="login"
//         element={
//           <PablicRoute restricted>
//             <LoginView />
//           </PablicRoute>
//         }
//       />
//       <Route
//         path="register"
//         element={
//           <PablicRoute restricted>
//             <RegisterView />
//           </PablicRoute>
//         }
//       />
//       <Route path="*" element={<NotFoundView />} />
//     </Routes>
//   );


// }


