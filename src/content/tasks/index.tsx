import { Helmet } from "react-helmet-async";
import {
  Grid,
  Container,
  Typography,
  Stack,
  Button,
  Card,
  Tooltip,
  IconButton,
} from "@mui/material";
import TasksTable from "./TasksTable";
import TasksSearch from "./TasksSearch";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import AutorenewIcon from "@mui/icons-material/Autorenew";

function Tasks() {
  return (
    <>
      <Helmet>
        <title>| Taches</title>
      </Helmet>
      {/* <PageTitleWrapper>
        <PageHeader />there is not header for the task tell now
      </PageTitleWrapper> */}
      <Card>
        <Container maxWidth="xl" sx={{ mt: 2 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={1}
          >
            <Grid
              item
              xs={12}
              lg={6}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h3" sx={{ mt: 1, ml: 1 }}>
                Tâches
              </Typography>
              <TasksSearch />
            </Grid>
            <Grid item lg={6}>
              <Stack
                sx={{
                  alignItems: "end",
                  justifyContent: "space-between",
                  mr: 2,
                }}
              >
                <Button
                  size="small"
                  rel="noopener noreferrer"
                  sx={{ mb: 1 }}
                  variant="contained"
                  startIcon={<AddTwoToneIcon fontSize="small" />}
                >
                  Ajouter
                </Button>

                <Tooltip arrow title="Rafraîchir">
                  <IconButton size="small" sx={{ ml: 0.2 }}>
                    <AutorenewIcon fontSize="small" sx={{ color: "blue" }} />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <TasksTable />
            </Grid>
          </Grid>
        </Container>
      </Card>
    </>
  );
}

export default Tasks;
