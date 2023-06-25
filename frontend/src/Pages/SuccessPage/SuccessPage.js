import React from "react"
import { Typography } from "@mui/material"
import { Header } from "src/components/Header/Header"

export const SuccessPage = () => {
    return (
        <div>
            <div>
                <Header />
                <div className="body-container">
                    <Typography variant="h3">Order Placed Successfully!</Typography>
                </div>
            </div>
        </div>
    )
}