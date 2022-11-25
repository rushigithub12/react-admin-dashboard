import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme.js";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockdata";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar Id", minWidth: 50  },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell", minWidth: 150 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1, minWidth: 150, },
    { field: "email", headerName: "Email", flex: 1, minWidth: 150, },
    { field: "address", headerName: "Address", flex: 1, minWidth: 150, },
    { field: "city", headerName: "City", flex: 1, minWidth: 100, },
    { field: "zipCode", headerName: "ZipCode", flex: 1 }
  ];

  return (
    <Box m="20px" >
      <Header title="CONTACTS" subtitle="List of Contacts for future reference" />
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
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
        }
      }} >
        <DataGrid autoPageSize={true} rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
};

export default Contacts;
