// import React, { createContext, useState } from "react";

// export const RegisterContext = createContext();

// export const RegisterProvider = ({ children }) => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [cpf, setCpf] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [role, setRole] = useState(0);
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [ddd, setDdd] = useState("");

//     const registerUser = async () => {
//         try {
//             const response = await fetch("https://your-api.com/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     firstName,
//                     lastName,
//                     cpf,
//                     email,
//                     password,
//                     role,
//                     phone: {
//                         phoneNumber,
//                         ddd,
//                     },
//                 }),
//             });
//             const data = await response.json();
//             // Handle the response data as needed
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const values = {
//         firstName,
//         setFirstName,
//         lastName,
//         setLastName,
//         cpf,
//         setCpf,
//         email,
//         setEmail,
//         password,
//         setPassword,
//         role,
//         setRole,
//         phoneNumber,
//         setPhoneNumber,
//         ddd,
//         setDdd,
//         registerUser,
//     };

//     return (
//         <RegisterContext.Provider value={values}>
//             {children}
//         </RegisterContext.Provider>
//     );
// };
