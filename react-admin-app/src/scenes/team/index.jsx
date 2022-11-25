import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockdata";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", minWidth: 20, },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell", minWidth: 150 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1, minWidth: 150 },
    { field: "email", headerName: "Email", flex: 1, minWidth: 150 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      minWidth: 150,
      renderCell: ({ row: { access } }) => {
        return <Box 
        width="60%"
        m="0 auto"
        p="5px"
        display="flex"
        justifyContent="center"
        backgroundColor={
          access ===  "admin" 
          ? colors.greenAccent[600]
          ? access === "manager"
          : colors.greenAccent[700]
          : colors.greenAccent[700]
        }
        borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon /> }
          {access === "manager" && <SecurityOutlinedIcon /> }
          {access === "user" && <LockOpenOutlinedIcon /> }
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }} >
            {access}
          </Typography>
        </Box>;
      },
    },
  ];

  return (
    <Box m="20px" >
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box m="30px 0 0 0" height="65vh" sx={{
        "& .MuiDataGrid-root": {
          border: "none"
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none"
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none"
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400]
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700]
        },
      }} >
        <DataGrid autoPageSize={true} rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
