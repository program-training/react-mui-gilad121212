import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Compa1 from './compa1';
import Compa2 from './compa2';
import Compa3 from './compa3';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index} = props;

  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three"  />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Compa1></Compa1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Compa2></Compa2>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Compa3></Compa3>
      </CustomTabPanel>
    </Box>
  );
}