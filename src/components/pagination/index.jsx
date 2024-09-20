import { Box, Pagination } from "@mui/material";
import PropTypes from "prop-types"; // Import PropTypes

export default function PaginationComponent({ children, onChange, count }) {
  return (
    <Box>
      {children}
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "flex-end"
        }}
        count={count}
        shape="rounded"
        onChange={onChange}
      />
    </Box>
  );
}

PaginationComponent.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  count: PropTypes.node,
  style: PropTypes.object
};
