// import React, { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";

// interface User {
//     name: string;
//     email: string;
//     password: string;
// }

// interface AppContextType {
//     users: User[];
//     loading: boolean;
//     error: string;
// }

// const AppContext = createContext<AppContextType>({
//     users: [],
//     loading: false,
//     error: "",
// });

// const AppProvider: React.FC = ({ children }) => {
//     const [users, setUsers] = useState<User[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string>("");

//     useEffect(() => {
//         axios
//             .get<User[]>("https://your-api.com/users")
//             .then((response) => {
//                 setUsers(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);

//     const value: AppContextType = {
//         users,
//         loading,
//         error,
//     };

//     return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// const useAppContext = () => useContext(AppContext);

// export { AppProvider, useAppContext };
