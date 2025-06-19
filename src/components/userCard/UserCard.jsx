import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PopUpModal from "../popUpModal/PopUpModal";

export default function UserCard({ cardData }) {
  const [openModal, setOpenModal] = React.useState(false);

  //function to change status of pop up modal
  const openCloseModal = (status) => {
    setOpenModal(status);
  };
  //function to change status of pop up modal

  return (
    <>
      <Card sx={{ minWidth: 275 }} onClick={() => openCloseModal(!openModal)}>
        <CardContent>
          <Typography gutterBottom>Name: {cardData.name}</Typography>
          <Typography variant="body2" sx={{ mb: 1.5 }}>
            Email: {cardData.email}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Phone: {cardData.phone}
          </Typography>
          <Typography variant="body2">Website: {cardData.website}</Typography>
        </CardContent>
      </Card>
      <PopUpModal
        open={openModal}
        userData={cardData}
        handleClose={openCloseModal}
      />
    </>
  );
}
