import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';


export default function TemporaryDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
 
  const DrawerList = (
    <Box sx={{ width: 250}} onClick={toggleDrawer(false)}>
        <List>
            {['Current Budget', 'All budgets'].map((text, index) => (
                <ListItem key={text}>
                    <ListItemButton>
                        <ListItemText primary={text}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
  );

  return (
    <div>
    <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
