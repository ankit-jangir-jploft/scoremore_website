import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Form } from 'react-bootstrap';

const AuthLayout = () => {
//     const { theme, toggleTheme } = useTheme();

//   useEffect(() => {
//     document.body.setAttribute("data-theme", theme);
//   }, [theme]);
//   useEffect(() => {
//     if (!theme) {
//       localStorage.setItem("theme", "light");
//     }
//   }, []);
    return (
        <div>
            <Outlet/>
            {/* <Form className="d-inline-block">
                                        <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                        label=""
                                        checked={theme == "dark"}
                                        onChange={(e) => {
                                            toggleTheme();
                                        }}
                                        />
                                    </Form>  */}
        </div>
    );
}

export default AuthLayout;
