import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme.js";
import Header from "../../components/Header";
import { mockDataInvoices } from "../../data/mockdata";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      minWidth: 150,
    },
    { field: "phone", headerName: "Phone Number", flex: 1, minWidth: 150, },
    { field: "email", headerName: "Email", flex: 1, minWidth: 150, },
    {
      field: "cost",
      headerName: "Cost",
      type: "number",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.orangeAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: "date", headerName: "Date", flex: 1, minWidth: 100, },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="30px 0 0 0"
        height="65vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.orangeAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.orangeAccent[200]} !important`,
          },
        }}
      >
        <DataGrid autoPageSize={true} checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
