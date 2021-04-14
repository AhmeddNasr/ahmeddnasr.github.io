import React from "react";
import Card from "./cards";

import evelynnAvatar from "./avatar/evelynn.png";
import fatEvelynn from "./avatar/fat-evelynn.png";
import kdaEvelynn from "./avatar/kda20-evelynn.png";
import tposeEvelynn from "./avatar/kda18-evelynn.png";
import teacherEvelynn from "./avatar/teacher-evelynn.png";
import masquaradeEvelynn from "./avatar/masquarade-evelynn.png";
import oldEvelynn from "./avatar/old-evelynn.png";

function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function GenerateRooster(props) {
    let rooster = [
        <Card title="Evelynn" avatar={evelynnAvatar} key="evelynn-card"/>,
        <Card title="Fat Evelynn" avatar={fatEvelynn} key="fatEvelynn-card"/>,
        <Card title="KDA Evelynn" avatar={kdaEvelynn} key="kdaEvelynn-card"/>,
        <Card title="T-Pose Evelynn" avatar={tposeEvelynn} key="tposeEvelynn-card"/>,
        <Card title="Teacher Evelynn" avatar={teacherEvelynn} key="teacherEvelynn-card"/>,
        <Card title="Masquarade Evelynn" avatar={masquaradeEvelynn} key="masquaradeEvelynn-card"/>,
        <Card title="old Evelynn" avatar={oldEvelynn} key="oldEvelynn-card"/>,
    ]

    return shuffle(rooster);
}

export default GenerateRooster;
