import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';

import { useSelector } from 'react-redux';

import AdminCard from '../components/profile/adminCard';
import UserCard from '../components/profile/userCard';

import roles from '../constants/roles';

const Profile = () => {
  const { user } = useSelector((store) => store.auth);

  const profileCard = useMemo(() => {
    if (!user) return 'Loading Profile ...';

    if (user.role === roles.USER) {
      return (
        <UserCard
          name={user.name}
          email={user.email}
          role={user.role}
          createDate={user.createDate}
          modifiedDate={user.modifiedDate}
          techSkills={user.techSkills}
          englishLevel={user.englishLevel}
        />
      );
    }

    return (
      <AdminCard
        name={user.name}
        email={user.email}
        role={user.role}
        createDate={user.createDate}
        modifiedDate={user.modifiedDate}
      />
    );
  }, [user]);

  return (
    <Box padding={1}>
      <Typography variant="h3" component="h2" marginBottom={3}>
        My Profile.
      </Typography>
      {profileCard}
    </Box>
  );
};

export default Profile;
