import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import MailBoxContext from "../Store/MailboxContext";

const MainNavigation = () => {
   const mailCtx = useContext(MailBoxContext);
   const isLoggedIn = mailCtx.isLoggedIn;
    return(
        <header className={classes.header}>
            <Link to='/home'>
              <div className={classes.logo}>Mail-Box</div>
            </Link>
            <nav>
                <ul>
                    {!isLoggedIn && (
                        <li>
                        <button>
                            <Link to='/login'>Login</Link>
                        </button>
                    </li>
                    )}
                   
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;