import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginations({ changeHandler, resultsCount }) {
  if (resultsCount === 0) return null;
  let pageCount = Math.ceil(resultsCount / 20);
  return (
    <Stack spacing={2} className="pagination">
      <Pagination
        count={pageCount}
        shape="rounded"
        color="primary"
        onChange={(_, page) => changeHandler(page)}
      />
    </Stack>
  );
}
