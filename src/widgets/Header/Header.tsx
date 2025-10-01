'use client';
import React from 'react';
import {useIsMobile} from "@/hooks/use-mobile";
import {HeaderMobile} from "./HeaderMobile";
import {HeaderDesktop} from "./HeaderDesktop";

import './styles/HeaderGuest.scss';

const Header = () => {
	const isMobile = useIsMobile();

	if (isMobile) {
		return <HeaderMobile/>
	}

	return <HeaderDesktop/>;
};

export default Header;