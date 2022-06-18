import { IconButton, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedViews } from '../views';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedViews />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
