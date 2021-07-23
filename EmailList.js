import React, {useState, useEffect} from 'react';
import "./EmailList.css";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArchiveIcon from '@material-ui/icons/Archive';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import LabelIcon from '@material-ui/icons/Label';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from"@material-ui/icons/Inbox";
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from "./Firebase";


function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
        setEmails(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
        );
    }, []);

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                        <IconButton>
                            <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
                        </IconButton>
                        <IconButton>
                            <ArrowDropDownIcon />
                        </IconButton>
                      
                      <IconButton>
                          <ArchiveIcon />
                      </IconButton>

                      <IconButton>
                            <ErrorIcon />
                      </IconButton>

                      <IconButton>
                          <DeleteIcon />
                      </IconButton>
                      
                      <IconButton>
                          <MarkunreadIcon />
                      </IconButton>

                      <IconButton>
                            <AccessTimeIcon />
                      </IconButton>

                      <IconButton>
                            <AssignmentTurnedInIcon />
                      </IconButton>

                      <IconButton>
                            <MoveToInboxIcon />
                      </IconButton>

                      <IconButton>
                          <LabelIcon />
                      </IconButton>
                        
                        <IconButton>
                            <RefreshIcon />
                        </IconButton>

                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>

                </div>

                <div className="emailList__settingsRight">
                        <IconButton>
                            <ChevronLeftIcon />
                        </IconButton>

                        <IconButton>
                            <ChevronRightIcon />
                        </IconButton>

                        <IconButton>
                            <FormatAlignJustifyIcon />
                        </IconButton>

                        <IconButton>
                            <KeyboardHideIcon />
                        </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                    <Section Icon={InboxIcon} title="Primary" color="red" selected />
                    <Section Icon={PeopleIcon} title="Social" color="#1A73E8"  />
                    <Section Icon={LocalOfferIcon} title="Promotions" color="green"  />
            </div>

            <div className="emailList__list">
                {emails.map(({ id, data: { to, subject, message, timestamp}}) => (
                    <EmailRow 
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toLocaleTimeString()}
                    />
                ))}
              
            </div>
        </div>
    );
}

export default EmailList;
