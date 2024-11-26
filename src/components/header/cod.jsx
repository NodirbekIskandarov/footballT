import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";
import PropTypes from "prop-types";
import { getRequest } from "../../utils/request";
import { sub_tournament_list, tournament_list } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Component for Menu Items with Submenu using Accordion
const MenuItemWithSubMenuAccordion = ({
  data,
  name,
  lng,
  onClose,
  setMenuOpen,
}) => {
  const { children } = data || {};

  return (
    <MenuItem>
      {children.length === 0 ? (
        name
      ) : (
        <Accordion
          elevation={0}
          disableGutters
          sx={{
            backgroundColor: "transparent",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
              padding: 0,
              minHeight: 0,
            }}
          >
            <Typography>{name}</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: 0,
              marginTop: "0.5rem",
            }}
          >
            {children.map((subMenuItem, i) => (
              <MenuItem key={i}>
                <Link
                  to={`/tournament/pasted/${subMenuItem?.uuid}`}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => {
                    onClose();
                    setMenuOpen(false); // Close the menu when a submenu item is clicked
                  }}
                >
                  {subMenuItem?.[`name_${lng}`]}
                </Link>
              </MenuItem>
            ))}
          </AccordionDetails>
        </Accordion>
      )}
    </MenuItem>
  );
};
MenuItemWithSubMenuAccordion.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.string.isRequired,
    subMenu: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired, // Validate `name` prop
  lng: PropTypes.string.isRequired, // Validate `lng` prop
  onClose: PropTypes.func.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
// Main Menu Component
export default function BasicMenu({ setMenuOpen }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [data, setData] = useState(null);
  const { t, i18n } = useTranslation();
  const lng = i18n.language;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    getRequest(tournament_list)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const updatedData = await Promise.all(
          data.map(async (item) => {
            const response = await getRequest(sub_tournament_list + item?.uuid);
            return { ...item, children: response.data }; // Olingan ma'lumotni `children` sifatida qo'shish
          })
        );
        setData(updatedData);
      } catch (error) {
        console.error("Error fetching sub-tournament data:", error);
      }
    };

    fetchChildren();
  }, [data?.length]);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "none", // Matnni asl ko'rinishida qoldiradi
          margin: "0",
          padding: "0"
        }}
      >
        {t("Tournaments")}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiMenuItem-root": {
            textTransform: "capitalize", // Har bir so'zning faqat birinchi harfini katta qilamiz
          },
        }}
      >
        {data?.map((data, i) => (
          <MenuItemWithSubMenuAccordion
            key={i}
            data={data}
            name={data?.[`name_${lng}`]}
            lng={lng}
            onClose={handleClose}
            setMenuOpen={setMenuOpen}
          />
        ))}
      </Menu>
    </div>
  );
}
BasicMenu.propTypes = {
  setMenuOpen: PropTypes.func.isRequired, // Added validation for `setMenuOpen` prop here
};

