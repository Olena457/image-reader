import { Box } from '@mui/material';

const SectionContainer = ({
  children,
  maxWidth = '1560px',
  py = 5,

  ...props
}) => {
  return (
    <Box
      component="section"
      sx={{
        py,
        mx: 'auto',
        maxWidth,
        width: '100%',
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default SectionContainer;
