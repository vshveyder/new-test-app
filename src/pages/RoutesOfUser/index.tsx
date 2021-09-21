import React, {FC, useState} from "react";
import useRelatedRoutes from "../../hooks/useRelatedRoutes";
import useGlobalContext from "../../hooks/useGlobalContext";
import RelatedRoutesTable from "../../components/RelatedRoutesTable";
import {IRelatedRoute} from "../../model/IRelatedRoute";
import FullScreenDialog from "../../components/FullScreenDialog";

const RoutesOfUser: FC = () => {
    const {state} = useGlobalContext()
    const routes = useRelatedRoutes(state.customer.id, state.user.access_token)
    const [selected, setSelected] = useState<readonly IRelatedRoute[]>([])
    const [open, setOpen] = useState<boolean>(false)

    if (routes.isLoading) {
        return <>loading</>
    }

    return <>
        <FullScreenDialog selectedRows={selected} open={open} setOpen={setOpen}/>
        <RelatedRoutesTable rows={routes.data.items} selected={selected} setSelected={setSelected} setOpen={setOpen}/>
    </>
}

export default RoutesOfUser