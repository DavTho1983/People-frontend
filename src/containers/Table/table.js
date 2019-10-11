import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const DATA_QUERY = gql`
  query {
    persons {
      edges {
        node {
          firstName
          lastName
          address
        }
      }
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  progress: {
    margin: theme.spacing(2)
  }
}));

function createData(firstName, lastName, address) {
  return { firstName, lastName, address };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0),
  createData("Ice cream sandwich", 237, 9.0)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Query query={DATA_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return (
              <div>
                <CircularProgress
                  className={classes.progress}
                  color="secondary"
                />
              </div>
            );
          }
          if (error) console.log(error);
          console.log(data);
          return <h1>TEST</h1>;
        }}
      </Query>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">First name</TableCell>
            <TableCell align="left">Last name</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
