import React from 'react'
import styled from 'styled-components'
import avatar from '../Images/avatar.jpeg'
import Header from './Header'

function Profile() {
  return (
    <div>
    <Header/>
    <ProfileContainer>
<UserAvatar
          src={avatar}
          alt="user-avatar"
        />

        <ProfileInfo>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Email</p>
            <p>Zipcode</p>
            {/* <p>Password</p> */}
            <p>Total Points</p>


        </ProfileInfo>

    </ProfileContainer>
    </div>
  )
}

export default Profile

const ProfileContainer = styled.div``

const UserAvatar = styled.img`
border-radius: 100%;
  height: 250px;
  width: 250px;
  margin-top: 30px;
`

const ProfileInfo = styled.div`
display: flex;
flex-direction: column;
`