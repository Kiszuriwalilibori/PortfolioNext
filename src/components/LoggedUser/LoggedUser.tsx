import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { LogOut, Media, Name, UserCard } from "./LoggedUser.style";
import { useAuthContext } from "contexts";
import { requestLogout } from "fbase/index";

export default function LoggedUser() {
    const { user, isLogged } = useAuthContext();

    if (!isLogged || !user) return null;

    return (
        <Paper elevation={2} component="aside" aria-label="user card">
            <UserCard>
                <CardActionArea component="div">
                    <Media image={user.picture as string | undefined} />
                    <CardContent>
                        <Name>{user.name || user.email}</Name>

                        <LogOut variant="outlined" onClick={() => requestLogout()}>
                            LogOut
                        </LogOut>
                    </CardContent>
                </CardActionArea>
            </UserCard>
        </Paper>
    );
}
