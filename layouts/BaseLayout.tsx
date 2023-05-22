import Navigation from "@/components/Singular/App/Navigation";
import NavigationMenu from "@/components/Singular/App/NavigationMenu";
import Preloader from "@/components/Singular/App/Preloader";
import React, { PropsWithChildren } from "react";


export default function BaseLayout(props: PropsWithChildren) {
    return (
        <>
            <div className="page">{props.children}</div>
            <Preloader/>
            <Navigation/>
            <NavigationMenu/>
        </>
    )
}