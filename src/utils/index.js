import React from 'react';
import axios from 'axios';

import BugIcon from '../components/Icons/BugIcon';
import DarkIcon from '../components/Icons/DarkIcon';
import DragonIcon from '../components/Icons/DragonIcon';
import ElectricIcon from '../components/Icons/ElectricIcon';
import FairyIcon from '../components/Icons/FairyIcon';
import FightingIcon from '../components/Icons/FightingIcon';
import FireIcon from '../components/Icons/FireIcon';
import FlyingIcon from '../components/Icons/FlyingIcon';
import GhostIcon from '../components/Icons/GhostIcon';
import GrassIcon from '../components/Icons/GrassIcon';
import GroundIcon from '../components/Icons/GroundIcon';
import IceIcon from '../components/Icons/IceIcon';
import NormalIcon from '../components/Icons/NormalIcon';
import PoisonIcon from '../components/Icons/PoisonIcon';
import PsychicIcon from '../components/Icons/PsychicIcon';
import RockIcon from '../components/Icons/RockIcon';
import SteelIcon from '../components/Icons/SteelIcon';
import WaterIcon from '../components/Icons/WaterIcon';

const pokemonIcons = {
  bug: BugIcon,
  dark: DarkIcon,
  dragon: DragonIcon,
  electric: ElectricIcon,
  fairy: FairyIcon,
  fighting: FightingIcon,
  fire: FireIcon,
  flying: FlyingIcon,
  ghost: GhostIcon,
  grass: GrassIcon,
  ground: GroundIcon,
  ice: IceIcon,
  normal: NormalIcon,
  poison: PoisonIcon,
  psychic: PsychicIcon,
  rock: RockIcon,
  steel: SteelIcon,
  water: WaterIcon,
};

const pokemonColors = {
  bug: ['rgba(184,239,74,1)', 'rgba(233,252,194,1)'],
  dark: ['rgba(152,147,159,1)', 'rgba(239,239,240,1)'],
  dragon: ['rgba(25,148,251,1)', 'rgba(207,233,254,1)'],
  electric: ['rgba(255,229,98,1)', 'rgba(255,247,210,1)'],
  fairy: ['rgba(254,188,246,1)', 'rgba(255,253,255,1)'],
  fighting: ['rgba(231,82,132,1)', 'rgba(252,202,219,1)'],
  fire: ['rgba(255,170,100,1)', 'rgba(255,231,211,1)'],
  flying: ['rgba(182,204,243,1)', 'rgba(238,247,255,1)'],
  ghost: ['rgba(112,138,203,1)', 'rgba(239,243,255,1)'],
  grass: ['rgba(89,208,104,1)', 'rgba(221,251,225,1)'],
  ground: ['rgba(253,148,94,1)', 'rgba(255,223,207,1)'],
  ice: ['rgba(116,226,211,1)', 'rgba(214,252,247,1)'],
  normal: ['rgba(192,197,200,1)', 'rgba(237,237,238,1)'],
  poison: ['rgba(208,147,228,1)', 'rgba(251,241,254,1)'],
  psychic: ['rgba(255,148,158,1)', 'rgba(255,240,241,1)'],
  rock: ['rgba(237,224,188,1)', 'rgba(255,250,234,1)'],
  steel: ['rgba(139,182,199,1)', 'rgba(232,244,248,1)'],
  water: ['rgba(90,165,228,1)', 'rgba(229,243,254,1)'],
};

export const getIconByType = (typeName) => {
  const Component = pokemonIcons[typeName];
  return <Component />;
};

export const getColorByType = (typeName) => {
  const color = pokemonColors[typeName];
  return color;
};

export const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getUrlEvolution = async (url) => {
  const { data } = await axios.get(url);
  const { evolution_chain } = data;
  return evolution_chain.url;
};

export const validateEmail = (email) => {
  const expr =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  return expr.test(email);
};
