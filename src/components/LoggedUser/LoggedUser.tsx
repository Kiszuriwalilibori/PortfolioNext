import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { LogOut, Media, Name, UserCard } from "./LoggedUser.style";
import { useAuthContext } from "contexts";
import { requestLogout } from "fbase/index";

export default function LoggedUser() {
    const { user, isLogged } = useAuthContext();

    if (!isLogged || !user) return null;

    return (
        <Paper elevation={2} component="aside" aria-label="user card">
            <UserCard>
                <Box>
                    <Media image={user.picture as string | undefined} />
                    <CardContent>
                        <Name>{user.name || user.email}</Name>
                        <LogOut variant="contained" onClick={() => requestLogout()}>
                            LogOut
                        </LogOut>
                    </CardContent>
                </Box>
            </UserCard>
        </Paper>
    );
}
