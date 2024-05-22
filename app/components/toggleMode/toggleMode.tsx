"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./toggleMode.module.css";

const ToggleMode = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <Button url="#" text="hello"></Button>;
	}

	const dark = theme === "dark";

	return (
		<div onClick={() => setTheme(`${dark ? "light" : "dark"}`)}>
			{" "}
			{dark ? <Sun className={styles.sun} /> : <Moon className={styles.moon} />}
		</div>
	);
};

export default ToggleMode;
