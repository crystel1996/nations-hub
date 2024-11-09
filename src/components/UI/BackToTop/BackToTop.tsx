import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useTheme, Zoom } from "@mui/material";
import { BackToTopInterface } from "@nations-hub/components/UI/BackToTop/interface";
import { FC, useEffect, useState } from "react";

const BackToTop: FC<BackToTopInterface> = (props) => {
    const theme = useTheme();
  const [showButton, setShowButton] = useState(false);

  // Show the button when scrolling down beyond 300px
  const handleScroll = () => {
    if ((props.composantRef?.current as any)?.scrollTop > 50) {
        if (!showButton) setShowButton(true);
      } else {
        if (showButton) setShowButton(false);
      }
  };

  // Scroll smoothly back to top when the button is clicked
  const scrollToTop = () => {
    const component = props.composantRef as any;
    if (component?.current) {
        component.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    const temp = props.composantRef?.current as any;
    temp?.addEventListener("scroll", handleScroll);
    return () => temp?.removeEventListener("scroll", handleScroll);
  });

  return (
    <Zoom in={showButton}>
      <Fab
        color="primary"
        size="small"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
}

export default BackToTop