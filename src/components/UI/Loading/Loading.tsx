import { Box, CircularProgress } from "@mui/material";
import { LoadingComponentInterface } from "@nations-hub/components/UI/Loading/interface";
import LoadingStyle from "@nations-hub/components/UI/Loading/LoadingStyle";
import { FC } from "react";

const Loading: FC<LoadingComponentInterface> = () => {
    return  <Box sx={LoadingStyle}>
                <CircularProgress />
            </Box>
}
export default Loading;