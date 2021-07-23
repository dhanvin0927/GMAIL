import React from 'react'
import "./Mail.css";
import ArchiveIcon from '@material-ui/icons/Archive';
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import LabelIcon from '@material-ui/icons/Label';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import { useSelector } from 'react-redux';
import { selectOpenMail } from "./features/counter/mailSlice";

function Mail() {

    const history = useHistory();

    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                <IconButton onClick={() => history.push("/")}>
                           <ArrowBackIcon /> 
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
                <div className="email__toolsRight">
                <IconButton>
                            <ChevronLeftIcon />
                        </IconButton>

                        <IconButton>
                            <ChevronRightIcon />
                        </IconButton>

                        <IconButton>
                            <KeyboardIcon />
                        </IconButton>

                        <IconButton>
                            <ArrowDropDownIcon />
                        </IconButton>

                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className="mail__important" />
                    <p>{selectedMail?.title}</p>
                    <p className="mail__time">{selectedMail?.time}</p>
                </div>

                <div className="mail__message">
                   <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail;
