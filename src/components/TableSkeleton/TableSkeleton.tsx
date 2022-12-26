import { Box, Skeleton } from "@mui/material";
import { Stack } from "@mui/system";

function TableSkeleton() {
  return (
    <Box width="100%" height={"656px"}>
      <Stack>
        <Stack direction={"row"} height={"65px"} width={"100%"} spacing={2}>
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
        </Stack>

        <Stack direction={"row"} height={"65px"} width={"100%"} spacing={2}>
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
        </Stack>

        <Stack direction={"row"} height={"65px"} width={"100%"} spacing={2}>
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
        </Stack>

        <Stack direction={"row"} height={"65px"} width={"100%"} spacing={2}>
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
        </Stack>

        <Stack direction={"row"} height={"65px"} width={"100%"} spacing={2}>
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
          <Skeleton width={"100%"} />
        </Stack>
      </Stack>
    </Box>
  );
}

export default TableSkeleton;
