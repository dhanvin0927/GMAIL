import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import CreateIcon from '@material-ui/icons/Create';
import InboxIcon from"@material-ui/icons/Inbox";
import SidebarOption from './SidebarOption';
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from "@material-ui/icons/Note";
import PersonIcon from "@material-ui/icons/Person";
import ChatIcon from '@material-ui/icons/Chat';
import CancelScheduleSendIcon from '@material-ui/icons/CancelScheduleSend';
import MailIcon from '@material-ui/icons/Mail';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import PeopleIcon from '@material-ui/icons/People';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { useDispatch } from "react-redux";
import { openSendMessage } from './features/counter/mailSlice';

function Sidebar() {
    const dispatch =  useDispatch();
    
    return (
        <div className="sidebar">
            <Button startIcon={<CreateIcon fontSize="large"/>} className="button__compose"
            onClick={() => dispatch(openSendMessage())}>Compose</Button>
            
            <SidebarOption Icon={InboxIcon} title="Inbox" selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred"  />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
            <SidebarOption Icon={SendIcon} title="Sent" />
            <SidebarOption Icon={NoteIcon} title="Drafts" />
            <SidebarOption Icon={LabelImportantIcon} title="Important" />
            <SidebarOption Icon={ChatIcon} title="Chat" />
            <SidebarOption Icon={CancelScheduleSendIcon} title="Scheduled" />
            <SidebarOption Icon={MailIcon} title="All Mail" />
            <SidebarOption Icon={ErrorIcon} title="Spam" />
            <SidebarOption Icon={DeleteIcon} title="Trash" />
            <SidebarOption Icon={PeopleIcon} title="Social" />
            <SidebarOption Icon={InfoIcon} title="Updates" />
            <SidebarOption Icon={ForumIcon} title="Forums" />
            <SidebarOption Icon={LocalOfferIcon} title="Promotions" />
            <SidebarOption Icon={SettingsIcon} title="Manage Labels" />
            <SidebarOption Icon={AddIcon} title="Create new label" />
            <h3>    Meet</h3>
            <SidebarOption Icon={VideocamIcon} title="Start New Meeting" />
            <SidebarOption Icon={KeyboardIcon} title="Join meeting" />
            
            
            

        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>

                <IconButton>
                    <ChatIcon />
                </IconButton>
                
            </div>
        </div>
        </div>
    )
}

export default Sidebar;
