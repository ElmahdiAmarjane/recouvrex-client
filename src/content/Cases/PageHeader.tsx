import { Grid } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import CreateIcon from "@mui/icons-material/Create";
// import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import InforCardWorning from "./infoCards/InforCardWorning";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ClearIcon from "@mui/icons-material/Clear";
import GroupsIcon from "@mui/icons-material/Groups";
import { useEffect, useState } from "react";
import { getStatuses } from "src/utils/api/status/statusApiCall";
function PageHeader() {
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

  const [fetchedStatus, setFetchedStatus] = useState<StatusType[]>([]);

  const [status, setStatus] = useState<Record<string, StatusType>>({    comite_des_impayes: {
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
      id: 1,
      status: "Pré-contentieux",
      count: 0,
    },
    contentieux: {
      id: 2,
      status: "Contentieux",
      count: 0,
    },
    saisie_conservation_immobiliere_initiee: {
      id: 6,
      status: "Saisie conservation immobilière initiée",
      count: 0,
    },
    termine: {
      id: 4,
      status: "Terminé",
      count: 0,
    },
    pre_douteux: {
      id: 7,
      status: "Pré-douteux",
      count: 0,
    },
    tres_douteux: {
      id: 12,
      status: "tres douteux",
      count: 0,
    },
    douteux: {
      id: 8,
      status: "Douteux",
      count: 0,
    },
    comite_declassement_agence: {
      id: 9,
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
        const key = Object.keys(status).find((key) => status[key].id === item.id);
        
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
        <InforCardWorning
          Icon={CreateIcon}
          IconColor="primary"
          text="Brouillon"
          value={status.brouillon.count}
        />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning
          Icon={WarningIcon}
          text="pre-douteux"
          value={status.pre_douteux.count}
        />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning
          Icon={WarningIcon}
          IconColor="skyblue"
          text="Douteux"
          value={status.douteux.count}
        />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning
          Icon={WarningIcon}
          IconColor="blue"
          text="Tres douteux"
          value={1} //this one is not dinamic yet
        />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning
          Icon={WarningIcon}
          IconColor="orange"
          text="Pre-contentieux"
          value={status.pre_contentieux.count}
        />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning
          Icon={WarningIcon}
          IconColor="red"
          text="Contentieux"
          value={status.contentieux.count}
        />
      </Grid>
      {/* the secend row */}
      <Grid lg={4} sm={6} xs={12}>
        <InforCardWorning
          Icon={GroupsIcon}
          IconColor="orange"
          text="Comite des impayes"
          value={status.comite_des_impayes.count}
        />
      </Grid>
      <Grid lg={4} sm={6} xs={12}>
        <InforCardWorning
          Icon={GroupsIcon}
          IconColor="red"
          text="Comite declassement agence"
          value={status.comite_declassement_agence.count}
        />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning
          Icon={ClearIcon}
          IconColor="primary"
          text="Radié"
          value={status.radie.count}
        />
      </Grid>
      <Grid lg={2} md={3} sm={6} xs={12}>
        <InforCardWorning
          Icon={CheckBoxIcon}
          IconColor="green"
          text="Termine"
          value={status.termine.count}
        />
      </Grid>
    </Grid>
  );
}

export default PageHeader;
