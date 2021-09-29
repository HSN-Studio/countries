import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginations({ changeHandler, resultsCount }) {
  if (resultsCount === 0) return null;
  let pageCount = Math.ceil(resultsCount / 25);
  console.log(pageCount);
  return (
    <Stack spacing={2} className="pagination">
      <Pagination
        count={pageCount}
        shape="rounded"
        color="primary"
        onChange={(e, page) => changeHandler(page)}
      />
    </Stack>
  );
}
