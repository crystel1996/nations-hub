import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { SortingInterface } from "@nations-hub/components/UI/Sorting/interface";
import { FC, useState } from "react";

const Sorting: FC<SortingInterface> = (props) => {

    const [order, setOrder] = useState<'asc' | 'desc'>('asc');

    const handleSort = () => {
        const newOrder = order === 'asc' ? 'desc' : 'asc'
        setOrder(newOrder);
        props.onSortData(props.field, newOrder);
    };

    return <Button
                onClick={handleSort}
                variant="text"
                //color="primary"
                startIcon={order === 'asc' ? <ArrowUpward /> : <ArrowDownward />}
            >
                Sort by {props.field} ({order === 'asc' ? 'Ascending' : 'Descending'})
            </Button>
}

export default Sorting;