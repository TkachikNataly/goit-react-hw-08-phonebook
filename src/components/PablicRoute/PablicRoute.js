import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "components/Container/Container";
import { AuthSelector } from 'redux/auth';

export default function PablicRoute({ children, restricted = false }) {
    const isLoggedIn = useSelector(AuthSelector.gegIsLoggedIn);
    const showNavigate = isLoggedIn && restricted;
    return (
        <>
            {showNavigate ? (
                <Navigate replace to="/" />
            ) : (
                <Container>{children}</Container>
            )}
        </>
    );
}