import { Grommet, Grid, Box } from 'grommet';
import DevTools from 'mobx-react-devtools';
import Nav from './components/Nav';

export default function Layout(props) {
  return (
    <Grommet theme="grommet">
      <Grid
        rows={["xxsmall", "medium", "xsmall"]}
        columns={["3/4", "1/4"]}
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "main", start: [0, 1], end: [0, 1] },
          { name: "sidebar", start: [1, 1], end: [1, 1] },
          { name: "footer", start: [0, 2], end: [1, 2] },
        ]}
        gap="small"
      >
        <Box
          background="neutral-1"
          direction="row"
          gridArea="header"
          pad="medium"
          tag="header"
        >
          <Nav />
        </Box>

        <Box
          background="light-2"
          gridArea="main"
          pad="medium"
          tag="main"
        >
          {props.children}
        </Box>
        <Box
          background="light-2"
          align="center"
          justify="center"
          pad="medium"
          gridArea="sidebar"
        >
          <p>sidebar</p>
        </Box>
        <Box
          align="center"
          justify="center"
          pad="medium"
          background="dark-1"
          gridArea="footer"
          tag="footer"
        >
          <p>the footer</p>
        </Box>
      </Grid>
      <DevTools />
    </Grommet>
  )
}
