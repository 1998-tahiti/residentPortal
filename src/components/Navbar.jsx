import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import avatar from '../data/avatar.png';

import { Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
  } = useStateContext();

  return (
    <div
      style={{
        width: '100%',
        height: '50px',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        borderBottom: '1px solid #eee',
        position: 'relative',
        zIndex: 99999,
      }}
    >
      <div>
        {!activeMenu && (
          <button
            type="button"
            onClick={() => setActiveMenu(true)}
            style={{
              color: currentColor,
              fontSize: '24px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AiOutlineMenu />
          </button>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        <button
          type="button"
          onClick={() => handleClick('chat')}
          style={{
            color: currentColor,
            fontSize: '22px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <BsChatLeft />
        </button>

        <button
          type="button"
          onClick={() => handleClick('notification')}
          style={{
            color: currentColor,
            fontSize: '22px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <RiNotification3Line />
        </button>

        <button
          type="button"
          onClick={() => handleClick('userProfile')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <img
            src={avatar}
            alt="profile"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #e5e7eb',
            }}
          />

          <span style={{ color: '#999' }}>Hi,</span>

          <strong style={{ color: '#666' }}>Tahiti</strong>

          <MdKeyboardArrowDown
            style={{
              color: '#999',
              fontSize: '18px',
            }}
          />
        </button>
      </div>

      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  );
};

export default Navbar;