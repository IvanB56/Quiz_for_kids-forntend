'use client';
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(
	() => import("./Header"),
	{ ssr: false }
);

export const Header = DynamicHeader;