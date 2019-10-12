import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
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

export default function SimpleTable(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">First name</TableCell>
            <TableCell align="left">Last name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Query query={DATA_QUERY}>
            {({ loading, error, data }) => {
              if (loading) {
                return (
                  <CircularProgress
                    className={classes.progress}
                    color="secondary"
                  />
                );
              }
              if (error) console.log(error);
              console.log(data);
              return data.persons.edges.map((person, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{person.node.firstName}</TableCell>
                  <TableCell align="left">{person.node.lastName}</TableCell>
                  <TableCell align="left">{person.node.address}</TableCell>
                  <TableCell align="left">
                    <DeleteForeverIcon color={"primary"} fontSize={"large"} />
                  </TableCell>
                </TableRow>
              ));
            }}
          </Query>
        </TableBody>
      </Table>
    </Paper>
  );
}
