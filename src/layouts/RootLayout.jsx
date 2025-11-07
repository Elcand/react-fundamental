import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
  return (
    <>
      <NavLink to="/" className={({ isActive, isPending}) =>
        isActive ? "active" : isPending ? "pending" : ""
        }
        style={{ 
          margin: "15px"
        }}
        >Home</NavLink> | 

      <NavLink  to="/blog" className={({ isActive, isPending}) =>
        isActive ? "active" : isPending ? "pending" : ""
        }
        style={{ 
          margin: "15px"
        }}>Blog</NavLink> |

      <NavLink to="/about" className={({ isActive, isPending}) =>
        isActive ? "active" : isPending ? "pending" : ""
        }
        style={{ 
          margin: "15px"
        }}>About</NavLink>
      <Outlet />
    </>
  );
}

export default RootLayout;