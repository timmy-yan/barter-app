import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from "react";

export default function Gallery() {
    const [pics, setPics] = useState([])

    useEffect(() => {
        fetch("/items")
            .then((resp) => resp.json())
            .then((data) => setPics(data))
            
    }, [])

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <ImageList sx={{ width: "60vw", height: "auto" }} cols={3} gap={10}>
                {pics.map((item) => (
                    <ImageListItem key={item.image_url}>
                        <img
                            src={`${item.image_url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}
