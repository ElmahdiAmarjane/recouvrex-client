import { Box, Grid } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import CreateIcon from "@mui/icons-material/Create";
// import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import StatusCard from "./infoCards/StatusCard";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ClearIcon from "@mui/icons-material/Clear";
import GroupsIcon from "@mui/icons-material/Groups";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { getStatuses } from "src/utils/api/status/statusApiCall";
import { getFilteredCasesByStatusId } from "src/utils/api/case/caseApiCall";
import { Case } from "src/models/case";

interface ExistingCasesProps {
  cases: Case[]; // Assuming Case is a type or interface representing a case
  setCases: React.Dispatch<React.SetStateAction<Case[]>>; // This is a typical type for a setState function when using useState
}

export interface PageHeaderHandles {
  updateSelectedStatus: (id: number) => void;
}

// function PageHeader({ cases, setCases }: ExistingCasesProps, ref) {
  const PageHeader = forwardRef<PageHeaderHandles, ExistingCasesProps>(
    ({ cases, setCases }, ref) => {
  // const user = {
  //   name: 'Catherine Pike',
  //   avatar: '/static/images/avatars/1.jpg'
  // };

  // Define type for status object
  type StatusType = {
    id: number;
    status: string;
    count: number;
  };

  const [selectedStatusId, setSelectedStatusId] = useState<number>(0);

  // function updateSelectedStatusId(newStatusId:number) {
  //   setSelectedStatusId(newStatusId);
  // }

  useImperativeHandle(ref, () => ({
    updateSelectedStatus(newStatusId: number) {
      setSelectedStatusId(newStatusId);
    },
  }));

  useEffect(() => {
    if (selectedStatusId > 0) {
      // fetch the cases based on the selected status id and the user id
      const fetchData = async () => {
        try {
          const result = await getFilteredCasesByStatusId(selectedStatusId);
          setCases(result);
          console.log(result);
        } catch (error) {
          // Handle error
          console.error("Error fetching cases for user by statusid", error);
        }
      };

      fetchData();

      // update the existing cases
    }
  }, [selectedStatusId]);

  const [fetchedStatus, setFetchedStatus] = useState<StatusType[]>([]);

  const [status, setStatus] = useState<Record<string, StatusType>>({
    comite_des_impayes: {
      id: 3,
      status: "Comité des impayés",
      count: 0,
    },
    radie: {
      id: 5,
      status: "Radié",
      count: 0,
    },
    pre_contentieux: {
      id: 6,
      status: "Pré-contentieux",
      count: 0,
    },
    contentieux: {
      id: 7,
      status: "Contentieux",
      count: 0,
    },
    saisie_conservation_immobiliere_initiee: {
      id: 8,
      status: "Saisie conservation immobilière initiée",
      count: 0,
    },
    termine: {
      id: 9,
      status: "Terminé",
      count: 0,
    },
    pre_douteux: {
      id: 1,
      status: "Pré-douteux",
      count: 0,
    },
    tres_douteux: {
      id: 12,
      status: "tres douteux",
      count: 0,
    },
    douteux: {
      id: 2,
      status: "Douteux",
      count: 0,
    },
    comite_declassement_agence: {
      id: 4,
      status: "Comité de déclassement agence",
      count: 0,
    },
    brouillon: {
      id: 11,
      status: "Brouillon",
      count: 0,
    },
  });

  useEffect(() => {
    if (fetchedStatus.length > 0) {
      const updatedStatus = { ...status };

      fetchedStatus.forEach((item) => {
        const key = Object.keys(status).find(
          (key) => status[key].id === item.id
        );

        // console.log("key",key)
        if (key) {
          updatedStatus[key].count = item.count;
        }
      });

      // Update the status state with the new counts
      setStatus(updatedStatus);
    }
  }, [fetchedStatus]);

  useEffect(() => {
    const fetchDataStatuses = async () => {
      try {
        console.log("\n\n\nstart to fetch data fo status .....");
        const result = await getStatuses();
        setFetchedStatus(result);
        console.log(result);
      } catch (error) {
        // Handle error
        console.error("Error fetching status for user by userId:", error);
      }
    };

    fetchDataStatuses();
  }, []);

  return (
    <Grid spacing={1} container justifyContent="center" alignItems="center">
      <Grid lg={2} md={3} sm={6} xs={12}>
        <Box>
          <StatusCard
            Icon={CreateIcon}
            IconColor="primary"
            text="Brouillon"
            value={status.brouillon.count}
            id={status.brouillon.id}
            setSelectedStatusId={setSelectedStatusId}
            selectedStatusId={selectedStatusId}
          />
        </Box>
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <Box>
          <StatusCard
            id={status.pre_douteux.id}
            setSelectedStatusId={setSelectedStatusId}
            selectedStatusId={selectedStatusId}
            Icon={WarningIcon}
            text="pre-douteux"
            value={status.pre_douteux.count}
          />
        </Box>
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <Box>
          <StatusCard
            id={status.douteux.id}
            setSelectedStatusId={setSelectedStatusId}
            selectedStatusId={selectedStatusId}
            Icon={WarningIcon}
            IconColor="skyblue"
            text="Douteux"
            value={status.douteux.count}
          />
        </Box>
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <Box>
          <StatusCard
            id={status.tres_douteux.id}
            setSelectedStatusId={setSelectedStatusId}
            selectedStatusId={selectedStatusId}
            Icon={WarningIcon}
            IconColor="blue"
            text="Tres douteux"
            value={status.tres_douteux.count} //this one is not dinamic yet
          />
        </Box>
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <Box>
          <StatusCard
            id={status.pre_contentieux.id}
            setSelectedStatusId={setSelectedStatusId}
            selectedStatusId={selectedStatusId}
            Icon={WarningIcon}
            IconColor="orange"
            text="Pre-contentieux"
            value={status.pre_contentieux.count}
          />
        </Box>
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <Box>
          <StatusCard
            id={status.contentieux.id}
            setSelectedStatusId={setSelectedStatusId}
            selectedStatusId={selectedStatusId}
            Icon={WarningIcon}
            IconColor="red"
            text="Contentieux"
            value={status.contentieux.count}
          />
        </Box>
      </Grid>
      {/* the secend row */}
      <Grid lg={4} sm={6} xs={12}>
        <Box>
          <StatusCard
            id={status.comite_des_impayes.id}
            setSelectedStatusId={setSelectedStatusId}
            selectedStatusId={selectedStatusId}
            Icon={GroupsIcon}
            IconColor="orange"
            text="Comite des impayes"
            value={status.comite_des_impayes.count}
          />
        </Box>
      </Grid>
      <Grid lg={4} sm={6} xs={12}>
        <Box>
          <StatusCard
            id={status.comite_declassement_agence.id}
            setSelectedStatusId={setSelectedStatusId}
            selectedStatusId={selectedStatusId}
            Icon={GroupsIcon}
            IconColor="red"
            text="Comité de déclassement agence"
            value={status.comite_declassement_agence.count}
          />
        </Box>
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <Box>
          <StatusCard
            id={status.radie.id}
            setSelectedStatusId={setSelectedStatusId}
            selectedStatusId={selectedStatusId}
            Icon={ClearIcon}
            IconColor="primary"
            text="Radié"
            value={status.radie.count}
          />
        </Box>
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <Box>
          <StatusCard
            id={status.termine.id}
            setSelectedStatusId={setSelectedStatusId}
            selectedStatusId={selectedStatusId}
            Icon={CheckBoxIcon}
            IconColor="green"
            text="Termine"
            value={status.termine.count}
          />
        </Box>
      </Grid>
    </Grid>
  );
  })

export default PageHeader;
