import React from "react";
import {useLocation, useParams} from "react-router-dom";
import {Box, Typography} from "@mui/material";


const PaymentPage = () => {
    let { search } = useLocation();

    const query = new URLSearchParams(search);
    const selected = query.get('selected');
    const totalprice = query.get('totalprice');

    return (
            <Box>
                <Typography>SELECTED SEATS</Typography>
                {selected}
                <Typography>TOTALPRICE : {totalprice}</Typography>
            </Box>
    );

}

export default PaymentPage;