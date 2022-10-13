import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Moviequery from '../Movie_rating_query/movie_query';
import Movieuserid from '../Movie_userid_query/movie_userid_query'
import PersistentDrawerLeft from '../sidebar/Sidebar';
import Overviewrating from '../overview/Overview_rating';
import Overviewuser from '../overview/Overview_user';
import Overviewindex from '../overview/Overview_index';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} id="home">
      <div>
        <PersistentDrawerLeft />
      </div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Overview Statistics" {...a11yProps(0)} />
          <Tab label="GroupLens Movie Rating Query" {...a11yProps(1)} />
          <Tab label="GroupLens Movie UserID Query" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Overviewrating /><br />
        <Overviewindex /><br />
        <Overviewuser />

      </TabPanel>
      <TabPanel value={value} index={1}>
        <Moviequery />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Movieuserid />
      </TabPanel>
    </Box>
  );
}
